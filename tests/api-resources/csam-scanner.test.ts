// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCsamScanner } from 'cloudflare/resources/csam-scanner/csam-scanner';

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
  resources: [BaseCsamScanner],
});

const runTests = (client: PartialCloudflare<{ csamScanner: BaseCsamScanner }>) => {
  test('edit: only required params', async () => {
    const responsePromise = client.csamScanner.edit({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.csamScanner.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: 'csam_scanner',
      value: {
        email: 'user@example.com',
        enabled: true,
        resend_email: true,
        sources: { source1: true },
      },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.csamScanner.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.csamScanner.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource csamScanner', () => runTests(client));
describe('resource csamScanner (tree shakable, base)', () => runTests(partialClient));
