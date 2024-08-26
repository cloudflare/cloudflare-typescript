// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource networks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.networks.create({ account_id: '699d98642c564d2e855e9661899b7252', config: { tls_sockaddr: 'foo.bar:1234' }, name: 'managed-network-1', type: 'tls' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.devices.networks.create({ account_id: '699d98642c564d2e855e9661899b7252', config: { tls_sockaddr: 'foo.bar:1234', sha256: 'b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c' }, name: 'managed-network-1', type: 'tls' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.networks.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.devices.networks.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252', config: { tls_sockaddr: 'foo.bar:1234', sha256: 'b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c' }, name: 'managed-network-1', type: 'tls' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.networks.list({ account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.devices.networks.list({ account_id: '699d98642c564d2e855e9661899b7252' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.networks.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.networks.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.networks.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.networks.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252' });
  });
});
