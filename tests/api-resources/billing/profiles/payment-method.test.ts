// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePaymentMethod } from 'cloudflare/resources/billing/profiles/payment-method';
import { Profiles } from 'cloudflare/resources/billing/profiles/profiles';

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
  resources: [BasePaymentMethod],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Profiles],
});

const runTests = (
  client: PartialCloudflare<{ billing: { profiles: { paymentMethod: BasePaymentMethod } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.billing.profiles.paymentMethod.create({
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

  test('create: required and optional params', async () => {
    const response = await client.billing.profiles.paymentMethod.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource paymentMethod', () => runTests(client));
describe('resource paymentMethod (tree shakable, base)', () => runTests(partialClient));
describe('resource paymentMethod (tree shakable, subresource)', () => runTests(parentPartialClient));
