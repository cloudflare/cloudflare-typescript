// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Deployments } from 'cloudflare/resources/pages/projects/deployments/deployments';
import { BaseTails } from 'cloudflare/resources/pages/projects/deployments/tails';

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
  resources: [BaseTails],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Deployments],
});

const runTests = (
  client: PartialCloudflare<{ pages: { projects: { deployments: { tails: BaseTails } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.pages.projects.deployments.tails.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', project_name: 'this-is-my-project-01' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.pages.projects.deployments.tails.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        project_name: 'this-is-my-project-01',
        filters: [{ outcome: 'bar' }],
      },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pages.projects.deployments.tails.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        project_name: 'this-is-my-project-01',
        deployment_id: '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('delete: required and optional params', async () => {
    const response = await client.pages.projects.deployments.tails.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        project_name: 'this-is-my-project-01',
        deployment_id: '023e105f4ecef8ad9ca31a8372d0c353',
      },
    );
  });
};
describe('resource tails', () => runTests(client));
describe('resource tails (tree shakable, base)', () => runTests(partialClient));
describe('resource tails (tree shakable, subresource)', () => runTests(parentPartialClient));
