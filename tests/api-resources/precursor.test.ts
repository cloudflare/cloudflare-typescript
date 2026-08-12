// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePrecursor } from 'cloudflare/resources/precursor/precursor';

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
  resources: [BasePrecursor],
});

const runTests = (client: PartialCloudflare<{ precursor: BasePrecursor }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.precursor.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.precursor.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      default_mode: 'min-friction',
      enforcement_rules: [
        {
          expression: 'http.request.uri.path eq "/login"',
          mode: 'max-security',
          description: 'Ease friction on the login path',
          enabled: true,
        },
      ],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.precursor.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.precursor.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource precursor', () => runTests(client));
describe('resource precursor (tree shakable, base)', () => runTests(partialClient));
