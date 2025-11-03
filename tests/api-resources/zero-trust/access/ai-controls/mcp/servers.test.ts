// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource servers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.servers.create({
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      id: 'my-mcp-server',
      auth_type: 'unauthenticated',
      hostname: 'https://exmaple.com/mcp',
      name: 'My MCP Server',
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
    const response = await client.zeroTrust.access.aiControls.mcp.servers.create({
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      id: 'my-mcp-server',
      auth_type: 'unauthenticated',
      hostname: 'https://exmaple.com/mcp',
      name: 'My MCP Server',
      auth_credentials: 'auth_credentials',
      description: 'This is one remote mcp server',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.servers.update('my-mcp-server', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
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
    const response = await client.zeroTrust.access.aiControls.mcp.servers.update('my-mcp-server', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      auth_credentials: 'auth_credentials',
      description: 'This is one remote mcp server',
      name: 'My MCP Server',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.servers.list({
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
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
    const response = await client.zeroTrust.access.aiControls.mcp.servers.list({
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      page: 1,
      per_page: 1,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.servers.delete('my-mcp-server', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
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
    const response = await client.zeroTrust.access.aiControls.mcp.servers.delete('my-mcp-server', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
    });
  });

  test('read: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.servers.read('my-mcp-server', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('read: required and optional params', async () => {
    const response = await client.zeroTrust.access.aiControls.mcp.servers.read('my-mcp-server', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
    });
  });

  test('sync: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.servers.sync('my-mcp-portal', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sync: required and optional params', async () => {
    const response = await client.zeroTrust.access.aiControls.mcp.servers.sync('my-mcp-portal', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
    });
  });
});
