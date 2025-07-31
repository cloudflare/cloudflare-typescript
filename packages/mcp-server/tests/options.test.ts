import { parseOptions } from '../src/options';
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

describe('parseOptions', () => {
  it('should parse basic filter options', () => {
    const cleanup = mockArgv([
      '--tool=test-tool',
      '--resource=test-resource',
      '--operation=read',
      '--tag=test-tag',
    ]);

    const result = parseOptions();

    expect(result.filters).toEqual([
      { type: 'tag', op: 'include', value: 'test-tag' },
      { type: 'resource', op: 'include', value: 'test-resource' },
      { type: 'tool', op: 'include', value: 'test-tool' },
      { type: 'operation', op: 'include', value: 'read' },
    ] as Filter[]);

    // Default client capabilities
    expect(result.capabilities).toEqual({
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    });

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

    const result = parseOptions();

    expect(result.filters).toEqual([
      { type: 'tag', op: 'exclude', value: 'exclude-tag' },
      { type: 'resource', op: 'exclude', value: 'exclude-resource' },
      { type: 'tool', op: 'exclude', value: 'exclude-tool' },
      { type: 'operation', op: 'exclude', value: 'write' },
    ] as Filter[]);

    expect(result.capabilities).toEqual({
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    });

    cleanup();
  });

  it('should parse client presets', () => {
    const cleanup = mockArgv(['--client=openai-agents']);

    const result = parseOptions();

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

    const result = parseOptions();

    expect(result.capabilities).toEqual({
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: 40,
    });

    cleanup();
  });

  it('should handle list option', () => {
    const cleanup = mockArgv(['--list']);

    const result = parseOptions();

    expect(result.list).toBe(true);

    cleanup();
  });

  it('should handle multiple filters of the same type', () => {
    const cleanup = mockArgv(['--tool=tool1', '--tool=tool2', '--resource=res1', '--resource=res2']);

    const result = parseOptions();

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

    const result = parseOptions();

    expect(result.filters).toEqual([
      { type: 'resource', op: 'include', value: 'res1' },
      { type: 'resource', op: 'include', value: 'res2' },
      { type: 'tool', op: 'include', value: 'tool1' },
      { type: 'tool', op: 'include', value: 'tool2' },
    ] as Filter[]);

    expect(result.capabilities).toEqual({
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    });

    cleanup();
  });

  it('should handle invalid tool-name-length format', () => {
    const cleanup = mockArgv(['--capability=tool-name-length=invalid']);

    // Mock console.error to prevent output during test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => parseOptions()).toThrow();

    console.error = originalError;
    cleanup();
  });

  it('should handle unknown capability', () => {
    const cleanup = mockArgv(['--capability=unknown-capability']);

    // Mock console.error to prevent output during test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => parseOptions()).toThrow();

    console.error = originalError;
    cleanup();
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
