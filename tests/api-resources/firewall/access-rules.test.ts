// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accessRules', () => {
  test('create: only required params', async () => {
    const responsePromise = cloudflare.firewall.accessRules.create({
      configuration: {},
      mode: 'challenge',
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

  test('create: required and optional params', async () => {
    const response = await cloudflare.firewall.accessRules.create({
      configuration: { target: 'ip', value: '198.51.100.4' },
      mode: 'challenge',
      account_id: 'string',
      notes: 'This rule is enabled because of an event that occurred on date X.',
    });
  });

  test('list', async () => {
    const responsePromise = cloudflare.firewall.accessRules.list({ account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: only required params', async () => {
    const responsePromise = cloudflare.firewall.accessRules.delete({}, { body: {}, account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await cloudflare.firewall.accessRules.delete({}, { body: {}, account_id: 'string' });
  });

  test('edit: only required params', async () => {
    const responsePromise = cloudflare.firewall.accessRules.edit(
      {},
      { configuration: {}, mode: 'challenge', account_id: 'string' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await cloudflare.firewall.accessRules.edit(
      {},
      {
        configuration: { target: 'ip', value: '198.51.100.4' },
        mode: 'challenge',
        account_id: 'string',
        notes: 'This rule is enabled because of an event that occurred on date X.',
      },
    );
  });

  test('get', async () => {
    const responsePromise = cloudflare.firewall.accessRules.get({}, { account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
