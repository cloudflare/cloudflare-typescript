// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.r2.superSlurper.jobs.create({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.r2.superSlurper.jobs.create({
      account_id: 'account_id',
      overwrite: true,
      source: {
        bucket: 'bucket',
        endpoint: 'endpoint',
        secret: { accessKeyId: 'accessKeyId', secretAccessKey: 'secretAccessKey' },
        vendor: 's3',
      },
      target: {
        bucket: 'bucket',
        jurisdiction: 'default',
        secret: { accessKeyId: 'accessKeyId', secretAccessKey: 'secretAccessKey' },
        vendor: 'r2',
      },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.r2.superSlurper.jobs.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.r2.superSlurper.jobs.list({
      account_id: 'account_id',
      limit: 50,
      offset: 0,
    });
  });

  test('abort: only required params', async () => {
    const responsePromise = client.r2.superSlurper.jobs.abort('job_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('abort: required and optional params', async () => {
    const response = await client.r2.superSlurper.jobs.abort('job_id', { account_id: 'account_id' });
  });

  test('abortAll: only required params', async () => {
    const responsePromise = client.r2.superSlurper.jobs.abortAll({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('abortAll: required and optional params', async () => {
    const response = await client.r2.superSlurper.jobs.abortAll({ account_id: 'account_id' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.r2.superSlurper.jobs.get('job_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.r2.superSlurper.jobs.get('job_id', { account_id: 'account_id' });
  });

  test('pause: only required params', async () => {
    const responsePromise = client.r2.superSlurper.jobs.pause('job_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pause: required and optional params', async () => {
    const response = await client.r2.superSlurper.jobs.pause('job_id', { account_id: 'account_id' });
  });

  test('progress: only required params', async () => {
    const responsePromise = client.r2.superSlurper.jobs.progress('job_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('progress: required and optional params', async () => {
    const response = await client.r2.superSlurper.jobs.progress('job_id', { account_id: 'account_id' });
  });

  test('resume: only required params', async () => {
    const responsePromise = client.r2.superSlurper.jobs.resume('job_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resume: required and optional params', async () => {
    const response = await client.r2.superSlurper.jobs.resume('job_id', { account_id: 'account_id' });
  });
});
