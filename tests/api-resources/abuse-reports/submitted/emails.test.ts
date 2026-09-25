// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseEmails } from 'cloudflare/resources/abuse-reports/submitted/emails';
import { Submitted } from 'cloudflare/resources/abuse-reports/submitted/submitted';

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
  resources: [BaseEmails],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Submitted],
});

const runTests = (client: PartialCloudflare<{ abuseReports: { submitted: { emails: BaseEmails } } }>) => {
  // TODO: support api token auth scheme
  test.skip('list: only required params', async () => {
    const responsePromise = client.abuseReports.submitted.emails.list('report_id', {
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

  // TODO: support api token auth scheme
  test.skip('list: required and optional params', async () => {
    const response = await client.abuseReports.submitted.emails.list('report_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 0,
      per_page: 0,
    });
  });
};
describe('resource emails', () => runTests(client));
describe('resource emails (tree shakable, base)', () => runTests(partialClient));
describe('resource emails (tree shakable, subresource)', () => runTests(parentPartialClient));
