// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ZoneTransfers } from 'cloudflare/resources/dns/zone-transfers/zone-transfers';
import { BaseOutgoingResource } from 'cloudflare/resources/dns/zone-transfers/outgoing/outgoing';

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
  resources: [BaseOutgoingResource],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ZoneTransfers],
});

const runTests = (
  client: PartialCloudflare<{ dns: { zoneTransfers: { outgoing: BaseOutgoingResource } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.dns.zoneTransfers.outgoing.create({
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

  test('create: required and optional params', async () => {
    const response = await client.dns.zoneTransfers.outgoing.create({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      name: 'www.example.com.',
      peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.dns.zoneTransfers.outgoing.update({
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

  test('update: required and optional params', async () => {
    const response = await client.dns.zoneTransfers.outgoing.update({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      name: 'www.example.com.',
      peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dns.zoneTransfers.outgoing.delete({
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
    const response = await client.dns.zoneTransfers.outgoing.delete({
      zone_id: '269d8f4853475ca241c4e730be286b20',
    });
  });

  test('disable: only required params', async () => {
    const responsePromise = client.dns.zoneTransfers.outgoing.disable({
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

  test('disable: required and optional params', async () => {
    const response = await client.dns.zoneTransfers.outgoing.disable({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      body: {},
    });
  });

  test('enable: only required params', async () => {
    const responsePromise = client.dns.zoneTransfers.outgoing.enable({
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

  test('enable: required and optional params', async () => {
    const response = await client.dns.zoneTransfers.outgoing.enable({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      body: {},
    });
  });

  test('forceNotify: only required params', async () => {
    const responsePromise = client.dns.zoneTransfers.outgoing.forceNotify({
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

  test('forceNotify: required and optional params', async () => {
    const response = await client.dns.zoneTransfers.outgoing.forceNotify({
      zone_id: '269d8f4853475ca241c4e730be286b20',
      body: {},
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.dns.zoneTransfers.outgoing.get({
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

  test('get: required and optional params', async () => {
    const response = await client.dns.zoneTransfers.outgoing.get({
      zone_id: '269d8f4853475ca241c4e730be286b20',
    });
  });
};
describe('resource outgoing', () => runTests(client));
describe('resource outgoing (tree shakable, base)', () => runTests(partialClient));
describe('resource outgoing (tree shakable, subresource)', () => runTests(parentPartialClient));
