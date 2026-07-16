// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Findings } from 'cloudflare/resources/zero-trust/casb/posture/findings/findings';
import { BaseInstances } from 'cloudflare/resources/zero-trust/casb/posture/findings/instances';

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
  resources: [BaseInstances],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Findings],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { posture: { findings: { instances: BaseInstances } } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.instances.list('U3RhaW5sZXNzIHJvY2tz', {
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
    const response = await client.zeroTrust.casb.posture.findings.instances.list('U3RhaW5sZXNzIHJvY2tz', {
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      archived: true,
      asset_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      cursor: 'cursor',
      direction: 'asc',
      finding_instance_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      max_affliction_date: '2019-12-27T18:11:19.117Z',
      min_affliction_date: '2019-12-27T18:11:19.117Z',
      order: 'affliction_date',
      page: 0,
      per_page: 0,
      remediation_statuses: ['none'],
      search: 'search',
    });
  });

  test('archive: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.instances.archive('U3RhaW5sZXNzIHJvY2tz', {
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      check_instances: ['497f6eca-6276-4993-bfeb-53cbbbba6f08'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findings.instances.archive('U3RhaW5sZXNzIHJvY2tz', {
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      check_instances: ['497f6eca-6276-4993-bfeb-53cbbbba6f08'],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.instances.export(
      '00000000-0000-0000-0000-000000000001-00000000-0000-0000-0000-000000000002',
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

  test('export: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findings.instances.export(
      '00000000-0000-0000-0000-000000000001-00000000-0000-0000-0000-000000000002',
      {
        account_id: '46148281d8a93d002ef242d8b0d5f9f6',
        archived: false,
        max_affliction_date: '2024-01-01T00:00:00Z',
        min_affliction_date: '2023-01-01T00:00:00Z',
        orders: [{ direction: 'asc', name: 'asset.name' }],
        search: 'sensitive data',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.instances.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6', finding_id: 'U3RhaW5sZXNzIHJvY2tz' },
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
    const response = await client.zeroTrust.casb.posture.findings.instances.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6', finding_id: 'U3RhaW5sZXNzIHJvY2tz' },
    );
  });

  test('unarchive: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.findings.instances.unarchive(
      'U3RhaW5sZXNzIHJvY2tz',
      {
        account_id: '46148281d8a93d002ef242d8b0d5f9f6',
        check_instances: ['497f6eca-6276-4993-bfeb-53cbbbba6f08'],
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

  test('unarchive: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.findings.instances.unarchive(
      'U3RhaW5sZXNzIHJvY2tz',
      {
        account_id: '46148281d8a93d002ef242d8b0d5f9f6',
        check_instances: ['497f6eca-6276-4993-bfeb-53cbbbba6f08'],
      },
    );
  });
};
describe('resource instances', () => runTests(client));
describe('resource instances (tree shakable, base)', () => runTests(partialClient));
describe('resource instances (tree shakable, subresource)', () => runTests(parentPartialClient));
