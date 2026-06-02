// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseTenantCustomNameservers } from 'cloudflare/resources/tenant-custom-nameservers/tenant-custom-nameservers';

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
  resources: [BaseTenantCustomNameservers],
});

const runTests = (client: PartialCloudflare<{ tenantCustomNameservers: BaseTenantCustomNameservers }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.tenantCustomNameservers.create('699d98642c564d2e855e9661899b7252', {
      ns_name: 'ns1.example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.tenantCustomNameservers.create('699d98642c564d2e855e9661899b7252', {
      ns_name: 'ns1.example.com',
      ns_set: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.tenantCustomNameservers.delete('ns1.example.com', {
      tenant_tag: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.tenantCustomNameservers.delete('ns1.example.com', {
      tenant_tag: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('get', async () => {
    const responsePromise = client.tenantCustomNameservers.get('699d98642c564d2e855e9661899b7252');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource tenantCustomNameservers', () => runTests(client));
describe('resource tenantCustomNameservers (tree shakable, base)', () => runTests(partialClient));
