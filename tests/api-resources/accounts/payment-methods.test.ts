// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Accounts } from 'cloudflare/resources/accounts/accounts';
import { BasePaymentMethods } from 'cloudflare/resources/accounts/payment-methods';

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
  resources: [BasePaymentMethods],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Accounts],
});

const runTests = (client: PartialCloudflare<{ accounts: { paymentMethods: BasePaymentMethods } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.accounts.paymentMethods.create({
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
    const response = await client.accounts.paymentMethods.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'address',
      address2: 'address2',
      bank_account_type: 'bank_account_type',
      bank_code: 'bank_code',
      bank_country: 'bank_country',
      bank_name: 'bank_name',
      bank_routing_number: 'bank_routing_number',
      cashapp_cash_tag: 'cashapp_cash_tag',
      city: 'city',
      country: 'country',
      default: true,
      device_data: 'device_data',
      first_name: 'first_name',
      last_name: 'last_name',
      nick_name: 'nick_name',
      payment_account_email: 'payment_account_email',
      payment_email: 'payment_email',
      payment_gateway: 'payment_gateway',
      payment_nonce: 'payment_nonce',
      state: 'state',
      type: 'CREDIT_CARD',
      zipcode: 'zipcode',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.accounts.paymentMethods.update('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('update: required and optional params', async () => {
    const response = await client.accounts.paymentMethods.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: 'address',
      address2: 'address2',
      bank_account_type: 'bank_account_type',
      bank_code: 'bank_code',
      bank_country: 'bank_country',
      bank_name: 'bank_name',
      bank_routing_number: 'bank_routing_number',
      cashapp_cash_tag: 'cashapp_cash_tag',
      city: 'city',
      country: 'country',
      default: true,
      device_data: 'device_data',
      first_name: 'first_name',
      last_name: 'last_name',
      nick_name: 'nick_name',
      payment_account_email: 'payment_account_email',
      payment_email: 'payment_email',
      payment_gateway: 'payment_gateway',
      payment_nonce: 'payment_nonce',
      state: 'state',
      type: 'CREDIT_CARD',
      zipcode: 'zipcode',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.accounts.paymentMethods.list({
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
    const response = await client.accounts.paymentMethods.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.accounts.paymentMethods.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('delete: required and optional params', async () => {
    const response = await client.accounts.paymentMethods.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.accounts.paymentMethods.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.accounts.paymentMethods.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('setAsDefault: only required params', async () => {
    const responsePromise = client.accounts.paymentMethods.setAsDefault('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('setAsDefault: required and optional params', async () => {
    const response = await client.accounts.paymentMethods.setAsDefault('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource paymentMethods', () => runTests(client));
describe('resource paymentMethods (tree shakable, base)', () => runTests(partialClient));
describe('resource paymentMethods (tree shakable, subresource)', () => runTests(parentPartialClient));
