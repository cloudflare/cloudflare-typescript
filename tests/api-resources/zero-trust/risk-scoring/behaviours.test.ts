// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBehaviours } from 'cloudflare/resources/zero-trust/risk-scoring/behaviours';
import { RiskScoring } from 'cloudflare/resources/zero-trust/risk-scoring/risk-scoring';

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
  resources: [BaseBehaviours],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RiskScoring],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { riskScoring: { behaviours: BaseBehaviours } } }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.riskScoring.behaviours.update({
      account_id: 'account_id',
      behaviors: { foo: { enabled: true, risk_level: 'low' } },
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
    const response = await client.zeroTrust.riskScoring.behaviours.update({
      account_id: 'account_id',
      behaviors: { foo: { enabled: true, risk_level: 'low' } },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.riskScoring.behaviours.get({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.riskScoring.behaviours.get({ account_id: 'account_id' });
  });
};
describe('resource behaviours', () => runTests(client));
describe('resource behaviours (tree shakable, base)', () => runTests(partialClient));
describe('resource behaviours (tree shakable, subresource)', () => runTests(parentPartialClient));
