// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Settings } from 'cloudflare/resources/email-security/settings/settings';
import { BaseTrustedDomains } from 'cloudflare/resources/email-security/settings/trusted-domains';

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
  resources: [BaseTrustedDomains],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Settings],
});

const runTests = (
  client: PartialCloudflare<{ emailSecurity: { settings: { trustedDomains: BaseTrustedDomains } } }>,
) => {
  // TODO: investigate HTTP 422 errors on test suite
  test.skip('create: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.trustedDomains.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      is_recent: true,
      is_regex: false,
      is_similarity: false,
      pattern: 'example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate HTTP 422 errors on test suite
  test.skip('create: required and optional params', async () => {
    const response = await client.emailSecurity.settings.trustedDomains.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      is_recent: true,
      is_regex: false,
      is_similarity: false,
      pattern: 'example.com',
      comments: 'Trusted partner domain',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.trustedDomains.list({
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
    const response = await client.emailSecurity.settings.trustedDomains.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      is_recent: true,
      is_similarity: true,
      order: 'pattern',
      page: 1,
      pattern: 'pattern',
      per_page: 20,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.trustedDomains.delete(
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

  test('delete: required and optional params', async () => {
    const response = await client.emailSecurity.settings.trustedDomains.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // HTTP 422 error from prism
  test.skip('edit: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.trustedDomains.edit(
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

  // HTTP 422 error from prism
  test.skip('edit: required and optional params', async () => {
    const response = await client.emailSecurity.settings.trustedDomains.edit(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        comments: 'Trusted partner domain',
        is_recent: true,
        is_regex: false,
        is_similarity: false,
        pattern: 'example.com',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.trustedDomains.get(
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

  test('get: required and optional params', async () => {
    const response = await client.emailSecurity.settings.trustedDomains.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource trustedDomains', () => runTests(client));
describe('resource trustedDomains (tree shakable, base)', () => runTests(partialClient));
describe('resource trustedDomains (tree shakable, subresource)', () => runTests(parentPartialClient));
