// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { FindingTypes } from 'cloudflare/resources/zero-trust/casb/posture/finding-types/finding-types';
import { BaseRemediationTypes } from 'cloudflare/resources/zero-trust/casb/posture/finding-types/remediation-types';

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
  resources: [BaseRemediationTypes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [FindingTypes],
});

const runTests = (
  client: PartialCloudflare<{
    zeroTrust: { casb: { posture: { findingTypes: { remediationTypes: BaseRemediationTypes } } } };
  }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findingTypes.remediationTypes.list(
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

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findingTypes.remediationTypes.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '46148281d8a93d002ef242d8b0d5f9f6',
        cursor: 'cursor',
        integration_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        page: 0,
        per_page: 0,
      },
    );
  });
};
describe('resource remediationTypes', () => runTests(client));
describe('resource remediationTypes (tree shakable, base)', () => runTests(partialClient));
describe('resource remediationTypes (tree shakable, subresource)', () => runTests(parentPartialClient));
