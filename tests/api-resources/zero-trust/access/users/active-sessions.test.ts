// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseActiveSessions } from 'cloudflare/resources/zero-trust/access/users/active-sessions';
import { Users } from 'cloudflare/resources/zero-trust/access/users/users';

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
  resources: [BaseActiveSessions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Users],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { access: { users: { activeSessions: BaseActiveSessions } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.users.activeSessions.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.access.users.activeSessions.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.access.users.activeSessions.get('X1aXj1lFVcqqyoXF', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
    const response = await client.zeroTrust.access.users.activeSessions.get('X1aXj1lFVcqqyoXF', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    });
  });
};
describe('resource activeSessions', () => runTests(client));
describe('resource activeSessions (tree shakable, base)', () => runTests(partialClient));
describe('resource activeSessions (tree shakable, subresource)', () => runTests(parentPartialClient));
