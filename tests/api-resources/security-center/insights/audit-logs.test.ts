// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAuditLogs } from 'cloudflare/resources/security-center/insights/audit-logs';
import { Insights } from 'cloudflare/resources/security-center/insights/insights';

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
  resources: [BaseAuditLogs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Insights],
});

const runTests = (
  client: PartialCloudflare<{ securityCenter: { insights: { auditLogs: BaseAuditLogs } } }>,
) => {
  test('list', async () => {
    const responsePromise = client.securityCenter.insights.auditLogs.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listByInsight', async () => {
    const responsePromise = client.securityCenter.insights.auditLogs.listByInsight('issue_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource auditLogs', () => runTests(client));
describe('resource auditLogs (tree shakable, base)', () => runTests(partialClient));
describe('resource auditLogs (tree shakable, subresource)', () => runTests(parentPartialClient));
