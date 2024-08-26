// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource configurations', () => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.configurations.update({ account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.configurations.update({ account_id: '699d98642c564d2e855e9661899b7252', settings: { activity_log: { enabled: true }, antivirus: { enabled_download_phase: false, enabled_upload_phase: false, fail_closed: false, notification_settings: { enabled: true, msg: 'msg', support_url: 'support_url' } }, block_page: { background_color: 'background_color', enabled: true, footer_text: '--footer--', header_text: '--header--', logo_path: 'https://logos.com/a.png', mailto_address: 'admin@example.com', mailto_subject: 'Blocked User Inquiry', name: 'Cloudflare', suppress_footer: false }, body_scanning: { inspection_mode: 'deep' }, browser_isolation: { non_identity_enabled: true, url_browser_isolation_enabled: true }, certificate: { id: 'd1b364c5-1311-466e-a194-f0e943e0799f' }, custom_certificate: { enabled: true, id: 'd1b364c5-1311-466e-a194-f0e943e0799f' }, extended_email_matching: { enabled: true }, fips: { tls: true }, protocol_detection: { enabled: true }, tls_decrypt: { enabled: true } } });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.configurations.edit({ account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.configurations.edit({ account_id: '699d98642c564d2e855e9661899b7252', settings: { activity_log: { enabled: true }, antivirus: { enabled_download_phase: false, enabled_upload_phase: false, fail_closed: false, notification_settings: { enabled: true, msg: 'msg', support_url: 'support_url' } }, block_page: { background_color: 'background_color', enabled: true, footer_text: '--footer--', header_text: '--header--', logo_path: 'https://logos.com/a.png', mailto_address: 'admin@example.com', mailto_subject: 'Blocked User Inquiry', name: 'Cloudflare', suppress_footer: false }, body_scanning: { inspection_mode: 'deep' }, browser_isolation: { non_identity_enabled: true, url_browser_isolation_enabled: true }, certificate: { id: 'd1b364c5-1311-466e-a194-f0e943e0799f' }, custom_certificate: { enabled: true, id: 'd1b364c5-1311-466e-a194-f0e943e0799f' }, extended_email_matching: { enabled: true }, fips: { tls: true }, protocol_detection: { enabled: true }, tls_decrypt: { enabled: true } } });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.configurations.get({ account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.configurations.get({ account_id: '699d98642c564d2e855e9661899b7252' });
  });
});
