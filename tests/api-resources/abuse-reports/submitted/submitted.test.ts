// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbuseReports } from 'cloudflare/resources/abuse-reports/abuse-reports';
import { BaseSubmitted } from 'cloudflare/resources/abuse-reports/submitted/submitted';

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
  resources: [BaseSubmitted],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AbuseReports],
});

const runTests = (client: PartialCloudflare<{ abuseReports: { submitted: BaseSubmitted } }>) => {
  // TODO: support api token auth scheme
  test.skip('list: only required params', async () => {
    const responsePromise = client.abuseReports.submitted.list({
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
    const response = await client.abuseReports.submitted.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: 'id',
      created_after: '2019-12-27T18:11:19.117Z',
      created_before: '2019-12-27T18:11:19.117Z',
      domain: ['string'],
      page: 1,
      per_page: 1,
      sort: 'sort',
      status: ['submitted'],
      type: ['PHISH'],
    });
  });

  // TODO: support api token auth scheme
  test.skip('get: only required params', async () => {
    const responsePromise = client.abuseReports.submitted.get('report_id', {
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
  test.skip('get: required and optional params', async () => {
    const response = await client.abuseReports.submitted.get('report_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource submitted', () => runTests(client));
describe('resource submitted (tree shakable, base)', () => runTests(partialClient));
describe('resource submitted (tree shakable, subresource)', () => runTests(parentPartialClient));
