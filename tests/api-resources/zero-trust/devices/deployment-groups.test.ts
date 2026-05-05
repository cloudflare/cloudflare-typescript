// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDeploymentGroups } from 'cloudflare/resources/zero-trust/devices/deployment-groups';
import { Devices } from 'cloudflare/resources/zero-trust/devices/devices';

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
  resources: [BaseDeploymentGroups],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Devices],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { devices: { deploymentGroups: BaseDeploymentGroups } } }>,
) => {
  // HTTP 401 error from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.deploymentGroups.create({
      account_id: 'account_id',
      name: 'Engineering Ring 0',
      version_config: [{ target_environment: 'windows', version: '2026.5.234.0' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 401 error from prism
  test.skip('create: required and optional params', async () => {
    const response = await client.zeroTrust.devices.deploymentGroups.create({
      account_id: 'account_id',
      name: 'Engineering Ring 0',
      version_config: [{ target_environment: 'windows', version: '2026.5.234.0' }],
      policy_ids: ['string'],
    });
  });

  // HTTP 401 error from prism
  test.skip('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.deploymentGroups.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 401 error from prism
  test.skip('list: required and optional params', async () => {
    const response = await client.zeroTrust.devices.deploymentGroups.list({
      account_id: 'account_id',
      page: 1,
      per_page: 1,
    });
  });

  // HTTP 401 error from prism
  test.skip('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.deploymentGroups.delete('group_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 401 error from prism
  test.skip('delete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.deploymentGroups.delete('group_id', {
      account_id: 'account_id',
    });
  });

  // HTTP 401 error from prism
  test.skip('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.deploymentGroups.edit('group_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 401 error from prism
  test.skip('edit: required and optional params', async () => {
    const response = await client.zeroTrust.devices.deploymentGroups.edit('group_id', {
      account_id: 'account_id',
      name: 'Engineering Ring 0',
      policy_ids: ['string'],
      version_config: [{ target_environment: 'windows', version: '2026.5.234.0' }],
    });
  });

  // HTTP 401 error from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.deploymentGroups.get('group_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 401 error from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.deploymentGroups.get('group_id', {
      account_id: 'account_id',
    });
  });
};
describe('resource deploymentGroups', () => runTests(client));
describe('resource deploymentGroups (tree shakable, base)', () => runTests(partialClient));
describe('resource deploymentGroups (tree shakable, subresource)', () => runTests(parentPartialClient));
