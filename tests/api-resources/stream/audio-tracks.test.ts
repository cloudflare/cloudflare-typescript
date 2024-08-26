// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audioTracks', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.stream.audioTracks.delete(
      'ea95132c15732412d22c1476fa83f27a',
      'ea95132c15732412d22c1476fa83f27a',
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

  test('delete: required and optional params', async () => {
    const response = await client.stream.audioTracks.delete(
      'ea95132c15732412d22c1476fa83f27a',
      'ea95132c15732412d22c1476fa83f27a',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('copy: only required params', async () => {
    const responsePromise = client.stream.audioTracks.copy('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      label: 'director commentary',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('copy: required and optional params', async () => {
    const response = await client.stream.audioTracks.copy('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      label: 'director commentary',
      url: 'https://www.examplestorage.com/audio_file.mp3',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.stream.audioTracks.edit(
      'ea95132c15732412d22c1476fa83f27a',
      'ea95132c15732412d22c1476fa83f27a',
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

  test('edit: required and optional params', async () => {
    const response = await client.stream.audioTracks.edit(
      'ea95132c15732412d22c1476fa83f27a',
      'ea95132c15732412d22c1476fa83f27a',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', default: true, label: 'director commentary' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.stream.audioTracks.get('ea95132c15732412d22c1476fa83f27a', {
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
    const response = await client.stream.audioTracks.get('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
