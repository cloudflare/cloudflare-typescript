// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incoming', () => {
  test('create: only required params', async () => {
    const responsePromise = client.secondaryDNS.incoming.create({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      auto_refresh_seconds: 86400,
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

  test('create: required and optional params', async () => {
    const response = await client.secondaryDNS.incoming.create({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      auto_refresh_seconds: 86400,
      name: 'www.example.com.',
      peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.secondaryDNS.incoming.update({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      auto_refresh_seconds: 86400,
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

  test('update: required and optional params', async () => {
    const response = await client.secondaryDNS.incoming.update({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      auto_refresh_seconds: 86400,
      name: 'www.example.com.',
      peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.secondaryDNS.incoming.delete({
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

  test('delete: required and optional params', async () => {
    const response = await client.secondaryDNS.incoming.delete({
      zone_id: '269d8f4853475ca241c4e730be286b20',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.secondaryDNS.incoming.get({ zone_id: '269d8f4853475ca241c4e730be286b20' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.secondaryDNS.incoming.get({ zone_id: '269d8f4853475ca241c4e730be286b20' });
  });
});
