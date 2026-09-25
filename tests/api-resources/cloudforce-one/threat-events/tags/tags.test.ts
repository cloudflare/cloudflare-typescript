// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ThreatEvents } from 'cloudflare/resources/cloudforce-one/threat-events/threat-events';
import { BaseTags } from 'cloudflare/resources/cloudforce-one/threat-events/tags/tags';

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
  resources: [BaseTags],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ThreatEvents],
});

const runTests = (client: PartialCloudflare<{ cloudforceOne: { threatEvents: { tags: BaseTags } } }>) => {
  // TODO: HTTP 401 from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.create({
      account_id: 'account_id',
      value: 'APT28',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism
  test.skip('create: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.tags.create({
      account_id: 'account_id',
      value: 'APT28',
      activeDuration: 'string',
      actorCategory: 'string',
      aliases: [
        {
          value: 'Fancy Bear',
          confidence: 8,
          tlp: 'amber',
        },
      ],
      aliasGroupNames: ['string'],
      aliasGroupNamesInternal: ['string'],
      attributionOrganization: 'string',
      categoryUuid: '12345678-1234-1234-1234-1234567890ab',
      confidence: 8,
      dateOfDiscovery: '2024-01-15T00:00:00Z',
      description: 'A suspected state-sponsored group.',
      externalReferenceLinks: ['string'],
      externalReferences: [{ url: 'https://example.com/report', description: 'Vendor threat report' }],
      internalAliases: [
        {
          value: 'Fancy Bear',
          confidence: 8,
          tlp: 'amber',
        },
      ],
      internalDescription: 'internalDescription',
      lastSeen: 'lastSeen',
      motive: 'string',
      opsecLevel: 'string',
      originCountryISO: 'string',
      priority: 0,
      properties: { foo: 'bar' },
      sophisticationLevel: 'string',
      tlp: 'amber',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.tags.list({
      account_id: 'account_id',
      cache: 'from-graph',
      categoryUuid: 'categoryUuid',
      filters: [
        {
          field: 'value',
          op: 'in',
          value: 'APT28',
        },
      ],
      page: 0,
      pageSize: 0,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.delete('tag_uuid', {
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

  test('delete: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.tags.delete('tag_uuid', {
      account_id: 'account_id',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.tags.edit('tag_uuid', {
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

  test('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.tags.edit('tag_uuid', {
      account_id: 'account_id',
      activeDuration: 'string',
      actorCategory: 'string',
      aliases: [
        {
          value: 'Fancy Bear',
          confidence: 8,
          tlp: 'amber',
        },
      ],
      aliasGroupNames: ['string'],
      aliasGroupNamesInternal: ['string'],
      attributionOrganization: 'string',
      categoryUuid: '12345678-1234-1234-1234-1234567890ab',
      confidence: 8,
      dateOfDiscovery: '2024-01-15T00:00:00Z',
      description: 'description',
      externalReferenceLinks: ['string'],
      externalReferences: [{ url: 'https://example.com/report', description: 'Vendor threat report' }],
      internalAliases: [
        {
          value: 'Fancy Bear',
          confidence: 8,
          tlp: 'amber',
        },
      ],
      internalDescription: 'internalDescription',
      lastSeen: 'lastSeen',
      motive: 'string',
      opsecLevel: 'string',
      originCountryISO: 'string',
      priority: 0,
      properties: { foo: 'bar' },
      sophisticationLevel: 'string',
      tlp: 'amber',
      value: 'APT28',
    });
  });
};
describe('resource tags', () => runTests(client));
describe('resource tags (tree shakable, base)', () => runTests(partialClient));
describe('resource tags (tree shakable, subresource)', () => runTests(parentPartialClient));
