// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSchemaValidation } from 'cloudflare/resources/api-gateway/settings/schema-validation';
import { Settings } from 'cloudflare/resources/api-gateway/settings/settings';

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
  resources: [Settings],
});

const runTests = (
  client: PartialCloudflare<{ apiGateway: { settings: { schemaValidation: BaseSchemaValidation } } }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.apiGateway.settings.schemaValidation.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_default_mitigation_action: 'block',
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
    const response = await client.apiGateway.settings.schemaValidation.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_default_mitigation_action: 'block',
      validation_override_mitigation_action: 'none',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.apiGateway.settings.schemaValidation.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.apiGateway.settings.schemaValidation.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_default_mitigation_action: 'block',
      validation_override_mitigation_action: 'none',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.apiGateway.settings.schemaValidation.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.apiGateway.settings.schemaValidation.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource schemaValidation', () => runTests(client));
describe('resource schemaValidation (tree shakable, base)', () => runTests(partialClient));
describe('resource schemaValidation (tree shakable, subresource)', () => runTests(parentPartialClient));
