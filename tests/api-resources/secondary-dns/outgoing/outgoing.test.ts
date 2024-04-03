// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource outgoing', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.outgoing.create({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      name: 'www.example.com.',
      peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
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
    const response = await cloudflare.secondaryDNS.outgoing.create({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      name: 'www.example.com.',
      peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.outgoing.update({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      name: 'www.example.com.',
      peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
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
    const response = await cloudflare.secondaryDNS.outgoing.update({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      name: 'www.example.com.',
      peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.outgoing.delete({
      zone_id: '269d8f4853475ca241c4e730be286b20',
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
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.outgoing.delete({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      body: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('disable: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.outgoing.disable({
      zone_id: '269d8f4853475ca241c4e730be286b20',
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
  test.skip('disable: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.outgoing.disable({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      body: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('enable: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.outgoing.enable({
      zone_id: '269d8f4853475ca241c4e730be286b20',
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
  test.skip('enable: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.outgoing.enable({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      body: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('forceNotify: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.outgoing.forceNotify({
      zone_id: '269d8f4853475ca241c4e730be286b20',
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
  test.skip('forceNotify: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.outgoing.forceNotify({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      body: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.outgoing.get({
      zone_id: '269d8f4853475ca241c4e730be286b20',
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
    const response = await cloudflare.secondaryDNS.outgoing.get({
      zone_id: '269d8f4853475ca241c4e730be286b20',
    });
  });
});
