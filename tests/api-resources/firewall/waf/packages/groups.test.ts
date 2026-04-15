// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseGroups } from 'cloudflare/resources/firewall/waf/packages/groups';
import { Packages } from 'cloudflare/resources/firewall/waf/packages/packages';

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
  resources: [BaseGroups],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Packages],
});

const runTests = (client: PartialCloudflare<{ firewall: { waf: { packages: { groups: BaseGroups } } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.firewall.waf.packages.groups.list('a25a9a7e9c00afc1fb2e0245519d725b', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.firewall.waf.packages.groups.list('a25a9a7e9c00afc1fb2e0245519d725b', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'desc',
      match: 'any',
      mode: 'on',
      name: 'Project Honey Pot',
      order: 'mode',
      page: 1,
      per_page: 5,
      rules_count: 10,
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.firewall.waf.packages.groups.edit('a25a9a7e9c00afc1fb2e0245519d725b', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      package_id: 'a25a9a7e9c00afc1fb2e0245519d725b',
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
    const response = await client.firewall.waf.packages.groups.edit('a25a9a7e9c00afc1fb2e0245519d725b', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      package_id: 'a25a9a7e9c00afc1fb2e0245519d725b',
      mode: 'on',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.firewall.waf.packages.groups.get('a25a9a7e9c00afc1fb2e0245519d725b', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      package_id: 'a25a9a7e9c00afc1fb2e0245519d725b',
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
    const response = await client.firewall.waf.packages.groups.get('a25a9a7e9c00afc1fb2e0245519d725b', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      package_id: 'a25a9a7e9c00afc1fb2e0245519d725b',
    });
  });
};
describe('resource groups', () => runTests(client));
describe('resource groups (tree shakable, base)', () => runTests(partialClient));
describe('resource groups (tree shakable, subresource)', () => runTests(parentPartialClient));
