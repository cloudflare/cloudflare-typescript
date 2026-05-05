// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Speed } from 'cloudflare/resources/speed/speed';
import { BasePages } from 'cloudflare/resources/speed/pages/pages';

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
  resources: [BasePages],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Speed],
});

const runTests = (client: PartialCloudflare<{ speed: { pages: BasePages } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.speed.pages.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.speed.pages.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // TODO: investigate broken test
  test.skip('trend: only required params', async () => {
    const responsePromise = client.speed.pages.trend('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      deviceType: 'DESKTOP',
      metrics: 'performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls',
      region: 'us-central1',
      start: '2014-01-01T05:20:00.12345Z',
      tz: 'tz',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('trend: required and optional params', async () => {
    const response = await client.speed.pages.trend('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      deviceType: 'DESKTOP',
      metrics: 'performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls',
      region: 'us-central1',
      start: '2014-01-01T05:20:00.12345Z',
      tz: 'tz',
      end: '2014-01-01T05:20:00.12345Z',
    });
  });
};
describe('resource pages', () => runTests(client));
describe('resource pages (tree shakable, base)', () => runTests(partialClient));
describe('resource pages (tree shakable, subresource)', () => runTests(parentPartialClient));
