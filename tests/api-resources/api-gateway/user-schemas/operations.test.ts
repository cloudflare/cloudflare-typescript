// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseOperations } from 'cloudflare/resources/api-gateway/user-schemas/operations';
import { UserSchemas } from 'cloudflare/resources/api-gateway/user-schemas/user-schemas';

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
  resources: [BaseOperations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [UserSchemas],
});

const runTests = (
  client: PartialCloudflare<{ apiGateway: { userSchemas: { operations: BaseOperations } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.apiGateway.userSchemas.operations.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.apiGateway.userSchemas.operations.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        endpoint: '/api/v1',
        feature: ['thresholds'],
        host: ['api.cloudflare.com'],
        method: ['GET'],
        operation_status: 'new',
        page: 1,
        per_page: 5,
      },
    );
  });
};
describe('resource operations', () => runTests(client));
describe('resource operations (tree shakable, base)', () => runTests(partialClient));
describe('resource operations (tree shakable, subresource)', () => runTests(parentPartialClient));
