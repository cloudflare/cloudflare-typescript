// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IAM } from 'cloudflare/resources/iam/iam';
import { BaseSSO } from 'cloudflare/resources/iam/sso';

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
  resources: [BaseSSO],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [IAM],
});

const runTests = (client: PartialCloudflare<{ iam: { sso: BaseSSO } }>) => {
  // TODO: HTTP 401 from prism, support api tokens
  test.skip('create: only required params', async () => {
    const responsePromise = client.iam.sso.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email_domain: 'example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('create: required and optional params', async () => {
    const response = await client.iam.sso.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      email_domain: 'example.com',
      begin_verification: true,
      use_fedramp_language: false,
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('update: only required params', async () => {
    const responsePromise = client.iam.sso.update('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('update: required and optional params', async () => {
    const response = await client.iam.sso.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      use_fedramp_language: false,
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('list: only required params', async () => {
    const responsePromise = client.iam.sso.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('list: required and optional params', async () => {
    const response = await client.iam.sso.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iam.sso.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('delete: required and optional params', async () => {
    const response = await client.iam.sso.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('beginVerification: only required params', async () => {
    const responsePromise = client.iam.sso.beginVerification('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('beginVerification: required and optional params', async () => {
    const response = await client.iam.sso.beginVerification('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('get: only required params', async () => {
    const responsePromise = client.iam.sso.get('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('get: required and optional params', async () => {
    const response = await client.iam.sso.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource sso', () => runTests(client));
describe('resource sso (tree shakable, base)', () => runTests(partialClient));
describe('resource sso (tree shakable, subresource)', () => runTests(parentPartialClient));
