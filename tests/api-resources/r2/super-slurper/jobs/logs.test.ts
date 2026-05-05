// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Jobs } from 'cloudflare/resources/r2/super-slurper/jobs/jobs';
import { BaseLogs } from 'cloudflare/resources/r2/super-slurper/jobs/logs';

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
  resources: [BaseLogs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Jobs],
});

const runTests = (client: PartialCloudflare<{ r2: { superSlurper: { jobs: { logs: BaseLogs } } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.r2.superSlurper.jobs.logs.list('job_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.r2.superSlurper.jobs.logs.list('job_id', {
      account_id: 'account_id',
      limit: 50,
      offset: 0,
    });
  });
};
describe('resource logs', () => runTests(client));
describe('resource logs (tree shakable, base)', () => runTests(partialClient));
describe('resource logs (tree shakable, subresource)', () => runTests(parentPartialClient));
