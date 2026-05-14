// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IdentityProviders } from 'cloudflare/resources/zero-trust/identity-providers/identity-providers';
import { BaseSAMLCertificate } from 'cloudflare/resources/zero-trust/identity-providers/saml-certificate';

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
  resources: [BaseSAMLCertificate],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [IdentityProviders],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { identityProviders: { samlCertificate: BaseSAMLCertificate } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.identityProviders.samlCertificate.create(
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

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.identityProviders.samlCertificate.create(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
};
describe('resource samlCertificate', () => runTests(client));
describe('resource samlCertificate (tree shakable, base)', () => runTests(partialClient));
describe('resource samlCertificate (tree shakable, subresource)', () => runTests(parentPartialClient));
