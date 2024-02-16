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

describe('resource tunnels', () => {
  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.tunnels.delete(
      '699d98642c564d2e855e9661899b7252',
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      {},
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
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.tunnels.delete(
      '699d98642c564d2e855e9661899b7252',
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      {},
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('argoTunnelCreateAnArgoTunnel: only required params', async () => {
    const responsePromise = cloudflare.tunnels.argoTunnelCreateAnArgoTunnel(
      '699d98642c564d2e855e9661899b7252',
      { name: 'blog', tunnel_secret: {} },
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
  test.skip('argoTunnelCreateAnArgoTunnel: required and optional params', async () => {
    const response = await cloudflare.tunnels.argoTunnelCreateAnArgoTunnel(
      '699d98642c564d2e855e9661899b7252',
      { name: 'blog', tunnel_secret: {} },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('argoTunnelListArgoTunnels', async () => {
    const responsePromise = cloudflare.tunnels.argoTunnelListArgoTunnels('699d98642c564d2e855e9661899b7252');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('argoTunnelListArgoTunnels: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.tunnels.argoTunnelListArgoTunnels('699d98642c564d2e855e9661899b7252', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('argoTunnelListArgoTunnels: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.tunnels.argoTunnelListArgoTunnels(
        '699d98642c564d2e855e9661899b7252',
        {
          exclude_prefix: 'vpc1-',
          existed_at: '2019-10-12T07:20:50.52Z',
          include_prefix: 'vpc1-',
          is_deleted: true,
          name: 'blog',
          page: 1,
          per_page: 1,
          tun_types: 'cfd_tunnel,warp_connector',
          was_active_at: '2009-11-10T23:00:00Z',
          was_inactive_at: '2009-11-10T23:00:00Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.tunnels.get(
      '699d98642c564d2e855e9661899b7252',
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
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
      cloudflare.tunnels.get('699d98642c564d2e855e9661899b7252', 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
