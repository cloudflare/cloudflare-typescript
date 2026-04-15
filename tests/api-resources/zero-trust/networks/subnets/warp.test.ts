// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Subnets } from 'cloudflare/resources/zero-trust/networks/subnets/subnets';
import { BaseWARP } from 'cloudflare/resources/zero-trust/networks/subnets/warp';

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
  resources: [BaseWARP],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Subnets],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { networks: { subnets: { warp: BaseWARP } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.subnets.warp.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'IPv4 Cloudflare Source IPs',
      network: '100.64.0.0/12',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.networks.subnets.warp.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'IPv4 Cloudflare Source IPs',
      network: '100.64.0.0/12',
      comment: 'example comment',
      is_default_network: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.subnets.warp.delete(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.networks.subnets.warp.delete(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.subnets.warp.edit(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.zeroTrust.networks.subnets.warp.edit(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '699d98642c564d2e855e9661899b7252',
        comment: 'example comment',
        is_default_network: true,
        name: 'IPv4 Cloudflare Source IPs',
        network: '100.64.0.0/12',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.networks.subnets.warp.get(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
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
    const response = await client.zeroTrust.networks.subnets.warp.get(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });
};
describe('resource warp', () => runTests(client));
describe('resource warp (tree shakable, base)', () => runTests(partialClient));
describe('resource warp (tree shakable, subresource)', () => runTests(parentPartialClient));
