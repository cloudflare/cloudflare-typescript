// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource proxyEndpoints', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.proxyEndpoints.create({ account_id: '699d98642c564d2e855e9661899b7252', ips: ['192.0.2.1/32', '192.0.2.1/32', '192.0.2.1/32'], name: 'Devops team' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.proxyEndpoints.create({ account_id: '699d98642c564d2e855e9661899b7252', ips: ['192.0.2.1/32', '192.0.2.1/32', '192.0.2.1/32'], name: 'Devops team' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.proxyEndpoints.list({ account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.proxyEndpoints.list({ account_id: '699d98642c564d2e855e9661899b7252' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.proxyEndpoints.delete('ed35569b41ce4d1facfe683550f54086', { account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.proxyEndpoints.delete('ed35569b41ce4d1facfe683550f54086', { account_id: '699d98642c564d2e855e9661899b7252' });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.proxyEndpoints.edit('ed35569b41ce4d1facfe683550f54086', { account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.proxyEndpoints.edit('ed35569b41ce4d1facfe683550f54086', { account_id: '699d98642c564d2e855e9661899b7252', ips: ['192.0.2.1/32', '192.0.2.1/32', '192.0.2.1/32'], name: 'Devops team' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.proxyEndpoints.get('ed35569b41ce4d1facfe683550f54086', { account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.proxyEndpoints.get('ed35569b41ce4d1facfe683550f54086', { account_id: '699d98642c564d2e855e9661899b7252' });
  });
});
