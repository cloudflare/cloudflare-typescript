// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Applications } from 'cloudflare/resources/containers/applications/applications';
import { BaseRollouts } from 'cloudflare/resources/containers/applications/rollouts';

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
  resources: [BaseRollouts],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Applications],
});

const runTests = (
  client: PartialCloudflare<{ containers: { applications: { rollouts: BaseRollouts } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.containers.applications.rollouts.create('application_id', {
      account_id: 'account-123',
      description: 'description',
      strategy: 'rolling',
      target_configuration: {},
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
    const response = await client.containers.applications.rollouts.create('application_id', {
      account_id: 'account-123',
      description: 'description',
      strategy: 'rolling',
      target_configuration: {
        authorized_keys: [{ public_key: 'public_key', name: 'name' }],
        command: ['myapp', '--default-option'],
        entrypoint: ['/bin/bash'],
        environment_variables: [{ name: 'name', value: 'value' }],
        image: 'image',
        instance_type: 'lite',
        observability: { logs: { enabled: true } },
      },
      kind: 'full_auto',
      percentage: 0,
      step_percentage: 5,
      steps: [
        {
          description: 'description',
          step_size: { percentage: 0 },
        },
      ],
    });
  });
};
describe('resource rollouts', () => runTests(client));
describe('resource rollouts (tree shakable, base)', () => runTests(partialClient));
describe('resource rollouts (tree shakable, subresource)', () => runTests(parentPartialClient));
