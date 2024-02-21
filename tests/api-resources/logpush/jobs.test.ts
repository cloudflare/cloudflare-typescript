// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey:
    'v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.logpush.jobs.create({
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await cloudflare.logpush.jobs.create({
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination_conf: 's3://mybucket/logs?region=us-west-2',
      dataset: 'http_requests',
      enabled: false,
      frequency: 'high',
      logpull_options: 'fields=RayID,ClientIP,EdgeStartTimestamp&timestamps=rfc3339',
      name: 'example.com',
      output_options: {
        'CVE-2021-4428': true,
        batch_prefix: 'string',
        batch_suffix: 'string',
        field_delimiter: 'string',
        field_names: ['ClientIP', 'EdgeStartTimestamp', 'RayID'],
        output_type: 'ndjson',
        record_delimiter: 'string',
        record_prefix: 'string',
        record_suffix: 'string',
        record_template: 'string',
        sample_rate: 0,
        timestamp_format: 'unixnano',
      },
      ownership_challenge: '00000000000000000000',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.logpush.jobs.update(1, {
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.logpush.jobs.update(1, {
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination_conf: 's3://mybucket/logs?region=us-west-2',
      enabled: false,
      frequency: 'high',
      logpull_options: 'fields=RayID,ClientIP,EdgeStartTimestamp&timestamps=rfc3339',
      output_options: {
        'CVE-2021-4428': true,
        batch_prefix: 'string',
        batch_suffix: 'string',
        field_delimiter: 'string',
        field_names: ['ClientIP', 'EdgeStartTimestamp', 'RayID'],
        output_type: 'ndjson',
        record_delimiter: 'string',
        record_prefix: 'string',
        record_suffix: 'string',
        record_template: 'string',
        sample_rate: 0,
        timestamp_format: 'unixnano',
      },
      ownership_challenge: '00000000000000000000',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.logpush.jobs.list({
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.logpush.jobs.list({
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.logpush.jobs.delete(1, {
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.logpush.jobs.delete(1, {
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.logpush.jobs.get(1, {
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.logpush.jobs.get(1, {
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
