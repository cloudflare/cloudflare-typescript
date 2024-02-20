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

describe('resource accountMembers', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.accountMembers.create(
      {},
      {
        email: 'user@example.com',
        roles: [
          '3536bcfad5faccb999b47003c79917fb',
          '3536bcfad5faccb999b47003c79917fb',
          '3536bcfad5faccb999b47003c79917fb',
        ],
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
    const response = await cloudflare.accountMembers.create(
      {},
      {
        email: 'user@example.com',
        roles: [
          '3536bcfad5faccb999b47003c79917fb',
          '3536bcfad5faccb999b47003c79917fb',
          '3536bcfad5faccb999b47003c79917fb',
        ],
        status: 'accepted',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.accountMembers.list({});
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
    await expect(cloudflare.accountMembers.list({}, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accountMembers.list(
        {},
        { direction: 'desc', order: 'status', page: 1, per_page: 5, status: 'accepted' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accountMembers.delete({}, '4536bcfad5faccb111b47003c79917fa');
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
    const responsePromise = cloudflare.accountMembers.get({}, '4536bcfad5faccb111b47003c79917fa');
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
      cloudflare.accountMembers.get({}, '4536bcfad5faccb111b47003c79917fa', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('replace: only required params', async () => {
    const responsePromise = cloudflare.accountMembers.replace({}, '4536bcfad5faccb111b47003c79917fa', {
      roles: [
        { id: '3536bcfad5faccb999b47003c79917fb' },
        { id: '3536bcfad5faccb999b47003c79917fb' },
        { id: '3536bcfad5faccb999b47003c79917fb' },
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
  test.skip('replace: required and optional params', async () => {
    const response = await cloudflare.accountMembers.replace({}, '4536bcfad5faccb111b47003c79917fa', {
      roles: [
        { id: '3536bcfad5faccb999b47003c79917fb' },
        { id: '3536bcfad5faccb999b47003c79917fb' },
        { id: '3536bcfad5faccb999b47003c79917fb' },
      ],
    });
  });
});
