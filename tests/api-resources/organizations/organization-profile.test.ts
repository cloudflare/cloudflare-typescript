// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizationProfile', () => {
  test('update: only required params', async () => {
    const responsePromise = client.organizations.organizationProfile.update('organization_id', {
      business_address: 'business_address',
      business_email: 'business_email',
      business_name: 'business_name',
      business_phone: 'business_phone',
      external_metadata: 'external_metadata',
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
    const response = await client.organizations.organizationProfile.update('organization_id', {
      business_address: 'business_address',
      business_email: 'business_email',
      business_name: 'business_name',
      business_phone: 'business_phone',
      external_metadata: 'external_metadata',
    });
  });

  test('get', async () => {
    const responsePromise = client.organizations.organizationProfile.get('organization_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
