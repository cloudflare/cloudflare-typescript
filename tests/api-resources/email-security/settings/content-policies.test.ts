// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseContentPolicies } from 'cloudflare/resources/email-security/settings/content-policies';
import { Settings } from 'cloudflare/resources/email-security/settings/settings';

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
  resources: [BaseContentPolicies],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Settings],
});

const runTests = (
  client: PartialCloudflare<{ emailSecurity: { settings: { contentPolicies: BaseContentPolicies } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.contentPolicies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      name: 'Block phishing keywords',
      pattern: 'urgent.*verify.*account',
      targets: ['SUBJECT'],
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
    const response = await client.emailSecurity.settings.contentPolicies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      name: 'Block phishing keywords',
      pattern: 'urgent.*verify.*account',
      targets: ['SUBJECT'],
      notes: 'Blocks common phishing subject lines',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.contentPolicies.list({
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
    const response = await client.emailSecurity.settings.contentPolicies.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      enabled: true,
      name: 'name',
      order: 'name',
      page: 1,
      per_page: 20,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.contentPolicies.delete(
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
    const response = await client.emailSecurity.settings.contentPolicies.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('batch: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.contentPolicies.batch({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      deletes: [{ id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415' }],
      patches: [{}],
      posts: [
        {
          enabled: true,
          name: 'Block phishing keywords',
          pattern: 'urgent.*verify.*account',
          targets: ['SUBJECT'],
        },
      ],
      puts: [
        {
          enabled: true,
          name: 'Block phishing keywords',
          pattern: 'urgent.*verify.*account',
          targets: ['SUBJECT'],
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batch: required and optional params', async () => {
    const response = await client.emailSecurity.settings.contentPolicies.batch({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      deletes: [{ id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415' }],
      patches: [
        {
          enabled: true,
          name: 'Block phishing keywords',
          notes: 'Blocks common phishing subject lines',
          pattern: 'urgent.*verify.*account',
          targets: ['SUBJECT'],
        },
      ],
      posts: [
        {
          enabled: true,
          name: 'Block phishing keywords',
          pattern: 'urgent.*verify.*account',
          targets: ['SUBJECT'],
          notes: 'Blocks common phishing subject lines',
        },
      ],
      puts: [
        {
          enabled: true,
          name: 'Block phishing keywords',
          pattern: 'urgent.*verify.*account',
          targets: ['SUBJECT'],
          notes: 'Blocks common phishing subject lines',
        },
      ],
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.contentPolicies.edit(
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

  test('edit: required and optional params', async () => {
    const response = await client.emailSecurity.settings.contentPolicies.edit(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        enabled: true,
        name: 'Block phishing keywords',
        notes: 'Blocks common phishing subject lines',
        pattern: 'urgent.*verify.*account',
        targets: ['SUBJECT'],
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailSecurity.settings.contentPolicies.get(
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
    const response = await client.emailSecurity.settings.contentPolicies.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource contentPolicies', () => runTests(client));
describe('resource contentPolicies (tree shakable, base)', () => runTests(partialClient));
describe('resource contentPolicies (tree shakable, subresource)', () => runTests(parentPartialClient));
