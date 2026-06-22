// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAvailable } from 'cloudflare/resources/logs/log-explorer/datasets/available';
import { Datasets } from 'cloudflare/resources/logs/log-explorer/datasets/datasets';

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
  resources: [BaseAvailable],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Datasets],
});

const runTests = (
  client: PartialCloudflare<{ logs: { logExplorer: { datasets: { available: BaseAvailable } } } }>,
) => {
  test('list', async () => {
    const responsePromise = client.logs.logExplorer.datasets.available.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource available', () => runTests(client));
describe('resource available (tree shakable, base)', () => runTests(partialClient));
describe('resource available (tree shakable, subresource)', () => runTests(parentPartialClient));
