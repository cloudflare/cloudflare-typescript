// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource pagerules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.pagerules.create({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', actions: [{}, {}, {}], targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.pagerules.create({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', actions: [{ name: 'forward_url', value: { type: 'temporary', url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3' } }, { name: 'forward_url', value: { type: 'temporary', url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3' } }, { name: 'forward_url', value: { type: 'temporary', url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3' } }], targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }], priority: 0, status: 'active' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.pagerules.update('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', actions: [{}, {}, {}], targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.pagerules.update('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', actions: [{ name: 'forward_url', value: { type: 'temporary', url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3' } }, { name: 'forward_url', value: { type: 'temporary', url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3' } }, { name: 'forward_url', value: { type: 'temporary', url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3' } }], targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }], priority: 0, status: 'active' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.pagerules.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.pagerules.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', direction: 'asc', match: 'any', order: 'status', status: 'active' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pagerules.delete('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.pagerules.delete('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.pagerules.edit('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.pagerules.edit('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', actions: [{ name: 'forward_url', value: { type: 'temporary', url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3' } }, { name: 'forward_url', value: { type: 'temporary', url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3' } }, { name: 'forward_url', value: { type: 'temporary', url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3' } }], priority: 0, status: 'active', targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }] });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pagerules.get('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.pagerules.get('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
