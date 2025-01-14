// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource traceroutes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.diagnostics.traceroutes.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      targets: ['203.0.113.1', 'cloudflare.com'],
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
    const response = await client.diagnostics.traceroutes.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      targets: ['203.0.113.1', 'cloudflare.com'],
      colos: ['den', 'sin'],
      options: { max_ttl: 15, packet_type: 'icmp', packets_per_ttl: 0, port: 0, wait_time: 1 },
    });
  });
});
