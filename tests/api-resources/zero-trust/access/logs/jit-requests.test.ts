// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseJitRequests } from 'cloudflare/resources/zero-trust/access/logs/jit-requests';
import { Logs } from 'cloudflare/resources/zero-trust/access/logs/logs';

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
  resources: [BaseJitRequests],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Logs],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { access: { logs: { jitRequests: BaseJitRequests } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.logs.jitRequests.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.zeroTrust.access.logs.jitRequests.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 0,
      per_page: 1000,
      search: 'search',
      since: '2019-12-27T18:11:19.117Z',
      status: 'PENDING',
      until: '2019-12-27T18:11:19.117Z',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.access.logs.jitRequests.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.zeroTrust.access.logs.jitRequests.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource jitRequests', () => runTests(client));
describe('resource jitRequests (tree shakable, base)', () => runTests(partialClient));
describe('resource jitRequests (tree shakable, subresource)', () => runTests(parentPartialClient));
