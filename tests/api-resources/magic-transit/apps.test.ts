// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource apps', () => {
  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9360388260/job/25765690361?pr=482#step:5:7212
  test.skip('create: only required params', async () => {
    const responsePromise = client.magicTransit.apps.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9360388260/job/25765690361?pr=482#step:5:7212
  test.skip('create: required and optional params', async () => {
    const response = await client.magicTransit.apps.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} });
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9360388260/job/25765690361?pr=482#step:5:7212
  test.skip('update: only required params', async () => {
    const responsePromise = client.magicTransit.apps.update('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9360388260/job/25765690361?pr=482#step:5:7212
  test.skip('update: required and optional params', async () => {
    const response = await client.magicTransit.apps.update('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} });
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9360388260/job/25765690361?pr=482#step:5:7212
  test.skip('list: only required params', async () => {
    const responsePromise = client.magicTransit.apps.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9360388260/job/25765690361?pr=482#step:5:7212
  test.skip('list: required and optional params', async () => {
    const response = await client.magicTransit.apps.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicTransit.apps.delete('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.magicTransit.apps.delete('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
