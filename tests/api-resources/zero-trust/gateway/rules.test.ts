// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.rules.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      action: 'allow',
      name: 'block bad websites',
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
    const response = await client.zeroTrust.gateway.rules.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      action: 'allow',
      name: 'block bad websites',
      description: 'Block bad websites based on their host name.',
      device_posture: 'any(device_posture.checks.passed[*] in {"1308749e-fcfb-4ebc-b051-fe022b632644"})',
      enabled: true,
      filters: ['http'],
      identity: 'any(identity.groups.name[*] in {"finance"})',
      precedence: 0,
      rule_settings: {
        add_headers: { foo: 'string' },
        allow_child_bypass: false,
        audit_ssh: { command_logging: false },
        biso_admin_controls: { dcp: false, dd: false, dk: false, dp: false, du: false },
        block_page_enabled: true,
        block_reason: 'This website is a security risk',
        bypass_parent_rule: false,
        check_session: { duration: '300s', enforce: true },
        dns_resolvers: {
          ipv4: [
            {
              ip: '2.2.2.2',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2.2.2.2',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2.2.2.2',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
          ],
          ipv6: [
            {
              ip: '2001:DB8::',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2001:DB8::',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2001:DB8::',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
          ],
        },
        egress: { ipv4: '192.0.2.2', ipv4_fallback: '192.0.2.3', ipv6: '2001:DB8::/64' },
        ignore_cname_category_matches: true,
        insecure_disable_dnssec_validation: false,
        ip_categories: true,
        ip_indicator_feeds: true,
        l4override: { ip: '1.1.1.1', port: 0 },
        notification_settings: { enabled: true, msg: 'msg', support_url: 'support_url' },
        override_host: 'example.com',
        override_ips: ['1.1.1.1', '2.2.2.2'],
        payload_log: { enabled: true },
        resolve_dns_through_cloudflare: true,
        untrusted_cert: { action: 'error' },
      },
      schedule: {
        fri: '08:00-12:30,13:30-17:00',
        mon: '08:00-12:30,13:30-17:00',
        sat: '08:00-12:30,13:30-17:00',
        sun: '08:00-12:30,13:30-17:00',
        thu: '08:00-12:30,13:30-17:00',
        time_zone: 'America/New York',
        tue: '08:00-12:30,13:30-17:00',
        wed: '08:00-12:30,13:30-17:00',
      },
      traffic:
        'http.request.uri matches ".*a/partial/uri.*" and http.request.host in $01302951-49f9-47c9-a400-0297e60b6a10',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.rules.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
      action: 'allow',
      name: 'block bad websites',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.rules.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
      action: 'allow',
      name: 'block bad websites',
      description: 'Block bad websites based on their host name.',
      device_posture: 'any(device_posture.checks.passed[*] in {"1308749e-fcfb-4ebc-b051-fe022b632644"})',
      enabled: true,
      filters: ['http'],
      identity: 'any(identity.groups.name[*] in {"finance"})',
      precedence: 0,
      rule_settings: {
        add_headers: { foo: 'string' },
        allow_child_bypass: false,
        audit_ssh: { command_logging: false },
        biso_admin_controls: { dcp: false, dd: false, dk: false, dp: false, du: false },
        block_page_enabled: true,
        block_reason: 'This website is a security risk',
        bypass_parent_rule: false,
        check_session: { duration: '300s', enforce: true },
        dns_resolvers: {
          ipv4: [
            {
              ip: '2.2.2.2',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2.2.2.2',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2.2.2.2',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
          ],
          ipv6: [
            {
              ip: '2001:DB8::',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2001:DB8::',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2001:DB8::',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
          ],
        },
        egress: { ipv4: '192.0.2.2', ipv4_fallback: '192.0.2.3', ipv6: '2001:DB8::/64' },
        ignore_cname_category_matches: true,
        insecure_disable_dnssec_validation: false,
        ip_categories: true,
        ip_indicator_feeds: true,
        l4override: { ip: '1.1.1.1', port: 0 },
        notification_settings: { enabled: true, msg: 'msg', support_url: 'support_url' },
        override_host: 'example.com',
        override_ips: ['1.1.1.1', '2.2.2.2'],
        payload_log: { enabled: true },
        resolve_dns_through_cloudflare: true,
        untrusted_cert: { action: 'error' },
      },
      schedule: {
        fri: '08:00-12:30,13:30-17:00',
        mon: '08:00-12:30,13:30-17:00',
        sat: '08:00-12:30,13:30-17:00',
        sun: '08:00-12:30,13:30-17:00',
        thu: '08:00-12:30,13:30-17:00',
        time_zone: 'America/New York',
        tue: '08:00-12:30,13:30-17:00',
        wed: '08:00-12:30,13:30-17:00',
      },
      traffic:
        'http.request.uri matches ".*a/partial/uri.*" and http.request.host in $01302951-49f9-47c9-a400-0297e60b6a10',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.rules.list({
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

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.rules.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.rules.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.rules.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.rules.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
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

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.rules.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
