// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Casb } from 'cloudflare/resources/zero-trust/casb/casb';
import { BaseApplications } from 'cloudflare/resources/zero-trust/casb/applications/applications';

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
  resources: [BaseApplications],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Casb],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { casb: { applications: BaseApplications } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.applications.list({
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
    const response = await client.zeroTrust.casb.applications.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      environment: 'environment',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.applications.get('GITHUB', {
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

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.casb.applications.get('GITHUB', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource applications', () => runTests(client));
describe('resource applications (tree shakable, base)', () => runTests(partialClient));
describe('resource applications (tree shakable, subresource)', () => runTests(parentPartialClient));
