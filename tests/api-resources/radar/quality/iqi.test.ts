// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource iqi', () => {
  // skipped: tests are disabled for the time being
  test.skip('summary: only required params', async () => {
    const responsePromise = cloudflare.radar.quality.iqi.summary({ metric: 'BANDWIDTH' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('summary: required and optional params', async () => {
    const response = await cloudflare.radar.quality.iqi.summary({
      metric: 'BANDWIDTH',
      asn: ['string', 'string', 'string'],
      continent: ['string', 'string', 'string'],
      dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
      dateRange: ['1d', '2d', '7d'],
      dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
      format: 'JSON',
      location: ['string', 'string', 'string'],
      name: ['string', 'string', 'string'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('timeseriesGroups: only required params', async () => {
    const responsePromise = cloudflare.radar.quality.iqi.timeseriesGroups({ metric: 'BANDWIDTH' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('timeseriesGroups: required and optional params', async () => {
    const response = await cloudflare.radar.quality.iqi.timeseriesGroups({
      metric: 'BANDWIDTH',
      aggInterval: '1h',
      asn: ['string', 'string', 'string'],
      continent: ['string', 'string', 'string'],
      dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
      dateRange: ['1d', '2d', '7d'],
      dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
      format: 'JSON',
      interpolation: true,
      location: ['string', 'string', 'string'],
      name: ['string', 'string', 'string'],
    });
  });
});
