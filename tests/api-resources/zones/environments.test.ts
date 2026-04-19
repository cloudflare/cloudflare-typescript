// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource environments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zones.environments.create({
      zone_id: 'zone_id',
      environments: [
        {
          expression: 'expression',
          locked_on_deployment: true,
          name: 'name',
          position: {},
          ref: 'ref',
          version: 0,
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
    const response = await client.zones.environments.create({
      zone_id: 'zone_id',
      environments: [
        {
          expression: 'expression',
          locked_on_deployment: true,
          name: 'name',
          position: { after: 'yyy', before: 'xxx' },
          ref: 'ref',
          version: 0,
          http_application_id: 'http_application_id',
        },
      ],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zones.environments.update({
      zone_id: 'zone_id',
      environments: [
        {
          expression: 'expression',
          locked_on_deployment: true,
          name: 'name',
          position: {},
          ref: 'ref',
          version: 0,
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

  test('update: required and optional params', async () => {
    const response = await client.zones.environments.update({
      zone_id: 'zone_id',
      environments: [
        {
          expression: 'expression',
          locked_on_deployment: true,
          name: 'name',
          position: { after: 'yyy', before: 'xxx' },
          ref: 'ref',
          version: 0,
          http_application_id: 'http_application_id',
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zones.environments.list({ zone_id: 'zone_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zones.environments.list({ zone_id: 'zone_id' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zones.environments.delete('environment_id', { zone_id: 'zone_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zones.environments.delete('environment_id', { zone_id: 'zone_id' });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.zones.environments.edit({
      zone_id: 'zone_id',
      environments: [
        {
          expression: 'expression',
          locked_on_deployment: true,
          name: 'name',
          position: {},
          ref: 'ref',
          version: 0,
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

  test('edit: required and optional params', async () => {
    const response = await client.zones.environments.edit({
      zone_id: 'zone_id',
      environments: [
        {
          expression: 'expression',
          locked_on_deployment: true,
          name: 'name',
          position: { after: 'yyy', before: 'xxx' },
          ref: 'ref',
          version: 0,
          http_application_id: 'http_application_id',
        },
      ],
    });
  });

  test('rollback: only required params', async () => {
    const responsePromise = client.zones.environments.rollback('environment_id', { zone_id: 'zone_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rollback: required and optional params', async () => {
    const response = await client.zones.environments.rollback('environment_id', { zone_id: 'zone_id' });
  });
});
