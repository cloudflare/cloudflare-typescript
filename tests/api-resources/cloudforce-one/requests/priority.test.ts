// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePriorityResource } from 'cloudflare/resources/cloudforce-one/requests/priority';
import { Requests } from 'cloudflare/resources/cloudforce-one/requests/requests';

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
  resources: [BasePriorityResource],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Requests],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { requests: { priority: BasePriorityResource } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.priority.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      labels: ['DoS', 'CVE'],
      priority: 1,
      requirement: 'DoS attacks carried out by CVEs',
      tlp: 'clear',
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
    const response = await client.cloudforceOne.requests.priority.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      labels: ['DoS', 'CVE'],
      priority: 1,
      requirement: 'DoS attacks carried out by CVEs',
      tlp: 'clear',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.priority.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        labels: ['DoS', 'CVE'],
        priority: 1,
        requirement: 'DoS attacks carried out by CVEs',
        tlp: 'clear',
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
    const response = await client.cloudforceOne.requests.priority.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        labels: ['DoS', 'CVE'],
        priority: 1,
        requirement: 'DoS attacks carried out by CVEs',
        tlp: 'clear',
      },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.priority.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.cloudforceOne.requests.priority.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.priority.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.cloudforceOne.requests.priority.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('quota: only required params', async () => {
    const responsePromise = client.cloudforceOne.requests.priority.quota({
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
    const response = await client.cloudforceOne.requests.priority.quota({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource priority', () => runTests(client));
describe('resource priority (tree shakable, base)', () => runTests(partialClient));
describe('resource priority (tree shakable, subresource)', () => runTests(parentPartialClient));
