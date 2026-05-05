// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseFraud } from 'cloudflare/resources/fraud/fraud';

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
  resources: [BaseFraud],
});

const runTests = (client: PartialCloudflare<{ fraud: BaseFraud }>) => {
  // HTTP 422 error from prism
  test.skip('update: only required params', async () => {
    const responsePromise = client.fraud.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 422 error from prism
  test.skip('update: required and optional params', async () => {
    const response = await client.fraud.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      authentication_settings: {
        failure_criteria: { kind: 'status_code', status_codes: [200, 201] },
        success_criteria: { kind: 'status_code', status_codes: [200, 201] },
      },
      user_profiles: 'disabled',
      username_expressions: ['string'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.fraud.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.fraud.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource fraud', () => runTests(client));
describe('resource fraud (tree shakable, base)', () => runTests(partialClient));
