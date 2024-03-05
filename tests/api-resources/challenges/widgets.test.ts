// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource widgets', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.challenges.widgets.create('023e105f4ecef8ad9ca31a8372d0c353', {
      domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
      mode: 'invisible',
      name: 'blog.cloudflare.com login form',
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
    const response = await cloudflare.challenges.widgets.create('023e105f4ecef8ad9ca31a8372d0c353', {
      domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
      mode: 'invisible',
      name: 'blog.cloudflare.com login form',
      direction: 'asc',
      order: 'id',
      page: 1,
      per_page: 5,
      bot_fight_mode: true,
      clearance_level: 'interactive',
      offlabel: true,
      region: 'world',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.challenges.widgets.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '0x4AAF00AAAABn0R22HWm-YUc',
      {
        domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
        mode: 'invisible',
        name: 'blog.cloudflare.com login form',
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.challenges.widgets.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '0x4AAF00AAAABn0R22HWm-YUc',
      {
        domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
        mode: 'invisible',
        name: 'blog.cloudflare.com login form',
        bot_fight_mode: true,
        clearance_level: 'interactive',
        offlabel: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.challenges.widgets.list('023e105f4ecef8ad9ca31a8372d0c353');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.challenges.widgets.list('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.challenges.widgets.list(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { direction: 'asc', order: 'id', page: 1, per_page: 5 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.challenges.widgets.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '0x4AAF00AAAABn0R22HWm-YUc',
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
      cloudflare.challenges.widgets.delete('023e105f4ecef8ad9ca31a8372d0c353', '0x4AAF00AAAABn0R22HWm-YUc', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.challenges.widgets.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '0x4AAF00AAAABn0R22HWm-YUc',
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
      cloudflare.challenges.widgets.get('023e105f4ecef8ad9ca31a8372d0c353', '0x4AAF00AAAABn0R22HWm-YUc', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('rotateSecret', async () => {
    const responsePromise = cloudflare.challenges.widgets.rotateSecret(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '0x4AAF00AAAABn0R22HWm-YUc',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
