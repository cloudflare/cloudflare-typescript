// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource originCloudRegions', () => {
  // HTTP 404 error from prism -- route not in spec
  test.skip('update: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.update('192.0.2.1', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      origin_ip: '192.0.2.1',
      region: 'us-east-1',
      vendor: 'aws',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism -- route not in spec
  test.skip('update: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.update('192.0.2.1', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      origin_ip: '192.0.2.1',
      region: 'us-east-1',
      vendor: 'aws',
    });
  });

  // HTTP 404 error from prism
  test.skip('list: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('list: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 1,
    });
  });

  // HTTP 404 error from prism
  test.skip('delete: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.delete('192.0.2.1', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('delete: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.delete('192.0.2.1', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // HTTP 404 error from prism
  test.skip('bulkDelete: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.bulkDelete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('bulkDelete: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.bulkDelete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // HTTP 404 error from prism
  test.skip('bulkUpdate: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.bulkUpdate({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          origin_ip: '192.0.2.1',
          region: 'us-east-1',
          vendor: 'aws',
        },
        {
          origin_ip: '2001:db8::1',
          region: 'us-central1',
          vendor: 'gcp',
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

  // HTTP 404 error from prism
  test.skip('bulkUpdate: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.bulkUpdate({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          origin_ip: '192.0.2.1',
          region: 'us-east-1',
          vendor: 'aws',
        },
        {
          origin_ip: '2001:db8::1',
          region: 'us-central1',
          vendor: 'gcp',
        },
      ],
    });
  });

  // HTTP 404 error from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.get('192.0.2.1', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.get('192.0.2.1', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // HTTP 404 error from prism
  test.skip('supportedRegions: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.supportedRegions({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('supportedRegions: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.supportedRegions({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
