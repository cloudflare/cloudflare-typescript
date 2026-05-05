// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Investigate } from 'cloudflare/resources/email-security/investigate/investigate';
import { BaseReclassify } from 'cloudflare/resources/email-security/investigate/reclassify';

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
  resources: [BaseReclassify],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Investigate],
});

const runTests = (
  client: PartialCloudflare<{ emailSecurity: { investigate: { reclassify: BaseReclassify } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.reclassify.create(
      '4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', expected_disposition: 'NONE' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.emailSecurity.investigate.reclassify.create(
      '4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        expected_disposition: 'NONE',
        eml_content: 'eml_content',
        escalated_submission_id: 'escalated_submission_id',
      },
    );
  });
};
describe('resource reclassify', () => runTests(client));
describe('resource reclassify (tree shakable, base)', () => runTests(partialClient));
describe('resource reclassify (tree shakable, subresource)', () => runTests(parentPartialClient));
