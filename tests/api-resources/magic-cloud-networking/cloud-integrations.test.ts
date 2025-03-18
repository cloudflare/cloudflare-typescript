// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cloudIntegrations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.cloudIntegrations.create({
      account_id: 'account_id',
      cloud_type: 'AWS',
      friendly_name: 'friendly_name',
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
    const response = await client.magicCloudNetworking.cloudIntegrations.create({
      account_id: 'account_id',
      cloud_type: 'AWS',
      friendly_name: 'friendly_name',
      description: 'description',
      forwarded: 'forwarded',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.cloudIntegrations.update(
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
    const response = await client.magicCloudNetworking.cloudIntegrations.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        aws_arn: 'aws_arn',
        azure_subscription_id: 'azure_subscription_id',
        azure_tenant_id: 'azure_tenant_id',
        description: 'description',
        friendly_name: 'friendly_name',
        gcp_project_id: 'gcp_project_id',
        gcp_service_account_email: 'gcp_service_account_email',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.cloudIntegrations.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.magicCloudNetworking.cloudIntegrations.list({
      account_id: 'account_id',
      cloudflare: true,
      desc: true,
      order_by: 'order_by',
      status: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.cloudIntegrations.delete(
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
    const response = await client.magicCloudNetworking.cloudIntegrations.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });

  test('discover: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.cloudIntegrations.discover(
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

  test('discover: required and optional params', async () => {
    const response = await client.magicCloudNetworking.cloudIntegrations.discover(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id', v2: true },
    );
  });

  test('discoverAll: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.cloudIntegrations.discoverAll({
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

  test('discoverAll: required and optional params', async () => {
    const response = await client.magicCloudNetworking.cloudIntegrations.discoverAll({
      account_id: 'account_id',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.cloudIntegrations.edit(
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

  test('edit: required and optional params', async () => {
    const response = await client.magicCloudNetworking.cloudIntegrations.edit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        aws_arn: 'aws_arn',
        azure_subscription_id: 'azure_subscription_id',
        azure_tenant_id: 'azure_tenant_id',
        description: 'description',
        friendly_name: 'friendly_name',
        gcp_project_id: 'gcp_project_id',
        gcp_service_account_email: 'gcp_service_account_email',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.cloudIntegrations.get(
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
    const response = await client.magicCloudNetworking.cloudIntegrations.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id', status: true },
    );
  });

  test('initialSetup: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.cloudIntegrations.initialSetup(
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

  test('initialSetup: required and optional params', async () => {
    const response = await client.magicCloudNetworking.cloudIntegrations.initialSetup(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });
});
