// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tags', () => {
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
      actorCategory: 'actorCategory',
      aliasGroupNames: ['string'],
      aliasGroupNamesInternal: ['string'],
      analyticPriority: 0,
      attributionConfidence: 'attributionConfidence',
      attributionOrganization: 'attributionOrganization',
      categoryUuid: '12345678-1234-1234-1234-1234567890ab',
      externalReferenceLinks: ['string'],
      internalDescription: 'internalDescription',
      motive: 'motive',
      opsecLevel: 'opsecLevel',
      originCountryISO: 'originCountryISO',
      priority: 0,
      sophisticationLevel: 'sophisticationLevel',
    });
  });
});
