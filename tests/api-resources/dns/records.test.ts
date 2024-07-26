// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource records', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.dns.records.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      content: '198.51.100.4',
      name: 'example.com',
      type: 'A',
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
    const response = await client.dns.records.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      content: '198.51.100.4',
      name: 'example.com',
      type: 'A',
      id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: 'Domain verification record',
      proxied: false,
      tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
      ttl: 3600,
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.dns.records.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      content: '198.51.100.4',
      name: 'example.com',
      type: 'A',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.dns.records.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      content: '198.51.100.4',
      name: 'example.com',
      type: 'A',
      id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: 'Domain verification record',
      proxied: false,
      tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
      ttl: 3600,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.dns.records.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.dns.records.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: {
        present: 'present',
        absent: 'absent',
        exact: 'Hello, world',
        contains: 'ello, worl',
        startswith: 'Hello, w',
        endswith: 'o, world',
      },
      content: '127.0.0.1',
      direction: 'asc',
      match: 'any',
      name: 'example.com',
      order: 'type',
      page: 1,
      per_page: 5,
      proxied: false,
      search: 'www.cloudflare.com',
      tag: {
        present: 'important',
        absent: 'important',
        exact: 'greeting:Hello, world',
        contains: 'greeting:ello, worl',
        startswith: 'greeting:Hello, w',
        endswith: 'greeting:o, world',
      },
      tag_match: 'any',
      type: 'A',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dns.records.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.dns.records.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.dns.records.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      content: '198.51.100.4',
      name: 'example.com',
      type: 'A',
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
  test.skip('edit: required and optional params', async () => {
    const response = await client.dns.records.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      content: '198.51.100.4',
      name: 'example.com',
      type: 'A',
      id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: 'Domain verification record',
      proxied: false,
      tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
      ttl: 3600,
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.dns.records.export({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.dns.records.export({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.dns.records.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.dns.records.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('import: only required params', async () => {
    const responsePromise = client.dns.records.import({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: 'www.example.com. 300 IN  A 127.0.0.1',
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
  test.skip('import: required and optional params', async () => {
    const response = await client.dns.records.import({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: 'www.example.com. 300 IN  A 127.0.0.1',
      proxied: 'true',
    });
  });

  test('scan: only required params', async () => {
    const responsePromise = client.dns.records.scan({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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

  test('scan: required and optional params', async () => {
    const response = await client.dns.records.scan({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} });
  });
});
