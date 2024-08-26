// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource investigate', () => {
  test('list: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.emailSecurity.investigate.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', action_log: true, alert_id: 'alert_id', detections_only: true, domain: 'domain', end: '2019-12-27T18:11:19.117Z', final_disposition: 'MALICIOUS', message_action: 'PREVIEW', message_id: 'message_id', metric: 'metric', page: 1, per_page: 1, query: 'query', recipient: 'recipient', sender: 'sender', start: '2019-12-27T18:11:19.117Z' });
  });

  test('detections: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.detections('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('detections: required and optional params', async () => {
    const response = await client.emailSecurity.investigate.detections('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.get('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.emailSecurity.investigate.get('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('preview: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.preview('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('preview: required and optional params', async () => {
    const response = await client.emailSecurity.investigate.preview('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('raw: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.raw('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('raw: required and optional params', async () => {
    const response = await client.emailSecurity.investigate.raw('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('trace: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.trace('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('trace: required and optional params', async () => {
    const response = await client.emailSecurity.investigate.trace('4Njp3P0STMz2c02Q', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
