// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prefixes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.addressing.prefixes.create({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      asn: 13335,
      cidr: '192.0.2.0/24',
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
    const response = await client.addressing.prefixes.create({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      asn: 13335,
      cidr: '192.0.2.0/24',
      delegate_loa_creation: true,
      description: 'Internal test prefix',
      loa_document_id: 'd933b1530bc56c9953cf8ce166da8004',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.addressing.prefixes.list({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
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
    const response = await client.addressing.prefixes.list({
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.addressing.prefixes.delete('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
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
    const response = await client.addressing.prefixes.delete('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.addressing.prefixes.edit('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      description: 'Internal test prefix',
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
    const response = await client.addressing.prefixes.edit('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
      description: 'Internal test prefix',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.addressing.prefixes.get('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
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
    const response = await client.addressing.prefixes.get('2af39739cc4e3b5910c918468bb89828', {
      account_id: '258def64c72dae45f3e4c8516e2111f2',
    });
  });
});
