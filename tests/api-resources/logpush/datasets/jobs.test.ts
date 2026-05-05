// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Datasets } from 'cloudflare/resources/logpush/datasets/datasets';
import { BaseJobs } from 'cloudflare/resources/logpush/datasets/jobs';

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
  resources: [BaseJobs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Datasets],
});

const runTests = (client: PartialCloudflare<{ logpush: { datasets: { jobs: BaseJobs } } }>) => {
  // TODO: investigate broken test
  test.skip('get', async () => {
    const responsePromise = client.logpush.datasets.jobs.get('gateway_dns', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource jobs', () => runTests(client));
describe('resource jobs (tree shakable, base)', () => runTests(partialClient));
describe('resource jobs (tree shakable, subresource)', () => runTests(parentPartialClient));
