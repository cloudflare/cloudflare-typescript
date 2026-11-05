// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Access } from 'cloudflare/resources/zero-trust/access/access';
import { BaseApplications } from 'cloudflare/resources/zero-trust/access/applications/applications';

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
  resources: [BaseApplications],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Access],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { access: { applications: BaseApplications } } }>,
) => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.applications.create({
      oauth_configuration: {},
      type: 'self_hosted',
      user_populations: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.zeroTrust.access.applications.create({
      oauth_configuration: {
        dynamic_client_registration: {
          allow_any_on_localhost: true,
          allow_any_on_loopback: true,
          allowed_uris: ['https://example.com/callback', 'com.example.app:/oauth/callback'],
          enabled: true,
        },
        enabled: true,
        grant: { access_token_lifetime: '5m', session_duration: '24h' },
      },
      type: 'self_hosted',
      user_populations: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'],
      account_id: 'account_id',
      allowed_idps: ['699d98642c564d2e855e9661899b7252'],
      destinations: [
        {
          uri: 'uri',
          overrides: [{ behavior: 'public', path_pattern: '/health/*' }],
          type: 'public',
        },
      ],
      domain: 'test.example.com/admin',
      name: 'Admin Site',
      self_hosted_domains: ['test.example.com/admin', 'test.anotherexample.com/staff'],
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.applications.update('023e105f4ecef8ad9ca31a8372d0c353', {
      oauth_configuration: {},
      type: 'self_hosted',
      user_populations: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.zeroTrust.access.applications.update('023e105f4ecef8ad9ca31a8372d0c353', {
      oauth_configuration: {
        dynamic_client_registration: {
          allow_any_on_localhost: true,
          allow_any_on_loopback: true,
          allowed_uris: ['https://example.com/callback', 'com.example.app:/oauth/callback'],
          enabled: true,
        },
        enabled: true,
        grant: { access_token_lifetime: '5m', session_duration: '24h' },
      },
      type: 'self_hosted',
      user_populations: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'],
      account_id: 'account_id',
      allowed_idps: ['699d98642c564d2e855e9661899b7252'],
      destinations: [
        {
          uri: 'uri',
          overrides: [{ behavior: 'public', path_pattern: '/health/*' }],
          type: 'public',
        },
      ],
      domain: 'test.example.com/admin',
      name: 'Admin Site',
      self_hosted_domains: ['test.example.com/admin', 'test.anotherexample.com/staff'],
    });
  });

  // TODO: investigate broken test
  test.skip('list', async () => {
    const responsePromise = client.zeroTrust.access.applications.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('delete', async () => {
    const responsePromise = client.zeroTrust.access.applications.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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
  test.skip('get', async () => {
    const responsePromise = client.zeroTrust.access.applications.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
  test.skip('revokeTokens', async () => {
    const responsePromise = client.zeroTrust.access.applications.revokeTokens(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource applications', () => runTests(client));
describe('resource applications (tree shakable, base)', () => runTests(partialClient));
describe('resource applications (tree shakable, subresource)', () => runTests(parentPartialClient));
