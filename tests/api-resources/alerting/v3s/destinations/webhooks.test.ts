// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.alerting.v3s.destinations.webhooks.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'b115d5ec-15c6-41ee-8b76-92c449b5227b',
      { name: 'Slack Webhook', url: 'https://hooks.slack.com/services/Ds3fdBFbV/456464Gdd' },
    );
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
    const response = await cloudflare.alerting.v3s.destinations.webhooks.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'b115d5ec-15c6-41ee-8b76-92c449b5227b',
      {
        name: 'Slack Webhook',
        url: 'https://hooks.slack.com/services/Ds3fdBFbV/456464Gdd',
        secret: 'string',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.alerting.v3s.destinations.webhooks.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'b115d5ec-15c6-41ee-8b76-92c449b5227b',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.alerting.v3s.destinations.webhooks.delete(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'b115d5ec-15c6-41ee-8b76-92c449b5227b',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.alerting.v3s.destinations.webhooks.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'b115d5ec-15c6-41ee-8b76-92c449b5227b',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.alerting.v3s.destinations.webhooks.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'b115d5ec-15c6-41ee-8b76-92c449b5227b',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('notificationWebhooksCreateAWebhook: only required params', async () => {
    const responsePromise = cloudflare.alerting.v3s.destinations.webhooks.notificationWebhooksCreateAWebhook(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { name: 'Slack Webhook', url: 'https://hooks.slack.com/services/Ds3fdBFbV/456464Gdd' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('notificationWebhooksCreateAWebhook: required and optional params', async () => {
    const response = await cloudflare.alerting.v3s.destinations.webhooks.notificationWebhooksCreateAWebhook(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        name: 'Slack Webhook',
        url: 'https://hooks.slack.com/services/Ds3fdBFbV/456464Gdd',
        secret: 'string',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('notificationWebhooksListWebhooks', async () => {
    const responsePromise = cloudflare.alerting.v3s.destinations.webhooks.notificationWebhooksListWebhooks(
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('notificationWebhooksListWebhooks: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.alerting.v3s.destinations.webhooks.notificationWebhooksListWebhooks(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
