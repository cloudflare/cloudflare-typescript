// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey:
    'v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ownerships', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.pcaps.ownerships.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination_conf: 's3://pcaps-bucket?region=us-east-1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.pcaps.ownerships.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination_conf: 's3://pcaps-bucket?region=us-east-1',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.pcaps.ownerships.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.pcaps.ownerships.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.pcaps.ownerships.get({
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

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.pcaps.ownerships.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('validate: only required params', async () => {
    const responsePromise = cloudflare.pcaps.ownerships.validate({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination_conf: 's3://pcaps-bucket?region=us-east-1',
      ownership_challenge: 'ownership-challenge-9883874ecac311ec8475433579a6bf5f.txt',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('validate: required and optional params', async () => {
    const response = await cloudflare.pcaps.ownerships.validate({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      destination_conf: 's3://pcaps-bucket?region=us-east-1',
      ownership_challenge: 'ownership-challenge-9883874ecac311ec8475433579a6bf5f.txt',
    });
  });
});
