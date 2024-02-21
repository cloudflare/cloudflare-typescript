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

describe('resource identityProviders', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.access.identityProviders.create({
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      config: {},
      name: 'Widget Corps IDP',
      type: 'onetimepin',
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
    const response = await cloudflare.access.identityProviders.create({
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      config: {
        client_id: '<your client id>',
        client_secret: '<your client secret>',
        claims: ['email_verified', 'preferred_username', 'custom_claim_name'],
        email_claim_name: 'custom_claim_name',
        conditional_access_enabled: true,
        directory_id: '<your azure directory uuid>',
        support_groups: true,
        centrify_account: 'https://abc123.my.centrify.com/',
        centrify_app_id: 'exampleapp',
        apps_domain: 'mycompany.com',
        auth_url: 'https://accounts.google.com/o/oauth2/auth',
        certs_url: 'https://www.googleapis.com/oauth2/v3/certs',
        scopes: ['openid', 'email', 'profile'],
        token_url: 'https://accounts.google.com/o/oauth2/token',
        authorization_server_id: 'aus9o8wzkhckw9TLa0h7z',
        okta_account: 'https://dev-abc123.oktapreview.com',
        onelogin_account: 'https://mycompany.onelogin.com',
        ping_env_id: '342b5660-0c32-4936-a5a4-ce21fae57b0a',
        attributes: ['group', 'department_code', 'divison'],
        email_attribute_name: 'Email',
        header_attributes: [
          { attribute_name: 'string', header_name: 'string' },
          { attribute_name: 'string', header_name: 'string' },
          { attribute_name: 'string', header_name: 'string' },
        ],
        idp_public_certs: ['string', 'string', 'string'],
        issuer_url: 'https://whoami.com',
        sign_request: true,
        sso_target_url: 'https://edgeaccess.org/idp/saml/login',
      },
      name: 'Widget Corps IDP',
      type: 'onetimepin',
      scim_config: {
        enabled: true,
        group_member_deprovision: true,
        seat_deprovision: true,
        secret: 'string',
        user_deprovision: true,
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.access.identityProviders.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: 'string',
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        config: {},
        name: 'Widget Corps IDP',
        type: 'onetimepin',
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.access.identityProviders.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: 'string',
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        config: {
          client_id: '<your client id>',
          client_secret: '<your client secret>',
          claims: ['email_verified', 'preferred_username', 'custom_claim_name'],
          email_claim_name: 'custom_claim_name',
          conditional_access_enabled: true,
          directory_id: '<your azure directory uuid>',
          support_groups: true,
          centrify_account: 'https://abc123.my.centrify.com/',
          centrify_app_id: 'exampleapp',
          apps_domain: 'mycompany.com',
          auth_url: 'https://accounts.google.com/o/oauth2/auth',
          certs_url: 'https://www.googleapis.com/oauth2/v3/certs',
          scopes: ['openid', 'email', 'profile'],
          token_url: 'https://accounts.google.com/o/oauth2/token',
          authorization_server_id: 'aus9o8wzkhckw9TLa0h7z',
          okta_account: 'https://dev-abc123.oktapreview.com',
          onelogin_account: 'https://mycompany.onelogin.com',
          ping_env_id: '342b5660-0c32-4936-a5a4-ce21fae57b0a',
          attributes: ['group', 'department_code', 'divison'],
          email_attribute_name: 'Email',
          header_attributes: [
            { attribute_name: 'string', header_name: 'string' },
            { attribute_name: 'string', header_name: 'string' },
            { attribute_name: 'string', header_name: 'string' },
          ],
          idp_public_certs: ['string', 'string', 'string'],
          issuer_url: 'https://whoami.com',
          sign_request: true,
          sso_target_url: 'https://edgeaccess.org/idp/saml/login',
        },
        name: 'Widget Corps IDP',
        type: 'onetimepin',
        scim_config: {
          enabled: true,
          group_member_deprovision: true,
          seat_deprovision: true,
          secret: 'string',
          user_deprovision: true,
        },
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.access.identityProviders.list({
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.access.identityProviders.list({
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.access.identityProviders.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: 'string', zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await cloudflare.access.identityProviders.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: 'string', zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.access.identityProviders.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await cloudflare.access.identityProviders.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: 'string',
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
