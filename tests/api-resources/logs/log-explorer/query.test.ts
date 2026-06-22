// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { LogExplorer } from 'cloudflare/resources/logs/log-explorer/log-explorer';
import { BaseQuery } from 'cloudflare/resources/logs/log-explorer/query';

import Cloudflare, { toFile } from 'cloudflare';
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
  resources: [BaseQuery],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [LogExplorer],
});

const runTests = (client: PartialCloudflare<{ logs: { logExplorer: { query: BaseQuery } } }>) => {
  test('sql', async () => {
    const responsePromise = client.logs.logExplorer.query.sql(
      await toFile(Buffer.from('Example data'), 'README.md'),
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
};
describe('resource query', () => runTests(client));
describe('resource query (tree shakable, base)', () => runTests(partialClient));
describe('resource query (tree shakable, subresource)', () => runTests(parentPartialClient));
