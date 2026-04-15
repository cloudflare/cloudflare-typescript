// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAuditLogs } from 'cloudflare/resources/user/audit-logs';
import { User } from 'cloudflare/resources/user/user';

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
  resources: [User],
});

const runTests = (client: PartialCloudflare<{ user: { auditLogs: BaseAuditLogs } }>) => {
  test('list', async () => {
    const responsePromise = client.user.auditLogs.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.auditLogs.list(
        {
          id: 'f174be97-19b1-40d6-954d-70cd5fbd52db',
          action: { type: 'add' },
          actor: { email: 'alice@example.com', ip: '17.168.228.63' },
          before: '2019-04-30',
          direction: 'desc',
          export: true,
          hide_user_logs: true,
          page: 50,
          per_page: 25,
          since: '2019-04-30',
          zone: { name: 'example.com' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource auditLogs', () => runTests(client));
describe('resource auditLogs (tree shakable, base)', () => runTests(partialClient));
describe('resource auditLogs (tree shakable, subresource)', () => runTests(parentPartialClient));
