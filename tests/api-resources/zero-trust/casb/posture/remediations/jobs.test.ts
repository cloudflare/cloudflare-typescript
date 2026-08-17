// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseJobs } from 'cloudflare/resources/zero-trust/casb/posture/remediations/jobs';
import { Remediations } from 'cloudflare/resources/zero-trust/casb/posture/remediations/remediations';

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
  resources: [Remediations],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { posture: { remediations: { jobs: BaseJobs } } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.remediations.jobs.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      finding_instance_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      remediation_type_id: '5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a',
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
    const response = await client.zeroTrust.casb.posture.remediations.jobs.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      finding_instance_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      remediation_type_id: '5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.remediations.jobs.list({
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
    const response = await client.zeroTrust.casb.posture.remediations.jobs.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      cursor: 'cursor',
      direction: 'asc',
      integration_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      max_updated_at: '2019-12-27T18:11:19.117Z',
      min_updated_at: '2019-12-27T18:11:19.117Z',
      order: 'created_at',
      page: 0,
      per_page: 0,
      search: 'search',
      status: 'pending',
      triggered_by_actor: ['user'],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.remediations.jobs.export({
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

  test('export: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.remediations.jobs.export({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      integration_id: ['55d7337e-1d0a-49fc-9826-925ba40df035'],
      max_updated_at: '2025-01-01T00:00:00Z',
      min_updated_at: '2024-01-01T00:00:00Z',
      orders: [{ direction: 'asc', name: 'last_updated_at' }],
      search: 'public access',
      status: ['pending', 'completed'],
    });
  });
};
describe('resource jobs', () => runTests(client));
describe('resource jobs (tree shakable, base)', () => runTests(partialClient));
describe('resource jobs (tree shakable, subresource)', () => runTests(parentPartialClient));
