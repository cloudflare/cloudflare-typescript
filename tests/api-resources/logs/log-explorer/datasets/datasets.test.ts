// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { LogExplorer } from 'cloudflare/resources/logs/log-explorer/log-explorer';
import { BaseDatasets } from 'cloudflare/resources/logs/log-explorer/datasets/datasets';

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
  resources: [BaseDatasets],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [LogExplorer],
});

const runTests = (client: PartialCloudflare<{ logs: { logExplorer: { datasets: BaseDatasets } } }>) => {
  // HTTP 400 error from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.logs.logExplorer.datasets.create({
      dataset: 'dataset',
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 400 error from prism
  test.skip('create: required and optional params', async () => {
    const response = await client.logs.logExplorer.datasets.create({
      dataset: 'dataset',
      account_id: 'account_id',
      fields: [{ enabled: true, name: 'name' }],
    });
  });

  // HTTP 400 error from prism
  test.skip('update: only required params', async () => {
    const responsePromise = client.logs.logExplorer.datasets.update('dataset_id', {
      enabled: true,
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 400 error from prism
  test.skip('update: required and optional params', async () => {
    const response = await client.logs.logExplorer.datasets.update('dataset_id', {
      enabled: true,
      account_id: 'account_id',
      fields: [{ enabled: true, name: 'name' }],
    });
  });

  // HTTP 400 error from prism
  test.skip('list', async () => {
    const responsePromise = client.logs.logExplorer.datasets.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 400 error from prism
  test.skip('get', async () => {
    const responsePromise = client.logs.logExplorer.datasets.get('dataset_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource datasets', () => runTests(client));
describe('resource datasets (tree shakable, base)', () => runTests(partialClient));
describe('resource datasets (tree shakable, subresource)', () => runTests(parentPartialClient));
