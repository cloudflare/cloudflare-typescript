// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Billing } from 'cloudflare/resources/billing/billing';
import { BaseProfiles } from 'cloudflare/resources/billing/profiles/profiles';

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
  resources: [BaseProfiles],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Billing],
});

const runTests = (client: PartialCloudflare<{ billing: { profiles: BaseProfiles } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.billing.profiles.create({
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
    const response = await client.billing.profiles.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: '123 Main Street',
      address2: 'Apt 1',
      billing_email: 'billing@example.com',
      buying_rate_plan: 'buying_rate_plan',
      captcha_challenge_jwt: 'captcha_challenge_jwt',
      cf_turnstile_response: 'cf_turnstile_response',
      city: 'Anytown',
      company: 'Example Inc',
      country: 'US',
      first_name: 'John',
      h_captcha_response: 'h_captcha_response',
      last_name: 'Doe',
      preferred_locale: 'en-US',
      secondary_billing_email: 'secondary@example.com',
      state: 'CA',
      tax_id_type: 'tax_id_type',
      telephone: '+1-555-555-5555',
      vat: 'vat',
      zipcode: '94103',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.billing.profiles.update({
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
    const response = await client.billing.profiles.update({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address: '123 Main Street',
      address2: 'Apt 1',
      billing_email: 'billing@example.com',
      buying_rate_plan: 'buying_rate_plan',
      captcha_challenge_jwt: 'captcha_challenge_jwt',
      cf_turnstile_response: 'cf_turnstile_response',
      city: 'Anytown',
      company: 'Example Inc',
      country: 'US',
      first_name: 'John',
      h_captcha_response: 'h_captcha_response',
      last_name: 'Doe',
      preferred_locale: 'en-US',
      secondary_billing_email: 'secondary@example.com',
      state: 'CA',
      tax_id_type: 'tax_id_type',
      telephone: '+1-555-555-5555',
      vat: 'vat',
      zipcode: '94103',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.billing.profiles.delete({
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
    const response = await client.billing.profiles.delete({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.billing.profiles.get({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.billing.profiles.get({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('updateBillingEmail: only required params', async () => {
    const responsePromise = client.billing.profiles.updateBillingEmail({
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

  test('updateBillingEmail: required and optional params', async () => {
    const response = await client.billing.profiles.updateBillingEmail({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      billing_email: 'billing@example.com',
      preferred_locale: 'en-US',
      secondary_billing_email: 'secondary@example.com',
    });
  });
};
describe('resource profiles', () => runTests(client));
describe('resource profiles (tree shakable, base)', () => runTests(partialClient));
describe('resource profiles (tree shakable, subresource)', () => runTests(parentPartialClient));
