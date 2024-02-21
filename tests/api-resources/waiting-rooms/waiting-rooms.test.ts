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

describe('resource waitingRooms', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.create('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await cloudflare.waitingRooms.create('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const responsePromise = cloudflare.waitingRooms.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      {
        host: 'shop.example.com',
        name: 'production_webinar',
        new_users_per_minute: 200,
        total_active_users: 200,
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
    const response = await cloudflare.waitingRooms.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      {
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
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.waitingRooms.list('023e105f4ecef8ad9ca31a8372d0c353');
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
      cloudflare.waitingRooms.list('023e105f4ecef8ad9ca31a8372d0c353', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.waitingRooms.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
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
  test.skip('get', async () => {
    const responsePromise = cloudflare.waitingRooms.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
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
      cloudflare.waitingRooms.get('023e105f4ecef8ad9ca31a8372d0c353', '699d98642c564d2e855e9661899b7252', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('preview: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.preview('023e105f4ecef8ad9ca31a8372d0c353', {
      custom_html:
        '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Queue all enabled {{/waitTimeKnown}}',
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
  test.skip('preview: required and optional params', async () => {
    const response = await cloudflare.waitingRooms.preview('023e105f4ecef8ad9ca31a8372d0c353', {
      custom_html:
        '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Queue all enabled {{/waitTimeKnown}}',
    });
  });
});
