// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Investigate } from 'cloudflare/resources/email-security/investigate/investigate';
import { BaseRelease } from 'cloudflare/resources/email-security/investigate/release';

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
  resources: [BaseRelease],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Investigate],
});

const runTests = (
  client: PartialCloudflare<{ emailSecurity: { investigate: { release: BaseRelease } } }>,
) => {
  test('bulk: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.release.bulk({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: ['4Njp3P0STMz2c02Q'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulk: required and optional params', async () => {
    const response = await client.emailSecurity.investigate.release.bulk({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: ['4Njp3P0STMz2c02Q'],
    });
  });
};
describe('resource release', () => runTests(client));
describe('resource release (tree shakable, base)', () => runTests(partialClient));
describe('resource release (tree shakable, subresource)', () => runTests(parentPartialClient));
