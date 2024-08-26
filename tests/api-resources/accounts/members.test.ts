// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource members', () => {
  // HTTP 422 error from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.accounts.members.create({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4', email: 'user@example.com', roles: ['3536bcfad5faccb999b47003c79917fb', '3536bcfad5faccb999b47003c79917fb', '3536bcfad5faccb999b47003c79917fb'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 422 error from prism
  test.skip('create: required and optional params', async () => {
    const response = await client.accounts.members.create({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4', email: 'user@example.com', roles: ['3536bcfad5faccb999b47003c79917fb', '3536bcfad5faccb999b47003c79917fb', '3536bcfad5faccb999b47003c79917fb'], status: 'accepted' });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.accounts.members.update('4536bcfad5faccb111b47003c79917fa', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.accounts.members.update('4536bcfad5faccb111b47003c79917fa', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4', roles: [{ id: '3536bcfad5faccb999b47003c79917fb' }, { id: '3536bcfad5faccb999b47003c79917fb' }, { id: '3536bcfad5faccb999b47003c79917fb' }] });
  });

  test('list: only required params', async () => {
    const responsePromise = client.accounts.members.list({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.accounts.members.list({ account_id: 'eb78d65290b24279ba6f44721b3ea3c4', direction: 'asc', order: 'user.first_name', page: 1, per_page: 5, status: 'accepted' });
  });

  // HTTP 422 error from prism
  test.skip('delete: only required params', async () => {
    const responsePromise = client.accounts.members.delete('4536bcfad5faccb111b47003c79917fa', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 422 error from prism
  test.skip('delete: required and optional params', async () => {
    const response = await client.accounts.members.delete('4536bcfad5faccb111b47003c79917fa', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
  });

  // HTTP 422 error from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.accounts.members.get('4536bcfad5faccb111b47003c79917fa', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 422 error from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.accounts.members.get('4536bcfad5faccb111b47003c79917fa', { account_id: 'eb78d65290b24279ba6f44721b3ea3c4' });
  });
});
