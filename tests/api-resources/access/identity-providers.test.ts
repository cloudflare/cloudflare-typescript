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

describe('resource identityProviders', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.access.identityProviders.update(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { config: {}, name: 'Widget Corps IDP', type: 'onetimepin' },
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
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        config: {
          client_id: '<your client id>',
          client_secret: '<your client secret>',
          claims: ['email_verified', 'preferred_username', 'custom_claim_name'],
          email_claim_name: 'custom_claim_name',
          conditional_access_enabled: true,
          directory_id: '<your azure directory uuid>',
          support_groups: true,
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
  test.skip('delete', async () => {
    const responsePromise = cloudflare.access.identityProviders.delete(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
      cloudflare.access.identityProviders.delete(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('accessIdentityProvidersAddAnAccessIdentityProvider: only required params', async () => {
    const responsePromise =
      cloudflare.access.identityProviders.accessIdentityProvidersAddAnAccessIdentityProvider(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { config: {}, name: 'Widget Corps IDP', type: 'onetimepin' },
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
  test.skip('accessIdentityProvidersAddAnAccessIdentityProvider: required and optional params', async () => {
    const response =
      await cloudflare.access.identityProviders.accessIdentityProvidersAddAnAccessIdentityProvider(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          config: {
            client_id: '<your client id>',
            client_secret: '<your client secret>',
            claims: ['email_verified', 'preferred_username', 'custom_claim_name'],
            email_claim_name: 'custom_claim_name',
            conditional_access_enabled: true,
            directory_id: '<your azure directory uuid>',
            support_groups: true,
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
  test.skip('accessIdentityProvidersListAccessIdentityProviders', async () => {
    const responsePromise =
      cloudflare.access.identityProviders.accessIdentityProvidersListAccessIdentityProviders(
        'string',
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
  test.skip('accessIdentityProvidersListAccessIdentityProviders: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.identityProviders.accessIdentityProvidersListAccessIdentityProviders(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.access.identityProviders.get(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
      cloudflare.access.identityProviders.get(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
