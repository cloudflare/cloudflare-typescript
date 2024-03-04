// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource consumers', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.queues.consumers.create('example-queue', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {
        dead_letter_queue: 'example-dlq',
        environment: 'production',
        script_name: 'example-consumer',
        settings: { batch_size: 10, max_retries: 3, max_wait_time_ms: 5000 },
      },
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
    const response = await cloudflare.queues.consumers.create('example-queue', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {
        dead_letter_queue: 'example-dlq',
        environment: 'production',
        script_name: 'example-consumer',
        settings: { batch_size: 10, max_retries: 3, max_wait_time_ms: 5000 },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.queues.consumers.update('example-queue', 'example-consumer', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {
        dead_letter_queue: 'updated-example-dlq',
        environment: 'production',
        script_name: 'example-consumer',
        settings: { batch_size: 100 },
      },
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
    const response = await cloudflare.queues.consumers.update('example-queue', 'example-consumer', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {
        dead_letter_queue: 'updated-example-dlq',
        environment: 'production',
        script_name: 'example-consumer',
        settings: { batch_size: 100 },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.queues.consumers.list('example-queue', {
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.queues.consumers.list('example-queue', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.queues.consumers.delete('example-queue', 'example-consumer', {
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.queues.consumers.delete('example-queue', 'example-consumer', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
