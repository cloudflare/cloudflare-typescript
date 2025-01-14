// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource validate', () => {
  // TODO: investigate broken test
  test.skip('destination: only required params', async () => {
    const responsePromise = client.logpush.validate.destination({
      destination_conf: 's3://mybucket/logs?region=us-west-2',
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

  // TODO: investigate broken test
  test.skip('destination: required and optional params', async () => {
    const response = await client.logpush.validate.destination({
      destination_conf: 's3://mybucket/logs?region=us-west-2',
      account_id: 'account_id',
    });
  });

  // TODO: investigate broken test
  test.skip('origin: only required params', async () => {
    const responsePromise = client.logpush.validate.origin({
      logpull_options: 'fields=RayID,ClientIP,EdgeStartTimestamp&timestamps=rfc3339',
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

  // TODO: investigate broken test
  test.skip('origin: required and optional params', async () => {
    const response = await client.logpush.validate.origin({
      logpull_options: 'fields=RayID,ClientIP,EdgeStartTimestamp&timestamps=rfc3339',
      account_id: 'account_id',
    });
  });
});
