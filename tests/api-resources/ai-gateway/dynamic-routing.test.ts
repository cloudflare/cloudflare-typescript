// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dynamicRouting', () => {
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
    const responsePromise = client.aiGateway.dynamicRouting.update('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
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
    const response = await client.aiGateway.dynamicRouting.update('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
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
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.delete('54442216', '54442216', {
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

  test('delete: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.delete('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
    });
  });

  test('createDeployment: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.createDeployment('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      comment: 'Route Deployment Comment',
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
    const response = await client.aiGateway.dynamicRouting.createDeployment('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      comment: 'Route Deployment Comment',
      version_id: '54442216',
    });
  });

  test('createVersion: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.createVersion('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      comment: 'Route Version Comment',
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
    const response = await client.aiGateway.dynamicRouting.createVersion('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      comment: 'Route Version Comment',
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
    const responsePromise = client.aiGateway.dynamicRouting.get('54442216', '54442216', {
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

  test('get: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.get('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
    });
  });

  test('getVersion: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.getVersion('54442216', '54442216', '54442216', {
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

  test('getVersion: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.getVersion('54442216', '54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
    });
  });

  test('listDeployments: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.listDeployments('54442216', '54442216', {
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

  test('listDeployments: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.listDeployments('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
    });
  });

  test('listVersions: only required params', async () => {
    const responsePromise = client.aiGateway.dynamicRouting.listVersions('54442216', '54442216', {
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

  test('listVersions: required and optional params', async () => {
    const response = await client.aiGateway.dynamicRouting.listVersions('54442216', '54442216', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
    });
  });
});
