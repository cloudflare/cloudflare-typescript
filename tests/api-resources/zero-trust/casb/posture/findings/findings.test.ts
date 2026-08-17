// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Posture } from 'cloudflare/resources/zero-trust/casb/posture/posture';
import { BaseFindings } from 'cloudflare/resources/zero-trust/casb/posture/findings/findings';

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
  resources: [Posture],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { posture: { findings: BaseFindings } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.list({
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
    const response = await client.zeroTrust.casb.posture.findings.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      cursor: 'cursor',
      direction: 'asc',
      finding_type_ids: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ignored: true,
      integration_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      max_affliction_date: '2019-12-27T18:11:19.117Z',
      min_affliction_date: '2019-12-27T18:11:19.117Z',
      observation: 'Activity',
      order: 'finding.name',
      page: 0,
      per_page: 0,
      product: 'Cloud',
      search: 'search',
      severity: 'Critical',
      type: 'Content',
      vendor: 'GOOGLE_WORKSPACE',
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.export({
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

  test('export: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findings.export({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      ignored: true,
      integration_id: ['55d7337e-1d0a-49fc-9826-925ba40df035'],
      max_affliction_date: '2019-08-24T14:15:22Z',
      min_affliction_date: '2018-08-24T14:15:22Z',
      orders: [{ direction: 'asc', name: 'instance_count' }],
      product: 'SaaS',
      search: 'public access',
      severities: ['CRITICAL'],
      vendors: ['AWS'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.get('U3RhaW5sZXNzIHJvY2tz', {
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

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findings.get('U3RhaW5sZXNzIHJvY2tz', {
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
    });
  });

  test('ignore: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.ignore({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      checks: [
        'MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMgo=',
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ignore: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findings.ignore({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      checks: [
        'MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMgo=',
      ],
    });
  });

  test('resetSeverity: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.resetSeverity('U3RhaW5sZXNzIHJvY2tz', {
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

  test('resetSeverity: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findings.resetSeverity('U3RhaW5sZXNzIHJvY2tz', {
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
    });
  });

  test('tuneSeverity: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.tuneSeverity('U3RhaW5sZXNzIHJvY2tz', {
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      new_severity: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuneSeverity: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findings.tuneSeverity('U3RhaW5sZXNzIHJvY2tz', {
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      new_severity: 1,
    });
  });

  test('unignore: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.unignore({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      checks: [
        'MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMgo=',
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unignore: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findings.unignore({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      checks: [
        'MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMgo=',
      ],
    });
  });
};
describe('resource findings', () => runTests(client));
describe('resource findings (tree shakable, base)', () => runTests(partialClient));
describe('resource findings (tree shakable, subresource)', () => runTests(parentPartialClient));
