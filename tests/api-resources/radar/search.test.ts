// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource search', () => {
  test('global: only required params', async () => {
    const responsePromise = client.radar.search.global({ query: 'United' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('global: required and optional params', async () => {
    const response = await client.radar.search.global({ query: 'United', exclude: ['SPECIAL_EVENTS', 'NOTEBOOKS', 'LOCATIONS'], format: 'JSON', include: ['SPECIAL_EVENTS', 'NOTEBOOKS', 'LOCATIONS'], limit: 5, limitPerGroup: 0 });
  });
});
