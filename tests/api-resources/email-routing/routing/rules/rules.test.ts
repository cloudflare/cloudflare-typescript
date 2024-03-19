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
    const responsePromise = cloudflare.emailRouting.routing.rules.create('023e105f4ecef8ad9ca31a8372d0c353', {
      actions: [
        {
          type: 'forward',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'forward',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'forward',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
      ],
      matchers: [
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
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
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.emailRouting.routing.rules.create('023e105f4ecef8ad9ca31a8372d0c353', {
      actions: [
        {
          type: 'forward',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'forward',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
        {
          type: 'forward',
          value: [
            'destinationaddress@example.net',
            'destinationaddress@example.net',
            'destinationaddress@example.net',
          ],
        },
      ],
      matchers: [
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
        { field: 'to', type: 'literal', value: 'test@example.com' },
      ],
      enabled: true,
      name: 'Send to user@example.net rule.',
      priority: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.emailRouting.routing.rules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'a7e6fb77503c41d8a7f3113c6918f10c',
      {
        actions: [
          {
            type: 'forward',
            value: [
              'destinationaddress@example.net',
              'destinationaddress@example.net',
              'destinationaddress@example.net',
            ],
          },
          {
            type: 'forward',
            value: [
              'destinationaddress@example.net',
              'destinationaddress@example.net',
              'destinationaddress@example.net',
            ],
          },
          {
            type: 'forward',
            value: [
              'destinationaddress@example.net',
              'destinationaddress@example.net',
              'destinationaddress@example.net',
            ],
          },
        ],
        matchers: [
          { field: 'to', type: 'literal', value: 'test@example.com' },
          { field: 'to', type: 'literal', value: 'test@example.com' },
          { field: 'to', type: 'literal', value: 'test@example.com' },
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.emailRouting.routing.rules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'a7e6fb77503c41d8a7f3113c6918f10c',
      {
        actions: [
          {
            type: 'forward',
            value: [
              'destinationaddress@example.net',
              'destinationaddress@example.net',
              'destinationaddress@example.net',
            ],
          },
          {
            type: 'forward',
            value: [
              'destinationaddress@example.net',
              'destinationaddress@example.net',
              'destinationaddress@example.net',
            ],
          },
          {
            type: 'forward',
            value: [
              'destinationaddress@example.net',
              'destinationaddress@example.net',
              'destinationaddress@example.net',
            ],
          },
        ],
        matchers: [
          { field: 'to', type: 'literal', value: 'test@example.com' },
          { field: 'to', type: 'literal', value: 'test@example.com' },
          { field: 'to', type: 'literal', value: 'test@example.com' },
        ],
        enabled: true,
        name: 'Send to user@example.net rule.',
        priority: 0,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.emailRouting.routing.rules.list('023e105f4ecef8ad9ca31a8372d0c353');
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
      cloudflare.emailRouting.routing.rules.list('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.emailRouting.routing.rules.list(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { enabled: true, page: 1, per_page: 5 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.emailRouting.routing.rules.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'a7e6fb77503c41d8a7f3113c6918f10c',
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
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.emailRouting.routing.rules.delete(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'a7e6fb77503c41d8a7f3113c6918f10c',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.emailRouting.routing.rules.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'a7e6fb77503c41d8a7f3113c6918f10c',
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
      cloudflare.emailRouting.routing.rules.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'a7e6fb77503c41d8a7f3113c6918f10c',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
