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

describe('resource rules', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      { action: 'bypass_waiting_room', expression: 'ip.src in {10.20.30.40}' },
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
    const response = await cloudflare.waitingRooms.rules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
      {
        action: 'bypass_waiting_room',
        expression: 'ip.src in {10.20.30.40}',
        description: 'allow all traffic from 10.20.30.40',
        enabled: true,
        position: { index: 0 },
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.delete(
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
  test.skip('waitingRoomCreateWaitingRoomRule: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.waitingRoomCreateWaitingRoomRule(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      { action: 'bypass_waiting_room', expression: 'ip.src in {10.20.30.40}' },
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
  test.skip('waitingRoomCreateWaitingRoomRule: required and optional params', async () => {
    const response = await cloudflare.waitingRooms.rules.waitingRoomCreateWaitingRoomRule(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      {
        action: 'bypass_waiting_room',
        expression: 'ip.src in {10.20.30.40}',
        description: 'allow all traffic from 10.20.30.40',
        enabled: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('waitingRoomListWaitingRoomRules', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.waitingRoomListWaitingRoomRules(
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
  test.skip('waitingRoomListWaitingRoomRules: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.waitingRooms.rules.waitingRoomListWaitingRoomRules(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '699d98642c564d2e855e9661899b7252',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('waitingRoomReplaceWaitingRoomRules: only required params', async () => {
    const responsePromise = cloudflare.waitingRooms.rules.waitingRoomReplaceWaitingRoomRules(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      [
        { action: 'bypass_waiting_room', expression: 'ip.src in {10.20.30.40}' },
        { action: 'bypass_waiting_room', expression: 'ip.src in {10.20.30.40}' },
        { action: 'bypass_waiting_room', expression: 'ip.src in {10.20.30.40}' },
      ],
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
  test.skip('waitingRoomReplaceWaitingRoomRules: required and optional params', async () => {
    const response = await cloudflare.waitingRooms.rules.waitingRoomReplaceWaitingRoomRules(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      [
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
    );
  });
});
