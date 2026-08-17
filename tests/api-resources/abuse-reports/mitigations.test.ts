// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbuseReports } from 'cloudflare/resources/abuse-reports/abuse-reports';
import { BaseMitigations } from 'cloudflare/resources/abuse-reports/mitigations';

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
  resources: [BaseMitigations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AbuseReports],
});

const runTests = (client: PartialCloudflare<{ abuseReports: { mitigations: BaseMitigations } }>) => {
  // TODO: support api token auth scheme
  test.skip('list: only required params', async () => {
    const responsePromise = client.abuseReports.mitigations.list('report_id', {
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
    const response = await client.abuseReports.mitigations.list('report_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      effective_after: '2009-11-10T23:00:00Z',
      effective_before: '2009-11-10T23:00:00Z',
      entity_type: 'url_pattern',
      page: 0,
      per_page: 0,
      sort: 'type,asc',
      status: 'pending',
      type: 'account_suspend',
    });
  });

  // TODO: support api token auth scheme
  test.skip('review: only required params', async () => {
    const responsePromise = client.abuseReports.mitigations.review('report_id', {
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
  test.skip('review: required and optional params', async () => {
    const response = await client.abuseReports.mitigations.review('report_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      appeals: [{ id: 'id', reason: 'misclassified' }],
      data: {
        city: 'city',
        country: 'country',
        email: 'dev@stainless.com',
        full_name: 'full_name',
        jurisdiction_consent: true,
        perjury_attestation: true,
        phone_number: 'phone_number',
        signature: 'signature',
        state: 'state',
        street_address: 'street_address',
        urls: ['https://example.com'],
        zip_code: 'zip_code',
        company: 'company',
        counter_notice_response: 'counter_notice_response',
      },
      type: 'counter_notice',
    });
  });
};
describe('resource mitigations', () => runTests(client));
describe('resource mitigations (tree shakable, base)', () => runTests(partialClient));
describe('resource mitigations (tree shakable, subresource)', () => runTests(parentPartialClient));
