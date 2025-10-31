// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource serviceBindings', () => {
  test('create: only required params', async () => {
    const responsePromise = client.addressing.prefixes.serviceBindings.create(
      '2af39739cc4e3b5910c918468bb89828',
      {
        account_id: '258def64c72dae45f3e4c8516e2111f2',
        cidr: '192.0.2.0/24',
        service_id: '2db684ee7ca04e159946fd05b99e1bcd',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.addressing.prefixes.serviceBindings.create(
      '2af39739cc4e3b5910c918468bb89828',
      {
        account_id: '258def64c72dae45f3e4c8516e2111f2',
        cidr: '192.0.2.0/24',
        service_id: '2db684ee7ca04e159946fd05b99e1bcd',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.addressing.prefixes.serviceBindings.list(
      '2af39739cc4e3b5910c918468bb89828',
      { account_id: '258def64c72dae45f3e4c8516e2111f2' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.addressing.prefixes.serviceBindings.list(
      '2af39739cc4e3b5910c918468bb89828',
      { account_id: '258def64c72dae45f3e4c8516e2111f2' },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.addressing.prefixes.serviceBindings.delete(
      '2af39739cc4e3b5910c918468bb89828',
      '0429b49b6a5155297b78e75a44b09e14',
      { account_id: '258def64c72dae45f3e4c8516e2111f2' },
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
    const response = await client.addressing.prefixes.serviceBindings.delete(
      '2af39739cc4e3b5910c918468bb89828',
      '0429b49b6a5155297b78e75a44b09e14',
      { account_id: '258def64c72dae45f3e4c8516e2111f2' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.addressing.prefixes.serviceBindings.get(
      '2af39739cc4e3b5910c918468bb89828',
      '0429b49b6a5155297b78e75a44b09e14',
      { account_id: '258def64c72dae45f3e4c8516e2111f2' },
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
    const response = await client.addressing.prefixes.serviceBindings.get(
      '2af39739cc4e3b5910c918468bb89828',
      '0429b49b6a5155297b78e75a44b09e14',
      { account_id: '258def64c72dae45f3e4c8516e2111f2' },
    );
  });
});
