// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseTags } from 'cloudflare/resources/cloudforce-one/threat-events/tags';
import { ThreatEvents } from 'cloudflare/resources/cloudforce-one/threat-events/threat-events';

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
      activeDuration: 'activeDuration',
      actorCategory: 'Nation State',
      aliases: [
        {
          value: 'Fancy Bear',
          confidence: 8,
          tlp: 'amber',
        },
      ],
      aliasGroupNames: ['string'],
      aliasGroupNamesInternal: ['string'],
      analyticPriority: 0,
      attributionConfidence: 'attributionConfidence',
      attributionConfidenceScore: 7,
      attributionOrganization: 'attributionOrganization',
      categoryUuid: '12345678-1234-1234-1234-1234567890ab',
      dateOfDiscovery: '2024-01-15',
      externalReferenceLinks: ['string'],
      internalAliases: [
        {
          value: 'Fancy Bear',
          confidence: 8,
          tlp: 'amber',
        },
      ],
      internalDescription: 'internalDescription',
      motive: 'Espionage',
      opsecLevel: 'opsecLevel',
      originCountryISO: 'originCountryISO',
      priority: 0,
      sophisticationLevel: 'sophisticationLevel',
    });
  });
};
describe('resource tags', () => runTests(client));
describe('resource tags (tree shakable, base)', () => runTests(partialClient));
describe('resource tags (tree shakable, subresource)', () => runTests(parentPartialClient));
