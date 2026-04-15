// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Gateway } from 'cloudflare/resources/zero-trust/gateway/gateway';
import { BasePacfiles } from 'cloudflare/resources/zero-trust/gateway/pacfiles';

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
  resources: [BasePacfiles],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Gateway],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { gateway: { pacfiles: BasePacfiles } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.pacfiles.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      contents: 'function FindProxyForURL(url, host) { return "DIRECT"; }',
      name: 'Devops team',
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
    const response = await client.zeroTrust.gateway.pacfiles.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      contents: 'function FindProxyForURL(url, host) { return "DIRECT"; }',
      name: 'Devops team',
      description: 'PAC file for Devops team',
      slug: 'pac_devops',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.pacfiles.update('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
      contents: 'function FindProxyForURL(url, host) { return "DIRECT"; }',
      description: 'PAC file for Devops team',
      name: 'Devops team',
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
    const response = await client.zeroTrust.gateway.pacfiles.update('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
      contents: 'function FindProxyForURL(url, host) { return "DIRECT"; }',
      description: 'PAC file for Devops team',
      name: 'Devops team',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.pacfiles.list({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.gateway.pacfiles.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.pacfiles.delete('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.gateway.pacfiles.delete('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.pacfiles.get('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.gateway.pacfiles.get('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
};
describe('resource pacfiles', () => runTests(client));
describe('resource pacfiles (tree shakable, base)', () => runTests(partialClient));
describe('resource pacfiles (tree shakable, subresource)', () => runTests(parentPartialClient));
