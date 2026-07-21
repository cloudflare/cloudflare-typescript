// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CloudforceOne } from 'cloudflare/resources/cloudforce-one/cloudforce-one';
import { BaseThreatEvents } from 'cloudflare/resources/cloudforce-one/threat-events/threat-events';

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
  resources: [BaseThreatEvents],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CloudforceOne],
});

const runTests = (client: PartialCloudflare<{ cloudforceOne: { threatEvents: BaseThreatEvents } }>) => {
  // TODO: HTTP 401 from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.create({
      account_id: 'account_id',
      category: 'Domain Resolution',
      date: '2022-04-01T00:00:00Z',
      event: 'An attacker registered the domain domain.com',
      raw: { data: { foo: 'bar' } },
      tlp: 'amber',
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
    const response = await client.cloudforceOne.threatEvents.create({
      account_id: 'account_id',
      category: 'Domain Resolution',
      date: '2022-04-01T00:00:00Z',
      event: 'An attacker registered the domain domain.com',
      raw: {
        data: { foo: 'bar' },
        source: 'example.com',
        tlp: 'amber',
      },
      tlp: 'amber',
      accountId: 123456,
      attacker: 'Flying Yeti',
      attackerCountry: 'CN',
      datasetId: 'durableObjectName',
      indicator: 'domain.com',
      indicators: [{ indicatorType: 'domain', value: 'malicious.com' }],
      indicatorType: 'domain',
      insight: 'This domain was likely registered for phishing purposes',
      tags: ['malware'],
      targetCountry: 'US',
      targetIndustry: 'Agriculture',
    });
  });

  // TODO: HTTP 401 from prism
  test.skip('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism
  test.skip('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.list({
      account_id: 'account_id',
      cache: 'from-graph',
      cursor:
        'eyJ2ZXJzaW9uIjoxLCJwb3NpdGlvbiI6eyJkYXRlIjoiMjAyNC0wMS0xMlQxMDowMDowMFoiLCJ1dWlkIjoiYWJjMTIzIn19',
      datasetId: ['string'],
      forceRefresh: true,
      format: 'json',
      order: 'asc',
      orderBy: 'orderBy',
      page: 0,
      pageSize: 0,
      search: [
        {
          field: 'attackerCountry',
          op: 'equals',
          value: 'usa',
        },
      ],
      source: 'do',
    });
  });

  // TODO: HTTP 401 from prism
  test.skip('bulkCreate: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.bulkCreate({
      account_id: 'account_id',
      data: [
        {
          category: 'Domain Resolution',
          date: '2022-04-01T00:00:00Z',
          event: 'An attacker registered the domain domain.com',
          raw: { data: { foo: 'bar' } },
          tlp: 'amber',
        },
      ],
      datasetId: 'durableObjectName',
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
  test.skip('bulkCreate: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.bulkCreate({
      account_id: 'account_id',
      data: [
        {
          category: 'Domain Resolution',
          date: '2022-04-01T00:00:00Z',
          event: 'An attacker registered the domain domain.com',
          raw: {
            data: { foo: 'bar' },
            source: 'example.com',
            tlp: 'amber',
          },
          tlp: 'amber',
          accountId: 123456,
          attacker: 'Flying Yeti',
          attackerCountry: 'CN',
          datasetId: 'durableObjectName',
          indicator: 'domain.com',
          indicators: [{ indicatorType: 'domain', value: 'malicious.com' }],
          indicatorType: 'domain',
          insight: 'This domain was likely registered for phishing purposes',
          tags: ['malware'],
          targetCountry: 'US',
          targetIndustry: 'Agriculture',
        },
      ],
      datasetId: 'durableObjectName',
      includeCreatedEvents: true,
    });
  });

  test('bulkCreateRelationships: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.bulkCreateRelationships({
      account_id: 'account_id',
      data: [
        {
          category: 'Domain Resolution',
          date: '2022-04-01T00:00:00Z',
          event: 'An attacker registered the domain domain.com',
          raw: { data: { foo: 'bar' } },
          tlp: 'amber',
        },
      ],
      datasetId: 'durableObjectName',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkCreateRelationships: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.bulkCreateRelationships({
      account_id: 'account_id',
      data: [
        {
          category: 'Domain Resolution',
          date: '2022-04-01T00:00:00Z',
          event: 'An attacker registered the domain domain.com',
          raw: {
            data: { foo: 'bar' },
            source: 'example.com',
            tlp: 'amber',
          },
          tlp: 'amber',
          accountId: 123456,
          attacker: 'Flying Yeti',
          attackerCountry: 'CN',
          datasetId: 'durableObjectName',
          indicator: 'domain.com',
          indicators: [{ indicatorType: 'domain', value: 'malicious.com' }],
          indicatorType: 'domain',
          insight: 'This domain was likely registered for phishing purposes',
          tags: ['malware'],
          targetCountry: 'US',
          targetIndustry: 'Agriculture',
        },
      ],
      datasetId: 'durableObjectName',
    });
  });

  // TODO: HTTP 401 from prism
  test.skip('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.edit('event_id', {
      account_id: 'account_id',
      datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
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
  test.skip('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.edit('event_id', {
      account_id: 'account_id',
      datasetId: '9b769969-a211-466c-8ac3-cb91266a066a',
      attacker: 'Flying Yeti',
      attackerCountry: 'CN',
      category: 'Domain Resolution',
      createdAt: '2025-12-19T00:00:00Z',
      date: '2022-04-01T00:00:00Z',
      event: 'An attacker registered the domain domain.com',
      indicator: 'domain2.com',
      indicatorType: 'domain',
      insight: 'new insight',
      raw: {
        data: { foo: 'bar' },
        source: 'example.com',
        tlp: 'amber',
      },
      targetCountry: 'US',
      targetIndustry: 'Insurance',
      tlp: 'amber',
    });
  });

  // TODO: HTTP 401 from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.get('event_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.get('event_id', { account_id: 'account_id' });
  });
};
describe('resource threatEvents', () => runTests(client));
describe('resource threatEvents (tree shakable, base)', () => runTests(partialClient));
describe('resource threatEvents (tree shakable, subresource)', () => runTests(parentPartialClient));
