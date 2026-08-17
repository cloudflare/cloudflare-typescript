// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseRegistrarSandbox } from 'cloudflare/resources/registrar-sandbox/registrar-sandbox';

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
  resources: [BaseRegistrarSandbox],
});

const runTests = (client: PartialCloudflare<{ registrarSandbox: BaseRegistrarSandbox }>) => {
  test('check: only required params', async () => {
    const responsePromise = client.registrarSandbox.check({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domains: [
        'myawesomebrand.com',
        'myawesomebrand.net',
        'myawesomebrand.org',
        'myawesomebrand.app',
        'myawesomebrand.dev',
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('check: required and optional params', async () => {
    const response = await client.registrarSandbox.check({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domains: [
        'myawesomebrand.com',
        'myawesomebrand.net',
        'myawesomebrand.org',
        'myawesomebrand.app',
        'myawesomebrand.dev',
      ],
    });
  });

  test('search: only required params', async () => {
    const responsePromise = client.registrarSandbox.search({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      q: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.registrarSandbox.search({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      q: 'x',
      extensions: ['string'],
      limit: 1,
    });
  });
};
describe('resource registrarSandbox', () => runTests(client));
describe('resource registrarSandbox (tree shakable, base)', () => runTests(partialClient));
