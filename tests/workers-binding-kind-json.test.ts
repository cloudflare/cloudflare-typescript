// Regression test for https://github.com/cloudflare/cloudflare-typescript/issues/2682
//
// WorkersBindingKindJson's `json` property should accept any valid JSON value,
// not just strings.

import { type ScriptUpdateParams } from 'cloudflare/resources/workers/scripts/scripts';

type WorkersBindingKindJson = ScriptUpdateParams.Metadata.WorkersBindingKindJson;

const binding = (json: WorkersBindingKindJson['json']): WorkersBindingKindJson => ({
  name: 'MY_BINDING',
  type: 'json',
  json,
});

// Type-level validation: if any of these fail to compile, the test suite won't build.
test('WorkersBindingKindJson json property accepts all JSON value types', () => {
  expect(binding({ key: 'value' }).json).toEqual({ key: 'value' });
  expect(binding('hello').json).toBe('hello'); // backwards compatible
  expect(binding([1, 2, 3]).json).toEqual([1, 2, 3]);
  expect(binding(42).json).toBe(42);
  expect(binding(true).json).toBe(true);
  expect(binding(null).json).toBeNull();
});
