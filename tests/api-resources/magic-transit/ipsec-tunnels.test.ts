// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ipsecTunnels', () => {
  test('create: only required params', async () => {
    const responsePromise = client.magicTransit.ipsecTunnels.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('create: required and optional params', async () => {
    const response = await client.magicTransit.ipsecTunnels.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cloudflare_endpoint: '203.0.113.1',
      interface_address: '192.0.2.0/31',
      name: 'IPsec_1',
      customer_endpoint: '203.0.113.1',
      description: 'Tunnel for ISP X',
      health_check: {
        direction: 'unidirectional',
        enabled: true,
        rate: 'low',
        target: '203.0.113.1',
        type: 'reply',
      },
      psk: 'O3bwKSjnaoCxDoUxjcq4Rk8ZKkezQUiy',
      replay_protection: false,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicTransit.ipsecTunnels.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('update: required and optional params', async () => {
    const response = await client.magicTransit.ipsecTunnels.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cloudflare_endpoint: '203.0.113.1',
      interface_address: '192.0.2.0/31',
      name: 'IPsec_1',
      customer_endpoint: '203.0.113.1',
      description: 'Tunnel for ISP X',
      health_check: {
        direction: 'unidirectional',
        enabled: true,
        rate: 'low',
        target: '203.0.113.1',
        type: 'reply',
      },
      psk: 'O3bwKSjnaoCxDoUxjcq4Rk8ZKkezQUiy',
      replay_protection: false,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicTransit.ipsecTunnels.list({
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
    const response = await client.magicTransit.ipsecTunnels.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicTransit.ipsecTunnels.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('delete: required and optional params', async () => {
    const response = await client.magicTransit.ipsecTunnels.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicTransit.ipsecTunnels.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.magicTransit.ipsecTunnels.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('pskGenerate: only required params', async () => {
    const responsePromise = client.magicTransit.ipsecTunnels.pskGenerate('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('pskGenerate: required and optional params', async () => {
    const response = await client.magicTransit.ipsecTunnels.pskGenerate('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
  });
});
