// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauthClients', () => {
  test('create: only required params', async () => {
    const responsePromise = client.iam.oauthClients.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      client_name: 'My OAuth App',
      grant_types: ['authorization_code', 'refresh_token'],
      redirect_uris: ['https://example.com/callback'],
      response_types: ['code'],
      scopes: ['account.read'],
      token_endpoint_auth_method: 'client_secret_post',
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
    const response = await client.iam.oauthClients.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      client_name: 'My OAuth App',
      grant_types: ['authorization_code', 'refresh_token'],
      redirect_uris: ['https://example.com/callback'],
      response_types: ['code'],
      scopes: ['account.read'],
      token_endpoint_auth_method: 'client_secret_post',
      allowed_cors_origins: ['https://example.com'],
      client_uri: 'https://example.com',
      logo_uri: 'https://example.com/logo.png',
      policy_uri: 'https://example.com/privacy',
      post_logout_redirect_uris: ['https://example.com/logout'],
      tos_uri: 'https://example.com/tos',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.iam.oauthClients.update('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
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
    const response = await client.iam.oauthClients.update('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      allowed_cors_origins: ['https://example.com'],
      client_name: 'My OAuth App',
      client_uri: 'https://example.com',
      grant_types: ['authorization_code', 'refresh_token'],
      logo_uri: 'https://example.com/logo.png',
      policy_uri: 'https://example.com/privacy',
      post_logout_redirect_uris: ['https://example.com/logout'],
      redirect_uris: ['https://example.com/callback'],
      response_types: ['code'],
      scopes: ['account.read'],
      token_endpoint_auth_method: 'client_secret_post',
      tos_uri: 'https://example.com/tos',
      visibility: 'public',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.iam.oauthClients.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.iam.oauthClients.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.iam.oauthClients.delete('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
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
    const response = await client.iam.oauthClients.delete('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('deleteRotatedSecret: only required params', async () => {
    const responsePromise = client.iam.oauthClients.deleteRotatedSecret('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
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

  test('deleteRotatedSecret: required and optional params', async () => {
    const response = await client.iam.oauthClients.deleteRotatedSecret('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.iam.oauthClients.get('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
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
    const response = await client.iam.oauthClients.get('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('rotateSecret: only required params', async () => {
    const responsePromise = client.iam.oauthClients.rotateSecret('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
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

  test('rotateSecret: required and optional params', async () => {
    const response = await client.iam.oauthClients.rotateSecret('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
