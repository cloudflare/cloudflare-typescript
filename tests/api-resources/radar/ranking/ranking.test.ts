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

describe('resource ranking', () => {
  // skipped: tests are disabled for the time being
  test.skip('timeseriesGroups', async () => {
    const responsePromise = cloudflare.radar.ranking.timeseriesGroups();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('timeseriesGroups: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.ranking.timeseriesGroups({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('timeseriesGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.ranking.timeseriesGroups(
        {
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['1d', '2d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          domains: ['string', 'string', 'string'],
          format: 'JSON',
          limit: 5,
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          rankingType: 'POPULAR',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('top', async () => {
    const responsePromise = cloudflare.radar.ranking.top();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('top: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.ranking.top({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('top: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.ranking.top(
        {
          date: ['string', 'string', 'string'],
          format: 'JSON',
          limit: 5,
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          rankingType: 'POPULAR',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
