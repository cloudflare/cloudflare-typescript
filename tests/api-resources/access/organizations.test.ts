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

describe('resource organizations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.access.organizations.create({
      account_id: 'string',
      zone_id: 'string',
      auth_domain: 'test.cloudflareaccess.com',
      name: 'Widget Corps Internal Applications',
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
    const response = await cloudflare.access.organizations.create({
      account_id: 'string',
      zone_id: 'string',
      auth_domain: 'test.cloudflareaccess.com',
      name: 'Widget Corps Internal Applications',
      allow_authenticate_via_warp: true,
      auto_redirect_to_identity: true,
      is_ui_read_only: true,
      login_design: {
        background_color: '#c5ed1b',
        footer_text: 'This is an example description.',
        header_text: 'This is an example description.',
        logo_path: 'https://example.com/logo.png',
        text_color: '#c5ed1b',
      },
      session_duration: '24h',
      ui_read_only_toggle_reason: 'Temporarily turn off the UI read only lock to make a change via the UI',
      user_seat_expiration_inactive_time: '720h',
      warp_auth_session_duration: '24h',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.access.organizations.update({
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
    const response = await cloudflare.access.organizations.update({
      account_id: 'string',
      zone_id: 'string',
      allow_authenticate_via_warp: true,
      auth_domain: 'test.cloudflareaccess.com',
      auto_redirect_to_identity: true,
      custom_pages: {
        forbidden: '699d98642c564d2e855e9661899b7252',
        identity_denied: '699d98642c564d2e855e9661899b7252',
      },
      is_ui_read_only: true,
      login_design: {
        background_color: '#c5ed1b',
        footer_text: 'This is an example description.',
        header_text: 'This is an example description.',
        logo_path: 'https://example.com/logo.png',
        text_color: '#c5ed1b',
      },
      name: 'Widget Corps Internal Applications',
      session_duration: '24h',
      ui_read_only_toggle_reason: 'Temporarily turn off the UI read only lock to make a change via the UI',
      user_seat_expiration_inactive_time: '720h',
      warp_auth_session_duration: '24h',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.access.organizations.list({ account_id: 'string', zone_id: 'string' });
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
    const response = await cloudflare.access.organizations.list({ account_id: 'string', zone_id: 'string' });
  });

  // skipped: tests are disabled for the time being
  test.skip('revokeUsers: only required params', async () => {
    const responsePromise = cloudflare.access.organizations.revokeUsers({
      account_id: 'string',
      zone_id: 'string',
      email: 'test@example.com',
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
  test.skip('revokeUsers: required and optional params', async () => {
    const response = await cloudflare.access.organizations.revokeUsers({
      account_id: 'string',
      zone_id: 'string',
      email: 'test@example.com',
    });
  });
});
