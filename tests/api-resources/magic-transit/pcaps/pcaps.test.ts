// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { MagicTransit } from 'cloudflare/resources/magic-transit/magic-transit';
import { BasePCAPs } from 'cloudflare/resources/magic-transit/pcaps/pcaps';

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
  resources: [BasePCAPs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MagicTransit],
});

const runTests = (client: PartialCloudflare<{ magicTransit: { pcaps: BasePCAPs } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.magicTransit.pcaps.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      packet_limit: 10000,
      system: 'magic-transit',
      time_limit: 300,
      type: 'simple',
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
    const response = await client.magicTransit.pcaps.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      packet_limit: 10000,
      system: 'magic-transit',
      time_limit: 300,
      type: 'simple',
      filter_v1: {
        destination_address: '1.2.3.4',
        destination_port: 80,
        protocol: 6,
        source_address: '1.2.3.4',
        source_port: 123,
      },
      offset_time: '2020-01-01T08:00:00Z',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicTransit.pcaps.list({
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

  test('list: required and optional params', async () => {
    const response = await client.magicTransit.pcaps.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicTransit.pcaps.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.magicTransit.pcaps.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('stop: only required params', async () => {
    const responsePromise = client.magicTransit.pcaps.stop('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('stop: required and optional params', async () => {
    const response = await client.magicTransit.pcaps.stop('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource pcaps', () => runTests(client));
describe('resource pcaps (tree shakable, base)', () => runTests(partialClient));
describe('resource pcaps (tree shakable, subresource)', () => runTests(parentPartialClient));
