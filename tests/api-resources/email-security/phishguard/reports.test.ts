// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Phishguard } from 'cloudflare/resources/email-security/phishguard/phishguard';
import { BaseReports } from 'cloudflare/resources/email-security/phishguard/reports';

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
  resources: [BaseReports],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Phishguard],
});

const runTests = (client: PartialCloudflare<{ emailSecurity: { phishguard: { reports: BaseReports } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.emailSecurity.phishguard.reports.list({
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
    const response = await client.emailSecurity.phishguard.reports.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      end: '2019-12-27T18:11:19.117Z',
      from_date: '2019-12-27',
      start: '2019-12-27T18:11:19.117Z',
      to_date: '2019-12-27',
    });
  });
};
describe('resource reports', () => runTests(client));
describe('resource reports (tree shakable, base)', () => runTests(partialClient));
describe('resource reports (tree shakable, subresource)', () => runTests(parentPartialClient));
