// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pdf', () => {
  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.browsingRendering.pdf.create('accountId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.browsingRendering.pdf.create(
        'accountId',
        {
          cacheTTL: 86400,
          addScriptTag: [{ id: 'id', content: 'content', type: 'type', url: 'url' }],
          addStyleTag: [{ content: 'content', url: 'url' }],
          allowRequestPattern: ['string'],
          allowResourceTypes: ['document'],
          authenticate: { password: 'x', username: 'x' },
          bestAttempt: true,
          cookies: [
            {
              name: 'name',
              value: 'value',
              domain: 'domain',
              expires: 0,
              httpOnly: true,
              partitionKey: 'partitionKey',
              path: 'path',
              priority: 'Low',
              sameParty: true,
              sameSite: 'Strict',
              secure: true,
              sourcePort: 0,
              sourceScheme: 'Unset',
              url: 'url',
            },
          ],
          emulateMediaType: 'emulateMediaType',
          gotoOptions: {
            referer: 'referer',
            referrerPolicy: 'referrerPolicy',
            timeout: 60000,
            waitUntil: 'load',
          },
          html: 'x',
          rejectRequestPattern: ['string'],
          rejectResourceTypes: ['document'],
          setExtraHTTPHeaders: { foo: 'string' },
          setJavaScriptEnabled: true,
          url: 'https://example.com',
          userAgent: 'userAgent',
          viewport: {
            height: 0,
            width: 0,
            deviceScaleFactor: 0,
            hasTouch: true,
            isLandscape: true,
            isMobile: true,
          },
          waitForSelector: { selector: 'selector', hidden: true, timeout: 60000, visible: true },
          waitForTimeout: 60000,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
