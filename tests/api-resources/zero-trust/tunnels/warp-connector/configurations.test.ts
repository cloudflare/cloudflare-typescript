// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConfigurations } from 'cloudflare/resources/zero-trust/tunnels/warp-connector/configurations';
import { WARPConnector } from 'cloudflare/resources/zero-trust/tunnels/warp-connector/warp-connector';

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
  resources: [BaseConfigurations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [WARPConnector],
});

const runTests = (
  client: PartialCloudflare<{
    zeroTrust: { tunnels: { warpConnector: { configurations: BaseConfigurations } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.tunnels.warpConnector.configurations.update(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', ha_mode: 'aws' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.tunnels.warpConnector.configurations.update(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        ha_mode: 'aws',
        config: { fnr_id: 'eni-0123456789abcdef0' },
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.tunnels.warpConnector.configurations.get(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.tunnels.warpConnector.configurations.get(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource configurations', () => runTests(client));
describe('resource configurations (tree shakable, base)', () => runTests(partialClient));
describe('resource configurations (tree shakable, subresource)', () => runTests(parentPartialClient));
