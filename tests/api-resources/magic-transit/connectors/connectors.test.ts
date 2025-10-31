// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connectors', () => {
  // TODO: consider oneOf instead of maxProperties to indicate that this can be either id or serial_number
  test.skip('create: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      device: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: consider oneOf instead of maxProperties to indicate that this can be either id or serial_number
  test.skip('create: required and optional params', async () => {
    const response = await client.magicTransit.connectors.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      device: { id: 'id', serial_number: 'serial_number' },
      activated: true,
      interrupt_window_duration_hours: 0,
      interrupt_window_hour_of_day: 0,
      notes: 'notes',
      timezone: 'timezone',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.update('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.magicTransit.connectors.update('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      activated: true,
      interrupt_window_duration_hours: 0,
      interrupt_window_hour_of_day: 0,
      notes: 'notes',
      timezone: 'timezone',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.magicTransit.connectors.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.delete('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.magicTransit.connectors.delete('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.edit('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.magicTransit.connectors.edit('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      activated: true,
      interrupt_window_duration_hours: 0,
      interrupt_window_hour_of_day: 0,
      notes: 'notes',
      timezone: 'timezone',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicTransit.connectors.get('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.magicTransit.connectors.get('connector_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
