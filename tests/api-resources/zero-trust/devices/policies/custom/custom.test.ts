// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource custom', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.custom.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      match: 'identity.email == "test@cloudflare.com"',
      name: 'Allow Developers',
      precedence: 100,
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
    const response = await client.zeroTrust.devices.policies.custom.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      match: 'identity.email == "test@cloudflare.com"',
      name: 'Allow Developers',
      precedence: 100,
      allow_mode_switch: true,
      allow_updates: true,
      allowed_to_leave: true,
      auto_connect: 0,
      captive_portal: 180,
      description: 'Policy for test teams.',
      disable_auto_fallback: true,
      enabled: true,
      exclude: [{ address: '192.0.2.0/24', description: 'Exclude testing domains from the tunnel' }],
      exclude_office_ips: true,
      include: [{ address: '192.0.2.0/24', description: 'Include testing domains in the tunnel' }],
      lan_allow_minutes: 30,
      lan_allow_subnet_size: 24,
      register_interface_ip_with_dns: true,
      sccm_vpn_boundary_support: false,
      service_mode_v2: { mode: 'proxy', port: 3000 },
      support_url: 'https://1.1.1.1/help',
      switch_locked: true,
      tunnel_protocol: 'wireguard',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.custom.list({
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
    const response = await client.zeroTrust.devices.policies.custom.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.custom.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.policies.custom.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });

  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.custom.edit(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('edit: required and optional params', async () => {
    const response = await client.zeroTrust.devices.policies.custom.edit(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '699d98642c564d2e855e9661899b7252',
        allow_mode_switch: true,
        allow_updates: true,
        allowed_to_leave: true,
        auto_connect: 0,
        captive_portal: 180,
        description: 'Policy for test teams.',
        disable_auto_fallback: true,
        enabled: true,
        exclude: [{ address: '192.0.2.0/24', description: 'Exclude testing domains from the tunnel' }],
        exclude_office_ips: true,
        include: [{ address: '192.0.2.0/24', description: 'Include testing domains in the tunnel' }],
        lan_allow_minutes: 30,
        lan_allow_subnet_size: 24,
        match: 'identity.email == "test@cloudflare.com"',
        name: 'Allow Developers',
        precedence: 100,
        register_interface_ip_with_dns: true,
        sccm_vpn_boundary_support: false,
        service_mode_v2: { mode: 'proxy', port: 3000 },
        support_url: 'https://1.1.1.1/help',
        switch_locked: true,
        tunnel_protocol: 'wireguard',
      },
    );
  });

  // TODO: investigate broken test
  test.skip('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.custom.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.policies.custom.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });
});
