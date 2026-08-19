// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAI } from 'cloudflare/resources/ai/ai';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAI],
});

const runTests = (client: PartialCloudflare<{ ai: BaseAI }>) => {
  test('run: only required params', async () => {
    const responsePromise = client.ai.run('model_name', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      text: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('run: required and optional params', async () => {
    const response = await client.ai.run('model_name', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      text: 'x',
    });
  });
};
describe('resource ai', () => runTests(client));
describe('resource ai (tree shakable, base)', () => runTests(partialClient));

test('run: keeps `/` in model name unencoded', async () => {
  let capturedUrl: string | undefined;
  const fetchSpy = (url: string | URL | Request, init?: RequestInit): Promise<Response> => {
    capturedUrl = String(url);
    return Promise.resolve(
      new Response(JSON.stringify({}), { headers: { 'Content-Type': 'application/json' } }),
    );
  };

  const client = new Cloudflare({
    baseURL: 'http://localhost:5000/',
    apiKey: '144c9defac04969c7bfad8efaa8ea194',
    apiEmail: 'user@example.com',
    fetch: fetchSpy,
  });

  await client.ai.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
    account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    text: 'x',
  });

  expect(capturedUrl).toBe(
    'http://localhost:5000/accounts/023e105f4ecef8ad9ca31a8372d0c353/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast',
  );
});
