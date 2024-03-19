// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ipsecTunnels', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.magicTransit.ipsecTunnels.create('023e105f4ecef8ad9ca31a8372d0c353', {
      cloudflare_endpoint: '203.0.113.1',
      interface_address: '192.0.2.0/31',
      name: 'IPsec_1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.magicTransit.ipsecTunnels.create('023e105f4ecef8ad9ca31a8372d0c353', {
      cloudflare_endpoint: '203.0.113.1',
      interface_address: '192.0.2.0/31',
      name: 'IPsec_1',
      customer_endpoint: '203.0.113.1',
      description: 'Tunnel for ISP X',
      health_check: {
        direction: 'bidirectional',
        enabled: true,
        rate: 'low',
        target: '203.0.113.1',
        type: 'request',
      },
      psk: 'O3bwKSjnaoCxDoUxjcq4Rk8ZKkezQUiy',
      replay_protection: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.magicTransit.ipsecTunnels.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { cloudflare_endpoint: '203.0.113.1', interface_address: '192.0.2.0/31', name: 'IPsec_1' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.magicTransit.ipsecTunnels.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        cloudflare_endpoint: '203.0.113.1',
        interface_address: '192.0.2.0/31',
        name: 'IPsec_1',
        customer_endpoint: '203.0.113.1',
        description: 'Tunnel for ISP X',
        health_check: {
          direction: 'bidirectional',
          enabled: true,
          rate: 'low',
          target: '203.0.113.1',
          type: 'request',
        },
        psk: 'O3bwKSjnaoCxDoUxjcq4Rk8ZKkezQUiy',
        replay_protection: false,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.magicTransit.ipsecTunnels.list('023e105f4ecef8ad9ca31a8372d0c353');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.magicTransit.ipsecTunnels.list('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.magicTransit.ipsecTunnels.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.magicTransit.ipsecTunnels.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.magicTransit.ipsecTunnels.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('pskGenerate', async () => {
    const responsePromise = cloudflare.magicTransit.ipsecTunnels.pskGenerate(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
