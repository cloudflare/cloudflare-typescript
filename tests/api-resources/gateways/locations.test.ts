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

describe('resource locations', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.gateways.locations.update(
      '699d98642c564d2e855e9661899b7252',
      'ed35569b41ce4d1facfe683550f54086',
      { name: 'Austin Office Location' },
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
    const response = await cloudflare.gateways.locations.update(
      '699d98642c564d2e855e9661899b7252',
      'ed35569b41ce4d1facfe683550f54086',
      {
        name: 'Austin Office Location',
        client_default: false,
        ecs_support: false,
        networks: [{ network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }],
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.gateways.locations.delete(
      '699d98642c564d2e855e9661899b7252',
      'ed35569b41ce4d1facfe683550f54086',
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
  test.skip('get', async () => {
    const responsePromise = cloudflare.gateways.locations.get(
      '699d98642c564d2e855e9661899b7252',
      'ed35569b41ce4d1facfe683550f54086',
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
      cloudflare.gateways.locations.get(
        '699d98642c564d2e855e9661899b7252',
        'ed35569b41ce4d1facfe683550f54086',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('zeroTrustGatewayLocationsCreateZeroTrustGatewayLocation: only required params', async () => {
    const responsePromise =
      cloudflare.gateways.locations.zeroTrustGatewayLocationsCreateZeroTrustGatewayLocation(
        '699d98642c564d2e855e9661899b7252',
        { name: 'Austin Office Location' },
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
  test.skip('zeroTrustGatewayLocationsCreateZeroTrustGatewayLocation: required and optional params', async () => {
    const response =
      await cloudflare.gateways.locations.zeroTrustGatewayLocationsCreateZeroTrustGatewayLocation(
        '699d98642c564d2e855e9661899b7252',
        {
          name: 'Austin Office Location',
          client_default: false,
          ecs_support: false,
          networks: [{ network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }],
        },
      );
  });

  // skipped: tests are disabled for the time being
  test.skip('zeroTrustGatewayLocationsListZeroTrustGatewayLocations', async () => {
    const responsePromise =
      cloudflare.gateways.locations.zeroTrustGatewayLocationsListZeroTrustGatewayLocations(
        '699d98642c564d2e855e9661899b7252',
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
  test.skip('zeroTrustGatewayLocationsListZeroTrustGatewayLocations: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.gateways.locations.zeroTrustGatewayLocationsListZeroTrustGatewayLocations(
        '699d98642c564d2e855e9661899b7252',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
