// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource posture', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.posture.create({ account_id: '699d98642c564d2e855e9661899b7252', name: 'Admin Serial Numbers', type: 'file' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.devices.posture.create({ account_id: '699d98642c564d2e855e9661899b7252', name: 'Admin Serial Numbers', type: 'file', description: 'The rule for admin serial numbers', expiration: '1h', input: { operating_system: 'windows', path: '/bin/cat', exists: true, sha256: 'https://api.us-2.crowdstrike.com', thumbprint: '0aabab210bdb998e9cf45da2c9ce352977ab531c681b74cf1e487be1bbe9fe6e' }, match: [{ platform: 'windows' }, { platform: 'windows' }, { platform: 'windows' }], schedule: '1h' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.posture.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252', name: 'Admin Serial Numbers', type: 'file' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.devices.posture.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252', name: 'Admin Serial Numbers', type: 'file', description: 'The rule for admin serial numbers', expiration: '1h', input: { operating_system: 'windows', path: '/bin/cat', exists: true, sha256: 'https://api.us-2.crowdstrike.com', thumbprint: '0aabab210bdb998e9cf45da2c9ce352977ab531c681b74cf1e487be1bbe9fe6e' }, match: [{ platform: 'windows' }, { platform: 'windows' }, { platform: 'windows' }], schedule: '1h' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.posture.list({ account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.devices.posture.list({ account_id: '699d98642c564d2e855e9661899b7252' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.posture.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.posture.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.posture.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.posture.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '699d98642c564d2e855e9661899b7252' });
  });
});
