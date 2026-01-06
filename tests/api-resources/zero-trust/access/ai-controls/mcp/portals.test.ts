// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portals', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.portals.create({
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      id: 'my-mcp-portal',
      hostname: 'exmaple.com',
      name: 'My MCP Portal',
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
    const response = await client.zeroTrust.access.aiControls.mcp.portals.create({
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      id: 'my-mcp-portal',
      hostname: 'exmaple.com',
      name: 'My MCP Portal',
      description: 'This is my custom MCP Portal',
      servers: [
        {
          server_id: 'my-mcp-server',
          default_disabled: true,
          on_behalf: true,
          updated_prompts: [{ name: 'name', description: 'description', enabled: true }],
          updated_tools: [{ name: 'name', description: 'description', enabled: true }],
        },
      ],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.portals.update('my-mcp-portal', {
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
    const response = await client.zeroTrust.access.aiControls.mcp.portals.update('my-mcp-portal', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      description: 'This is my custom MCP Portal',
      hostname: 'exmaple.com',
      name: 'My MCP Portal',
      servers: [
        {
          server_id: 'my-mcp-server',
          default_disabled: true,
          on_behalf: true,
          updated_prompts: [{ name: 'name', description: 'description', enabled: true }],
          updated_tools: [{ name: 'name', description: 'description', enabled: true }],
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.portals.list({
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
    const response = await client.zeroTrust.access.aiControls.mcp.portals.list({
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
      page: 1,
      per_page: 1,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.portals.delete('my-mcp-portal', {
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
    const response = await client.zeroTrust.access.aiControls.mcp.portals.delete('my-mcp-portal', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
    });
  });

  test('read: only required params', async () => {
    const responsePromise = client.zeroTrust.access.aiControls.mcp.portals.read('my-mcp-portal', {
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
    const response = await client.zeroTrust.access.aiControls.mcp.portals.read('my-mcp-portal', {
      account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
    });
  });
});
