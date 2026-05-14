// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Filters } from 'cloudflare/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/filters';
import { BaseItems } from 'cloudflare/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/items';

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
  resources: [BaseItems],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Filters],
});

const runTests = (
  client: PartialCloudflare<{
    DDoSProtection: { advancedTCPProtection: { tcpFlowProtection: { filters: { items: BaseItems } } } };
  }>,
) => {
  test('delete: only required params', async () => {
    const responsePromise =
      client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.items.delete(
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
    const response = await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.items.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.items.edit(
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
    const response = await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.items.edit(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        expression: 'ip.dst in { 192.0.2.0/24 198.51.100.0/24 } and tcp.srcport in { 80 443 10000..65535 }',
        mode: 'mode',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.items.get(
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
    const response = await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.items.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource items', () => runTests(client));
describe('resource items (tree shakable, base)', () => runTests(partialClient));
describe('resource items (tree shakable, subresource)', () => runTests(parentPartialClient));
