// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AdvancedTCPProtection } from 'cloudflare/resources/ddos-protection/advanced-tcp-protection/advanced-tcp-protection';
import { BaseAllowlist } from 'cloudflare/resources/ddos-protection/advanced-tcp-protection/allowlist/allowlist';

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
  resources: [BaseAllowlist],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AdvancedTCPProtection],
});

const runTests = (
  client: PartialCloudflare<{ DDoSProtection: { advancedTCPProtection: { allowlist: BaseAllowlist } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.allowlist.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: 'comment',
      enabled: true,
      prefix: 'prefix',
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
    const response = await client.DDoSProtection.advancedTCPProtection.allowlist.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: 'comment',
      enabled: true,
      prefix: 'prefix',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.allowlist.list({
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
    const response = await client.DDoSProtection.advancedTCPProtection.allowlist.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'direction',
      order: 'order',
      page: 0,
      per_page: 0,
    });
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.allowlist.bulkDelete({
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

  test('bulkDelete: required and optional params', async () => {
    const response = await client.DDoSProtection.advancedTCPProtection.allowlist.bulkDelete({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource allowlist', () => runTests(client));
describe('resource allowlist (tree shakable, base)', () => runTests(partialClient));
describe('resource allowlist (tree shakable, subresource)', () => runTests(parentPartialClient));
