// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource applications', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.applications.create({
      domain: 'test.example.com/admin',
      type: 'self_hosted',
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.zeroTrust.access.applications.create({
      domain: 'test.example.com/admin',
      type: 'self_hosted',
      account_id: 'account_id',
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
      custom_deny_message: 'custom_deny_message',
      custom_deny_url: 'custom_deny_url',
      custom_non_identity_deny_url: 'custom_non_identity_deny_url',
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
      policies: [
        { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', precedence: 0 },
        { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', precedence: 0 },
        { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', precedence: 0 },
      ],
      same_site_cookie_attribute: 'strict',
      scim_config: {
        idp_uid: 'idp_uid',
        remote_uri: 'remote_uri',
        authentication: { password: 'password', scheme: 'httpbasic', user: 'user' },
        deactivate_on_delete: true,
        enabled: true,
        mappings: [
          {
            schema: 'urn:ietf:params:scim:schemas:core:2.0:User',
            enabled: true,
            filter: 'title pr or userType eq "Intern"',
            operations: { create: true, delete: true, update: true },
            transform_jsonata:
              "$merge([$, {'userName': $substringBefore($.userName, '@') & '+test@' & $substringAfter($.userName, '@')}])",
          },
          {
            schema: 'urn:ietf:params:scim:schemas:core:2.0:User',
            enabled: true,
            filter: 'title pr or userType eq "Intern"',
            operations: { create: true, delete: true, update: true },
            transform_jsonata:
              "$merge([$, {'userName': $substringBefore($.userName, '@') & '+test@' & $substringAfter($.userName, '@')}])",
          },
          {
            schema: 'urn:ietf:params:scim:schemas:core:2.0:User',
            enabled: true,
            filter: 'title pr or userType eq "Intern"',
            operations: { create: true, delete: true, update: true },
            transform_jsonata:
              "$merge([$, {'userName': $substringBefore($.userName, '@') & '+test@' & $substringAfter($.userName, '@')}])",
          },
        ],
      },
      self_hosted_domains: ['test.example.com/admin', 'test.anotherexample.com/staff'],
      service_auth_401_redirect: true,
      session_duration: '24h',
      skip_interstitial: true,
      tags: ['engineers', 'engineers', 'engineers'],
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.applications.update('023e105f4ecef8ad9ca31a8372d0c353', {
      domain: 'test.example.com/admin',
      type: 'self_hosted',
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.zeroTrust.access.applications.update('023e105f4ecef8ad9ca31a8372d0c353', {
      domain: 'test.example.com/admin',
      type: 'self_hosted',
      account_id: 'account_id',
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
      custom_deny_message: 'custom_deny_message',
      custom_deny_url: 'custom_deny_url',
      custom_non_identity_deny_url: 'custom_non_identity_deny_url',
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
      policies: [
        { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', precedence: 0 },
        { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', precedence: 0 },
        { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', precedence: 0 },
      ],
      same_site_cookie_attribute: 'strict',
      scim_config: {
        idp_uid: 'idp_uid',
        remote_uri: 'remote_uri',
        authentication: { password: 'password', scheme: 'httpbasic', user: 'user' },
        deactivate_on_delete: true,
        enabled: true,
        mappings: [
          {
            schema: 'urn:ietf:params:scim:schemas:core:2.0:User',
            enabled: true,
            filter: 'title pr or userType eq "Intern"',
            operations: { create: true, delete: true, update: true },
            transform_jsonata:
              "$merge([$, {'userName': $substringBefore($.userName, '@') & '+test@' & $substringAfter($.userName, '@')}])",
          },
          {
            schema: 'urn:ietf:params:scim:schemas:core:2.0:User',
            enabled: true,
            filter: 'title pr or userType eq "Intern"',
            operations: { create: true, delete: true, update: true },
            transform_jsonata:
              "$merge([$, {'userName': $substringBefore($.userName, '@') & '+test@' & $substringAfter($.userName, '@')}])",
          },
          {
            schema: 'urn:ietf:params:scim:schemas:core:2.0:User',
            enabled: true,
            filter: 'title pr or userType eq "Intern"',
            operations: { create: true, delete: true, update: true },
            transform_jsonata:
              "$merge([$, {'userName': $substringBefore($.userName, '@') & '+test@' & $substringAfter($.userName, '@')}])",
          },
        ],
      },
      self_hosted_domains: ['test.example.com/admin', 'test.anotherexample.com/staff'],
      service_auth_401_redirect: true,
      session_duration: '24h',
      skip_interstitial: true,
      tags: ['engineers', 'engineers', 'engineers'],
    });
  });

  // TODO: investigate broken test
  test.skip('list', async () => {
    const responsePromise = client.zeroTrust.access.applications.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('delete', async () => {
    const responsePromise = client.zeroTrust.access.applications.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('get', async () => {
    const responsePromise = client.zeroTrust.access.applications.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('revokeTokens', async () => {
    const responsePromise = client.zeroTrust.access.applications.revokeTokens(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: 'account_id' },
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
