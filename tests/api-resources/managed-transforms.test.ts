// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseManagedTransforms } from 'cloudflare/resources/managed-transforms/managed-transforms';

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
  resources: [BaseManagedTransforms],
});

const runTests = (client: PartialCloudflare<{ managedTransforms: BaseManagedTransforms }>) => {
  // TODO: investigate unauthorized HTTP response
  test.skip('list: only required params', async () => {
    const responsePromise = client.managedTransforms.list({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('list: required and optional params', async () => {
    const response = await client.managedTransforms.list({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('delete: only required params', async () => {
    const responsePromise = client.managedTransforms.delete({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('delete: required and optional params', async () => {
    const response = await client.managedTransforms.delete({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('edit: only required params', async () => {
    const responsePromise = client.managedTransforms.edit({
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      managed_request_headers: [{ id: 'add_bot_protection_headers', enabled: true }],
      managed_response_headers: [{ id: 'add_security_headers', enabled: true }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('edit: required and optional params', async () => {
    const response = await client.managedTransforms.edit({
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      managed_request_headers: [{ id: 'add_bot_protection_headers', enabled: true }],
      managed_response_headers: [{ id: 'add_security_headers', enabled: true }],
    });
  });
};
describe('resource managedTransforms', () => runTests(client));
describe('resource managedTransforms (tree shakable, base)', () => runTests(partialClient));
