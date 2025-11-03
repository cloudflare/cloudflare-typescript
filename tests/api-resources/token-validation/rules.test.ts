// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.tokenValidation.rules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'log',
      description: 'Long description for Token Validation Rule',
      enabled: true,
      expression:
        'is_jwt_valid("52973293-cb04-4a97-8f55-e7d2ad1107dd") or is_jwt_valid("46eab8d1-6376-45e3-968f-2c649d77d423")',
      selector: {},
      title: 'Example Token Validation Rule',
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
    const response = await client.tokenValidation.rules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'log',
      description: 'Long description for Token Validation Rule',
      enabled: true,
      expression:
        'is_jwt_valid("52973293-cb04-4a97-8f55-e7d2ad1107dd") or is_jwt_valid("46eab8d1-6376-45e3-968f-2c649d77d423")',
      selector: {
        exclude: [
          { operation_ids: ['f9c5615e-fe15-48ce-bec6-cfc1946f1bec', '56828eae-035a-4396-ba07-51c66d680a04'] },
        ],
        include: [{ host: ['v1.example.com', 'v2.example.com'] }],
      },
      title: 'Example Token Validation Rule',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.tokenValidation.rules.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.tokenValidation.rules.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      action: 'log',
      enabled: true,
      host: 'www.example.com',
      hostname: 'www.example.com',
      page: 1,
      per_page: 5,
      rule_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      token_configuration: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.tokenValidation.rules.delete('4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.tokenValidation.rules.delete('4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.tokenValidation.rules.edit('4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.tokenValidation.rules.edit('4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: 'log',
      description: 'Long description for Token Validation Rule',
      enabled: true,
      expression:
        'is_jwt_valid("52973293-cb04-4a97-8f55-e7d2ad1107dd") or is_jwt_valid("46eab8d1-6376-45e3-968f-2c649d77d423")',
      position: { index: 2 },
      selector: {
        exclude: [
          { operation_ids: ['f9c5615e-fe15-48ce-bec6-cfc1946f1bec', '56828eae-035a-4396-ba07-51c66d680a04'] },
        ],
        include: [{ host: ['v1.example.com', 'v2.example.com'] }],
      },
      title: 'Example Token Validation Rule',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.tokenValidation.rules.get('4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.tokenValidation.rules.get('4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
