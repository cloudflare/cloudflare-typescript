// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // TODO: HTTP 401 from prism, support api tokens
  test.skip('createWebhook: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.createWebhook('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      events: [
        'meeting.started',
        'meeting.ended',
        'meeting.participantJoined',
        'meeting.participantLeft',
        'meeting.chatSynced',
        'recording.statusUpdate',
        'livestreaming.statusUpdate',
        'meeting.transcript',
        'meeting.summary',
      ],
      name: 'All events webhook',
      url: 'https://webhook.site/b23a5bbd-c7b0-4ced-a9e2-78ae7889897e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('createWebhook: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.createWebhook('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      events: [
        'meeting.started',
        'meeting.ended',
        'meeting.participantJoined',
        'meeting.participantLeft',
        'meeting.chatSynced',
        'recording.statusUpdate',
        'livestreaming.statusUpdate',
        'meeting.transcript',
        'meeting.summary',
      ],
      name: 'All events webhook',
      url: 'https://webhook.site/b23a5bbd-c7b0-4ced-a9e2-78ae7889897e',
      enabled: true,
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('deleteWebhook: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.deleteWebhook('app_id', 'webhook_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('deleteWebhook: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.deleteWebhook('app_id', 'webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('editWebhook: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.editWebhook('app_id', 'webhook_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('editWebhook: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.editWebhook('app_id', 'webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      events: ['meeting.started'],
      name: 'name',
      url: 'https://webhook.site/b23a5bbd-c7b0-4ced-a9e2-78ae7889897e',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getWebhookById: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.getWebhookById('app_id', 'webhook_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getWebhookById: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.getWebhookById('app_id', 'webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getWebhooks: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.getWebhooks('app_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getWebhooks: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.getWebhooks('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('replaceWebhook: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.replaceWebhook('app_id', 'webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      events: [
        'meeting.started',
        'meeting.ended',
        'meeting.participantJoined',
        'meeting.participantLeft',
        'meeting.chatSynced',
        'recording.statusUpdate',
        'livestreaming.statusUpdate',
        'meeting.transcript',
        'meeting.summary',
      ],
      name: 'All events webhook',
      url: 'https://webhook.site/b23a5bbd-c7b0-4ced-a9e2-78ae7889897e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('replaceWebhook: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.replaceWebhook('app_id', 'webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      events: [
        'meeting.started',
        'meeting.ended',
        'meeting.participantJoined',
        'meeting.participantLeft',
        'meeting.chatSynced',
        'recording.statusUpdate',
        'livestreaming.statusUpdate',
        'meeting.transcript',
        'meeting.summary',
      ],
      name: 'All events webhook',
      url: 'https://webhook.site/b23a5bbd-c7b0-4ced-a9e2-78ae7889897e',
      enabled: true,
    });
  });
});
