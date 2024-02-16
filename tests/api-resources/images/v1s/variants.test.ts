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

describe('resource variants', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.images.v1s.variants.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'hero',
      { options: { fit: 'scale-down', height: 768, metadata: 'none', width: 1366 } },
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
    const response = await cloudflare.images.v1s.variants.update('023e105f4ecef8ad9ca31a8372d0c353', 'hero', {
      options: { fit: 'scale-down', height: 768, metadata: 'none', width: 1366 },
      neverRequireSignedURLs: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.images.v1s.variants.delete('023e105f4ecef8ad9ca31a8372d0c353', 'hero');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('cloudflareImagesVariantsCreateAVariant: only required params', async () => {
    const responsePromise = cloudflare.images.v1s.variants.cloudflareImagesVariantsCreateAVariant(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { id: 'hero', options: { fit: 'scale-down', height: 768, metadata: 'none', width: 1366 } },
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
  test.skip('cloudflareImagesVariantsCreateAVariant: required and optional params', async () => {
    const response = await cloudflare.images.v1s.variants.cloudflareImagesVariantsCreateAVariant(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        id: 'hero',
        options: { fit: 'scale-down', height: 768, metadata: 'none', width: 1366 },
        neverRequireSignedURLs: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('cloudflareImagesVariantsListVariants', async () => {
    const responsePromise = cloudflare.images.v1s.variants.cloudflareImagesVariantsListVariants(
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
  test.skip('cloudflareImagesVariantsListVariants: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.images.v1s.variants.cloudflareImagesVariantsListVariants(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.images.v1s.variants.get('023e105f4ecef8ad9ca31a8372d0c353', 'hero');
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
      cloudflare.images.v1s.variants.get('023e105f4ecef8ad9ca31a8372d0c353', 'hero', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
