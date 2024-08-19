// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource permissionGroups', () => {
  test('list: only required params', async () => {
    const responsePromise = client.iam.permissionGroups.list({
      account_id: 'eb78d65290b24279ba6f44721b3ea3c4',
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
    const response = await client.iam.permissionGroups.list({
      account_id: 'eb78d65290b24279ba6f44721b3ea3c4',
      id: '6d7f2f5f5b1d4a0e9081fdc98d432fd1',
      label: 'labelOfThePermissionGroup',
      name: 'NameOfThePermissionGroup',
      page: 1,
      per_page: 5,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.iam.permissionGroups.get('6d7f2f5f5b1d4a0e9081fdc98d432fd1', {
      account_id: 'eb78d65290b24279ba6f44721b3ea3c4',
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
    const response = await client.iam.permissionGroups.get('6d7f2f5f5b1d4a0e9081fdc98d432fd1', {
      account_id: 'eb78d65290b24279ba6f44721b3ea3c4',
    });
  });
});
