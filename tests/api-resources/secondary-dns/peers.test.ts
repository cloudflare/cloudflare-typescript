// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource peers', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.secondaryDNS.peers.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      name: 'my-peer-1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.secondaryDNS.peers.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      name: 'my-peer-1',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.secondaryDNS.peers.update('23ff594956f20c2a721606e94745a8aa', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      name: 'my-peer-1',
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
    const response = await client.secondaryDNS.peers.update('23ff594956f20c2a721606e94745a8aa', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      name: 'my-peer-1',
      ip: '192.0.2.53',
      ixfr_enable: false,
      port: 53,
      tsig_id: '69cd1e104af3e6ed3cb344f263fd0d5a',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.secondaryDNS.peers.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
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
    const response = await client.secondaryDNS.peers.list({ account_id: '01a7362d577a6c3019a474fd6f485823' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.secondaryDNS.peers.delete('23ff594956f20c2a721606e94745a8aa', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
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
    const response = await client.secondaryDNS.peers.delete('23ff594956f20c2a721606e94745a8aa', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.secondaryDNS.peers.get('23ff594956f20c2a721606e94745a8aa', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
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
    const response = await client.secondaryDNS.peers.get('23ff594956f20c2a721606e94745a8aa', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });
});
