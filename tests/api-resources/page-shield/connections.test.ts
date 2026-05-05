// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConnections } from 'cloudflare/resources/page-shield/connections';
import { PageShield } from 'cloudflare/resources/page-shield/page-shield';

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
  resources: [BaseConnections],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [PageShield],
});

const runTests = (client: PartialCloudflare<{ pageShield: { connections: BaseConnections } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.pageShield.connections.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.pageShield.connections.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      exclude_cdn_cgi: true,
      exclude_urls: 'blog.cloudflare.com,www.example',
      export: 'csv',
      hosts: 'blog.cloudflare.com,www.example*,*cloudflare.com',
      order_by: 'first_seen_at',
      page: '2',
      page_url: 'example.com/page,*/checkout,example.com/*,*checkout*',
      per_page: 100,
      prioritize_malicious: true,
      status: 'active,inactive',
      urls: 'blog.cloudflare.com,www.example',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pageShield.connections.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.pageShield.connections.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource connections', () => runTests(client));
describe('resource connections (tree shakable, base)', () => runTests(partialClient));
describe('resource connections (tree shakable, subresource)', () => runTests(parentPartialClient));
