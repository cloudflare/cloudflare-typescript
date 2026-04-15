// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onRamps', () => {
  test('create: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.create({
      account_id: 'account_id',
      cloud_type: 'AWS',
      dynamic_routing: true,
      install_routes_in_cloud: true,
      install_routes_in_magic_wan: true,
      name: 'name',
      type: 'OnrampTypeSingle',
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
    const response = await client.magicCloudNetworking.onRamps.create({
      account_id: 'account_id',
      cloud_type: 'AWS',
      dynamic_routing: true,
      install_routes_in_cloud: true,
      install_routes_in_magic_wan: true,
      name: 'name',
      type: 'OnrampTypeSingle',
      adopted_hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      attached_hubs: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      attached_vpcs: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      cloud_asn: 0,
      description: 'description',
      hub_provider_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      manage_hub_to_hub_attachments: true,
      manage_vpc_to_hub_attachments: true,
      region: 'region',
      vpc: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      forwarded: 'forwarded',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
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
    const response = await client.magicCloudNetworking.onRamps.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        attached_hubs: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        attached_vpcs: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        description: 'description',
        install_routes_in_cloud: true,
        install_routes_in_magic_wan: true,
        manage_hub_to_hub_attachments: true,
        manage_vpc_to_hub_attachments: true,
        name: 'name',
        vpc: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.magicCloudNetworking.onRamps.list({
      account_id: 'account_id',
      desc: true,
      order_by: 'order_by',
      status: true,
      vpcs: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
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
    const response = await client.magicCloudNetworking.onRamps.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        destroy: true,
        force: true,
      },
    );
  });

  test('apply: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.apply(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('apply: required and optional params', async () => {
    const response = await client.magicCloudNetworking.onRamps.apply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.edit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('edit: required and optional params', async () => {
    const response = await client.magicCloudNetworking.onRamps.edit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
      attached_hubs: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      attached_vpcs: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      description: 'description',
      install_routes_in_cloud: true,
      install_routes_in_magic_wan: true,
      manage_hub_to_hub_attachments: true,
      manage_vpc_to_hub_attachments: true,
      name: 'name',
      vpc: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('export: required and optional params', async () => {
    const response = await client.magicCloudNetworking.onRamps.export(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.magicCloudNetworking.onRamps.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
      planned_resources: true,
      post_apply_resources: true,
      status: true,
      vpcs: true,
    });
  });

  test('plan: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.onRamps.plan('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('plan: required and optional params', async () => {
    const response = await client.magicCloudNetworking.onRamps.plan('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
    });
  });
});
