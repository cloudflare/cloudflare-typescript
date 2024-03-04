// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource configurations', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.gateway.configurations.update({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await cloudflare.zeroTrust.gateway.configurations.update({
      account_id: '699d98642c564d2e855e9661899b7252',
      settings: {
        activity_log: { enabled: true },
        antivirus: {
          enabled_download_phase: false,
          enabled_upload_phase: false,
          fail_closed: false,
          notification_settings: { enabled: true, msg: 'string', support_url: 'string' },
        },
        block_page: {
          background_color: 'string',
          enabled: true,
          footer_text: '--footer--',
          header_text: '--header--',
          logo_path: 'https://logos.com/a.png',
          mailto_address: 'admin@example.com',
          mailto_subject: 'Blocked User Inquiry',
          name: 'Cloudflare',
          suppress_footer: false,
        },
        body_scanning: { inspection_mode: 'deep' },
        browser_isolation: { non_identity_enabled: true, url_browser_isolation_enabled: true },
        custom_certificate: { enabled: true, id: 'd1b364c5-1311-466e-a194-f0e943e0799f' },
        extended_email_matching: { enabled: true },
        fips: { tls: true },
        protocol_detection: { enabled: true },
        tls_decrypt: { enabled: true },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.gateway.configurations.edit({
      account_id: '699d98642c564d2e855e9661899b7252',
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
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.gateway.configurations.edit({
      account_id: '699d98642c564d2e855e9661899b7252',
      settings: {
        activity_log: { enabled: true },
        antivirus: {
          enabled_download_phase: false,
          enabled_upload_phase: false,
          fail_closed: false,
          notification_settings: { enabled: true, msg: 'string', support_url: 'string' },
        },
        block_page: {
          background_color: 'string',
          enabled: true,
          footer_text: '--footer--',
          header_text: '--header--',
          logo_path: 'https://logos.com/a.png',
          mailto_address: 'admin@example.com',
          mailto_subject: 'Blocked User Inquiry',
          name: 'Cloudflare',
          suppress_footer: false,
        },
        body_scanning: { inspection_mode: 'deep' },
        browser_isolation: { non_identity_enabled: true, url_browser_isolation_enabled: true },
        custom_certificate: { enabled: true, id: 'd1b364c5-1311-466e-a194-f0e943e0799f' },
        extended_email_matching: { enabled: true },
        fips: { tls: true },
        protocol_detection: { enabled: true },
        tls_decrypt: { enabled: true },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.gateway.configurations.get({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await cloudflare.zeroTrust.gateway.configurations.get({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
