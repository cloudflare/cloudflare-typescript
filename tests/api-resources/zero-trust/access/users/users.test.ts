// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Access } from 'cloudflare/resources/zero-trust/access/access';
import { BaseUsers } from 'cloudflare/resources/zero-trust/access/users/users';

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
  resources: [BaseUsers],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Access],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { access: { users: BaseUsers } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.users.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email: 'jdoe@example.com',
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
    const response = await client.zeroTrust.access.users.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email: 'jdoe@example.com',
      name: 'Jane Doe',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.users.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email: 'jdoe@example.com',
      name: 'Jane Doe',
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
    const response = await client.zeroTrust.access.users.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email: 'jdoe@example.com',
      name: 'Jane Doe',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.users.list({
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
    const response = await client.zeroTrust.access.users.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email: 'email',
      name: 'name',
      page: 0,
      per_page: 1000,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.access.users.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.access.users.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.access.users.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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
    const response = await client.zeroTrust.access.users.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource users', () => runTests(client));
describe('resource users (tree shakable, base)', () => runTests(partialClient));
describe('resource users (tree shakable, subresource)', () => runTests(parentPartialClient));
