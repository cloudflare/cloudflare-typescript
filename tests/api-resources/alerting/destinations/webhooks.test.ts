// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4291
  test.skip('create: only required params', async () => {
    const responsePromise = client.alerting.destinations.webhooks.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'Slack Webhook',
      url: 'https://hooks.slack.com/services/Ds3fdBFbV/456464Gdd',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4291
  test.skip('create: required and optional params', async () => {
    const response = await client.alerting.destinations.webhooks.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'Slack Webhook',
      url: 'https://hooks.slack.com/services/Ds3fdBFbV/456464Gdd',
      secret: 'secret',
    });
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4291
  test.skip('update: only required params', async () => {
    const responsePromise = client.alerting.destinations.webhooks.update(
      'b115d5ec-15c6-41ee-8b76-92c449b5227b',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        name: 'Slack Webhook',
        url: 'https://hooks.slack.com/services/Ds3fdBFbV/456464Gdd',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4291
  test.skip('update: required and optional params', async () => {
    const response = await client.alerting.destinations.webhooks.update(
      'b115d5ec-15c6-41ee-8b76-92c449b5227b',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        name: 'Slack Webhook',
        url: 'https://hooks.slack.com/services/Ds3fdBFbV/456464Gdd',
        secret: 'secret',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.alerting.destinations.webhooks.list({
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

  test('list: required and optional params', async () => {
    const response = await client.alerting.destinations.webhooks.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.alerting.destinations.webhooks.delete(
      'b115d5ec-15c6-41ee-8b76-92c449b5227b',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.alerting.destinations.webhooks.delete(
      'b115d5ec-15c6-41ee-8b76-92c449b5227b',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4291
  test.skip('get: only required params', async () => {
    const responsePromise = client.alerting.destinations.webhooks.get(
      'b115d5ec-15c6-41ee-8b76-92c449b5227b',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4291
  test.skip('get: required and optional params', async () => {
    const response = await client.alerting.destinations.webhooks.get('b115d5ec-15c6-41ee-8b76-92c449b5227b', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
