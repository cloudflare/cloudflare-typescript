// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource integrations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.riskScoring.integrations.create({ account_id: 'account_id', integration_type: 'Okta', tenant_url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.riskScoring.integrations.create({ account_id: 'account_id', integration_type: 'Okta', tenant_url: 'https://example.com', reference_id: 'reference_id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.riskScoring.integrations.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id', active: true, tenant_url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.riskScoring.integrations.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id', active: true, tenant_url: 'https://example.com', reference_id: 'reference_id' });
  });

  // bug in prism where it confuses this method with /zt_risk_scoring/{user_id}
  test.skip('list: only required params', async () => {
    const responsePromise = client.zeroTrust.riskScoring.integrations.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // bug in prism where it confuses this method with /zt_risk_scoring/{user_id}
  test.skip('list: required and optional params', async () => {
    const response = await client.zeroTrust.riskScoring.integrations.list({ account_id: 'account_id' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.riskScoring.integrations.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.riskScoring.integrations.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.riskScoring.integrations.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.riskScoring.integrations.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });
  });
});
