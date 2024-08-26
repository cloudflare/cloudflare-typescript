// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource acls', () => {
  test('create: only required params', async () => {
    const responsePromise = client.magicTransit.sites.acls.create('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      lan_1: { lan_id: 'lan_id' },
      lan_2: { lan_id: 'lan_id' },
      name: 'PIN Pad - Cash Register',
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
    const response = await client.magicTransit.sites.acls.create('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      lan_1: {
        lan_id: 'lan_id',
        lan_name: 'lan_name',
        ports: [1, 1, 1],
        subnets: ['192.0.2.1', '192.0.2.1', '192.0.2.1'],
      },
      lan_2: {
        lan_id: 'lan_id',
        lan_name: 'lan_name',
        ports: [1, 1, 1],
        subnets: ['192.0.2.1', '192.0.2.1', '192.0.2.1'],
      },
      name: 'PIN Pad - Cash Register',
      description: 'Allows local traffic between PIN pads and cash register.',
      forward_locally: true,
      protocols: ['tcp', 'udp', 'icmp'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicTransit.sites.acls.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.magicTransit.sites.acls.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        description: 'Allows local traffic between PIN pads and cash register.',
        forward_locally: true,
        lan_1: {
          lan_id: 'lan_id',
          lan_name: 'lan_name',
          ports: [1, 1, 1],
          subnets: ['192.0.2.1', '192.0.2.1', '192.0.2.1'],
        },
        lan_2: {
          lan_id: 'lan_id',
          lan_name: 'lan_name',
          ports: [1, 1, 1],
          subnets: ['192.0.2.1', '192.0.2.1', '192.0.2.1'],
        },
        name: 'PIN Pad - Cash Register',
        protocols: ['tcp', 'udp', 'icmp'],
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicTransit.sites.acls.list('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.magicTransit.sites.acls.list('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicTransit.sites.acls.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.magicTransit.sites.acls.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.magicTransit.sites.acls.edit(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.magicTransit.sites.acls.edit(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        description: 'Allows local traffic between PIN pads and cash register.',
        forward_locally: true,
        lan_1: {
          lan_id: 'lan_id',
          lan_name: 'lan_name',
          ports: [1, 1, 1],
          subnets: ['192.0.2.1', '192.0.2.1', '192.0.2.1'],
        },
        lan_2: {
          lan_id: 'lan_id',
          lan_name: 'lan_name',
          ports: [1, 1, 1],
          subnets: ['192.0.2.1', '192.0.2.1', '192.0.2.1'],
        },
        name: 'PIN Pad - Cash Register',
        protocols: ['tcp', 'udp', 'icmp'],
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicTransit.sites.acls.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.magicTransit.sites.acls.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
