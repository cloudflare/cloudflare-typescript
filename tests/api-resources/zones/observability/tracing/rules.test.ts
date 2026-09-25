// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseRules } from 'cloudflare/resources/zones/observability/tracing/rules';
import { Tracing } from 'cloudflare/resources/zones/observability/tracing/tracing';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRules],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Tracing],
});

const runTests = (
  client: PartialCloudflare<{ zones: { observability: { tracing: { rules: BaseRules } } } }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.zones.observability.tracing.rules.update({
      zone_id: 'zone_id',
      rules: [
        {
          action: 'set_trace_settings',
          action_parameters: { sampling_ratio: 0 },
          description: 'description',
          enabled: true,
          expression: 'x',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zones.observability.tracing.rules.update({
      zone_id: 'zone_id',
      rules: [
        {
          action: 'set_trace_settings',
          action_parameters: { sampling_ratio: 0 },
          description: 'description',
          enabled: true,
          expression: 'x',
        },
      ],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zones.observability.tracing.rules.delete({ zone_id: 'zone_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zones.observability.tracing.rules.delete({ zone_id: 'zone_id' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zones.observability.tracing.rules.get({ zone_id: 'zone_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zones.observability.tracing.rules.get({ zone_id: 'zone_id' });
  });
};
describe('resource rules', () => runTests(client));
describe('resource rules (tree shakable, base)', () => runTests(partialClient));
describe('resource rules (tree shakable, subresource)', () => runTests(parentPartialClient));
