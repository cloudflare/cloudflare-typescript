// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threatEvents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.create(0, {
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

  test('create: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.create(0, {
      attacker: 'Flying Yeti',
      attackerCountry: 'CN',
      category: 'Domain Resolution',
      date: '2022-04-01T00:00:00Z',
      event: 'An attacker registered the domain domain.com',
      indicatorType: 'domain',
      raw: { data: {}, source: 'example.com', tlp: 'amber' },
      tlp: 'amber',
      body_accountId: 123456,
      datasetId: 'durableObjectName',
      indicator: 'domain.com',
      tags: ['malware'],
      targetCountry: 'US',
      targetIndustry: 'Agriculture',
    });
  });

  test('update', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.update(0, 'eventId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cloudforceOne.threatEvents.update(0, 'eventId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cloudforceOne.threatEvents.update(
        0,
        'eventId',
        {
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
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.delete(0, 'eventId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cloudforceOne.threatEvents.delete(0, 'eventId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('bulkCreate: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.bulkCreate(0, {
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

  test('bulkCreate: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.bulkCreate(0, {
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

  test('get', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.get(0, 'eventId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cloudforceOne.threatEvents.get(0, 'eventId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
