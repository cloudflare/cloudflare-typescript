// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configs', () => {
  test('create: only required params', async () => {
    const responsePromise = cloudflare.magicNetworkMonitoring.configs.create({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      body: {},
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
    const response = await cloudflare.magicNetworkMonitoring.configs.create({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      body: {},
    });
  });

  test('update: only required params', async () => {
    const responsePromise = cloudflare.magicNetworkMonitoring.configs.update({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      body: {},
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
    const response = await cloudflare.magicNetworkMonitoring.configs.update({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      body: {},
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = cloudflare.magicNetworkMonitoring.configs.delete({
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
    const response = await cloudflare.magicNetworkMonitoring.configs.delete({
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = cloudflare.magicNetworkMonitoring.configs.edit({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      body: {},
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
    const response = await cloudflare.magicNetworkMonitoring.configs.edit({
      account_id: '6f91088a406011ed95aed352566e8d4c',
      body: {},
    });
  });

  test('get: only required params', async () => {
    const responsePromise = cloudflare.magicNetworkMonitoring.configs.get({
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
    const response = await cloudflare.magicNetworkMonitoring.configs.get({
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
  });
});
