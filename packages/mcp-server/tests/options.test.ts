import { parseOptions } from '../src/options';
import { Filter } from '../src/tools';

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
