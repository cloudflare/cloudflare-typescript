// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Monetization } from 'cloudflare/resources/monetization/monetization';
import { BaseRules } from 'cloudflare/resources/monetization/rules';

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
  resources: [Monetization],
});

const runTests = (client: PartialCloudflare<{ monetization: { rules: BaseRules } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.monetization.rules.update({
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      rules: [
        {
          address: '0x1234567890abcdef1234567890abcdef12345678===',
          expression: '(http.request.uri.path eq "/premium" and http.request.method in {"GET" "POST"})',
          price: '250000',
          scheme: 'exact',
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
    const response = await client.monetization.rules.update({
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      rules: [
        {
          address: '0x1234567890abcdef1234567890abcdef12345678===',
          expression: '(http.request.uri.path eq "/premium" and http.request.method in {"GET" "POST"})',
          price: '250000',
          scheme: 'exact',
          id: '023e105f4ecef8ad9ca31a8372d0c353',
          description: 'Premium API endpoint',
          enabled: true,
        },
      ],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.monetization.rules.delete({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.monetization.rules.delete({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
  });

  test('deleteRule: only required params', async () => {
    const responsePromise = client.monetization.rules.deleteRule('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteRule: required and optional params', async () => {
    const response = await client.monetization.rules.deleteRule('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
    });
  });

  test('editRule: only required params', async () => {
    const responsePromise = client.monetization.rules.editRule('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('editRule: required and optional params', async () => {
    const response = await client.monetization.rules.editRule('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      address: '0x1234567890abcdef1234567890abcdef12345678===',
      description: 'Premium API endpoint',
      enabled: true,
      expression: '(http.request.uri.path eq "/premium" and http.request.method in {"GET" "POST"})',
      price: '250000',
      scheme: 'exact',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.monetization.rules.get({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.monetization.rules.get({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
  });

  test('getRule: only required params', async () => {
    const responsePromise = client.monetization.rules.getRule('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getRule: required and optional params', async () => {
    const response = await client.monetization.rules.getRule('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
    });
  });
};
describe('resource rules', () => runTests(client));
describe('resource rules (tree shakable, base)', () => runTests(partialClient));
describe('resource rules (tree shakable, subresource)', () => runTests(parentPartialClient));
