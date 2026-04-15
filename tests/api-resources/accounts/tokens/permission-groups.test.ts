// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePermissionGroups } from 'cloudflare/resources/accounts/tokens/permission-groups';
import { Tokens } from 'cloudflare/resources/accounts/tokens/tokens';

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
  resources: [BasePermissionGroups],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Tokens],
});

const runTests = (
  client: PartialCloudflare<{ accounts: { tokens: { permissionGroups: BasePermissionGroups } } }>,
) => {
  // TODO: investigate broken test
  test.skip('list: only required params', async () => {
    const responsePromise = client.accounts.tokens.permissionGroups.list({
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

  // TODO: investigate broken test
  test.skip('list: required and optional params', async () => {
    const response = await client.accounts.tokens.permissionGroups.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'Account%20Settings%20Write',
      scope: 'com.cloudflare.api.account.zone',
    });
  });

  // TODO: investigate broken test
  test.skip('get: only required params', async () => {
    const responsePromise = client.accounts.tokens.permissionGroups.get({
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

  // TODO: investigate broken test
  test.skip('get: required and optional params', async () => {
    const response = await client.accounts.tokens.permissionGroups.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'Account%20Settings%20Write',
      scope: 'com.cloudflare.api.account.zone',
    });
  });
};
describe('resource permissionGroups', () => runTests(client));
describe('resource permissionGroups (tree shakable, base)', () => runTests(partialClient));
describe('resource permissionGroups (tree shakable, subresource)', () => runTests(parentPartialClient));
