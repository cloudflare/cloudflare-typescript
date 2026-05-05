// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseMalicious } from 'cloudflare/resources/radar/email/security/top/tlds/malicious';
import { TLDs } from 'cloudflare/resources/radar/email/security/top/tlds/tlds';

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
  resources: [BaseMalicious],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [TLDs],
});

const runTests = (
  client: PartialCloudflare<{
    radar: { email: { security: { top: { tlds: { malicious: BaseMalicious } } } } };
  }>,
) => {
  test('get', async () => {
    const responsePromise = client.radar.email.security.top.tlds.malicious.get('MALICIOUS');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.top.tlds.malicious.get(
        'MALICIOUS',
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          format: 'JSON',
          limit: 1,
          name: ['main_series'],
          spf: ['PASS'],
          tldCategory: 'CLASSIC',
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource malicious', () => runTests(client));
describe('resource malicious (tree shakable, base)', () => runTests(partialClient));
describe('resource malicious (tree shakable, subresource)', () => runTests(parentPartialClient));
