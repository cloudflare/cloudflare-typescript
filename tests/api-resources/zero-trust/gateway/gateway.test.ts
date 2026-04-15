// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ZeroTrust } from 'cloudflare/resources/zero-trust/zero-trust';
import { BaseGateway } from 'cloudflare/resources/zero-trust/gateway/gateway';

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
  resources: [BaseGateway],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ZeroTrust],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { gateway: BaseGateway } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.create({
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

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.create({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.list({ account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.list({ account_id: '699d98642c564d2e855e9661899b7252' });
  });
};
describe('resource gateway', () => runTests(client));
describe('resource gateway (tree shakable, base)', () => runTests(partialClient));
describe('resource gateway (tree shakable, subresource)', () => runTests(parentPartialClient));
