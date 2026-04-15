// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Operations } from 'cloudflare/resources/api-gateway/operations/operations';
import { BaseSchemaValidation } from 'cloudflare/resources/api-gateway/operations/schema-validation';

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
  resources: [BaseSchemaValidation],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Operations],
});

const runTests = (
  client: PartialCloudflare<{ apiGateway: { operations: { schemaValidation: BaseSchemaValidation } } }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.apiGateway.operations.schemaValidation.update(
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

  test('update: required and optional params', async () => {
    const response = await client.apiGateway.operations.schemaValidation.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', mitigation_action: 'block' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.apiGateway.operations.schemaValidation.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      settings_multiple_request: {
        '3818d821-5901-4147-a474-f5f5aec1d54e': {},
        'b17c8043-99a0-4202-b7d9-8f7cdbee02cd': {},
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.apiGateway.operations.schemaValidation.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      settings_multiple_request: {
        '3818d821-5901-4147-a474-f5f5aec1d54e': { mitigation_action: 'log' },
        'b17c8043-99a0-4202-b7d9-8f7cdbee02cd': { mitigation_action: 'block' },
      },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.apiGateway.operations.schemaValidation.get(
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

  test('get: required and optional params', async () => {
    const response = await client.apiGateway.operations.schemaValidation.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource schemaValidation', () => runTests(client));
describe('resource schemaValidation (tree shakable, base)', () => runTests(partialClient));
describe('resource schemaValidation (tree shakable, subresource)', () => runTests(parentPartialClient));
