import { parseCLIOptions, parseQueryOptions } from '../src/options';
import { Filter } from '../src/tools';
import { parseEmbeddedJSON } from '../src/compat';

// Mock process.argv
const mockArgv = (args: string[]) => {
  const originalArgv = process.argv;
  process.argv = ['node', 'test.js', ...args];
  return () => {
    process.argv = originalArgv;
  };
};

describe('parseCLIOptions', () => {
  it('should parse basic filter options', () => {
    const cleanup = mockArgv([
      '--tool=test-tool',
      '--resource=test-resource',
      '--operation=read',
      '--tag=test-tag',
    ]);

    const result = parseCLIOptions();

    expect(result.filters).toEqual([
      { type: 'tag', op: 'include', value: 'test-tag' },
      { type: 'resource', op: 'include', value: 'test-resource' },
      { type: 'tool', op: 'include', value: 'test-tool' },
      { type: 'operation', op: 'include', value: 'read' },
    ] as Filter[]);

    expect(result.capabilities).toEqual({});

    expect(result.list).toBe(false);

    cleanup();
  });

  it('should parse exclusion filters', () => {
    const cleanup = mockArgv([
      '--no-tool=exclude-tool',
      '--no-resource=exclude-resource',
      '--no-operation=write',
      '--no-tag=exclude-tag',
    ]);

    const result = parseCLIOptions();

    expect(result.filters).toEqual([
      { type: 'tag', op: 'exclude', value: 'exclude-tag' },
      { type: 'resource', op: 'exclude', value: 'exclude-resource' },
      { type: 'tool', op: 'exclude', value: 'exclude-tool' },
      { type: 'operation', op: 'exclude', value: 'write' },
    ] as Filter[]);

    expect(result.capabilities).toEqual({});

    cleanup();
  });

  it('should parse client presets', () => {
    const cleanup = mockArgv(['--client=openai-agents']);

    const result = parseCLIOptions();

    expect(result.client).toEqual('openai-agents');

    cleanup();
  });

  it('should parse individual capabilities', () => {
    const cleanup = mockArgv([
      '--capability=top-level-unions',
      '--capability=valid-json',
      '--capability=refs',
      '--capability=unions',
      '--capability=tool-name-length=40',
    ]);

    const result = parseCLIOptions();

    expect(result.capabilities).toEqual({
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      toolNameLength: 40,
    });

    cleanup();
  });

  it('should handle list option', () => {
    const cleanup = mockArgv(['--list']);

    const result = parseCLIOptions();

    expect(result.list).toBe(true);

    cleanup();
  });

  it('should handle multiple filters of the same type', () => {
    const cleanup = mockArgv(['--tool=tool1', '--tool=tool2', '--resource=res1', '--resource=res2']);

    const result = parseCLIOptions();

    expect(result.filters).toEqual([
      { type: 'resource', op: 'include', value: 'res1' },
      { type: 'resource', op: 'include', value: 'res2' },
      { type: 'tool', op: 'include', value: 'tool1' },
      { type: 'tool', op: 'include', value: 'tool2' },
    ] as Filter[]);

    cleanup();
  });

  it('should handle comma-separated values in array options', () => {
    const cleanup = mockArgv([
      '--tool=tool1,tool2',
      '--resource=res1,res2',
      '--capability=top-level-unions,valid-json,unions',
    ]);

    const result = parseCLIOptions();

    expect(result.filters).toEqual([
      { type: 'resource', op: 'include', value: 'res1' },
      { type: 'resource', op: 'include', value: 'res2' },
      { type: 'tool', op: 'include', value: 'tool1' },
      { type: 'tool', op: 'include', value: 'tool2' },
    ] as Filter[]);

    expect(result.capabilities).toEqual({
      topLevelUnions: true,
      validJson: true,
      unions: true,
    });

    cleanup();
  });

  it('should handle invalid tool-name-length format', () => {
    const cleanup = mockArgv(['--capability=tool-name-length=invalid']);

    // Mock console.error to prevent output during test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => parseCLIOptions()).toThrow();

    console.error = originalError;
    cleanup();
  });

  it('should handle unknown capability', () => {
    const cleanup = mockArgv(['--capability=unknown-capability']);

    // Mock console.error to prevent output during test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => parseCLIOptions()).toThrow();

    console.error = originalError;
    cleanup();
  });
});

