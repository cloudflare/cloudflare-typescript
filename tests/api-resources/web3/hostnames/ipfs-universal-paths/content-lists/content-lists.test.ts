// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IPFSUniversalPaths } from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/ipfs-universal-paths';
import { BaseContentLists } from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists';

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
  resources: [BaseContentLists],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [IPFSUniversalPaths],
});

const runTests = (
  client: PartialCloudflare<{
    web3: { hostnames: { ipfsUniversalPaths: { contentLists: BaseContentLists } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.web3.hostnames.ipfsUniversalPaths.contentLists.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        action: 'block',
        entries: [{}],
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

  test('update: required and optional params', async () => {
    const response = await client.web3.hostnames.ipfsUniversalPaths.contentLists.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        action: 'block',
        entries: [
          {
            content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
            description: 'this is my content list entry',
            type: 'cid',
          },
        ],
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.web3.hostnames.ipfsUniversalPaths.contentLists.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('get: required and optional params', async () => {
    const response = await client.web3.hostnames.ipfsUniversalPaths.contentLists.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource contentLists', () => runTests(client));
describe('resource contentLists (tree shakable, base)', () => runTests(partialClient));
describe('resource contentLists (tree shakable, subresource)', () => runTests(parentPartialClient));
