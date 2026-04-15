// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CustomCertificates } from 'cloudflare/resources/custom-certificates/custom-certificates';
import { BasePrioritize } from 'cloudflare/resources/custom-certificates/prioritize';

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
  resources: [BasePrioritize],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CustomCertificates],
});

const runTests = (client: PartialCloudflare<{ customCertificates: { prioritize: BasePrioritize } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.customCertificates.prioritize.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      certificates: [{}, {}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.customCertificates.prioritize.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      certificates: [
        { id: '5a7805061c76ada191ed06f989cc3dac', priority: 2 },
        { id: '9a7806061c88ada191ed06f989cc3dac', priority: 1 },
      ],
    });
  });
};
describe('resource prioritize', () => runTests(client));
describe('resource prioritize (tree shakable, base)', () => runTests(partialClient));
describe('resource prioritize (tree shakable, subresource)', () => runTests(parentPartialClient));
