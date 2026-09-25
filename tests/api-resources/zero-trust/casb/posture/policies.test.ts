// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePolicies } from 'cloudflare/resources/zero-trust/casb/posture/policies';
import { Posture } from 'cloudflare/resources/zero-trust/casb/posture/posture';

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
  resources: [BasePolicies],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Posture],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { posture: { policies: BasePolicies } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.policies.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      actions: {},
      applies_to_all_integrations: false,
      display_name: 'Auto-remediate public files',
      enabled: true,
      finding_type_id: '5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.policies.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      actions: {
        remediation_types: [{ remediation_type_id: '5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a' }],
        webhook_configs: [{ webhook_config_id: '3f7b8c9d-6e5a-4f3b-9c2d-1e0a8b7c6d5e' }],
      },
      applies_to_all_integrations: false,
      display_name: 'Auto-remediate public files',
      enabled: true,
      finding_type_id: '5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a',
      description: 'Automatically remove public access from files when detected',
      integration_ids: ['497f6eca-6276-4993-bfeb-53cbbbba6f08'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.policies.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '46148281d8a93d002ef242d8b0d5f9f6',
        actions: {},
        applies_to_all_integrations: false,
        display_name: 'Auto-remediate public files',
        enabled: true,
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.policies.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '46148281d8a93d002ef242d8b0d5f9f6',
        actions: {
          remediation_types: [{ remediation_type_id: '5a7d9e2f-1b3c-4d5e-8f6a-7b8c9d0e1f2a' }],
          webhook_configs: [{ webhook_config_id: '3f7b8c9d-6e5a-4f3b-9c2d-1e0a8b7c6d5e' }],
        },
        applies_to_all_integrations: false,
        display_name: 'Auto-remediate public files',
        enabled: true,
        description: 'Automatically remove public access from files when detected',
        integration_ids: ['497f6eca-6276-4993-bfeb-53cbbbba6f08'],
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.policies.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
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
    const response = await client.zeroTrust.casb.posture.policies.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      cursor: 'cursor',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.policies.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.policies.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.policies.get(
      '497f6eca-6276-4993-bfeb-53cbbbba6f08',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.policies.get(
      '497f6eca-6276-4993-bfeb-53cbbbba6f08',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
  });
};
describe('resource policies', () => runTests(client));
describe('resource policies (tree shakable, base)', () => runTests(partialClient));
describe('resource policies (tree shakable, subresource)', () => runTests(parentPartialClient));
