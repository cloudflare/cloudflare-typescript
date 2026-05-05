// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBytimes } from 'cloudflare/resources/spectrum/analytics/events/bytimes';
import { Events } from 'cloudflare/resources/spectrum/analytics/events/events';

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
  resources: [BaseBytimes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Events],
});

const runTests = (
  client: PartialCloudflare<{ spectrum: { analytics: { events: { bytimes: BaseBytimes } } } }>,
) => {
  test('get: only required params', async () => {
    const responsePromise = client.spectrum.analytics.events.bytimes.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      time_delta: 'minute',
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
    const response = await client.spectrum.analytics.events.bytimes.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      time_delta: 'minute',
      dimensions: ['event', 'appID'],
      filters: 'event==disconnect%20AND%20coloName!=SFO',
      metrics: ['count', 'bytesIngress'],
      since: '2014-01-01T05:20:00.12345Z',
      sort: ['+count', '-bytesIngress'],
      until: '2014-01-01T05:20:00.12345Z',
    });
  });
};
describe('resource bytimes', () => runTests(client));
describe('resource bytimes (tree shakable, base)', () => runTests(partialClient));
describe('resource bytimes (tree shakable, subresource)', () => runTests(parentPartialClient));
