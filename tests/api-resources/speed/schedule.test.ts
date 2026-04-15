// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseScheduleResource } from 'cloudflare/resources/speed/schedule';
import { Speed } from 'cloudflare/resources/speed/speed';

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
  resources: [BaseScheduleResource],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Speed],
});

const runTests = (client: PartialCloudflare<{ speed: { schedule: BaseScheduleResource } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.speed.schedule.create('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.speed.schedule.create('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      frequency: 'DAILY',
      region: 'us-central1',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.speed.schedule.delete('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.speed.schedule.delete('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      region: 'us-central1',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.speed.schedule.get('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.speed.schedule.get('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      region: 'us-central1',
    });
  });
};
describe('resource schedule', () => runTests(client));
describe('resource schedule (tree shakable, base)', () => runTests(partialClient));
describe('resource schedule (tree shakable, subresource)', () => runTests(parentPartialClient));
