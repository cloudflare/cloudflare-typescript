// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseJobs } from 'cloudflare/resources/zero-trust/casb/posture/webhooks/jobs';
import { Webhooks } from 'cloudflare/resources/zero-trust/casb/posture/webhooks/webhooks';

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
  resources: [Webhooks],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { posture: { webhooks: { jobs: BaseJobs } } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.webhooks.jobs.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      finding_instance_ids: ['770e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001'],
      webhook_ids: ['550e8400-e29b-41d4-a716-446655440000', '660e8400-e29b-41d4-a716-446655440001'],
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
    const response = await client.zeroTrust.casb.posture.webhooks.jobs.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      finding_instance_ids: ['770e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001'],
      webhook_ids: ['550e8400-e29b-41d4-a716-446655440000', '660e8400-e29b-41d4-a716-446655440001'],
    });
  });
};
describe('resource jobs', () => runTests(client));
describe('resource jobs (tree shakable, base)', () => runTests(partialClient));
describe('resource jobs (tree shakable, subresource)', () => runTests(parentPartialClient));
