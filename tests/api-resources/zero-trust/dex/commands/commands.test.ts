// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource commands', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.commands.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      commands: [
        {
          command_type: 'pcap',
          device_id: 'device_id',
          user_email: 'user_email',
        },
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

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.dex.commands.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      commands: [
        {
          command_type: 'pcap',
          device_id: 'device_id',
          user_email: 'user_email',
          command_args: {
            interfaces: ['default'],
            'max-file-size-mb': 1,
            'packet-size-bytes': 1,
            'test-all-routes': true,
            'time-limit-min': 1,
          },
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.commands.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      page: 1,
      per_page: 50,
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
    const response = await client.zeroTrust.dex.commands.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      page: 1,
      per_page: 50,
      command_type: 'command_type',
      device_id: 'device_id',
      from: '2023-08-20T20:45:00Z',
      status: 'PENDING_EXEC',
      to: '2023-08-24T20:45:00Z',
      user_email: 'user_email',
    });
  });
});
