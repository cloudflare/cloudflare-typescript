// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connectivityPrecheck', () => {
  test('source: only required params', async () => {
    const responsePromise = client.r2.superSlurper.connectivityPrecheck.source({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('source: required and optional params', async () => {
    const response = await client.r2.superSlurper.connectivityPrecheck.source({
      account_id: 'account_id',
      bucket: 'bucket',
      endpoint: 'endpoint',
      secret: { accessKeyId: 'accessKeyId', secretAccessKey: 'secretAccessKey' },
      vendor: 's3',
    });
  });

  test('target: only required params', async () => {
    const responsePromise = client.r2.superSlurper.connectivityPrecheck.target({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('target: required and optional params', async () => {
    const response = await client.r2.superSlurper.connectivityPrecheck.target({
      account_id: 'account_id',
      bucket: 'bucket',
      jurisdiction: 'default',
      secret: { accessKeyId: 'accessKeyId', secretAccessKey: 'secretAccessKey' },
      vendor: 'r2',
    });
  });
});
