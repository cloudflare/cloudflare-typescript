// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.organizations.create({
      auth_domain: 'test.cloudflareaccess.com',
      name: 'Widget Corps Internal Applications',
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.organizations.create({
      auth_domain: 'test.cloudflareaccess.com',
      name: 'Widget Corps Internal Applications',
      account_id: 'string',
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
  test.skip('update', async () => {
    const responsePromise = cloudflare.zeroTrust.organizations.update({ account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.zeroTrust.organizations.list({ account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('revokeUsers: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.organizations.revokeUsers({
      email: 'test@example.com',
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

  // skipped: tests are disabled for the time being
  test.skip('revokeUsers: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.organizations.revokeUsers({
      email: 'test@example.com',
      account_id: 'string',
    });
  });
});
