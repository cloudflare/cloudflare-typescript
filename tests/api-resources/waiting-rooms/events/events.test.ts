// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  test('create: only required params', async () => {
    const responsePromise = client.waitingRooms.events.create('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      event_end_time: '2021-09-28T17:00:00.000Z',
      event_start_time: '2021-09-28T15:30:00.000Z',
      name: 'production_webinar_event',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.waitingRooms.events.create('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.waitingRooms.events.update(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('update: required and optional params', async () => {
    const response = await client.waitingRooms.events.update(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('list: only required params', async () => {
    const responsePromise = client.waitingRooms.events.list('699d98642c564d2e855e9661899b7252', {
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

  test('list: required and optional params', async () => {
    const response = await client.waitingRooms.events.list('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.waitingRooms.events.delete(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.waitingRooms.events.delete(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.waitingRooms.events.edit(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('edit: required and optional params', async () => {
    const response = await client.waitingRooms.events.edit(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('get: only required params', async () => {
    const responsePromise = client.waitingRooms.events.get(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.waitingRooms.events.get(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
