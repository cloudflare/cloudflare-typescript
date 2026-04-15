// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BrandProtection } from 'cloudflare/resources/brand-protection/brand-protection';
import { BaseLogos } from 'cloudflare/resources/brand-protection/logos';

import Cloudflare, { toFile } from 'cloudflare';
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
  resources: [BaseLogos],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BrandProtection],
});

const runTests = (client: PartialCloudflare<{ brandProtection: { logos: BaseLogos } }>) => {
  // TODO: investigate broken test, 422 Unprocessable Entity
  test.skip('create: only required params', async () => {
    const responsePromise = client.brandProtection.logos.create({ account_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test, 422 Unprocessable Entity
  test.skip('create: required and optional params', async () => {
    const response = await client.brandProtection.logos.create({
      account_id: 'x',
      match_type: 'match_type',
      tag: 'tag',
      threshold: 0,
      image: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // TODO: investigate broken test, 401 Unauthorized error
  test.skip('delete: only required params', async () => {
    const responsePromise = client.brandProtection.logos.delete('x', { account_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test, 401 Unauthorized error
  test.skip('delete: required and optional params', async () => {
    const response = await client.brandProtection.logos.delete('x', { account_id: 'x' });
  });
};
describe('resource logos', () => runTests(client));
describe('resource logos (tree shakable, base)', () => runTests(partialClient));
describe('resource logos (tree shakable, subresource)', () => runTests(parentPartialClient));
