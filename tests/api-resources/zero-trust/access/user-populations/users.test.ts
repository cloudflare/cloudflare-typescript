// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { UserPopulations } from 'cloudflare/resources/zero-trust/access/user-populations/user-populations';
import { BaseUsers } from 'cloudflare/resources/zero-trust/access/user-populations/users';

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
  resources: [UserPopulations],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { access: { userPopulations: { users: BaseUsers } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.userPopulations.users.create(
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

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.access.userPopulations.users.create(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        active: true,
        displayName: 'displayName',
        emails: [
          {
            primary: true,
            type: 'type',
            value: 'value',
          },
        ],
        externalId: 'externalId',
        meta: {
          created: '2019-12-27T18:11:19.117Z',
          lastModified: '2019-12-27T18:11:19.117Z',
          location: 'https://example.com',
          resourceType: 'resourceType',
          version: 'version',
        },
        name: {
          familyName: 'familyName',
          formatted: 'formatted',
          givenName: 'givenName',
          honorificPrefix: 'honorificPrefix',
          honorificSuffix: 'honorificSuffix',
          middleName: 'middleName',
        },
        schemas: ['string'],
        userName: 'userName',
      },
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.userPopulations.users.update('user_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_population_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      Operations: [{ op: 'add' }],
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
    const response = await client.zeroTrust.access.userPopulations.users.update('user_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_population_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      Operations: [
        {
          op: 'add',
          path: 'path',
          value: 'string',
        },
      ],
      schemas: ['string'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.userPopulations.users.list(
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
    const response = await client.zeroTrust.access.userPopulations.users.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        attributes: 'attributes',
        count: 0,
        excludedAttributes: 'excludedAttributes',
        filter: 'filter',
        startIndex: 1,
      },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.access.userPopulations.users.delete('user_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_population_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
    const response = await client.zeroTrust.access.userPopulations.users.delete('user_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_population_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.access.userPopulations.users.get('user_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_population_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
    const response = await client.zeroTrust.access.userPopulations.users.get('user_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_population_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      attributes: 'attributes',
      excludedAttributes: 'excludedAttributes',
    });
  });

  test('replace: only required params', async () => {
    const responsePromise = client.zeroTrust.access.userPopulations.users.replace('user_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_population_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('replace: required and optional params', async () => {
    const response = await client.zeroTrust.access.userPopulations.users.replace('user_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      user_population_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      active: true,
      displayName: 'displayName',
      emails: [
        {
          primary: true,
          type: 'type',
          value: 'value',
        },
      ],
      externalId: 'externalId',
      meta: {
        created: '2019-12-27T18:11:19.117Z',
        lastModified: '2019-12-27T18:11:19.117Z',
        location: 'https://example.com',
        resourceType: 'resourceType',
        version: 'version',
      },
      name: {
        familyName: 'familyName',
        formatted: 'formatted',
        givenName: 'givenName',
        honorificPrefix: 'honorificPrefix',
        honorificSuffix: 'honorificSuffix',
        middleName: 'middleName',
      },
      schemas: ['string'],
      userName: 'userName',
    });
  });
};
describe('resource users', () => runTests(client));
describe('resource users (tree shakable, base)', () => runTests(partialClient));
describe('resource users (tree shakable, subresource)', () => runTests(parentPartialClient));
