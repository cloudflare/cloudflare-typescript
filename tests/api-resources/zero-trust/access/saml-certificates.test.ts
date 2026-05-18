// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Access } from 'cloudflare/resources/zero-trust/access/access';
import { BaseSAMLCertificates } from 'cloudflare/resources/zero-trust/access/saml-certificates';

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
  resources: [BaseSAMLCertificates],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Access],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { access: { samlCertificates: BaseSAMLCertificates } } }>,
) => {
  // HTTP 404 error from prism
  test.skip('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.samlCertificates.list({
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

  // HTTP 404 error from prism
  test.skip('list: required and optional params', async () => {
    const response = await client.zeroTrust.access.samlCertificates.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: 'a5bb4b3f-c2d1-4e6a-8f9b-1d3e4f5a6b7c,f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      page: 1,
      per_page: 1,
    });
  });

  // HTTP 404 error from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.zeroTrust.access.samlCertificates.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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

  // HTTP 404 error from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.access.samlCertificates.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // HTTP 404 error from prism
  test.skip('getPem: required and optional params', async () => {
    const response = await client.zeroTrust.access.samlCertificates.getPem(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // HTTP 404 error from prism
  test.skip('rotate: only required params', async () => {
    const responsePromise = client.zeroTrust.access.samlCertificates.rotate(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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

  // HTTP 404 error from prism
  test.skip('rotate: required and optional params', async () => {
    const response = await client.zeroTrust.access.samlCertificates.rotate(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource samlCertificates', () => runTests(client));
describe('resource samlCertificates (tree shakable, base)', () => runTests(partialClient));
describe('resource samlCertificates (tree shakable, subresource)', () => runTests(parentPartialClient));
