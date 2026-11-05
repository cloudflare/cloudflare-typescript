// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CWS } from 'cloudflare/resources/zero-trust/cws/cws';
import { BaseRegoModules } from 'cloudflare/resources/zero-trust/cws/rego-modules';

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
  resources: [BaseRegoModules],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CWS],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { cws: { regoModules: BaseRegoModules } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.regoModules.create({
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      rego_source: 'x',
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
    const response = await client.zeroTrust.cws.regoModules.create({
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      rego_source: 'x',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.regoModules.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      rego_source: 'x',
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
    const response = await client.zeroTrust.cws.regoModules.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      rego_source: 'x',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.regoModules.list({
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.zeroTrust.cws.regoModules.list({
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      cursor: 'cursor',
      direction: 'asc',
      name: 'name',
      order: 'name',
      package_path: 'package_path',
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.regoModules.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.zeroTrust.cws.regoModules.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.regoModules.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.zeroTrust.cws.regoModules.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    });
  });
};
describe('resource regoModules', () => runTests(client));
describe('resource regoModules (tree shakable, base)', () => runTests(partialClient));
describe('resource regoModules (tree shakable, subresource)', () => runTests(parentPartialClient));
