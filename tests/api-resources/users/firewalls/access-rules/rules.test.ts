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

describe('resource rules', () => {
  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = cloudflare.users.firewalls.accessRules.rules.update(
      '92f17202ed8bd63d69a66b86a49a8f6b',
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
    const responsePromise = cloudflare.users.firewalls.accessRules.rules.delete(
      '92f17202ed8bd63d69a66b86a49a8f6b',
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
  test.skip('ipAccessRulesForAUserCreateAnIPAccessRule: only required params', async () => {
    const responsePromise =
      cloudflare.users.firewalls.accessRules.rules.ipAccessRulesForAUserCreateAnIPAccessRule({
        configuration: {},
        mode: 'challenge',
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
  test.skip('ipAccessRulesForAUserCreateAnIPAccessRule: required and optional params', async () => {
    const response =
      await cloudflare.users.firewalls.accessRules.rules.ipAccessRulesForAUserCreateAnIPAccessRule({
        configuration: { target: 'ip', value: '198.51.100.4' },
        mode: 'challenge',
        notes: 'This rule is enabled because of an event that occurred on date X.',
      });
  });

  // skipped: tests are disabled for the time being
  test.skip('ipAccessRulesForAUserListIPAccessRules', async () => {
    const responsePromise =
      cloudflare.users.firewalls.accessRules.rules.ipAccessRulesForAUserListIPAccessRules();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('ipAccessRulesForAUserListIPAccessRules: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.users.firewalls.accessRules.rules.ipAccessRulesForAUserListIPAccessRules({
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('ipAccessRulesForAUserListIPAccessRules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.users.firewalls.accessRules.rules.ipAccessRulesForAUserListIPAccessRules(
        {
          direction: 'desc',
          'egs-pagination': { json: { page: 1, per_page: 1 } },
          filters: {
            'configuration.target': 'ip',
            'configuration.value': '198.51.100.4',
            match: 'any',
            mode: 'challenge',
            notes: 'my note',
          },
          order: 'mode',
          page: 1,
          per_page: 20,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
