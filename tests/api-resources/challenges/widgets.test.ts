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
    const responsePromise = cloudflare.challenges.widgets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await cloudflare.challenges.widgets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
      mode: 'invisible',
      name: 'blog.cloudflare.com login form',
      direction: 'asc',
      order: 'id',
      page: 1,
      per_page: 5,
      bot_fight_mode: false,
      clearance_level: 'interactive',
      offlabel: false,
      region: 'world',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.challenges.widgets.update('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.challenges.widgets.update('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domains: ['203.0.113.1', 'cloudflare.com', 'blog.example.com'],
      mode: 'invisible',
      name: 'blog.cloudflare.com login form',
      bot_fight_mode: false,
      clearance_level: 'interactive',
      offlabel: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.challenges.widgets.list({
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
    const response = await cloudflare.challenges.widgets.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      order: 'id',
      page: 1,
      per_page: 5,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.challenges.widgets.delete('0x4AAF00AAAABn0R22HWm-YUc', {
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
    const response = await cloudflare.challenges.widgets.delete('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.challenges.widgets.get('0x4AAF00AAAABn0R22HWm-YUc', {
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
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.challenges.widgets.get('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('rotateSecret: only required params', async () => {
    const responsePromise = cloudflare.challenges.widgets.rotateSecret('0x4AAF00AAAABn0R22HWm-YUc', {
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
  test.skip('rotateSecret: required and optional params', async () => {
    const response = await cloudflare.challenges.widgets.rotateSecret('0x4AAF00AAAABn0R22HWm-YUc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      invalidate_immediately: true,
    });
  });
});
