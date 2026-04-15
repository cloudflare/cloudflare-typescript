// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Integrations } from 'cloudflare/resources/zero-trust/risk-scoring/integrations/integrations';
import { BaseReferences } from 'cloudflare/resources/zero-trust/risk-scoring/integrations/references';

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
  resources: [BaseReferences],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Integrations],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { riskScoring: { integrations: { references: BaseReferences } } } }>,
) => {
  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.riskScoring.integrations.references.get('reference_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.riskScoring.integrations.references.get('reference_id', {
      account_id: 'account_id',
    });
  });
};
describe('resource references', () => runTests(client));
describe('resource references (tree shakable, base)', () => runTests(partialClient));
describe('resource references (tree shakable, subresource)', () => runTests(parentPartialClient));
