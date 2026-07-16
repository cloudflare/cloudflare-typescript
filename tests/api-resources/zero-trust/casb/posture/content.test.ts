// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseContent } from 'cloudflare/resources/zero-trust/casb/posture/content';
import { Posture } from 'cloudflare/resources/zero-trust/casb/posture/posture';

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
  resources: [BaseContent],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Posture],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { posture: { content: BaseContent } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.content.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.content.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      direction: 'asc',
      dlp_profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      integration_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      max_affliction_date: '2019-12-27T18:11:19.117Z',
      min_affliction_date: '2019-12-27T18:11:19.117Z',
      order: 'asset_name',
      page: 0,
      per_page: 0,
      search: 'search',
      vendor: 'GOOGLE_WORKSPACE',
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.content.export({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      dlp_profile_information: [
        {
          id: 'e91a2360-da51-4fdf-9711-bcdecd462614',
          entries: [
            {
              id: '55ba2c6c-8ef4-4b2e-9148-e75e8b6ccac1',
              name: 'Credit Card Numbers',
              profile_id: 'e91a2360-da51-4fdf-9711-bcdecd462614',
            },
          ],
          name: 'Financial Information',
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

  test('export: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.content.export({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      dlp_profile_information: [
        {
          id: 'e91a2360-da51-4fdf-9711-bcdecd462614',
          entries: [
            {
              id: '55ba2c6c-8ef4-4b2e-9148-e75e8b6ccac1',
              name: 'Credit Card Numbers',
              profile_id: 'e91a2360-da51-4fdf-9711-bcdecd462614',
            },
          ],
          name: 'Financial Information',
        },
      ],
      dlp_profile_id: ['e91a2360-da51-4fdf-9711-bcdecd462614'],
      integration_id: ['c416bc38-75dc-425f-ae25-c37b5df5c37f'],
      max_affliction_date: '2024-01-01T00:00:00Z',
      min_affliction_date: '2023-01-01T00:00:00Z',
      orders: [{ direction: 'asc', name: 'asset_name' }],
      search: 'sensitive',
      vendors: ['GOOGLE_WORKSPACE'],
    });
  });
};
describe('resource content', () => runTests(client));
describe('resource content (tree shakable, base)', () => runTests(partialClient));
describe('resource content (tree shakable, subresource)', () => runTests(parentPartialClient));
