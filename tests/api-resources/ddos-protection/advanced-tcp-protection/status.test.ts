// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AdvancedTCPProtection } from 'cloudflare/resources/ddos-protection/advanced-tcp-protection/advanced-tcp-protection';
import { BaseStatus } from 'cloudflare/resources/ddos-protection/advanced-tcp-protection/status';

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
  resources: [BaseStatus],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AdvancedTCPProtection],
});

const runTests = (
  client: PartialCloudflare<{ DDoSProtection: { advancedTCPProtection: { status: BaseStatus } } }>,
) => {
  test('edit: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.status.edit({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.DDoSProtection.advancedTCPProtection.status.edit({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.status.get({
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
    const response = await client.DDoSProtection.advancedTCPProtection.status.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource status', () => runTests(client));
describe('resource status (tree shakable, base)', () => runTests(partialClient));
describe('resource status (tree shakable, subresource)', () => runTests(parentPartialClient));
