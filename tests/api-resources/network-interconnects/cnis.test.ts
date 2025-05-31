// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cnis', () => {
  test('create: only required params', async () => {
    const responsePromise = client.networkInterconnects.cnis.create({
      account_id: 'account_id',
      account: 'account',
      interconnect: 'interconnect',
      magic: { conduit_name: 'conduit_name', description: 'description', mtu: 0 },
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
    const response = await client.networkInterconnects.cnis.create({
      account_id: 'account_id',
      account: 'account',
      interconnect: 'interconnect',
      magic: { conduit_name: 'conduit_name', description: 'description', mtu: 0 },
      bgp: { customer_asn: 0, extra_prefixes: ['string'], md5_key: 'md5_key' },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.networkInterconnects.cnis.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      account: 'account',
      cust_ip: '192.168.3.4/31',
      interconnect: 'interconnect',
      magic: { conduit_name: 'conduit_name', description: 'description', mtu: 0 },
      p2p_ip: '192.168.3.4/31',
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
    const response = await client.networkInterconnects.cnis.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      account: 'account',
      cust_ip: '192.168.3.4/31',
      interconnect: 'interconnect',
      magic: { conduit_name: 'conduit_name', description: 'description', mtu: 0 },
      p2p_ip: '192.168.3.4/31',
      bgp: { customer_asn: 0, extra_prefixes: ['string'], md5_key: 'md5_key' },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.networkInterconnects.cnis.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.networkInterconnects.cnis.list({
      account_id: 'account_id',
      cursor: 0,
      limit: 0,
      slot: 'slot',
      tunnel_id: 'tunnel_id',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.networkInterconnects.cnis.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
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
    const response = await client.networkInterconnects.cnis.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.networkInterconnects.cnis.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
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
    const response = await client.networkInterconnects.cnis.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
    });
  });
});
