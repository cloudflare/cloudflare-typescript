// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource top', () => {
  test('ases: only required params', async () => {
    const responsePromise = client.radar.dns.top.ases({ domain: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ases: required and optional params', async () => {
    const response = await client.radar.dns.top.ases({
      domain: ['string'],
      asn: ['string'],
      continent: ['string'],
      dateEnd: ['2019-12-27T18:11:19.117Z'],
      dateRange: ['7d'],
      dateStart: ['2019-12-27T18:11:19.117Z'],
      format: 'JSON',
      limit: 5,
      location: ['string'],
      name: ['string'],
    });
  });

  test('locations: only required params', async () => {
    const responsePromise = client.radar.dns.top.locations({ domain: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('locations: required and optional params', async () => {
    const response = await client.radar.dns.top.locations({
      domain: ['string'],
      asn: ['string'],
      continent: ['string'],
      dateEnd: ['2019-12-27T18:11:19.117Z'],
      dateRange: ['7d'],
      dateStart: ['2019-12-27T18:11:19.117Z'],
      format: 'JSON',
      limit: 5,
      location: ['string'],
      name: ['string'],
    });
  });
});
