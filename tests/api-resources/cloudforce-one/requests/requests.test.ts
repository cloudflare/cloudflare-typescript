// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CloudforceOne } from 'cloudflare/resources/cloudforce-one/cloudforce-one';
import { BaseRequests } from 'cloudflare/resources/cloudforce-one/requests/requests';

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
  resources: [BaseRequests],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CloudforceOne],
});

const runTests = (client: PartialCloudflare<{ cloudforceOne: { requests: BaseRequests } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.cloudforceOne.requests.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      content: 'What regions were most effected by the recent DoS?',
      priority: 'routine',
      request_type: 'Victomology',
      summary: 'DoS attack',
      tlp: 'clear',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.cloudforceOne.requests.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      content: 'What regions were most effected by the recent DoS?',
      priority: 'routine',
      request_type: 'Victomology',
      summary: 'DoS attack',
      tlp: 'clear',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 0,
      per_page: 10,
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
    const response = await client.cloudforceOne.requests.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 0,
      per_page: 10,
      completed_after: '2022-01-01T00:00:00Z',
      completed_before: '2024-01-01T00:00:00Z',
      created_after: '2022-01-01T00:00:00Z',
      created_before: '2024-01-01T00:00:00Z',
      request_type: 'Victomology',
      sort_by: 'created',
      sort_order: 'asc',
      status: 'open',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.cloudforceOne.requests.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('constants: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.constants({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('constants: required and optional params', async () => {
    const response = await client.cloudforceOne.requests.constants({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.cloudforceOne.requests.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('quota: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.quota({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('quota: required and optional params', async () => {
    const response = await client.cloudforceOne.requests.quota({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('types: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.types({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('types: required and optional params', async () => {
    const response = await client.cloudforceOne.requests.types({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource requests', () => runTests(client));
describe('resource requests (tree shakable, base)', () => runTests(partialClient));
describe('resource requests (tree shakable, subresource)', () => runTests(parentPartialClient));
