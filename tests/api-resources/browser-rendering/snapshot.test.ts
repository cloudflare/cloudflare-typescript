// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BrowserRendering } from 'cloudflare/resources/browser-rendering/browser-rendering';
import { BaseSnapshot } from 'cloudflare/resources/browser-rendering/snapshot';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSnapshot],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BrowserRendering],
});

const runTests = (client: PartialCloudflare<{ browserRendering: { snapshot: BaseSnapshot } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.browserRendering.snapshot.create({
      account_id: 'account_id',
      html: '<h1>Hello World!</h1>',
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
    const response = await client.browserRendering.snapshot.create({
      account_id: 'account_id',
      html: '<h1>Hello World!</h1>',
      cacheTTL: 86400,
      actionTimeout: 120000,
      addScriptTag: [
        {
          id: 'id',
          content: 'content',
          type: 'type',
          url: 'url',
        },
      ],
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
      rejectRequestPattern: ['string'],
      rejectResourceTypes: ['document'],
      screenshotOptions: {
        captureBeyondViewport: true,
        clip: {
          height: 0,
          width: 0,
          x: 0,
          y: 0,
          scale: 0,
        },
        fromSurface: true,
        fullPage: true,
        omitBackground: true,
        optimizeForSpeed: true,
        quality: 0,
        type: 'png',
      },
      setExtraHTTPHeaders: { foo: 'string' },
      setJavaScriptEnabled: true,
      userAgent: 'userAgent',
      viewport: {
        height: 0,
        width: 0,
        deviceScaleFactor: 0,
        hasTouch: true,
        isLandscape: true,
        isMobile: true,
      },
      waitForSelector: {
        selector: 'selector',
        hidden: true,
        timeout: 120000,
        visible: true,
      },
      waitForTimeout: 120000,
    });
  });
};
describe('resource snapshot', () => runTests(client));
describe('resource snapshot (tree shakable, base)', () => runTests(partialClient));
describe('resource snapshot (tree shakable, subresource)', () => runTests(parentPartialClient));
