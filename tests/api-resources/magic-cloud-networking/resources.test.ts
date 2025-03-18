// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resources', () => {
  test('list: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.resources.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.magicCloudNetworking.resources.list({
      account_id: 'account_id',
      cloudflare: true,
      desc: true,
      managed: true,
      order_by: 'order_by',
      page: 1,
      per_page: 1,
      provider_id: 'provider_id',
      region: 'region',
      resource_group: 'resource_group',
      resource_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      resource_type: ['aws_customer_gateway'],
      search: ['string'],
      v2: true,
    });
  });

  test('export: required and optional params', async () => {
    const response = await client.magicCloudNetworking.resources.export({
      account_id: 'account_id',
      desc: true,
      order_by: 'order_by',
      provider_id: 'provider_id',
      region: 'region',
      resource_group: 'resource_group',
      resource_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      resource_type: ['aws_customer_gateway'],
      search: ['string'],
      v2: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.resources.get(
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

  test('get: required and optional params', async () => {
    const response = await client.magicCloudNetworking.resources.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
      v2: true,
    });
  });

  test('policyPreview: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.resources.policyPreview({
      account_id: 'account_id',
      policy: 'policy',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('policyPreview: required and optional params', async () => {
    const response = await client.magicCloudNetworking.resources.policyPreview({
      account_id: 'account_id',
      policy: 'policy',
    });
  });
});
