// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ZeroTrust } from 'cloudflare/resources/zero-trust/zero-trust';
import { BaseOrganizations } from 'cloudflare/resources/zero-trust/organizations/organizations';

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
  resources: [BaseOrganizations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ZeroTrust],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { organizations: BaseOrganizations } }>) => {
  // TODO: investigate broken test
  test.skip('create', async () => {
    const responsePromise = client.zeroTrust.organizations.create({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update', async () => {
    const responsePromise = client.zeroTrust.organizations.update({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('list', async () => {
    const responsePromise = client.zeroTrust.organizations.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('revokeUsers: only required params', async () => {
    const responsePromise = client.zeroTrust.organizations.revokeUsers({
      email: 'test@example.com',
      account_id: 'account_id',
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
  test.skip('revokeUsers: required and optional params', async () => {
    const response = await client.zeroTrust.organizations.revokeUsers({
      email: 'test@example.com',
      account_id: 'account_id',
      query_devices: true,
      body_devices: true,
      user_uid: '699d98642c564d2e855e9661899b7252',
      warp_session_reauth: true,
    });
  });
};
describe('resource organizations', () => runTests(client));
describe('resource organizations (tree shakable, base)', () => runTests(partialClient));
describe('resource organizations (tree shakable, subresource)', () => runTests(parentPartialClient));
