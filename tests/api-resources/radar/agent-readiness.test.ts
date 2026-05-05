// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAgentReadiness } from 'cloudflare/resources/radar/agent-readiness';
import { Radar } from 'cloudflare/resources/radar/radar';

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
  resources: [BaseAgentReadiness],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Radar],
});

const runTests = (client: PartialCloudflare<{ radar: { agentReadiness: BaseAgentReadiness } }>) => {
  test('summary', async () => {
    const responsePromise = client.radar.agentReadiness.summary('CHECK');
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
      client.radar.agentReadiness.summary(
        'CHECK',
        {
          date: '2024-09-19',
          domainCategory: ['string'],
          format: 'JSON',
          name: ['main_series'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource agentReadiness', () => runTests(client));
describe('resource agentReadiness (tree shakable, base)', () => runTests(partialClient));
describe('resource agentReadiness (tree shakable, subresource)', () => runTests(parentPartialClient));
