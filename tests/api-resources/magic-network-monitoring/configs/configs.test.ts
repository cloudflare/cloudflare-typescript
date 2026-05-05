// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { MagicNetworkMonitoring } from 'cloudflare/resources/magic-network-monitoring/magic-network-monitoring';
import { BaseConfigs } from 'cloudflare/resources/magic-network-monitoring/configs/configs';

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
  resources: [BaseConfigs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MagicNetworkMonitoring],
});

const runTests = (client: PartialCloudflare<{ magicNetworkMonitoring: { configs: BaseConfigs } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.configs.create({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      default_sampling: 1,
      name: "cloudflare user's account",
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
    const response = await client.magicNetworkMonitoring.configs.create({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      default_sampling: 1,
      name: "cloudflare user's account",
      router_ips: ['203.0.113.1'],
      warp_devices: [
        {
          id: '5360368d-b351-4791-abe1-93550dabd351',
          name: 'My warp device',
          router_ip: '203.0.113.1',
        },
      ],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.configs.update({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      default_sampling: 1,
      name: "cloudflare user's account",
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.magicNetworkMonitoring.configs.update({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      default_sampling: 1,
      name: "cloudflare user's account",
      router_ips: ['203.0.113.1'],
      warp_devices: [
        {
          id: '5360368d-b351-4791-abe1-93550dabd351',
          name: 'My warp device',
          router_ip: '203.0.113.1',
        },
      ],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.configs.delete({
      account_id: '6f91088a406011ed95aed352566e8d4c',
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
    const response = await client.magicNetworkMonitoring.configs.delete({
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.configs.edit({
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.magicNetworkMonitoring.configs.edit({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      default_sampling: 1,
      name: "cloudflare user's account",
      router_ips: ['203.0.113.1'],
      warp_devices: [
        {
          id: '5360368d-b351-4791-abe1-93550dabd351',
          name: 'My warp device',
          router_ip: '203.0.113.1',
        },
      ],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.configs.get({
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.magicNetworkMonitoring.configs.get({
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
  });
};
describe('resource configs', () => runTests(client));
describe('resource configs (tree shakable, base)', () => runTests(partialClient));
describe('resource configs (tree shakable, subresource)', () => runTests(parentPartialClient));
