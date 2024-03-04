// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource peers', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.peers.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.peers.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      body: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.peers.update('23ff594956f20c2a721606e94745a8aa', {
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.peers.update('23ff594956f20c2a721606e94745a8aa', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      name: 'my-peer-1',
      ip: '192.0.2.53',
      ixfr_enable: false,
      port: 53,
      tsig_id: '69cd1e104af3e6ed3cb344f263fd0d5a',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.peers.list({
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.peers.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.peers.delete('23ff594956f20c2a721606e94745a8aa', {
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.peers.delete('23ff594956f20c2a721606e94745a8aa', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.peers.get('23ff594956f20c2a721606e94745a8aa', {
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

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.peers.get('23ff594956f20c2a721606e94745a8aa', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });
});
