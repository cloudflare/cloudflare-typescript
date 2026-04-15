// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ACM } from 'cloudflare/resources/acm/acm';
import { BaseTotalTLS } from 'cloudflare/resources/acm/total-tls';

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
  resources: [BaseTotalTLS],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ACM],
});

const runTests = (client: PartialCloudflare<{ acm: { totalTLS: BaseTotalTLS } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.acm.totalTLS.update({
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

  test('update: required and optional params', async () => {
    const response = await client.acm.totalTLS.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      certificate_authority: 'google',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.acm.totalTLS.edit({
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
    const response = await client.acm.totalTLS.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      certificate_authority: 'google',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.acm.totalTLS.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.acm.totalTLS.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource totalTLS', () => runTests(client));
describe('resource totalTLS (tree shakable, base)', () => runTests(partialClient));
describe('resource totalTLS (tree shakable, subresource)', () => runTests(parentPartialClient));
