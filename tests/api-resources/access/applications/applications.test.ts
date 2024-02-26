// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey:
    'v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource applications', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.access.applications.create({
      account_id: 'string',
      zone_id: 'string',
    });
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
    const response = await cloudflare.access.applications.create({
      account_id: 'string',
      zone_id: 'string',
      allow_authenticate_via_warp: true,
      allowed_idps: [
        '699d98642c564d2e855e9661899b7252',
        '699d98642c564d2e855e9661899b7252',
        '699d98642c564d2e855e9661899b7252',
      ],
      app_launcher_visible: {},
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
      domain: 'https://mybookmark.com',
      enable_binding_cookie: true,
      http_only_cookie_attribute: true,
      logo_url: 'https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg',
      name: 'Admin Site',
      path_cookie_attribute: true,
      saas_app: {
        auth_type: 'saml',
        consumer_service_url: 'https://example.com',
        custom_attributes: {
          name: 'family_name',
          name_format: 'urn:oasis:names:tc:SAML:2.0:attrname-format:basic',
          source: { name: 'last_name' },
        },
        default_relay_state: 'https://example.com',
        idp_entity_id: 'https://example.cloudflareaccess.com',
        name_id_format: 'id',
        name_id_transform_jsonata: "$substringBefore(email, '@') & '+sandbox@' & $substringAfter(email, '@')",
        public_key: 'example unique name',
        sp_entity_id: 'example unique name',
        sso_endpoint:
          'https://example.cloudflareaccess.com/cdn-cgi/access/sso/saml/b3f58a2b414e0b51d45c8c2af26fccca0e27c63763c426fa52f98dcf0b3b3bfd',
      },
      same_site_cookie_attribute: 'strict',
      self_hosted_domains: ['test.example.com/admin', 'test.anotherexample.com/staff'],
      service_auth_401_redirect: true,
      session_duration: '24h',
      skip_interstitial: true,
      tags: ['engineers', 'engineers', 'engineers'],
      type: 'bookmark',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.access.applications.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'string',
      zone_id: 'string',
    });
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
    const response = await cloudflare.access.applications.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'string',
      zone_id: 'string',
      allow_authenticate_via_warp: true,
      allowed_idps: [
        '699d98642c564d2e855e9661899b7252',
        '699d98642c564d2e855e9661899b7252',
        '699d98642c564d2e855e9661899b7252',
      ],
      app_launcher_visible: {},
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
      domain: 'https://mybookmark.com',
      enable_binding_cookie: true,
      http_only_cookie_attribute: true,
      logo_url: 'https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg',
      name: 'Admin Site',
      path_cookie_attribute: true,
      saas_app: {
        auth_type: 'saml',
        consumer_service_url: 'https://example.com',
        custom_attributes: {
          name: 'family_name',
          name_format: 'urn:oasis:names:tc:SAML:2.0:attrname-format:basic',
          source: { name: 'last_name' },
        },
        default_relay_state: 'https://example.com',
        idp_entity_id: 'https://example.cloudflareaccess.com',
        name_id_format: 'id',
        name_id_transform_jsonata: "$substringBefore(email, '@') & '+sandbox@' & $substringAfter(email, '@')",
        public_key: 'example unique name',
        sp_entity_id: 'example unique name',
        sso_endpoint:
          'https://example.cloudflareaccess.com/cdn-cgi/access/sso/saml/b3f58a2b414e0b51d45c8c2af26fccca0e27c63763c426fa52f98dcf0b3b3bfd',
      },
      same_site_cookie_attribute: 'strict',
      self_hosted_domains: ['test.example.com/admin', 'test.anotherexample.com/staff'],
      service_auth_401_redirect: true,
      session_duration: '24h',
      skip_interstitial: true,
      tags: ['engineers', 'engineers', 'engineers'],
      type: 'bookmark',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.access.applications.list({ account_id: 'string', zone_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.access.applications.list({ account_id: 'string', zone_id: 'string' });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.access.applications.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'string',
      zone_id: 'string',
    });
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
    const response = await cloudflare.access.applications.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'string',
      zone_id: 'string',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.access.applications.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'string',
      zone_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.access.applications.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'string',
      zone_id: 'string',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('revokeTokens: only required params', async () => {
    const responsePromise = cloudflare.access.applications.revokeTokens('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'string',
      zone_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('revokeTokens: required and optional params', async () => {
    const response = await cloudflare.access.applications.revokeTokens('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'string',
      zone_id: 'string',
    });
  });
});
