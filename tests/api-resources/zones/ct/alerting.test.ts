// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAlerting } from 'cloudflare/resources/zones/ct/alerting';
import { CT } from 'cloudflare/resources/zones/ct/ct';

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
  resources: [BaseAlerting],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CT],
});

const runTests = (client: PartialCloudflare<{ zones: { ct: { alerting: BaseAlerting } } }>) => {
  test('edit: only required params', async () => {
    const responsePromise = client.zones.ct.alerting.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.zones.ct.alerting.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      emails: ['security@example.com', 'admin@example.com'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zones.ct.alerting.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zones.ct.alerting.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource alerting', () => runTests(client));
describe('resource alerting (tree shakable, base)', () => runTests(partialClient));
describe('resource alerting (tree shakable, subresource)', () => runTests(parentPartialClient));
