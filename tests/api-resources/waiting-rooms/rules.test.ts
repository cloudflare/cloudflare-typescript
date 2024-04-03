// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.create('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'bypass_waiting_room',
      expression: 'ip.src in {10.20.30.40}',
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
    const response = await cloudflare.waitingRooms.rules.create('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'bypass_waiting_room',
      expression: 'ip.src in {10.20.30.40}',
      description: 'allow all traffic from 10.20.30.40',
      enabled: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.update('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        { action: 'bypass_waiting_room', expression: 'ip.src in {10.20.30.40}' },
        { action: 'bypass_waiting_room', expression: 'ip.src in {10.20.30.40}' },
        { action: 'bypass_waiting_room', expression: 'ip.src in {10.20.30.40}' },
      ],
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
    const response = await cloudflare.waitingRooms.rules.update('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          action: 'bypass_waiting_room',
          description: 'allow all traffic from 10.20.30.40',
          enabled: true,
          expression: 'ip.src in {10.20.30.40}',
        },
        {
          action: 'bypass_waiting_room',
          description: 'allow all traffic from 10.20.30.40',
          enabled: true,
          expression: 'ip.src in {10.20.30.40}',
        },
        {
          action: 'bypass_waiting_room',
          description: 'allow all traffic from 10.20.30.40',
          enabled: true,
          expression: 'ip.src in {10.20.30.40}',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.list('699d98642c564d2e855e9661899b7252', {
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
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.waitingRooms.rules.list('699d98642c564d2e855e9661899b7252', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.delete(
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.waitingRooms.rules.delete(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.edit(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        action: 'bypass_waiting_room',
        expression: 'ip.src in {10.20.30.40}',
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
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.waitingRooms.rules.edit(
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        action: 'bypass_waiting_room',
        expression: 'ip.src in {10.20.30.40}',
        description: 'allow all traffic from 10.20.30.40',
        enabled: true,
        position: { index: 0 },
      },
    );
  });
});
