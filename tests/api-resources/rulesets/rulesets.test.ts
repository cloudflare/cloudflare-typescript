// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rulesets', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.rulesets.create('string', 'abf9b32d38c5f572afde3336ec0ce302', {
      kind: 'root',
      name: 'My ruleset',
      phase: 'http_request_firewall_custom',
      rules: [{}, {}, {}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.rulesets.create('string', 'abf9b32d38c5f572afde3336ec0ce302', {
      kind: 'root',
      name: 'My ruleset',
      phase: 'http_request_firewall_custom',
      rules: [
        {
          action: 'block',
          action_parameters: {
            response: {
              content: '{\n  "success": false,\n  "error": "you have been blocked"\n}',
              content_type: 'application/json',
              status_code: 400,
            },
          },
          description: 'Block when the IP address is not 1.1.1.1',
          enabled: true,
          expression: 'ip.src ne 1.1.1.1',
          id: '3a03d665bac047339bb530ecb439a90d',
          logging: { enabled: true },
          ref: 'my_ref',
        },
        {
          action: 'block',
          action_parameters: {
            response: {
              content: '{\n  "success": false,\n  "error": "you have been blocked"\n}',
              content_type: 'application/json',
              status_code: 400,
            },
          },
          description: 'Block when the IP address is not 1.1.1.1',
          enabled: true,
          expression: 'ip.src ne 1.1.1.1',
          id: '3a03d665bac047339bb530ecb439a90d',
          logging: { enabled: true },
          ref: 'my_ref',
        },
        {
          action: 'block',
          action_parameters: {
            response: {
              content: '{\n  "success": false,\n  "error": "you have been blocked"\n}',
              content_type: 'application/json',
              status_code: 400,
            },
          },
          description: 'Block when the IP address is not 1.1.1.1',
          enabled: true,
          expression: 'ip.src ne 1.1.1.1',
          id: '3a03d665bac047339bb530ecb439a90d',
          logging: { enabled: true },
          ref: 'my_ref',
        },
      ],
      description: 'My ruleset to execute managed rulesets',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.rulesets.update(
      'string',
      'abf9b32d38c5f572afde3336ec0ce302',
      '2f2feab2026849078ba485f918791bdc',
      { id: '2f2feab2026849078ba485f918791bdc', rules: [{}, {}, {}] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.rulesets.update(
      'string',
      'abf9b32d38c5f572afde3336ec0ce302',
      '2f2feab2026849078ba485f918791bdc',
      {
        id: '2f2feab2026849078ba485f918791bdc',
        rules: [
          {
            action: 'block',
            action_parameters: {
              response: {
                content: '{\n  "success": false,\n  "error": "you have been blocked"\n}',
                content_type: 'application/json',
                status_code: 400,
              },
            },
            description: 'Block when the IP address is not 1.1.1.1',
            enabled: true,
            expression: 'ip.src ne 1.1.1.1',
            id: '3a03d665bac047339bb530ecb439a90d',
            logging: { enabled: true },
            ref: 'my_ref',
          },
          {
            action: 'block',
            action_parameters: {
              response: {
                content: '{\n  "success": false,\n  "error": "you have been blocked"\n}',
                content_type: 'application/json',
                status_code: 400,
              },
            },
            description: 'Block when the IP address is not 1.1.1.1',
            enabled: true,
            expression: 'ip.src ne 1.1.1.1',
            id: '3a03d665bac047339bb530ecb439a90d',
            logging: { enabled: true },
            ref: 'my_ref',
          },
          {
            action: 'block',
            action_parameters: {
              response: {
                content: '{\n  "success": false,\n  "error": "you have been blocked"\n}',
                content_type: 'application/json',
                status_code: 400,
              },
            },
            description: 'Block when the IP address is not 1.1.1.1',
            enabled: true,
            expression: 'ip.src ne 1.1.1.1',
            id: '3a03d665bac047339bb530ecb439a90d',
            logging: { enabled: true },
            ref: 'my_ref',
          },
        ],
        description: 'My ruleset to execute managed rulesets',
        kind: 'root',
        name: 'My ruleset',
        phase: 'http_request_firewall_custom',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.rulesets.list('string', 'abf9b32d38c5f572afde3336ec0ce302');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.rulesets.list('string', 'abf9b32d38c5f572afde3336ec0ce302', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.rulesets.delete(
      'string',
      'abf9b32d38c5f572afde3336ec0ce302',
      '2f2feab2026849078ba485f918791bdc',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.rulesets.delete(
        'string',
        'abf9b32d38c5f572afde3336ec0ce302',
        '2f2feab2026849078ba485f918791bdc',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.rulesets.get(
      'string',
      'abf9b32d38c5f572afde3336ec0ce302',
      '2f2feab2026849078ba485f918791bdc',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.rulesets.get(
        'string',
        'abf9b32d38c5f572afde3336ec0ce302',
        '2f2feab2026849078ba485f918791bdc',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
