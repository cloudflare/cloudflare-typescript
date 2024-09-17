// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.rules.create({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      duration: '300s',
      name: 'my_rule_1',
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
    const response = await client.magicNetworkMonitoring.rules.create({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      duration: '300s',
      name: 'my_rule_1',
      automatic_advertisement: true,
      bandwidth: 1000,
      packet_threshold: 10000,
      prefixes: ['203.0.113.1/32', '203.0.113.1/32', '203.0.113.1/32'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.rules.update({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      duration: '300s',
      name: 'my_rule_1',
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
    const response = await client.magicNetworkMonitoring.rules.update({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      duration: '300s',
      name: 'my_rule_1',
      id: '2890e6fa406311ed9b5a23f70f6fb8cf',
      automatic_advertisement: true,
      bandwidth: 1000,
      packet_threshold: 10000,
      prefixes: ['203.0.113.1/32', '203.0.113.1/32', '203.0.113.1/32'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.rules.list({
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

  test('list: required and optional params', async () => {
    const response = await client.magicNetworkMonitoring.rules.list({
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.rules.delete('2890e6fa406311ed9b5a23f70f6fb8cf', {
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
    const response = await client.magicNetworkMonitoring.rules.delete('2890e6fa406311ed9b5a23f70f6fb8cf', {
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.rules.edit('2890e6fa406311ed9b5a23f70f6fb8cf', {
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
    const response = await client.magicNetworkMonitoring.rules.edit('2890e6fa406311ed9b5a23f70f6fb8cf', {
      account_id: '6f91088a406011ed95aed352566e8d4c',
      automatic_advertisement: true,
      bandwidth: 1000,
      duration: '300s',
      name: 'my_rule_1',
      packet_threshold: 10000,
      prefixes: ['203.0.113.1/32', '203.0.113.1/32', '203.0.113.1/32'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.rules.get('2890e6fa406311ed9b5a23f70f6fb8cf', {
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
    const response = await client.magicNetworkMonitoring.rules.get('2890e6fa406311ed9b5a23f70f6fb8cf', {
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
  });
});
