// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBGPFilterProfiles } from 'cloudflare/resources/magic-transit/bgp-filter-profiles';
import { MagicTransit } from 'cloudflare/resources/magic-transit/magic-transit';

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
  resources: [BaseBGPFilterProfiles],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MagicTransit],
});

const runTests = (
  client: PartialCloudflare<{ magicTransit: { bgpFilterProfiles: BaseBGPFilterProfiles } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.magicTransit.bgpFilterProfiles.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      match_action: 'allow',
      name: 'Allowed On-Prem Imports',
      targets: ['10.0.0.0/8{8,32}'],
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
    const response = await client.magicTransit.bgpFilterProfiles.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      match_action: 'allow',
      name: 'Allowed On-Prem Imports',
      targets: ['10.0.0.0/8{8,32}'],
      description: 'Allowed corporate subnets from on-premises',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicTransit.bgpFilterProfiles.update('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.magicTransit.bgpFilterProfiles.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'Allowed corporate subnets from on-premises',
      match_action: 'allow',
      name: 'Allowed On-Prem Imports',
      targets: ['10.0.0.0/8{8,32}'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicTransit.bgpFilterProfiles.list({
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

  test('list: required and optional params', async () => {
    const response = await client.magicTransit.bgpFilterProfiles.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicTransit.bgpFilterProfiles.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.magicTransit.bgpFilterProfiles.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicTransit.bgpFilterProfiles.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.magicTransit.bgpFilterProfiles.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource bgpFilterProfiles', () => runTests(client));
describe('resource bgpFilterProfiles (tree shakable, base)', () => runTests(partialClient));
describe('resource bgpFilterProfiles (tree shakable, subresource)', () => runTests(parentPartialClient));
