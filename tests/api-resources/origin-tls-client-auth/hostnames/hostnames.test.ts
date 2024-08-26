// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource hostnames', () => {
  test('update: only required params', async () => {
    const responsePromise = client.originTLSClientAuth.hostnames.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', config: [{}, {}, {}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.originTLSClientAuth.hostnames.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', config: [{ cert_id: '2458ce5a-0c35-4c7f-82c7-8e9487d3ff60', enabled: true, hostname: 'app.example.com' }, { cert_id: '2458ce5a-0c35-4c7f-82c7-8e9487d3ff60', enabled: true, hostname: 'app.example.com' }, { cert_id: '2458ce5a-0c35-4c7f-82c7-8e9487d3ff60', enabled: true, hostname: 'app.example.com' }] });
  });

  test('get: only required params', async () => {
    const responsePromise = client.originTLSClientAuth.hostnames.get('app.example.com', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.originTLSClientAuth.hostnames.get('app.example.com', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
