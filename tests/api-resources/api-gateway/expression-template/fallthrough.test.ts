// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ExpressionTemplate } from 'cloudflare/resources/api-gateway/expression-template/expression-template';
import { BaseFallthrough } from 'cloudflare/resources/api-gateway/expression-template/fallthrough';

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
  resources: [BaseFallthrough],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ExpressionTemplate],
});

const runTests = (
  client: PartialCloudflare<{ apiGateway: { expressionTemplate: { fallthrough: BaseFallthrough } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.apiGateway.expressionTemplate.fallthrough.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      hosts: ['{zone}.domain1.tld', 'domain2.tld'],
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
    const response = await client.apiGateway.expressionTemplate.fallthrough.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      hosts: ['{zone}.domain1.tld', 'domain2.tld'],
    });
  });
};
describe('resource fallthrough', () => runTests(client));
describe('resource fallthrough (tree shakable, base)', () => runTests(partialClient));
describe('resource fallthrough (tree shakable, subresource)', () => runTests(parentPartialClient));
