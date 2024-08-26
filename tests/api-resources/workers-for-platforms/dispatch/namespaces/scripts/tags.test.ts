// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource tags', () => {
  test('update: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.tags.update('my-dispatch-namespace', 'this-is_my_script-01', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: ['my-tag', 'my-tag', 'my-tag'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.tags.update('my-dispatch-namespace', 'this-is_my_script-01', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: ['my-tag', 'my-tag', 'my-tag'] });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.tags.list('my-dispatch-namespace', 'this-is_my_script-01', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.tags.list('my-dispatch-namespace', 'this-is_my_script-01', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.tags.delete('my-dispatch-namespace', 'this-is_my_script-01', 'my-tag', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.tags.delete('my-dispatch-namespace', 'this-is_my_script-01', 'my-tag', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
