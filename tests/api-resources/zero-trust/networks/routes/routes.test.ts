// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.routes.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      network: '172.16.0.0/16',
      tunnel_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
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
    const response = await client.zeroTrust.networks.routes.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      network: '172.16.0.0/16',
      tunnel_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      comment: 'Example comment for this route.',
      virtual_network_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.routes.list({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.networks.routes.list({
      account_id: '699d98642c564d2e855e9661899b7252',
      comment: 'Example comment for this route.',
      existed_at: '2019-10-12T07:20:50.52Z',
      is_deleted: true,
      network_subset: '172.16.0.0/16',
      network_superset: '172.16.0.0/16',
      page: 1,
      per_page: 1,
      route_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      tun_types: 'cfd_tunnel,warp_connector',
      tunnel_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      virtual_network_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.routes.delete('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.networks.routes.delete('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.routes.edit('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.networks.routes.edit('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
      comment: 'Example comment for this route.',
      network: '172.16.0.0/16',
      tunnel_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      virtual_network_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.routes.get('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.networks.routes.get('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
