// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pageRules', () => {
  // generated params are incorrect
  test.skip('create: only required params', async () => {
    const responsePromise = client.pageRules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [{ id: 'browser_check' }],
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // generated params are incorrect
  test.skip('create: required and optional params', async () => {
    const response = await client.pageRules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [{ id: 'browser_check', value: 'on' }],
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
      priority: 0,
      status: 'active',
    });
  });

  // generated params are incorrect
  test.skip('update: only required params', async () => {
    const responsePromise = client.pageRules.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [{ id: 'browser_check' }],
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // generated params are incorrect
  test.skip('update: required and optional params', async () => {
    const response = await client.pageRules.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [{ id: 'browser_check', value: 'on' }],
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
      priority: 0,
      status: 'active',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.pageRules.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.pageRules.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'desc',
      match: 'any',
      order: 'status',
      status: 'active',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pageRules.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.pageRules.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.pageRules.edit('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('edit: required and optional params', async () => {
    const response = await client.pageRules.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [{ id: 'browser_check', value: 'on' }],
      priority: 0,
      status: 'active',
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pageRules.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.pageRules.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
