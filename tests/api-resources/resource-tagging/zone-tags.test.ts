// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ResourceTagging } from 'cloudflare/resources/resource-tagging/resource-tagging';
import { BaseZoneTags } from 'cloudflare/resources/resource-tagging/zone-tags';

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
  resources: [BaseZoneTags],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ResourceTagging],
});

const runTests = (client: PartialCloudflare<{ resourceTagging: { zoneTags: BaseZoneTags } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.resourceTagging.zoneTags.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'zone',
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
    const response = await client.resourceTagging.zoneTags.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'zone',
      tags: { environment: 'production', team: 'engineering' },
      'If-Match': '"v1:RBNvo1WzZ4oRRq0W9-hkng"',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.resourceTagging.zoneTags.delete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.resourceTagging.zoneTags.delete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      'If-Match': '"v1:RBNvo1WzZ4oRRq0W9-hkng"',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.resourceTagging.zoneTags.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'zone',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.resourceTagging.zoneTags.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
      resource_type: 'zone',
      access_application_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    });
  });
};
describe('resource zoneTags', () => runTests(client));
describe('resource zoneTags (tree shakable, base)', () => runTests(partialClient));
describe('resource zoneTags (tree shakable, subresource)', () => runTests(parentPartialClient));
