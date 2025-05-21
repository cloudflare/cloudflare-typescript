// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource markdown', () => {
  test('create: only required params', async () => {
    const responsePromise = client.browserRendering.markdown.create({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.browserRendering.markdown.create({
      account_id: 'account_id',
      cacheTTL: 86400,
      actionTimeout: 300000,
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
    });
  });
});
