// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Radar } from 'cloudflare/resources/radar/radar';
import { BaseCT } from 'cloudflare/resources/radar/ct/ct';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCT],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Radar],
});

const runTests = (client: PartialCloudflare<{ radar: { ct: BaseCT } }>) => {
  test('summary', async () => {
    const responsePromise = client.radar.ct.summary('CA');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summary: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.ct.summary(
        'CA',
        {
          ca: ['string'],
          caOwner: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          duration: ['LTE_3D'],
          entryType: ['PRECERTIFICATE'],
          expirationStatus: ['EXPIRED'],
          format: 'JSON',
          hasIps: [true],
          hasWildcards: [true],
          limitPerGroup: 10,
          log: ['string'],
          logApi: ['RFC6962'],
          logOperator: ['string'],
          name: ['main_series'],
          normalization: 'RAW_VALUES',
          publicKeyAlgorithm: ['DSA'],
          signatureAlgorithm: ['DSA_SHA_1'],
          tld: ['com'],
          uniqueEntries: ['true'],
          validationLevel: ['DOMAIN'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseries', async () => {
    const responsePromise = client.radar.ct.timeseries();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.ct.timeseries(
        {
          aggInterval: '1h',
          ca: ['string'],
          caOwner: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          duration: ['LTE_3D'],
          entryType: ['PRECERTIFICATE'],
          expirationStatus: ['EXPIRED'],
          format: 'JSON',
          hasIps: [true],
          hasWildcards: [true],
          log: ['string'],
          logApi: ['RFC6962'],
          logOperator: ['string'],
          name: ['main_series'],
          publicKeyAlgorithm: ['DSA'],
          signatureAlgorithm: ['DSA_SHA_1'],
          tld: ['com'],
          uniqueEntries: ['true'],
          validationLevel: ['DOMAIN'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseriesGroups', async () => {
    const responsePromise = client.radar.ct.timeseriesGroups('CA');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseriesGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.ct.timeseriesGroups(
        'CA',
        {
          aggInterval: '1h',
          ca: ['string'],
          caOwner: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          duration: ['LTE_3D'],
          entryType: ['PRECERTIFICATE'],
          expirationStatus: ['EXPIRED'],
          format: 'JSON',
          hasIps: [true],
          hasWildcards: [true],
          limitPerGroup: 10,
          log: ['string'],
          logApi: ['RFC6962'],
          logOperator: ['string'],
          name: ['main_series'],
          normalization: 'RAW_VALUES',
          publicKeyAlgorithm: ['DSA'],
          signatureAlgorithm: ['DSA_SHA_1'],
          tld: ['com'],
          uniqueEntries: ['true'],
          validationLevel: ['DOMAIN'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource ct', () => runTests(client));
describe('resource ct (tree shakable, base)', () => runTests(partialClient));
describe('resource ct (tree shakable, subresource)', () => runTests(parentPartialClient));
