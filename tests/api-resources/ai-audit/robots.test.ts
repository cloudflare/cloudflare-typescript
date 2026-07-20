// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AIAudit } from 'cloudflare/resources/ai-audit/ai-audit';
import { BaseRobots } from 'cloudflare/resources/ai-audit/robots';

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
  resources: [BaseRobots],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AIAudit],
});

const runTests = (client: PartialCloudflare<{ aiAudit: { robots: BaseRobots } }>) => {
  test('bulkGet: only required params', async () => {
    const responsePromise = client.aiAudit.robots.bulkGet({
      zone_id: 'zone_id',
      body: ['example.com', 'blog.example.com'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkGet: required and optional params', async () => {
    const response = await client.aiAudit.robots.bulkGet({
      zone_id: 'zone_id',
      body: ['example.com', 'blog.example.com'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiAudit.robots.get({ zone_id: 'zone_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.aiAudit.robots.get({ zone_id: 'zone_id', subdomain: 'subdomain' });
  });
};
describe('resource robots', () => runTests(client));
describe('resource robots (tree shakable, base)', () => runTests(partialClient));
describe('resource robots (tree shakable, subresource)', () => runTests(parentPartialClient));
