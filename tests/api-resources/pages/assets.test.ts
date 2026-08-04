// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAssets } from 'cloudflare/resources/pages/assets';
import { Pages } from 'cloudflare/resources/pages/pages';

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
  resources: [BaseAssets],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Pages],
});

const runTests = (client: PartialCloudflare<{ pages: { assets: BaseAssets } }>) => {
  test('checkMissing: only required params', async () => {
    const responsePromise = client.pages.assets.checkMissing({
      hashes: ['a948904f2f0f479b8f936b8a0c5d9882', 'b026324c6904b2a9cb4b88d6d61c81d1'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('checkMissing: required and optional params', async () => {
    const response = await client.pages.assets.checkMissing({
      hashes: ['a948904f2f0f479b8f936b8a0c5d9882', 'b026324c6904b2a9cb4b88d6d61c81d1'],
    });
  });

  test('upload: only required params', async () => {
    const responsePromise = client.pages.assets.upload({
      body: [
        {
          base64: true,
          key: 'b026324c6904b2a9cb4b88d6d61c81d1',
          metadata: { contentType: 'text/plain' },
          value: 'SGVsbG8sIFdvcmxkIQ==',
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

  test('upload: required and optional params', async () => {
    const response = await client.pages.assets.upload({
      body: [
        {
          base64: true,
          key: 'b026324c6904b2a9cb4b88d6d61c81d1',
          metadata: { contentType: 'text/plain' },
          value: 'SGVsbG8sIFdvcmxkIQ==',
        },
      ],
    });
  });

  test('upsertHashes: only required params', async () => {
    const responsePromise = client.pages.assets.upsertHashes({
      hashes: ['a948904f2f0f479b8f936b8a0c5d9882', 'b026324c6904b2a9cb4b88d6d61c81d1'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upsertHashes: required and optional params', async () => {
    const response = await client.pages.assets.upsertHashes({
      hashes: ['a948904f2f0f479b8f936b8a0c5d9882', 'b026324c6904b2a9cb4b88d6d61c81d1'],
    });
  });
};
describe('resource assets', () => runTests(client));
describe('resource assets (tree shakable, base)', () => runTests(partialClient));
describe('resource assets (tree shakable, subresource)', () => runTests(parentPartialClient));
