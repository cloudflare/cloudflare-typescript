// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBotManagement } from 'cloudflare/resources/bot-management/bot-management';

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
  resources: [BaseBotManagement],
});

const runTests = (client: PartialCloudflare<{ botManagement: BaseBotManagement }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.botManagement.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.botManagement.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ai_bots_protection: 'block',
      cf_robots_variant: 'policy_only',
      content_bots_protection: 'disabled',
      crawler_protection: 'enabled',
      enable_js: true,
      fight_mode: true,
      is_robots_txt_managed: false,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.botManagement.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.botManagement.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource botManagement', () => runTests(client));
describe('resource botManagement (tree shakable, base)', () => runTests(partialClient));
