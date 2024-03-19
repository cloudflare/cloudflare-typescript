// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource members', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.accounts.members.create({
      account_id: {},
      email: 'user@example.com',
      roles: [
        '3536bcfad5faccb999b47003c79917fb',
        '3536bcfad5faccb999b47003c79917fb',
        '3536bcfad5faccb999b47003c79917fb',
      ],
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
    const response = await cloudflare.accounts.members.create({
      account_id: {},
      email: 'user@example.com',
      roles: [
        '3536bcfad5faccb999b47003c79917fb',
        '3536bcfad5faccb999b47003c79917fb',
        '3536bcfad5faccb999b47003c79917fb',
      ],
      status: 'accepted',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.accounts.members.update('4536bcfad5faccb111b47003c79917fa', {
      account_id: {},
      roles: [
        { id: '3536bcfad5faccb999b47003c79917fb' },
        { id: '3536bcfad5faccb999b47003c79917fb' },
        { id: '3536bcfad5faccb999b47003c79917fb' },
      ],
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
    const response = await cloudflare.accounts.members.update('4536bcfad5faccb111b47003c79917fa', {
      account_id: {},
      roles: [
        { id: '3536bcfad5faccb999b47003c79917fb' },
        { id: '3536bcfad5faccb999b47003c79917fb' },
        { id: '3536bcfad5faccb999b47003c79917fb' },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.accounts.members.list({ account_id: {} });
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
    const response = await cloudflare.accounts.members.list({
      account_id: {},
      direction: 'desc',
      order: 'status',
      page: 1,
      per_page: 5,
      status: 'accepted',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.accounts.members.delete('4536bcfad5faccb111b47003c79917fa', {
      account_id: {},
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
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.accounts.members.delete('4536bcfad5faccb111b47003c79917fa', {
      account_id: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.accounts.members.get('4536bcfad5faccb111b47003c79917fa', {
      account_id: {},
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
    const response = await cloudflare.accounts.members.get('4536bcfad5faccb111b47003c79917fa', {
      account_id: {},
    });
  });
});
