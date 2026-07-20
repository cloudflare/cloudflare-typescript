// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Indicators } from 'cloudflare/resources/cloudforce-one/threat-events/indicators/indicators';
import { BaseByDataset } from 'cloudflare/resources/cloudforce-one/threat-events/indicators/by-dataset/by-dataset';

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
  resources: [BaseByDataset],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Indicators],
});

const runTests = (
  client: PartialCloudflare<{
    cloudforceOne: { threatEvents: { indicators: { byDataset: BaseByDataset } } };
  }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.indicators.byDataset.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
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
    const response = await client.cloudforceOne.threatEvents.indicators.byDataset.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        indicatorType: 'indicatorType',
        name: 'name',
        page: 0,
        pageSize: 0,
        relatedEvent: ['string'],
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.indicators.byDataset.get('indicator_id', {
      account_id: 'account_id',
      dataset_id: 'dataset_id',
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
    const response = await client.cloudforceOne.threatEvents.indicators.byDataset.get('indicator_id', {
      account_id: 'account_id',
      dataset_id: 'dataset_id',
    });
  });
};
describe('resource byDataset', () => runTests(client));
describe('resource byDataset (tree shakable, base)', () => runTests(partialClient));
describe('resource byDataset (tree shakable, subresource)', () => runTests(parentPartialClient));
