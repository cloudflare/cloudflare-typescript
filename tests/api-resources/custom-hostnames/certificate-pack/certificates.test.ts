// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CertificatePack } from 'cloudflare/resources/custom-hostnames/certificate-pack/certificate-pack';
import { BaseCertificates } from 'cloudflare/resources/custom-hostnames/certificate-pack/certificates';

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
  resources: [BaseCertificates],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CertificatePack],
});

const runTests = (
  client: PartialCloudflare<{ customHostnames: { certificatePack: { certificates: BaseCertificates } } }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.customHostnames.certificatePack.certificates.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        custom_hostname_id: '023e105f4ecef8ad9ca31a8372d0c353',
        certificate_pack_id: '023e105f4ecef8ad9ca31a8372d0c353',
        custom_certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDdjCCAl6gAwIBAgIJAPnMg0Fs+/B0MA0GCSqGSIb3DQEBCwUAMFsx...\n-----END CERTIFICATE-----\n',
        custom_key:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/SCB5...\n-----END PRIVATE KEY-----\n',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.customHostnames.certificatePack.certificates.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        custom_hostname_id: '023e105f4ecef8ad9ca31a8372d0c353',
        certificate_pack_id: '023e105f4ecef8ad9ca31a8372d0c353',
        custom_certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDdjCCAl6gAwIBAgIJAPnMg0Fs+/B0MA0GCSqGSIb3DQEBCwUAMFsx...\n-----END CERTIFICATE-----\n',
        custom_key:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/SCB5...\n-----END PRIVATE KEY-----\n',
      },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.customHostnames.certificatePack.certificates.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        custom_hostname_id: '023e105f4ecef8ad9ca31a8372d0c353',
        certificate_pack_id: '023e105f4ecef8ad9ca31a8372d0c353',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.customHostnames.certificatePack.certificates.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        custom_hostname_id: '023e105f4ecef8ad9ca31a8372d0c353',
        certificate_pack_id: '023e105f4ecef8ad9ca31a8372d0c353',
      },
    );
  });
};
describe('resource certificates', () => runTests(client));
describe('resource certificates (tree shakable, base)', () => runTests(partialClient));
describe('resource certificates (tree shakable, subresource)', () => runTests(parentPartialClient));
