// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Top } from 'cloudflare/resources/radar/robots-txt/top/top';
import { BaseUserAgents } from 'cloudflare/resources/radar/robots-txt/top/user-agents';

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
  resources: [BaseUserAgents],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Top],
});

const runTests = (
  client: PartialCloudflare<{ radar: { robotsTXT: { top: { userAgents: BaseUserAgents } } } }>,
) => {
  test('directive', async () => {
    const responsePromise = client.radar.robotsTXT.top.userAgents.directive();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('directive: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.robotsTXT.top.userAgents.directive(
        {
          date: ['2019-12-27'],
          directive: 'ALLOW',
          domainCategory: ['string'],
          format: 'JSON',
          limit: 1,
          name: ['main_series'],
          userAgentCategory: 'AI',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource userAgents', () => runTests(client));
describe('resource userAgents (tree shakable, base)', () => runTests(partialClient));
describe('resource userAgents (tree shakable, subresource)', () => runTests(parentPartialClient));
