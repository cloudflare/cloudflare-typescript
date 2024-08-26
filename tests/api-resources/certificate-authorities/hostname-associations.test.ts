// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource hostnameAssociations', () => {
  test('update: only required params', async () => {
    const responsePromise = client.certificateAuthorities.hostnameAssociations.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.certificateAuthorities.hostnameAssociations.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', hostnames: ['api.example.com', 'api.example.com', 'api.example.com'], mtls_certificate_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.certificateAuthorities.hostnameAssociations.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.certificateAuthorities.hostnameAssociations.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', mtls_certificate_id: 'b2134436-2555-4acf-be5b-26c48136575e' });
  });
});
