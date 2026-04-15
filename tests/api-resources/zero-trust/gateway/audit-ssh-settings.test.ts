// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAuditSSHSettings } from 'cloudflare/resources/zero-trust/gateway/audit-ssh-settings';
import { Gateway } from 'cloudflare/resources/zero-trust/gateway/gateway';

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
  resources: [BaseAuditSSHSettings],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Gateway],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { gateway: { auditSSHSettings: BaseAuditSSHSettings } } }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.auditSSHSettings.update({
      account_id: '699d98642c564d2e855e9661899b7252',
      public_key: '1pyl6I1tL7xfJuFYVzXlUW8uXXlpxegHXBzGCBKaSFA=',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.auditSSHSettings.update({
      account_id: '699d98642c564d2e855e9661899b7252',
      public_key: '1pyl6I1tL7xfJuFYVzXlUW8uXXlpxegHXBzGCBKaSFA=',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.auditSSHSettings.get({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.gateway.auditSSHSettings.get({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('rotateSeed: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.auditSSHSettings.rotateSeed({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rotateSeed: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.auditSSHSettings.rotateSeed({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
};
describe('resource auditSSHSettings', () => runTests(client));
describe('resource auditSSHSettings (tree shakable, base)', () => runTests(partialClient));
describe('resource auditSSHSettings (tree shakable, subresource)', () => runTests(parentPartialClient));
