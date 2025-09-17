// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cfInterconnects', () => {
  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.magicTransit.cfInterconnects.update('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.magicTransit.cfInterconnects.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      automatic_return_routing: true,
      description: 'Tunnel for Interconnect to ORD',
      gre: { cloudflare_endpoint: '203.0.113.1' },
      health_check: { enabled: true, rate: 'low', target: { saved: '203.0.113.1' }, type: 'request' },
      interface_address: '192.0.2.0/31',
      interface_address6: '2606:54c1:7:0:a9fe:12d2:1:200/127',
      mtu: 0,
      'x-magic-new-hc-target': true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicTransit.cfInterconnects.list({
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
    const response = await client.magicTransit.cfInterconnects.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      'x-magic-new-hc-target': true,
    });
  });

  // TODO: investigate broken test
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.magicTransit.cfInterconnects.bulkUpdate({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
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
  test.skip('bulkUpdate: required and optional params', async () => {
    const response = await client.magicTransit.cfInterconnects.bulkUpdate({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
      'x-magic-new-hc-target': true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicTransit.cfInterconnects.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.magicTransit.cfInterconnects.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      'x-magic-new-hc-target': true,
    });
  });
});
