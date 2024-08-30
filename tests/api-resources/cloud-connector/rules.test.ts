// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('update: only required params', async () => {
    const responsePromise = client.cloudConnector.rules.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{}, {}, {}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.cloudConnector.rules.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          id: '95c365e17e1b46599cd99e5b231fac4e',
          description: 'Rule description',
          enabled: true,
          expression: 'http.cookie eq "a=b"',
          parameters: { host: 'examplebucket.s3.eu-north-1.amazonaws.com' },
          provider: 'aws_s3',
        },
        {
          id: '95c365e17e1b46599cd99e5b231fac4e',
          description: 'Rule description',
          enabled: true,
          expression: 'http.cookie eq "a=b"',
          parameters: { host: 'examplebucket.s3.eu-north-1.amazonaws.com' },
          provider: 'aws_s3',
        },
        {
          id: '95c365e17e1b46599cd99e5b231fac4e',
          description: 'Rule description',
          enabled: true,
          expression: 'http.cookie eq "a=b"',
          parameters: { host: 'examplebucket.s3.eu-north-1.amazonaws.com' },
          provider: 'aws_s3',
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudConnector.rules.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudConnector.rules.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
