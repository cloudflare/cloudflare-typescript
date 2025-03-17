// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threatEvents', () => {
  // TODO: HTTP 401 from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.create({
      account_id: 0,
      attacker: 'Flying Yeti',
      attackerCountry: 'CN',
      category: 'Domain Resolution',
      date: '2022-04-01T00:00:00Z',
      event: 'An attacker registered the domain domain.com',
      indicatorType: 'domain',
      raw: {},
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
      account_id: 0,
      attacker: 'Flying Yeti',
      attackerCountry: 'CN',
      category: 'Domain Resolution',
      date: '2022-04-01T00:00:00Z',
      event: 'An attacker registered the domain domain.com',
      indicatorType: 'domain',
      raw: { data: {}, source: 'example.com', tlp: 'amber' },
      tlp: 'amber',
      accountId: 123456,
      datasetId: 'durableObjectName',
      indicator: 'domain.com',
      tags: ['malware'],
      targetCountry: 'US',
      targetIndustry: 'Agriculture',
    });
  });

  // TODO: HTTP 401 from prism
  test.skip('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.delete('event_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism
  test.skip('delete: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.delete('event_id', { account_id: 0 });
  });

  // TODO: HTTP 401 from prism
  test.skip('bulkCreate: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.bulkCreate({
      account_id: 0,
      data: [
        {
          attacker: 'Flying Yeti',
          attackerCountry: 'CN',
          category: 'Domain Resolution',
          date: '2022-04-01T00:00:00Z',
          event: 'An attacker registered the domain domain.com',
          indicatorType: 'domain',
          raw: {},
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
      account_id: 0,
      data: [
        {
          attacker: 'Flying Yeti',
          attackerCountry: 'CN',
          category: 'Domain Resolution',
          date: '2022-04-01T00:00:00Z',
          event: 'An attacker registered the domain domain.com',
          indicatorType: 'domain',
          raw: { data: {}, source: 'example.com', tlp: 'amber' },
          tlp: 'amber',
          accountId: 123456,
          datasetId: 'durableObjectName',
          indicator: 'domain.com',
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
    const responsePromise = client.cloudforceOne.threatEvents.edit('event_id', { account_id: 0 });
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
      account_id: 0,
      attacker: 'Flying Yeti',
      attackerCountry: 'CN',
      category: 'Domain Resolution',
      date: '2022-04-01T00:00:00Z',
      event: 'An attacker registered the domain domain.com',
      indicator: 'domain2.com',
      indicatorType: 'sha256',
      targetCountry: 'US',
      targetIndustry: 'Insurance',
      tlp: 'amber',
    });
  });

  // TODO: HTTP 401 from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.get('event_id', { account_id: 0 });
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
    const response = await client.cloudforceOne.threatEvents.get('event_id', { account_id: 0 });
  });
});
