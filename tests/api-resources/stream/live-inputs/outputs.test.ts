// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource outputs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.stream.liveInputs.outputs.create('66be4bf738797e01e1fca35a7bdecdcd', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      streamKey: 'uzya-f19y-g2g9-a2ee-51j2',
      url: 'rtmp://a.rtmp.youtube.com/live2',
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
    const response = await client.stream.liveInputs.outputs.create('66be4bf738797e01e1fca35a7bdecdcd', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      streamKey: 'uzya-f19y-g2g9-a2ee-51j2',
      url: 'rtmp://a.rtmp.youtube.com/live2',
      enabled: true,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.stream.liveInputs.outputs.update(
      '66be4bf738797e01e1fca35a7bdecdcd',
      'baea4d9c515887b80289d5c33cf01145',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', enabled: true },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.stream.liveInputs.outputs.update(
      '66be4bf738797e01e1fca35a7bdecdcd',
      'baea4d9c515887b80289d5c33cf01145',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', enabled: true },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.stream.liveInputs.outputs.list('66be4bf738797e01e1fca35a7bdecdcd', {
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
    const response = await client.stream.liveInputs.outputs.list('66be4bf738797e01e1fca35a7bdecdcd', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('delete: only required params', async () => {
    const responsePromise = client.stream.liveInputs.outputs.delete(
      '66be4bf738797e01e1fca35a7bdecdcd',
      'baea4d9c515887b80289d5c33cf01145',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('delete: required and optional params', async () => {
    const response = await client.stream.liveInputs.outputs.delete(
      '66be4bf738797e01e1fca35a7bdecdcd',
      'baea4d9c515887b80289d5c33cf01145',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
