// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { EmailSecurity } from 'cloudflare/resources/email-security/email-security';
import { BaseSubmissions } from 'cloudflare/resources/email-security/submissions';

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
  resources: [BaseSubmissions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [EmailSecurity],
});

const runTests = (client: PartialCloudflare<{ emailSecurity: { submissions: BaseSubmissions } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.emailSecurity.submissions.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.emailSecurity.submissions.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      end: '2019-12-27T18:11:19.117Z',
      escalated_from_user: true,
      original_disposition: 'MALICIOUS',
      outcome_disposition: 'MALICIOUS',
      page: 1,
      per_page: 20,
      query: 'query',
      requested_disposition: 'MALICIOUS',
      start: '2019-12-27T18:11:19.117Z',
      status: 'status',
      submission_id: 'submission_id',
      type: 'TEAM',
    });
  });
};
describe('resource submissions', () => runTests(client));
describe('resource submissions (tree shakable, base)', () => runTests(partialClient));
describe('resource submissions (tree shakable, subresource)', () => runTests(parentPartialClient));
