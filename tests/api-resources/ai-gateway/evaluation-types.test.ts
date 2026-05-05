// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AIGateway } from 'cloudflare/resources/ai-gateway/ai-gateway';
import { BaseEvaluationTypes } from 'cloudflare/resources/ai-gateway/evaluation-types';

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
  resources: [BaseEvaluationTypes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AIGateway],
});

const runTests = (client: PartialCloudflare<{ aiGateway: { evaluationTypes: BaseEvaluationTypes } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.aiGateway.evaluationTypes.list({
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.aiGateway.evaluationTypes.list({
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      order_by: 'order_by',
      order_by_direction: 'asc',
      page: 1,
      per_page: 5,
    });
  });
};
describe('resource evaluationTypes', () => runTests(client));
describe('resource evaluationTypes (tree shakable, base)', () => runTests(partialClient));
describe('resource evaluationTypes (tree shakable, subresource)', () => runTests(parentPartialClient));
