// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Turnstile } from 'cloudflare/resources/turnstile/turnstile';
import { BaseWidgets } from 'cloudflare/resources/turnstile/widgets';

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
  resources: [BaseWidgets],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Turnstile],
});

const runTests = (client: PartialCloudflare<{ turnstile: { widgets: BaseWidgets } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.turnstile.widgets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
      mode: 'invisible',
      name: 'blog.cloudflare.com login form',
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
    const response = await client.turnstile.widgets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
      mode: 'invisible',
      name: 'blog.cloudflare.com login form',
      direction: 'asc',
      filter: 'name:my-widget',
      order: 'id',
      page: 1,
      per_page: 5,
      bot_fight_mode: false,
      clearance_level: 'interactive',
      ephemeral_id: false,
      offlabel: false,
      region: 'world',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.turnstile.widgets.update('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
      mode: 'invisible',
      name: 'blog.cloudflare.com login form',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.turnstile.widgets.update('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
      mode: 'invisible',
      name: 'blog.cloudflare.com login form',
      bot_fight_mode: false,
      clearance_level: 'interactive',
      ephemeral_id: false,
      offlabel: false,
      region: 'world',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.turnstile.widgets.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.turnstile.widgets.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      filter: 'name:my-widget',
      order: 'id',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.turnstile.widgets.delete('0x4AAF00AAAABn0R22HWm-YUc', {
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

  test('delete: required and optional params', async () => {
    const response = await client.turnstile.widgets.delete('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.turnstile.widgets.get('0x4AAF00AAAABn0R22HWm-YUc', {
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
    const response = await client.turnstile.widgets.get('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('rotateSecret: only required params', async () => {
    const responsePromise = client.turnstile.widgets.rotateSecret('0x4AAF00AAAABn0R22HWm-YUc', {
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

  test('rotateSecret: required and optional params', async () => {
    const response = await client.turnstile.widgets.rotateSecret('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      invalidate_immediately: true,
    });
  });
};
describe('resource widgets', () => runTests(client));
describe('resource widgets (tree shakable, base)', () => runTests(partialClient));
describe('resource widgets (tree shakable, subresource)', () => runTests(parentPartialClient));
