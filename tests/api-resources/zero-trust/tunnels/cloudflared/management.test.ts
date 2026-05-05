// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cloudflared } from 'cloudflare/resources/zero-trust/tunnels/cloudflared/cloudflared';
import { BaseManagement } from 'cloudflare/resources/zero-trust/tunnels/cloudflared/management';

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
  resources: [BaseManagement],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Cloudflared],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { tunnels: { cloudflared: { management: BaseManagement } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.tunnels.cloudflared.management.create(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252', resources: ['logs'] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.tunnels.cloudflared.management.create(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252', resources: ['logs'] },
    );
  });
};
describe('resource management', () => runTests(client));
describe('resource management (tree shakable, base)', () => runTests(partialClient));
describe('resource management (tree shakable, subresource)', () => runTests(parentPartialClient));
