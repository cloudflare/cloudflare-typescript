// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource applications', () => {
  test('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.access.applications.create({
      domain: 'test.example.com/admin',
      type: 'self_hosted',
      account_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.access.applications.create({
      domain: 'test.example.com/admin',
      type: 'self_hosted',
      account_id: 'string',
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
        allowed_headers: ['string', 'string', 'string'],
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
      options_preflight_bypass: true,
      path_cookie_attribute: true,
      same_site_cookie_attribute: 'strict',
      self_hosted_domains: ['test.example.com/admin', 'test.anotherexample.com/staff'],
      service_auth_401_redirect: true,
      session_duration: '24h',
      skip_interstitial: true,
      tags: ['engineers', 'engineers', 'engineers'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.access.applications.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { domain: 'test.example.com/admin', type: 'self_hosted', account_id: 'string' },
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
    const response = await cloudflare.zeroTrust.access.applications.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        domain: 'test.example.com/admin',
        type: 'self_hosted',
        account_id: 'string',
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
          allowed_headers: ['string', 'string', 'string'],
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
        options_preflight_bypass: true,
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

  test('list', async () => {
    const responsePromise = cloudflare.zeroTrust.access.applications.list({ account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = cloudflare.zeroTrust.access.applications.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: 'string' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = cloudflare.zeroTrust.access.applications.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('revokeTokens', async () => {
    const responsePromise = cloudflare.zeroTrust.access.applications.revokeTokens(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: 'string' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
