// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Posture } from 'cloudflare/resources/zero-trust/casb/posture/posture';
import { BaseFindingTypes } from 'cloudflare/resources/zero-trust/casb/posture/finding-types/finding-types';

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
  resources: [BaseFindingTypes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Posture],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { posture: { findingTypes: BaseFindingTypes } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findingTypes.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      applies_to_all_integrations: true,
      asset_class: 'GoogleWorkspaceFile',
      asset_vendor: 'GOOGLE_WORKSPACE',
      description: 'Detects files shared with too many users',
      expression: 'default result := "pass"\n\nresult := "fail" if input.asset.publicLinkDisabled == false\n',
      name: 'Excessive File Sharing',
      severity: 'High',
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
    const response = await client.zeroTrust.casb.posture.findingTypes.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      applies_to_all_integrations: true,
      asset_class: 'GoogleWorkspaceFile',
      asset_vendor: 'GOOGLE_WORKSPACE',
      description: 'Detects files shared with too many users',
      expression: 'default result := "pass"\n\nresult := "fail" if input.asset.publicLinkDisabled == false\n',
      name: 'Excessive File Sharing',
      severity: 'High',
      integration_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findingTypes.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6', applies_to_all_integrations: true },
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
    const response = await client.zeroTrust.casb.posture.findingTypes.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '46148281d8a93d002ef242d8b0d5f9f6',
        applies_to_all_integrations: true,
        description: 'Detects files shared with too many users',
        integration_ids: ['550e8400-e29b-41d4-a716-446655440000'],
        name: 'Excessive File Sharing',
        severity: 'High',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findingTypes.list({
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
    const response = await client.zeroTrust.casb.posture.findingTypes.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      direction: 'asc',
      max_updated_at: '2019-12-27T18:11:19.117Z',
      min_updated_at: '2019-12-27T18:11:19.117Z',
      order: 'created',
      origins: ['system'],
      page: 0,
      per_page: 0,
      quarantined: true,
      search: 'search',
      severities: ['high'],
      types: ['Content'],
      vendors: ['GOOGLE_WORKSPACE'],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findingTypes.delete(
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
    const response = await client.zeroTrust.casb.posture.findingTypes.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findingTypes.get(
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

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findingTypes.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
  });

  test('validate: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findingTypes.validate({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      applies_to_all_integrations: true,
      asset_class: 'GoogleWorkspaceFile',
      asset_vendor: 'GOOGLE_WORKSPACE',
      description: 'Detects files shared with too many users',
      expression: 'default result := "pass"\n\nresult := "fail" if input.asset.publicLinkDisabled == false\n',
      name: 'Excessive File Sharing',
      severity: 'High',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validate: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findingTypes.validate({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      applies_to_all_integrations: true,
      asset_class: 'GoogleWorkspaceFile',
      asset_vendor: 'GOOGLE_WORKSPACE',
      description: 'Detects files shared with too many users',
      expression: 'default result := "pass"\n\nresult := "fail" if input.asset.publicLinkDisabled == false\n',
      name: 'Excessive File Sharing',
      severity: 'High',
      integration_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });
};
describe('resource findingTypes', () => runTests(client));
describe('resource findingTypes (tree shakable, base)', () => runTests(partialClient));
describe('resource findingTypes (tree shakable, subresource)', () => runTests(parentPartialClient));
