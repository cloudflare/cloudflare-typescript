// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ownership', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.logpush.ownership.create({
      destination_conf: 's3://mybucket/logs?region=us-west-2',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.logpush.ownership.create({
      destination_conf: 's3://mybucket/logs?region=us-west-2',
      account_id: 'string',
      zone_id: 'string',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('validate: only required params', async () => {
    const responsePromise = cloudflare.logpush.ownership.validate({
      destination_conf: 's3://mybucket/logs?region=us-west-2',
      ownership_challenge: '00000000000000000000',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('validate: required and optional params', async () => {
    const response = await cloudflare.logpush.ownership.validate({
      destination_conf: 's3://mybucket/logs?region=us-west-2',
      ownership_challenge: '00000000000000000000',
      account_id: 'string',
      zone_id: 'string',
    });
  });
});
