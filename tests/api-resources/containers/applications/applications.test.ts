// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Containers } from 'cloudflare/resources/containers/containers';
import { BaseApplications } from 'cloudflare/resources/containers/applications/applications';

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
  resources: [Containers],
});

const runTests = (client: PartialCloudflare<{ containers: { applications: BaseApplications } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.containers.applications.create({
      account_id: 'account-123',
      configuration: { image: 'image' },
      instances: 0,
      max_instances: 0,
      name: 'name',
      scheduling_policy: 'default',
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
    const response = await client.containers.applications.create({
      account_id: 'account-123',
      configuration: {
        image: 'image',
        authorized_keys: [{ public_key: 'public_key', name: 'name' }],
        command: ['myapp', '--default-option'],
        entrypoint: ['/bin/bash'],
        environment_variables: [{ name: 'name', value: 'value' }],
        instance_type: 'lite',
        observability: { logs: { enabled: true } },
      },
      instances: 0,
      max_instances: 0,
      name: 'name',
      scheduling_policy: 'default',
      constraints: { jurisdiction: 'jurisdiction', regions: ['WNAM'] },
      durable_objects: { namespace_id: '14758f1afd44c09b7992073ccf00b43d' },
      observability: { logs: { enabled: true } },
      rollout_active_grace_period: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.containers.applications.list({ account_id: 'account-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.containers.applications.list({
      account_id: 'account-123',
      image: 'image',
      name: 'name',
      page_token: 'page_token',
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.containers.applications.delete('application_id', {
      account_id: 'account-123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.containers.applications.delete('application_id', {
      account_id: 'account-123',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.containers.applications.edit('application_id', {
      account_id: 'account-123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.containers.applications.edit('application_id', {
      account_id: 'account-123',
      configuration: {
        authorized_keys: [{ public_key: 'public_key', name: 'name' }],
        wrangler_ssh: { enabled: true, port: 1 },
      },
      constraints: { jurisdiction: 'jurisdiction', regions: ['WNAM'] },
      max_instances: 0,
      observability: { logs: { enabled: true } },
      rollout_active_grace_period: 0,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.containers.applications.get('application_id', {
      account_id: 'account-123',
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
    const response = await client.containers.applications.get('application_id', {
      account_id: 'account-123',
    });
  });
};
describe('resource applications', () => runTests(client));
describe('resource applications (tree shakable, base)', () => runTests(partialClient));
describe('resource applications (tree shakable, subresource)', () => runTests(parentPartialClient));
