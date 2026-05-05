// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Namespaces } from 'cloudflare/resources/durable-objects/namespaces/namespaces';
import { BaseObjects } from 'cloudflare/resources/durable-objects/namespaces/objects';

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
  resources: [BaseObjects],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Namespaces],
});

const runTests = (
  client: PartialCloudflare<{ durableObjects: { namespaces: { objects: BaseObjects } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.durableObjects.namespaces.objects.list(
      '5fd1cafff895419c8bcc647fc64ab8f0',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.durableObjects.namespaces.objects.list('5fd1cafff895419c8bcc647fc64ab8f0', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor:
        'AAAAANuhDN7SjacTnSVsDu3WW1Lvst6dxJGTjRY5BhxPXdf6L6uTcpd_NVtjhn11OUYRsVEykxoUwF-JQU4dn6QylZSKTOJuG0indrdn_MlHpMRtsxgXjs-RPdHYIVm3odE_uvEQ_dTQGFm8oikZMohns34DLBgrQpc',
      limit: 10,
    });
  });
};
describe('resource objects', () => runTests(client));
describe('resource objects (tree shakable, base)', () => runTests(partialClient));
describe('resource objects (tree shakable, subresource)', () => runTests(parentPartialClient));
