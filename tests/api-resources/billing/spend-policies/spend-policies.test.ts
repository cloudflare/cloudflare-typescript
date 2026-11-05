// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Billing } from 'cloudflare/resources/billing/billing';
import { BaseSpendPolicies } from 'cloudflare/resources/billing/spend-policies/spend-policies';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSpendPolicies],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Billing],
});

const runTests = (client: PartialCloudflare<{ billing: { spendPolicies: BaseSpendPolicies } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.billing.spendPolicies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'notification',
      enabled: true,
      name: 'Durable Objects alert',
      product_id: 'durable_objects',
      threshold_cents: 100,
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
    const response = await client.billing.spendPolicies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'notification',
      enabled: true,
      name: 'Durable Objects alert',
      product_id: 'durable_objects',
      threshold_cents: 100,
      notification_email: 'billing@example.com',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.billing.spendPolicies.update('6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'notification',
      enabled: true,
      name: 'Workers cap',
      product_id: 'workers',
      threshold_cents: 100,
      'If-Match': '"3"',
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
    const response = await client.billing.spendPolicies.update('6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'notification',
      enabled: true,
      name: 'Workers cap',
      product_id: 'workers',
      threshold_cents: 100,
      'If-Match': '"3"',
      notification_email: 'billing@example.com',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.billing.spendPolicies.list({
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
    const response = await client.billing.spendPolicies.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.billing.spendPolicies.delete('6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      'If-Match': '"3"',
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
    const response = await client.billing.spendPolicies.delete('6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      'If-Match': '"3"',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.billing.spendPolicies.get('6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d', {
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
    const response = await client.billing.spendPolicies.get('6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource spendPolicies', () => runTests(client));
describe('resource spendPolicies (tree shakable, base)', () => runTests(partialClient));
describe('resource spendPolicies (tree shakable, subresource)', () => runTests(parentPartialClient));
