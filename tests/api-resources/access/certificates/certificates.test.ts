// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource certificates', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.access.certificates.update(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { associated_hostnames: ['admin.example.com', 'admin.example.com', 'admin.example.com'] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.access.certificates.update(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        associated_hostnames: ['admin.example.com', 'admin.example.com', 'admin.example.com'],
        name: 'Allow devs',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.access.certificates.delete(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.certificates.delete(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('accessMTLSAuthenticationAddAnMTLSCertificate: only required params', async () => {
    const responsePromise = cloudflare.access.certificates.accessMTLSAuthenticationAddAnMTLSCertificate(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIGAjCCA+qgAwIBAgIJAI7kymlF7CWT...N4RI7KKB7nikiuUf8vhULKy5IX10\nDrUtmu/B\n-----END CERTIFICATE-----',
        name: 'Allow devs',
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

  // skipped: tests are disabled for the time being
  test.skip('accessMTLSAuthenticationAddAnMTLSCertificate: required and optional params', async () => {
    const response = await cloudflare.access.certificates.accessMTLSAuthenticationAddAnMTLSCertificate(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIGAjCCA+qgAwIBAgIJAI7kymlF7CWT...N4RI7KKB7nikiuUf8vhULKy5IX10\nDrUtmu/B\n-----END CERTIFICATE-----',
        name: 'Allow devs',
        associated_hostnames: ['admin.example.com', 'admin.example.com', 'admin.example.com'],
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('accessMTLSAuthenticationListMTLSCertificates', async () => {
    const responsePromise = cloudflare.access.certificates.accessMTLSAuthenticationListMTLSCertificates(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('accessMTLSAuthenticationListMTLSCertificates: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.certificates.accessMTLSAuthenticationListMTLSCertificates(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.access.certificates.get(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.certificates.get(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
