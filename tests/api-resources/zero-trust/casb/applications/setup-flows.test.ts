// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Applications } from 'cloudflare/resources/zero-trust/casb/applications/applications';
import { BaseSetupFlows } from 'cloudflare/resources/zero-trust/casb/applications/setup-flows';

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
  resources: [BaseSetupFlows],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Applications],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { applications: { setupFlows: BaseSetupFlows } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.applications.setupFlows.list('slug', {
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
    const response = await client.zeroTrust.casb.applications.setupFlows.list('slug', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      auth_method: 'auth_method',
      environment: 'fedramp',
    });
  });
};
describe('resource setupFlows', () => runTests(client));
describe('resource setupFlows (tree shakable, base)', () => runTests(partialClient));
describe('resource setupFlows (tree shakable, subresource)', () => runTests(parentPartialClient));
