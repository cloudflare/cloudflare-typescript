// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource policies', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      decision: 'allow',
      include: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      name: 'Allow devs',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.zeroTrust.access.policies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      decision: 'allow',
      include: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      name: 'Allow devs',
      exclude: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      require: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      decision: 'allow',
      include: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      name: 'Allow devs',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.zeroTrust.access.policies.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      decision: 'allow',
      include: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      name: 'Allow devs',
      exclude: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      require: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
    });
  });

  // TODO: investigate broken test
  test.skip('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.list({
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

  // TODO: investigate broken test
  test.skip('list: required and optional params', async () => {
    const response = await client.zeroTrust.access.policies.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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

  // TODO: investigate broken test
  test.skip('delete: required and optional params', async () => {
    const response = await client.zeroTrust.access.policies.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('get: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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

  // TODO: investigate broken test
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.access.policies.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
