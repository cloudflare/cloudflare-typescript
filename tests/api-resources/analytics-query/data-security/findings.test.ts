// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { DataSecurity } from 'cloudflare/resources/analytics-query/data-security/data-security';
import { BaseFindings } from 'cloudflare/resources/analytics-query/data-security/findings';

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
  resources: [BaseFindings],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [DataSecurity],
});

const runTests = (
  client: PartialCloudflare<{ analyticsQuery: { dataSecurity: { findings: BaseFindings } } }>,
) => {
  test('summary: only required params', async () => {
    const responsePromise = client.analyticsQuery.dataSecurity.findings.summary({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'country',
          op: 'in',
          values: ['US', 'CA', 'GB'],
        },
      ],
      from: '2024-11-01T00:00:00Z',
      to: '2024-11-08T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summary: required and optional params', async () => {
    const response = await client.analyticsQuery.dataSecurity.findings.summary({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'country',
          op: 'in',
          values: ['US', 'CA', 'GB'],
        },
      ],
      from: '2024-11-01T00:00:00Z',
      to: '2024-11-08T00:00:00Z',
    });
  });

  test('timeseries: only required params', async () => {
    const responsePromise = client.analyticsQuery.dataSecurity.findings.timeseries({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'country',
          op: 'in',
          values: ['US', 'CA', 'GB'],
        },
      ],
      from: '2024-11-01T00:00:00Z',
      to: '2024-11-08T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseries: required and optional params', async () => {
    const response = await client.analyticsQuery.dataSecurity.findings.timeseries({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'country',
          op: 'in',
          values: ['US', 'CA', 'GB'],
        },
      ],
      from: '2024-11-01T00:00:00Z',
      to: '2024-11-08T00:00:00Z',
    });
  });
};
describe('resource findings', () => runTests(client));
describe('resource findings (tree shakable, base)', () => runTests(partialClient));
describe('resource findings (tree shakable, subresource)', () => runTests(parentPartialClient));
