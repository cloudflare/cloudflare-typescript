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

describe('resource applications', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.access.applications.create(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { domain: 'test.example.com/admin', type: 'self_hosted' },
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
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.access.applications.create(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        domain: 'test.example.com/admin',
        type: 'self_hosted',
        allow_authenticate_via_warp: true,
        allowed_idps: [
          '699d98642c564d2e855e9661899b7252',
          '699d98642c564d2e855e9661899b7252',
          '699d98642c564d2e855e9661899b7252',
        ],
        app_launcher_visible: true,
        auto_redirect_to_identity: true,
        cors_headers: {
          allow_all_headers: true,
          allow_all_methods: true,
          allow_all_origins: true,
          allow_credentials: true,
          allowed_headers: [{}, {}, {}],
          allowed_methods: ['GET'],
          allowed_origins: ['https://example.com'],
          max_age: -1,
        },
        custom_deny_message: 'string',
        custom_deny_url: 'string',
        custom_non_identity_deny_url: 'string',
        custom_pages: [
          '699d98642c564d2e855e9661899b7252',
          '699d98642c564d2e855e9661899b7252',
          '699d98642c564d2e855e9661899b7252',
        ],
        enable_binding_cookie: true,
        http_only_cookie_attribute: true,
        logo_url: 'https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg',
        name: 'Admin Site',
        path_cookie_attribute: true,
        same_site_cookie_attribute: 'strict',
        self_hosted_domains: ['test.example.com/admin', 'test.anotherexample.com/staff'],
        service_auth_401_redirect: true,
        session_duration: '24h',
        skip_interstitial: true,
        tags: ['engineers', 'engineers', 'engineers'],
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.access.applications.update(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { domain: 'test.example.com/admin', type: 'self_hosted' },
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
    const response = await cloudflare.access.applications.update(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        domain: 'test.example.com/admin',
        type: 'self_hosted',
        allow_authenticate_via_warp: true,
        allowed_idps: [
          '699d98642c564d2e855e9661899b7252',
          '699d98642c564d2e855e9661899b7252',
          '699d98642c564d2e855e9661899b7252',
        ],
        app_launcher_visible: true,
        auto_redirect_to_identity: true,
        cors_headers: {
          allow_all_headers: true,
          allow_all_methods: true,
          allow_all_origins: true,
          allow_credentials: true,
          allowed_headers: [{}, {}, {}],
          allowed_methods: ['GET'],
          allowed_origins: ['https://example.com'],
          max_age: -1,
        },
        custom_deny_message: 'string',
        custom_deny_url: 'string',
        custom_non_identity_deny_url: 'string',
        custom_pages: [
          '699d98642c564d2e855e9661899b7252',
          '699d98642c564d2e855e9661899b7252',
          '699d98642c564d2e855e9661899b7252',
        ],
        enable_binding_cookie: true,
        http_only_cookie_attribute: true,
        logo_url: 'https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg',
        name: 'Admin Site',
        path_cookie_attribute: true,
        same_site_cookie_attribute: 'strict',
        self_hosted_domains: ['test.example.com/admin', 'test.anotherexample.com/staff'],
        service_auth_401_redirect: true,
        session_duration: '24h',
        skip_interstitial: true,
        tags: ['engineers', 'engineers', 'engineers'],
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.access.applications.list('string', '023e105f4ecef8ad9ca31a8372d0c353');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.list('string', '023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.access.applications.delete(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.delete(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.access.applications.get(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.get(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('revokeTokens', async () => {
    const responsePromise = cloudflare.access.applications.revokeTokens(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('revokeTokens: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.revokeTokens(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
