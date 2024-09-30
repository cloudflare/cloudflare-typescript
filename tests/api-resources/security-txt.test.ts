// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource securityTXT', () => {
  test('update: only required params', async () => {
    const responsePromise = client.securityTXT.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.securityTXT.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      acknowledgments: ['https://example.com/hall-of-fame.html'],
      canonical: ['https://www.example.com/.well-known/security.txt'],
      contact: [
        'mailto:security@example.com',
        'tel:+1-201-555-0123',
        'https://example.com/security-contact.html',
      ],
      enabled: true,
      encryption: [
        'https://example.com/pgp-key.txt',
        'dns:5d2d37ab76d47d36._openpgpkey.example.com?type=OPENPGPKEY',
        'openpgp4fpr:5f2de5521c63a801ab59ccb603d49de44b29100f',
      ],
      expires: '2019-12-27T18:11:19.117Z',
      hiring: ['https://example.com/jobs.html'],
      policy: ['https://example.com/disclosure-policy.html'],
      preferredLanguages: 'en, es, fr',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.securityTXT.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.securityTXT.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.securityTXT.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.securityTXT.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
