// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource identityProviders', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.identityProviders.create({
      config: {},
      name: 'Widget Corps IDP',
      type: 'onetimepin',
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

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.identityProviders.create({
      config: {
        client_id: '<your client id>',
        client_secret: '<your client secret>',
        claims: ['email_verified', 'preferred_username', 'custom_claim_name'],
        email_claim_name: 'custom_claim_name',
        conditional_access_enabled: true,
        directory_id: '<your azure directory uuid>',
        prompt: 'login',
        support_groups: true,
      },
      name: 'Widget Corps IDP',
      type: 'onetimepin',
      account_id: 'string',
      scim_config: {
        enabled: true,
        group_member_deprovision: true,
        seat_deprovision: true,
        secret: 'string',
        user_deprovision: true,
      },
    });
  });

  // TODO: investigate broken test
  test.skip('list', async () => {
    const responsePromise = cloudflare.zeroTrust.identityProviders.list({ account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
