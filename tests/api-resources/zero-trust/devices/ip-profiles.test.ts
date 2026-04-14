// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ipProfiles', () => {
  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.ipProfiles.create({
      account_id: 'account_id',
      match: 'identity.email == "test@cloudflare.com"',
      name: 'IPv4 Cloudflare Source IPs',
      precedence: 100,
      subnet_id: 'b70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('create: required and optional params', async () => {
    const response = await client.zeroTrust.devices.ipProfiles.create({
      account_id: 'account_id',
      match: 'identity.email == "test@cloudflare.com"',
      name: 'IPv4 Cloudflare Source IPs',
      precedence: 100,
      subnet_id: 'b70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      description: 'example comment',
      enabled: true,
    });
  });

  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('update: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.ipProfiles.update('profile_id', {
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

  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('update: required and optional params', async () => {
    const response = await client.zeroTrust.devices.ipProfiles.update('profile_id', {
      account_id: 'account_id',
      description: 'example comment',
      enabled: true,
      match: 'identity.email == "test@cloudflare.com"',
      name: 'IPv4 Cloudflare Source IPs',
      precedence: 100,
      subnet_id: 'b70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
    });
  });

  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.ipProfiles.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('list: required and optional params', async () => {
    const response = await client.zeroTrust.devices.ipProfiles.list({
      account_id: 'account_id',
      per_page: 1,
    });
  });

  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.ipProfiles.delete('profile_id', {
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

  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('delete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.ipProfiles.delete('profile_id', {
      account_id: 'account_id',
    });
  });

  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.ipProfiles.get('profile_id', {
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

  // 401 Unauthorized: Prism doesnt handle api tokens
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.ipProfiles.get('profile_id', {
      account_id: 'account_id',
    });
  });
});
