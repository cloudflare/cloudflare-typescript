// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Access } from 'cloudflare/resources/zero-trust/access/access';
import { BaseIdPFederationGrants } from 'cloudflare/resources/zero-trust/access/idp-federation-grants';

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
  resources: [BaseIdPFederationGrants],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Access],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { access: { IdPFederationGrants: BaseIdPFederationGrants } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.IdPFederationGrants.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      idp_id: 'a79de439-0e7f-4ebb-8a02-222222222222',
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
    const response = await client.zeroTrust.access.IdPFederationGrants.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      idp_id: 'a79de439-0e7f-4ebb-8a02-222222222222',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.IdPFederationGrants.list({
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
    const response = await client.zeroTrust.access.IdPFederationGrants.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.access.IdPFederationGrants.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.access.IdPFederationGrants.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.access.IdPFederationGrants.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.zeroTrust.access.IdPFederationGrants.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource IdPFederationGrants', () => runTests(client));
describe('resource IdPFederationGrants (tree shakable, base)', () => runTests(partialClient));
describe('resource IdPFederationGrants (tree shakable, subresource)', () => runTests(parentPartialClient));
