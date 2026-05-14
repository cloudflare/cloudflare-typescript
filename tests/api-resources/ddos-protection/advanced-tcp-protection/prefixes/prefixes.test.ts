// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prefixes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.prefixes.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: 'comment',
      excluded: true,
      prefix: '192.0.2.0/24',
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
    const response = await client.DDoSProtection.advancedTCPProtection.prefixes.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: 'comment',
      excluded: true,
      prefix: '192.0.2.0/24',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.prefixes.list({
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
    const response = await client.DDoSProtection.advancedTCPProtection.prefixes.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'direction',
      order: 'order',
      page: 0,
      per_page: 0,
    });
  });

  test('bulkCreate: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.prefixes.bulkCreate({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          comment: 'comment',
          excluded: true,
          prefix: '192.0.2.0/24',
        },
      ],
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
    const response = await client.DDoSProtection.advancedTCPProtection.prefixes.bulkCreate({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          comment: 'comment',
          excluded: true,
          prefix: '192.0.2.0/24',
        },
      ],
    });
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.prefixes.bulkDelete({
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

  test('bulkDelete: required and optional params', async () => {
    const response = await client.DDoSProtection.advancedTCPProtection.prefixes.bulkDelete({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
