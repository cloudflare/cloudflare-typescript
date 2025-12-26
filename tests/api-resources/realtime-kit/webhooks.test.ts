// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  test('createWebhook: only required params', async () => {
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

  test('createWebhook: required and optional params', async () => {
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

  test('deleteWebhook: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.deleteWebhook('webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteWebhook: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.deleteWebhook('webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
  });

  test('editWebhook: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.editWebhook('webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('editWebhook: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.editWebhook('webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
      enabled: true,
      events: ['meeting.started'],
      name: 'name',
      url: 'https://webhook.site/b23a5bbd-c7b0-4ced-a9e2-78ae7889897e',
    });
  });

  test('getWebhookByID: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.getWebhookByID('webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getWebhookByID: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.getWebhookByID('webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
  });

  test('getWebhooks: only required params', async () => {
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

  test('getWebhooks: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.getWebhooks('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('replaceWebhook: only required params', async () => {
    const responsePromise = client.realtimeKit.webhooks.replaceWebhook('webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
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

  test('replaceWebhook: required and optional params', async () => {
    const response = await client.realtimeKit.webhooks.replaceWebhook('webhook_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
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
