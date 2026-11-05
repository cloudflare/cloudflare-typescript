// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CWS } from 'cloudflare/resources/zero-trust/cws/cws';
import { BasePolicySets } from 'cloudflare/resources/zero-trust/cws/policy-sets';

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
  resources: [BasePolicySets],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CWS],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { cws: { policySets: BasePolicySets } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.policySets.create({
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      policies: [{ policy_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
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
    const response = await client.zeroTrust.cws.policySets.create({
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      policies: [{ policy_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', enforce: true }],
      description: 'description',
      exclude_workload_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      include_workload_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      tags: { foo: 'string' },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.policySets.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      policies: [{ policy_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
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
    const response = await client.zeroTrust.cws.policySets.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      policies: [{ policy_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', enforce: true }],
      description: 'description',
      exclude_workload_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      include_workload_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      tags: { foo: 'string' },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.policySets.list({
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.zeroTrust.cws.policySets.list({
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      cursor: 'cursor',
      deployment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      direction: 'asc',
      name: 'name',
      order: 'name',
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.policySets.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.zeroTrust.cws.policySets.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.policySets.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.zeroTrust.cws.policySets.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    });
  });
};
describe('resource policySets', () => runTests(client));
describe('resource policySets (tree shakable, base)', () => runTests(partialClient));
describe('resource policySets (tree shakable, subresource)', () => runTests(parentPartialClient));
