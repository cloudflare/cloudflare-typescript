// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Instances } from 'cloudflare/resources/aisearch/namespaces/instances/instances';
import { BaseJobs } from 'cloudflare/resources/aisearch/namespaces/instances/jobs';

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
  resources: [Instances],
});

const runTests = (
  client: PartialCloudflare<{ aiSearch: { namespaces: { instances: { jobs: BaseJobs } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.jobs.create('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.jobs.create('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      description: 'description',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.jobs.update('job_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
      action: 'cancel',
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
    const response = await client.aiSearch.namespaces.instances.jobs.update('job_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
      action: 'cancel',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.jobs.list('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
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
    const response = await client.aiSearch.namespaces.instances.jobs.list('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      page: 1,
      per_page: 0,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.jobs.get('job_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
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
    const response = await client.aiSearch.namespaces.instances.jobs.get('job_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
    });
  });

  test('logs: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.jobs.logs('job_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('logs: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.jobs.logs('job_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
      page: 1,
      per_page: 0,
    });
  });
};
describe('resource jobs', () => runTests(client));
describe('resource jobs (tree shakable, base)', () => runTests(partialClient));
describe('resource jobs (tree shakable, subresource)', () => runTests(parentPartialClient));
