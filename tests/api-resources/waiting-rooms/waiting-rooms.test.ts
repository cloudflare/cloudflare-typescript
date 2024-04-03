// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource waitingRooms', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      host: 'shop.example.com',
      name: 'production_webinar',
      new_users_per_minute: 200,
      total_active_users: 200,
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
    const response = await cloudflare.waitingRooms.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      host: 'shop.example.com',
      name: 'production_webinar',
      new_users_per_minute: 200,
      total_active_users: 200,
      additional_routes: [
        { host: 'shop2.example.com', path: '/shop2/checkout' },
        { host: 'shop2.example.com', path: '/shop2/checkout' },
        { host: 'shop2.example.com', path: '/shop2/checkout' },
      ],
      cookie_attributes: { samesite: 'auto', secure: 'auto' },
      cookie_suffix: 'abcd',
      custom_page_html:
        '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Queue all enabled {{/waitTimeKnown}}',
      default_template_language: 'es-ES',
      description: 'Production - DO NOT MODIFY',
      disable_session_renewal: false,
      json_response_enabled: false,
      path: '/shop/checkout',
      queue_all: true,
      queueing_method: 'fifo',
      queueing_status_code: 202,
      session_duration: 1,
      suspended: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.update('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      host: 'shop.example.com',
      name: 'production_webinar',
      new_users_per_minute: 200,
      total_active_users: 200,
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
    const response = await cloudflare.waitingRooms.update('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      host: 'shop.example.com',
      name: 'production_webinar',
      new_users_per_minute: 200,
      total_active_users: 200,
      additional_routes: [
        { host: 'shop2.example.com', path: '/shop2/checkout' },
        { host: 'shop2.example.com', path: '/shop2/checkout' },
        { host: 'shop2.example.com', path: '/shop2/checkout' },
      ],
      cookie_attributes: { samesite: 'auto', secure: 'auto' },
      cookie_suffix: 'abcd',
      custom_page_html:
        '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Queue all enabled {{/waitTimeKnown}}',
      default_template_language: 'es-ES',
      description: 'Production - DO NOT MODIFY',
      disable_session_renewal: false,
      json_response_enabled: false,
      path: '/shop/checkout',
      queue_all: true,
      queueing_method: 'fifo',
      queueing_status_code: 202,
      session_duration: 1,
      suspended: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
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
    const response = await cloudflare.waitingRooms.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.delete('699d98642c564d2e855e9661899b7252', {
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
    const response = await cloudflare.waitingRooms.delete('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.edit('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      host: 'shop.example.com',
      name: 'production_webinar',
      new_users_per_minute: 200,
      total_active_users: 200,
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
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.waitingRooms.edit('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      host: 'shop.example.com',
      name: 'production_webinar',
      new_users_per_minute: 200,
      total_active_users: 200,
      additional_routes: [
        { host: 'shop2.example.com', path: '/shop2/checkout' },
        { host: 'shop2.example.com', path: '/shop2/checkout' },
        { host: 'shop2.example.com', path: '/shop2/checkout' },
      ],
      cookie_attributes: { samesite: 'auto', secure: 'auto' },
      cookie_suffix: 'abcd',
      custom_page_html:
        '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Queue all enabled {{/waitTimeKnown}}',
      default_template_language: 'es-ES',
      description: 'Production - DO NOT MODIFY',
      disable_session_renewal: false,
      json_response_enabled: false,
      path: '/shop/checkout',
      queue_all: true,
      queueing_method: 'fifo',
      queueing_status_code: 202,
      session_duration: 1,
      suspended: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.get('699d98642c564d2e855e9661899b7252', {
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
    const response = await cloudflare.waitingRooms.get('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
