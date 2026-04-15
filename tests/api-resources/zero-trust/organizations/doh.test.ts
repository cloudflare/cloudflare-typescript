// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDOH } from 'cloudflare/resources/zero-trust/organizations/doh';
import { Organizations } from 'cloudflare/resources/zero-trust/organizations/organizations';

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
  resources: [BaseDOH],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Organizations],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { organizations: { doh: BaseDOH } } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.organizations.doh.update({
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

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.organizations.doh.update({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      doh_jwt_duration: '800h',
      service_token_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.organizations.doh.get({
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

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.organizations.doh.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource doh', () => runTests(client));
describe('resource doh (tree shakable, base)', () => runTests(partialClient));
describe('resource doh (tree shakable, subresource)', () => runTests(parentPartialClient));