describe('parseQueryOptions', () => {
  const defaultOptions = {
    client: undefined,
    includeDynamicTools: undefined,
    includeCodeTools: undefined,
    includeAllTools: undefined,
    filters: [],
    capabilities: {
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    },
  };

  it('should parse basic filter options from query string', () => {
    const query = 'tool=test-tool&resource=test-resource&operation=read&tag=test-tag';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.filters).toEqual([
      { type: 'resource', op: 'include', value: 'test-resource' },
      { type: 'operation', op: 'include', value: 'read' },
      { type: 'tag', op: 'include', value: 'test-tag' },
      { type: 'tool', op: 'include', value: 'test-tool' },
    ]);

    expect(result.capabilities).toEqual({
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    });
  });

  it('should parse exclusion filters from query string', () => {
    const query = 'no_tool=exclude-tool&no_resource=exclude-resource&no_operation=write&no_tag=exclude-tag';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.filters).toEqual([
      { type: 'resource', op: 'exclude', value: 'exclude-resource' },
      { type: 'operation', op: 'exclude', value: 'write' },
      { type: 'tag', op: 'exclude', value: 'exclude-tag' },
      { type: 'tool', op: 'exclude', value: 'exclude-tool' },
    ]);
  });

  it('should parse client option from query string', () => {
    const query = 'client=openai-agents';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.client).toBe('openai-agents');
  });

  it('should parse client capabilities from query string', () => {
    const query = 'capability=top-level-unions&capability=valid-json&capability=tool-name-length%3D40';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.capabilities).toEqual({
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: 40,
    });
  });

  it('should parse no-capability options from query string', () => {
    const query = 'no_capability=top-level-unions&no_capability=refs&no_capability=formats';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.capabilities).toEqual({
      topLevelUnions: false,
      validJson: true,
      refs: false,
      unions: true,
      formats: false,
      toolNameLength: undefined,
    });
  });

  it('should parse tools options from query string', () => {
    const query = 'tools=dynamic&tools=all';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.includeDynamicTools).toBe(true);
    expect(result.includeAllTools).toBe(true);
  });

  it('should parse no-tools options from query string', () => {
    const query = 'tools=dynamic&tools=all&no_tools=dynamic';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.includeDynamicTools).toBe(false);
    expect(result.includeAllTools).toBe(true);
  });

  it('should handle array values in query string', () => {
    const query = 'tool[]=tool1&tool[]=tool2&resource[]=res1&resource[]=res2';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.filters).toEqual([
      { type: 'resource', op: 'include', value: 'res1' },
      { type: 'resource', op: 'include', value: 'res2' },
      { type: 'tool', op: 'include', value: 'tool1' },
      { type: 'tool', op: 'include', value: 'tool2' },
    ]);
  });

  it('should merge with default options', () => {
    const defaultWithFilters = {
      ...defaultOptions,
      filters: [{ type: 'tag' as const, op: 'include' as const, value: 'existing-tag' }],
      client: 'cursor' as const,
      includeDynamicTools: true,
    };

    const query = 'tool=new-tool&resource=new-resource';
    const result = parseQueryOptions(defaultWithFilters, query);

    expect(result.filters).toEqual([
      { type: 'tag', op: 'include', value: 'existing-tag' },
      { type: 'resource', op: 'include', value: 'new-resource' },
      { type: 'tool', op: 'include', value: 'new-tool' },
    ]);

    expect(result.client).toBe('cursor');
    expect(result.includeDynamicTools).toBe(true);
  });

  it('should override client from default options', () => {
    const defaultWithClient = {
      ...defaultOptions,
      client: 'cursor' as const,
    };

    const query = 'client=openai-agents';
    const result = parseQueryOptions(defaultWithClient, query);

    expect(result.client).toBe('openai-agents');
  });

  it('should merge capabilities with default options', () => {
    const defaultWithCapabilities = {
      ...defaultOptions,
      capabilities: {
        topLevelUnions: false,
        validJson: false,
        refs: true,
        unions: true,
        formats: true,
        toolNameLength: 30,
      },
    };

    const query = 'capability=top-level-unions&no_capability=refs';
    const result = parseQueryOptions(defaultWithCapabilities, query);

    expect(result.capabilities).toEqual({
      topLevelUnions: true,
      validJson: false,
      refs: false,
      unions: true,
      formats: true,
      toolNameLength: 30,
    });
  });

  it('should handle empty query string', () => {
    const query = '';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result).toEqual(defaultOptions);
  });

  it('should handle invalid query string gracefully', () => {
    const query = 'invalid=value&operation=invalid-operation';

    // Should throw due to Zod validation for invalid operation
    expect(() => parseQueryOptions(defaultOptions, query)).toThrow();
  });

  it('should preserve default undefined values when not specified', () => {
    const defaultWithUndefined = {
      ...defaultOptions,
      client: undefined,
      includeDynamicTools: undefined,
      includeAllTools: undefined,
    };

    const query = 'tool=test-tool';
    const result = parseQueryOptions(defaultWithUndefined, query);

    expect(result.client).toBeUndefined();
    expect(result.includeDynamicTools).toBeFalsy();
    expect(result.includeAllTools).toBeFalsy();
  });

  it('should handle complex query with mixed include and exclude filters', () => {
    const query =
      'tool=include-tool&no_tool=exclude-tool&resource=include-res&no_resource=exclude-res&operation=read&tag=include-tag&no_tag=exclude-tag';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.filters).toEqual([
      { type: 'resource', op: 'include', value: 'include-res' },
      { type: 'operation', op: 'include', value: 'read' },
      { type: 'tag', op: 'include', value: 'include-tag' },
      { type: 'tool', op: 'include', value: 'include-tool' },
      { type: 'resource', op: 'exclude', value: 'exclude-res' },
      { type: 'tag', op: 'exclude', value: 'exclude-tag' },
      { type: 'tool', op: 'exclude', value: 'exclude-tool' },
    ]);
  });

  it('code tools are enabled on http servers with default option set', () => {
    const query = 'tools=code';
    const result = parseQueryOptions({ ...defaultOptions, includeCodeTools: true }, query);

    expect(result.includeCodeTools).toBe(true);
  });

  it('code tools are prevented on http servers when no default option set', () => {
    const query = 'tools=code';
    const result = parseQueryOptions(defaultOptions, query);

    expect(result.includeCodeTools).toBe(undefined);
  });

  it('code tools are prevented on http servers when default option is explicitly false', () => {
    const query = 'tools=code';
    const result = parseQueryOptions({ ...defaultOptions, includeCodeTools: false }, query);

    expect(result.includeCodeTools).toBe(false);
  });
});

