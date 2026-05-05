// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Applications } from 'cloudflare/resources/zero-trust/access/applications/applications';
import { BaseSettings } from 'cloudflare/resources/zero-trust/access/applications/settings';

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
  resources: [BaseSettings],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Applications],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { access: { applications: { settings: BaseSettings } } } }>,
) => {
  // TODO: investigate broken test
  test.skip('update', async () => {
    const responsePromise = client.zeroTrust.access.applications.settings.update(
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

  // TODO: investigate broken test
  test.skip('edit', async () => {
    const responsePromise = client.zeroTrust.access.applications.settings.edit(
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
describe('resource settings', () => runTests(client));
describe('resource settings (tree shakable, base)', () => runTests(partialClient));
describe('resource settings (tree shakable, subresource)', () => runTests(parentPartialClient));
