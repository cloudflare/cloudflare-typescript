// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource validate', () => {
  // skipped: tests are disabled for the time being
  test.skip('destination: only required params', async () => {
    const responsePromise = cloudflare.logpush.validate.destination({
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
  test.skip('destination: required and optional params', async () => {
    const response = await cloudflare.logpush.validate.destination({
      destination_conf: 's3://mybucket/logs?region=us-west-2',
      account_id: 'string',
      zone_id: 'string',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('origin: only required params', async () => {
    const responsePromise = cloudflare.logpush.validate.origin({
      logpull_options: 'fields=RayID,ClientIP,EdgeStartTimestamp&timestamps=rfc3339',
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
  test.skip('origin: required and optional params', async () => {
    const response = await cloudflare.logpush.validate.origin({
      logpull_options: 'fields=RayID,ClientIP,EdgeStartTimestamp&timestamps=rfc3339',
      account_id: 'string',
      zone_id: 'string',
    });
  });
});
