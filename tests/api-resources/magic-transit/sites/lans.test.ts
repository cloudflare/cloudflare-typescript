// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lans', () => {
  test('create: only required params', async () => {
    const responsePromise = client.magicTransit.sites.lans.create('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      physport: 1,
      vlan_tag: 0,
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
    const response = await client.magicTransit.sites.lans.create('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      physport: 1,
      vlan_tag: 0,
      ha_link: true,
      name: 'name',
      nat: { static_prefix: '192.0.2.0/24' },
      routed_subnets: [
        { nat: { static_prefix: '192.0.2.0/24' }, next_hop: '192.0.2.1', prefix: '192.0.2.0/24' },
        { nat: { static_prefix: '192.0.2.0/24' }, next_hop: '192.0.2.1', prefix: '192.0.2.0/24' },
        { nat: { static_prefix: '192.0.2.0/24' }, next_hop: '192.0.2.1', prefix: '192.0.2.0/24' },
      ],
      static_addressing: {
        address: '192.0.2.0/24',
        dhcp_relay: { server_addresses: ['192.0.2.1', '192.0.2.1', '192.0.2.1'] },
        dhcp_server: {
          dhcp_pool_end: '192.0.2.1',
          dhcp_pool_start: '192.0.2.1',
          dns_server: '192.0.2.1',
          reservations: { '00:11:22:33:44:55': '192.0.2.100', 'AA:BB:CC:DD:EE:FF': '192.168.1.101' },
        },
        secondary_address: '192.0.2.0/24',
        virtual_address: '192.0.2.0/24',
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicTransit.sites.lans.update(
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
    const response = await client.magicTransit.sites.lans.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        name: 'name',
        nat: { static_prefix: '192.0.2.0/24' },
        physport: 1,
        routed_subnets: [
          { nat: { static_prefix: '192.0.2.0/24' }, next_hop: '192.0.2.1', prefix: '192.0.2.0/24' },
          { nat: { static_prefix: '192.0.2.0/24' }, next_hop: '192.0.2.1', prefix: '192.0.2.0/24' },
          { nat: { static_prefix: '192.0.2.0/24' }, next_hop: '192.0.2.1', prefix: '192.0.2.0/24' },
        ],
        static_addressing: {
          address: '192.0.2.0/24',
          dhcp_relay: { server_addresses: ['192.0.2.1', '192.0.2.1', '192.0.2.1'] },
          dhcp_server: {
            dhcp_pool_end: '192.0.2.1',
            dhcp_pool_start: '192.0.2.1',
            dns_server: '192.0.2.1',
            reservations: { '00:11:22:33:44:55': '192.0.2.100', 'AA:BB:CC:DD:EE:FF': '192.168.1.101' },
          },
          secondary_address: '192.0.2.0/24',
          virtual_address: '192.0.2.0/24',
        },
        vlan_tag: 0,
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicTransit.sites.lans.list('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.magicTransit.sites.lans.list('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicTransit.sites.lans.delete(
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
    const response = await client.magicTransit.sites.lans.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.magicTransit.sites.lans.edit(
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
    const response = await client.magicTransit.sites.lans.edit(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        name: 'name',
        nat: { static_prefix: '192.0.2.0/24' },
        physport: 1,
        routed_subnets: [
          { nat: { static_prefix: '192.0.2.0/24' }, next_hop: '192.0.2.1', prefix: '192.0.2.0/24' },
          { nat: { static_prefix: '192.0.2.0/24' }, next_hop: '192.0.2.1', prefix: '192.0.2.0/24' },
          { nat: { static_prefix: '192.0.2.0/24' }, next_hop: '192.0.2.1', prefix: '192.0.2.0/24' },
        ],
        static_addressing: {
          address: '192.0.2.0/24',
          dhcp_relay: { server_addresses: ['192.0.2.1', '192.0.2.1', '192.0.2.1'] },
          dhcp_server: {
            dhcp_pool_end: '192.0.2.1',
            dhcp_pool_start: '192.0.2.1',
            dns_server: '192.0.2.1',
            reservations: { '00:11:22:33:44:55': '192.0.2.100', 'AA:BB:CC:DD:EE:FF': '192.168.1.101' },
          },
          secondary_address: '192.0.2.0/24',
          virtual_address: '192.0.2.0/24',
        },
        vlan_tag: 0,
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicTransit.sites.lans.get(
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
    const response = await client.magicTransit.sites.lans.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
