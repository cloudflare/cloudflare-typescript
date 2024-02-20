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

describe('resource events', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.events.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      {
        event_end_time: '2021-09-28T17:00:00.000Z',
        event_start_time: '2021-09-28T15:30:00.000Z',
        name: 'production_webinar_event',
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
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.waitingRooms.events.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      {
        event_end_time: '2021-09-28T17:00:00.000Z',
        event_start_time: '2021-09-28T15:30:00.000Z',
        name: 'production_webinar_event',
        custom_page_html:
          '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Event is prequeueing / Queue all enabled {{/waitTimeKnown}}',
        description: 'Production event - DO NOT MODIFY',
        disable_session_renewal: true,
        new_users_per_minute: 200,
        prequeue_start_time: '2021-09-28T15:00:00.000Z',
        queueing_method: 'random',
        session_duration: 1,
        shuffle_at_event_start: true,
        suspended: true,
        total_active_users: 200,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.waitingRooms.events.list(
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
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.waitingRooms.events.list(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '699d98642c564d2e855e9661899b7252',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.waitingRooms.events.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
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
    const responsePromise = cloudflare.waitingRooms.events.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
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
      cloudflare.waitingRooms.events.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '699d98642c564d2e855e9661899b7252',
        '25756b2dfe6e378a06b033b670413757',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('replace: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.events.replace(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      {
        event_end_time: '2021-09-28T17:00:00.000Z',
        event_start_time: '2021-09-28T15:30:00.000Z',
        name: 'production_webinar_event',
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
  test.skip('replace: required and optional params', async () => {
    const response = await cloudflare.waitingRooms.events.replace(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      {
        event_end_time: '2021-09-28T17:00:00.000Z',
        event_start_time: '2021-09-28T15:30:00.000Z',
        name: 'production_webinar_event',
        custom_page_html:
          '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Event is prequeueing / Queue all enabled {{/waitTimeKnown}}',
        description: 'Production event - DO NOT MODIFY',
        disable_session_renewal: true,
        new_users_per_minute: 200,
        prequeue_start_time: '2021-09-28T15:00:00.000Z',
        queueing_method: 'random',
        session_duration: 1,
        shuffle_at_event_start: true,
        suspended: true,
        total_active_users: 200,
      },
    );
  });
});
