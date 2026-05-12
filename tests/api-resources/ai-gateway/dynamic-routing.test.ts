// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AIGateway } from 'cloudflare/resources/ai-gateway/ai-gateway';
import { BaseDynamicRouting } from 'cloudflare/resources/ai-gateway/dynamic-routing';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseDynamicRouting],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AIGateway],
});

const runTests = (client: PartialCloudflare<{ aiGateway: { dynamicRouting: BaseDynamicRouting } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.create('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      elements: [
        {
          id: 'id',
          outputs: { next: { elementId: 'elementId' } },
          type: 'start',
        },
      ],
      name: 'name',
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
    const response = await client.aiGateway.dynamicRouting.create('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      elements: [
        {
          id: 'id',
          outputs: { next: { elementId: 'elementId' } },
          type: 'start',
        },
      ],
      name: 'name',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.update('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
      name: 'Route Name',
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
    const response = await client.aiGateway.dynamicRouting.update('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
      name: 'Route Name',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.list('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
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
    const response = await client.aiGateway.dynamicRouting.list('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      page: 1,
      per_page: 20,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.delete('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
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
    const response = await client.aiGateway.dynamicRouting.delete('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
    });
  });

  test('createDeployment: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.createDeployment('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
      version_id: '54442216',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createDeployment: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.createDeployment('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
      version_id: '54442216',
    });
  });

  test('createVersion: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.createVersion('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
      elements: [
        {
          id: 'id',
          outputs: { next: { elementId: 'elementId' } },
          type: 'start',
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

  test('createVersion: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.createVersion('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
      elements: [
        {
          id: 'id',
          outputs: { next: { elementId: 'elementId' } },
          type: 'start',
        },
      ],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.get('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
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
    const response = await client.aiGateway.dynamicRouting.get('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
    });
  });

  test('getVersion: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.getVersion('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
      id: '54442216',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getVersion: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.getVersion('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
      id: '54442216',
    });
  });

  test('listDeployments: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.listDeployments('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listDeployments: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.listDeployments('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
    });
  });

  test('listVersions: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.listVersions('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listVersions: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.listVersions('54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      gateway_id: '54442216',
    });
  });
};
describe('resource dynamicRouting', () => runTests(client));
describe('resource dynamicRouting (tree shakable, base)', () => runTests(partialClient));
describe('resource dynamicRouting (tree shakable, subresource)', () => runTests(parentPartialClient));
