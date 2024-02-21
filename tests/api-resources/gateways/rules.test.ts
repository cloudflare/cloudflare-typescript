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

describe('resource rules', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.gateways.rules.create('699d98642c564d2e855e9661899b7252', {
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.gateways.rules.create('699d98642c564d2e855e9661899b7252', {
      action: 'allow',
      name: 'block bad websites',
      description: 'Block bad websites based on their host name.',
      device_posture: 'any(device_posture.checks.passed[*] in {"1308749e-fcfb-4ebc-b051-fe022b632644"})',
      enabled: true,
      filters: ['http'],
      identity: 'any(identity.groups.name[*] in {"finance"})',
      precedence: 0,
      rule_settings: {
        add_headers: { 'My-Next-Header': ['foo', 'bar'], 'X-Custom-Header-Name': ['somecustomvalue'] },
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
              ip: '2001:DB8::/64',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2001:DB8::/64',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2001:DB8::/64',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
          ],
          ipv6: [
            {
              ip: '2001:DB8::/64',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2001:DB8::/64',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
            {
              ip: '2001:DB8::/64',
              port: 5053,
              route_through_private_network: true,
              vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
            },
          ],
        },
        egress: { ipv4: '192.0.2.2', ipv4_fallback: '192.0.2.3', ipv6: '2001:DB8::/64' },
        insecure_disable_dnssec_validation: false,
        ip_categories: true,
        ip_indicator_feeds: true,
        l4override: { ip: '1.1.1.1', port: 0 },
        notification_settings: { enabled: true, msg: 'string', support_url: 'string' },
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

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.gateways.rules.update(
      '699d98642c564d2e855e9661899b7252',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { action: 'allow', name: 'block bad websites' },
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
    const response = await cloudflare.gateways.rules.update(
      '699d98642c564d2e855e9661899b7252',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        action: 'allow',
        name: 'block bad websites',
        description: 'Block bad websites based on their host name.',
        device_posture: 'any(device_posture.checks.passed[*] in {"1308749e-fcfb-4ebc-b051-fe022b632644"})',
        enabled: true,
        filters: ['http'],
        identity: 'any(identity.groups.name[*] in {"finance"})',
        precedence: 0,
        rule_settings: {
          add_headers: { 'My-Next-Header': ['foo', 'bar'], 'X-Custom-Header-Name': ['somecustomvalue'] },
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
                ip: '2001:DB8::/64',
                port: 5053,
                route_through_private_network: true,
                vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
              },
              {
                ip: '2001:DB8::/64',
                port: 5053,
                route_through_private_network: true,
                vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
              },
              {
                ip: '2001:DB8::/64',
                port: 5053,
                route_through_private_network: true,
                vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
              },
            ],
            ipv6: [
              {
                ip: '2001:DB8::/64',
                port: 5053,
                route_through_private_network: true,
                vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
              },
              {
                ip: '2001:DB8::/64',
                port: 5053,
                route_through_private_network: true,
                vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
              },
              {
                ip: '2001:DB8::/64',
                port: 5053,
                route_through_private_network: true,
                vnet_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
              },
            ],
          },
          egress: { ipv4: '192.0.2.2', ipv4_fallback: '192.0.2.3', ipv6: '2001:DB8::/64' },
          insecure_disable_dnssec_validation: false,
          ip_categories: true,
          ip_indicator_feeds: true,
          l4override: { ip: '1.1.1.1', port: 0 },
          notification_settings: { enabled: true, msg: 'string', support_url: 'string' },
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
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.gateways.rules.list('699d98642c564d2e855e9661899b7252');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.gateways.rules.list('699d98642c564d2e855e9661899b7252', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.gateways.rules.delete(
      '699d98642c564d2e855e9661899b7252',
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
  test.skip('get', async () => {
    const responsePromise = cloudflare.gateways.rules.get(
      '699d98642c564d2e855e9661899b7252',
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
      cloudflare.gateways.rules.get(
        '699d98642c564d2e855e9661899b7252',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
