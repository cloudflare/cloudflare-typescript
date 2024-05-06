// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speed', () => {
  test('delete: only required params', async () => {
    const responsePromise = cloudflare.speed.delete('example.com', {
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

  test('delete: required and optional params', async () => {
    const response = await cloudflare.speed.delete('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      region: 'us-central1',
    });
  });

  test('scheduleGet: only required params', async () => {
    const responsePromise = cloudflare.speed.scheduleGet('example.com', {
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

  test('scheduleGet: required and optional params', async () => {
    const response = await cloudflare.speed.scheduleGet('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      region: 'us-central1',
    });
  });

  // TODO: investigate broken test
  test.skip('trendsList: only required params', async () => {
    const responsePromise = cloudflare.speed.trendsList('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      deviceType: 'DESKTOP',
      metrics: 'performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls',
      region: 'us-central1',
      start: '2014-01-01T05:20:00.12345Z',
      tz: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('trendsList: required and optional params', async () => {
    const response = await cloudflare.speed.trendsList('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      deviceType: 'DESKTOP',
      metrics: 'performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls',
      region: 'us-central1',
      start: '2014-01-01T05:20:00.12345Z',
      tz: 'string',
      end: '2014-01-01T05:20:00.12345Z',
    });
  });
});
