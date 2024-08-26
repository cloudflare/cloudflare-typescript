// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource ownership', () => {
  test('create: only required params', async () => {
    const responsePromise = client.pcaps.ownership.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', destination_conf: 's3://pcaps-bucket?region=us-east-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.pcaps.ownership.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', destination_conf: 's3://pcaps-bucket?region=us-east-1' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pcaps.ownership.delete('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.pcaps.ownership.delete('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pcaps.ownership.get({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.pcaps.ownership.get({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('validate: only required params', async () => {
    const responsePromise = client.pcaps.ownership.validate({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', destination_conf: 's3://pcaps-bucket?region=us-east-1', ownership_challenge: 'ownership-challenge-9883874ecac311ec8475433579a6bf5f.txt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validate: required and optional params', async () => {
    const response = await client.pcaps.ownership.validate({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', destination_conf: 's3://pcaps-bucket?region=us-east-1', ownership_challenge: 'ownership-challenge-9883874ecac311ec8475433579a6bf5f.txt' });
  });
});
