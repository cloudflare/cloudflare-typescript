// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tsigs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.secondaryDNS.tsigs.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      algo: 'hmac-sha512.',
      name: 'tsig.customer.cf.',
      secret:
        'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
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
    const response = await client.secondaryDNS.tsigs.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      algo: 'hmac-sha512.',
      name: 'tsig.customer.cf.',
      secret:
        'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.secondaryDNS.tsigs.update('69cd1e104af3e6ed3cb344f263fd0d5a', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      algo: 'hmac-sha512.',
      name: 'tsig.customer.cf.',
      secret:
        'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
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
    const response = await client.secondaryDNS.tsigs.update('69cd1e104af3e6ed3cb344f263fd0d5a', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      algo: 'hmac-sha512.',
      name: 'tsig.customer.cf.',
      secret:
        'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.secondaryDNS.tsigs.list({
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
    const response = await client.secondaryDNS.tsigs.list({ account_id: '01a7362d577a6c3019a474fd6f485823' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.secondaryDNS.tsigs.delete('69cd1e104af3e6ed3cb344f263fd0d5a', {
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
    const response = await client.secondaryDNS.tsigs.delete('69cd1e104af3e6ed3cb344f263fd0d5a', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.secondaryDNS.tsigs.get('69cd1e104af3e6ed3cb344f263fd0d5a', {
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
    const response = await client.secondaryDNS.tsigs.get('69cd1e104af3e6ed3cb344f263fd0d5a', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });
});
