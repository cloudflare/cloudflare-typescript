// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource targets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.infrastructure.targets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      hostname: 'infra-access-target',
      ip: {},
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
    const response = await client.zeroTrust.access.infrastructure.targets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      hostname: 'infra-access-target',
      ip: {
        ipv4: { ip_addr: '187.26.29.249', virtual_network_id: 'c77b744e-acc8-428f-9257-6878c046ed55' },
        ipv6: {
          ip_addr: '64c0:64e8:f0b4:8dbf:7104:72b0:ec8f:f5e0',
          virtual_network_id: 'c77b744e-acc8-428f-9257-6878c046ed55',
        },
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.infrastructure.targets.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', hostname: 'infra-access-target', ip: {} },
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
    const response = await client.zeroTrust.access.infrastructure.targets.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        hostname: 'infra-access-target',
        ip: {
          ipv4: { ip_addr: '187.26.29.249', virtual_network_id: 'c77b744e-acc8-428f-9257-6878c046ed55' },
          ipv6: {
            ip_addr: '64c0:64e8:f0b4:8dbf:7104:72b0:ec8f:f5e0',
            virtual_network_id: 'c77b744e-acc8-428f-9257-6878c046ed55',
          },
        },
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.infrastructure.targets.list({
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
    const response = await client.zeroTrust.access.infrastructure.targets.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      created_after: '2019-12-27T18:11:19.117Z',
      created_before: '2019-12-27T18:11:19.117Z',
      direction: 'asc',
      hostname: 'hostname',
      hostname_contains: 'hostname_contains',
      ip_like: 'ip_like',
      ip_v4: 'ip_v4',
      ip_v6: 'ip_v6',
      ips: ['string'],
      ipv4_end: 'ipv4_end',
      ipv4_start: 'ipv4_start',
      ipv6_end: 'ipv6_end',
      ipv6_start: 'ipv6_start',
      modified_after: '2019-12-27T18:11:19.117Z',
      modified_before: '2019-12-27T18:11:19.117Z',
      order: 'hostname',
      page: 1,
      per_page: 1,
      target_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      virtual_network_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.access.infrastructure.targets.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.zeroTrust.access.infrastructure.targets.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.zeroTrust.access.infrastructure.targets.bulkDelete({
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

  test('bulkDelete: required and optional params', async () => {
    const response = await client.zeroTrust.access.infrastructure.targets.bulkDelete({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('bulkDeleteV2: only required params', async () => {
    const responsePromise = client.zeroTrust.access.infrastructure.targets.bulkDeleteV2({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      target_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDeleteV2: required and optional params', async () => {
    const response = await client.zeroTrust.access.infrastructure.targets.bulkDeleteV2({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      target_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  test('bulkUpdate: only required params', async () => {
    const responsePromise = client.zeroTrust.access.infrastructure.targets.bulkUpdate({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{ hostname: 'infra-access-target', ip: {} }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkUpdate: required and optional params', async () => {
    const response = await client.zeroTrust.access.infrastructure.targets.bulkUpdate({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          hostname: 'infra-access-target',
          ip: {
            ipv4: { ip_addr: '187.26.29.249', virtual_network_id: 'c77b744e-acc8-428f-9257-6878c046ed55' },
            ipv6: {
              ip_addr: '64c0:64e8:f0b4:8dbf:7104:72b0:ec8f:f5e0',
              virtual_network_id: 'c77b744e-acc8-428f-9257-6878c046ed55',
            },
          },
        },
      ],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.access.infrastructure.targets.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.zeroTrust.access.infrastructure.targets.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
