// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource userGroups', () => {
  test('create: only required params', async () => {
    const responsePromise = client.iam.userGroups.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'My New User Group',
      policies: [
        {
          access: 'allow',
          permission_groups: [
            { id: 'c8fed203ed3043cba015a93ad1616f1f' },
            { id: '82e64a83756745bbbb1c9c2701bf816b' },
          ],
          resource_groups: [{ id: '6d7f2f5f5b1d4a0e9081fdc98d432fd1' }],
        },
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

  test('create: required and optional params', async () => {
    const response = await client.iam.userGroups.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'My New User Group',
      policies: [
        {
          access: 'allow',
          permission_groups: [
            { id: 'c8fed203ed3043cba015a93ad1616f1f' },
            { id: '82e64a83756745bbbb1c9c2701bf816b' },
          ],
          resource_groups: [{ id: '6d7f2f5f5b1d4a0e9081fdc98d432fd1' }],
        },
      ],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.iam.userGroups.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.iam.userGroups.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'My New User Group',
      policies: [
        {
          id: 'f267e341f3dd4697bd3b9f71dd96247f',
          access: 'allow',
          permission_groups: [
            { id: 'c8fed203ed3043cba015a93ad1616f1f' },
            { id: '82e64a83756745bbbb1c9c2701bf816b' },
          ],
          resource_groups: [{ id: '6d7f2f5f5b1d4a0e9081fdc98d432fd1' }],
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.iam.userGroups.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.iam.userGroups.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'desc',
      fuzzyName: 'Foo',
      name: 'NameOfTheUserGroup',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.iam.userGroups.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.iam.userGroups.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.iam.userGroups.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.iam.userGroups.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
