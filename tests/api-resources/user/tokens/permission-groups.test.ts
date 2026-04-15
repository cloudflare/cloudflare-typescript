// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePermissionGroups } from 'cloudflare/resources/user/tokens/permission-groups';
import { Tokens } from 'cloudflare/resources/user/tokens/tokens';

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
  client: PartialCloudflare<{ user: { tokens: { permissionGroups: BasePermissionGroups } } }>,
) => {
  // TODO: investigate broken test
  test.skip('list', async () => {
    const responsePromise = client.user.tokens.permissionGroups.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.tokens.permissionGroups.list(
        { name: 'Account%20Settings%20Write', scope: 'com.cloudflare.api.account.zone' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource permissionGroups', () => runTests(client));
describe('resource permissionGroups (tree shakable, base)', () => runTests(partialClient));
describe('resource permissionGroups (tree shakable, subresource)', () => runTests(parentPartialClient));
