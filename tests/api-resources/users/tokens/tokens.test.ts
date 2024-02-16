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

describe('resource tokens', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.users.tokens.update(
      {},
      {
        name: 'readonly token',
        policies: [
          {
            effect: 'allow',
            permission_groups: [{}, {}],
            resources: {
              'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
              'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
            },
          },
          {
            effect: 'allow',
            permission_groups: [{}, {}],
            resources: {
              'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
              'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
            },
          },
          {
            effect: 'allow',
            permission_groups: [{}, {}],
            resources: {
              'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
              'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
            },
          },
        ],
        status: 'active',
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
    const response = await cloudflare.users.tokens.update(
      {},
      {
        name: 'readonly token',
        policies: [
          {
            effect: 'allow',
            permission_groups: [{}, {}],
            resources: {
              'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
              'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
            },
          },
          {
            effect: 'allow',
            permission_groups: [{}, {}],
            resources: {
              'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
              'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
            },
          },
          {
            effect: 'allow',
            permission_groups: [{}, {}],
            resources: {
              'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
              'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
            },
          },
        ],
        status: 'active',
        condition: {
          request_ip: {
            in: ['123.123.123.0/24', '2606:4700::/32'],
            not_in: ['123.123.123.100/24', '2606:4700:4700::/48'],
          },
        },
        expires_on: '2020-01-01T00:00:00Z',
        not_before: '2018-07-01T05:20:00Z',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.users.tokens.delete({});
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
    const responsePromise = cloudflare.users.tokens.get({});
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
    await expect(cloudflare.users.tokens.get({}, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('userAPITokensCreateToken: only required params', async () => {
    const responsePromise = cloudflare.users.tokens.userAPITokensCreateToken({
      name: 'readonly token',
      policies: [
        {
          effect: 'allow',
          permission_groups: [{}, {}],
          resources: {
            'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
            'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
          },
        },
        {
          effect: 'allow',
          permission_groups: [{}, {}],
          resources: {
            'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
            'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
          },
        },
        {
          effect: 'allow',
          permission_groups: [{}, {}],
          resources: {
            'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
            'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
          },
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

  // skipped: tests are disabled for the time being
  test.skip('userAPITokensCreateToken: required and optional params', async () => {
    const response = await cloudflare.users.tokens.userAPITokensCreateToken({
      name: 'readonly token',
      policies: [
        {
          effect: 'allow',
          permission_groups: [{}, {}],
          resources: {
            'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
            'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
          },
        },
        {
          effect: 'allow',
          permission_groups: [{}, {}],
          resources: {
            'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
            'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
          },
        },
        {
          effect: 'allow',
          permission_groups: [{}, {}],
          resources: {
            'com.cloudflare.api.account.zone.22b1de5f1c0e4b3ea97bb1e963b06a43': '*',
            'com.cloudflare.api.account.zone.eb78d65290b24279ba6f44721b3ea3c4': '*',
          },
        },
      ],
      condition: {
        request_ip: {
          in: ['123.123.123.0/24', '2606:4700::/32'],
          not_in: ['123.123.123.100/24', '2606:4700:4700::/48'],
        },
      },
      expires_on: '2020-01-01T00:00:00Z',
      not_before: '2018-07-01T05:20:00Z',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('userAPITokensListTokens', async () => {
    const responsePromise = cloudflare.users.tokens.userAPITokensListTokens();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('userAPITokensListTokens: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.users.tokens.userAPITokensListTokens({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('userAPITokensListTokens: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.users.tokens.userAPITokensListTokens(
        { direction: 'desc', page: 1, per_page: 5 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
