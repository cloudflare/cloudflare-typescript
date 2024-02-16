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

describe('resource policies', () => {
  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = cloudflare.devices.policies.update(
      '699d98642c564d2e855e9661899b7252',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {},
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
  test.skip('delete', async () => {
    const responsePromise = cloudflare.devices.policies.delete(
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
  test.skip('devicesCreateDeviceSettingsPolicy: only required params', async () => {
    const responsePromise = cloudflare.devices.policies.devicesCreateDeviceSettingsPolicy(
      '699d98642c564d2e855e9661899b7252',
      { match: 'user.identity == "test@cloudflare.com"', name: 'Allow Developers', precedence: 100 },
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
  test.skip('devicesCreateDeviceSettingsPolicy: required and optional params', async () => {
    const response = await cloudflare.devices.policies.devicesCreateDeviceSettingsPolicy(
      '699d98642c564d2e855e9661899b7252',
      {
        match: 'user.identity == "test@cloudflare.com"',
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
        exclude_office_ips: true,
        lan_allow_minutes: 30,
        lan_allow_subnet_size: 24,
        service_mode_v2: { mode: 'proxy', port: 3000 },
        support_url: 'https://1.1.1.1/help',
        switch_locked: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('devicesGetDefaultDeviceSettingsPolicy', async () => {
    const responsePromise = cloudflare.devices.policies.devicesGetDefaultDeviceSettingsPolicy(
      '699d98642c564d2e855e9661899b7252',
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
  test.skip('devicesGetDefaultDeviceSettingsPolicy: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.devices.policies.devicesGetDefaultDeviceSettingsPolicy('699d98642c564d2e855e9661899b7252', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('devicesListDeviceSettingsPolicies', async () => {
    const responsePromise = cloudflare.devices.policies.devicesListDeviceSettingsPolicies(
      '699d98642c564d2e855e9661899b7252',
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
  test.skip('devicesListDeviceSettingsPolicies: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.devices.policies.devicesListDeviceSettingsPolicies('699d98642c564d2e855e9661899b7252', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('devicesUpdateDefaultDeviceSettingsPolicy', async () => {
    const responsePromise = cloudflare.devices.policies.devicesUpdateDefaultDeviceSettingsPolicy(
      '699d98642c564d2e855e9661899b7252',
      {},
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
    const responsePromise = cloudflare.devices.policies.get(
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
      cloudflare.devices.policies.get(
        '699d98642c564d2e855e9661899b7252',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