describe('parseEmbeddedJSON', () => {
  it('should not change non-string values', () => {
    const args = {
      numberProp: 42,
      booleanProp: true,
      objectProp: { nested: 'value' },
      arrayProp: [1, 2, 3],
      nullProp: null,
      undefinedProp: undefined,
    };
    const schema = {};

    const result = parseEmbeddedJSON(args, schema);

    expect(result).toBe(args); // Should return original object since no changes made
    expect(result['numberProp']).toBe(42);
    expect(result['booleanProp']).toBe(true);
    expect(result['objectProp']).toEqual({ nested: 'value' });
    expect(result['arrayProp']).toEqual([1, 2, 3]);
    expect(result['nullProp']).toBe(null);
    expect(result['undefinedProp']).toBe(undefined);
  });

  it('should parse valid JSON objects in string properties', () => {
    const args = {
      jsonObjectString: '{"key": "value", "number": 123}',
      regularString: 'not json',
    };
    const schema = {};

    const result = parseEmbeddedJSON(args, schema);

    expect(result).not.toBe(args); // Should return new object since changes were made
    expect(result['jsonObjectString']).toEqual({ key: 'value', number: 123 });
    expect(result['regularString']).toBe('not json');
  });

  it('should leave invalid JSON in string properties unchanged', () => {
    const args = {
      invalidJson1: '{"key": value}', // Missing quotes around value
      invalidJson2: '{key: "value"}', // Missing quotes around key
      invalidJson3: '{"key": "value",}', // Trailing comma
      invalidJson4: 'just a regular string',
      emptyString: '',
    };
    const schema = {};

    const result = parseEmbeddedJSON(args, schema);

    expect(result).toBe(args); // Should return original object since no changes made
    expect(result['invalidJson1']).toBe('{"key": value}');
    expect(result['invalidJson2']).toBe('{key: "value"}');
    expect(result['invalidJson3']).toBe('{"key": "value",}');
    expect(result['invalidJson4']).toBe('just a regular string');
    expect(result['emptyString']).toBe('');
  });

  it('should not parse JSON primitives in string properties', () => {
    const args = {
      numberString: '123',
      floatString: '45.67',
      negativeNumberString: '-89',
      booleanTrueString: 'true',
      booleanFalseString: 'false',
      nullString: 'null',
      jsonArrayString: '[1, 2, 3, "test"]',
      regularString: 'not json',
    };
    const schema = {};

    const result = parseEmbeddedJSON(args, schema);

    expect(result).toBe(args); // Should return original object since no changes made
    expect(result['numberString']).toBe('123');
    expect(result['floatString']).toBe('45.67');
    expect(result['negativeNumberString']).toBe('-89');
    expect(result['booleanTrueString']).toBe('true');
    expect(result['booleanFalseString']).toBe('false');
    expect(result['nullString']).toBe('null');
    expect(result['jsonArrayString']).toBe('[1, 2, 3, "test"]');
    expect(result['regularString']).toBe('not json');
  });

  it('should handle mixed valid objects and other JSON types', () => {
    const args = {
      validObject: '{"success": true}',
      invalidObject: '{"missing": quote}',
      validNumber: '42',
      validArray: '[1, 2, 3]',
      keepAsString: 'hello world',
      nonString: 123,
    };
    const schema = {};

    const result = parseEmbeddedJSON(args, schema);

    expect(result).not.toBe(args); // Should return new object since some changes were made
    expect(result['validObject']).toEqual({ success: true });
    expect(result['invalidObject']).toBe('{"missing": quote}');
    expect(result['validNumber']).toBe('42'); // Not parsed, remains string
    expect(result['validArray']).toBe('[1, 2, 3]'); // Not parsed, remains string
    expect(result['keepAsString']).toBe('hello world');
    expect(result['nonString']).toBe(123);
  });

  it('should return original object when no strings are present', () => {
    const args = {
      number: 42,
      boolean: true,
      object: { key: 'value' },
    };
    const schema = {};

    const result = parseEmbeddedJSON(args, schema);

    expect(result).toBe(args); // Should return original object since no changes made
  });

  it('should return original object when all strings are invalid JSON', () => {
    const args = {
      string1: 'hello',
      string2: 'world',
      string3: 'not json at all',
    };
    const schema = {};

    const result = parseEmbeddedJSON(args, schema);

    expect(result).toBe(args); // Should return original object since no changes made
  });
});
