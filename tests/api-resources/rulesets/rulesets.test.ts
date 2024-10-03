// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rulesets', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.rulesets.create({
      kind: 'managed',
      name: 'My ruleset',
      phase: 'ddos_l4',
      rules: [{}, {}, {}],
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.rulesets.create({
      kind: 'managed',
      name: 'My ruleset',
      phase: 'ddos_l4',
      rules: [
        {
          id: '3a03d665bac047339bb530ecb439a90d',
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
          exposed_credential_check: {
            password_expression: 'url_decode(http.request.body.form[\\"password\\"][0])',
            username_expression: 'url_decode(http.request.body.form[\\"username\\"][0])',
          },
          expression: 'ip.src ne 1.1.1.1',
          logging: { enabled: true },
          ratelimit: {
            characteristics: ['ip.src'],
            period: 10,
            counting_expression: 'http.request.body.raw eq "abcd"',
            mitigation_timeout: 600,
            requests_per_period: 1000,
            requests_to_origin: true,
            score_per_period: 400,
            score_response_header_name: 0,
          },
          ref: 'my_ref',
        },
        {
          id: '3a03d665bac047339bb530ecb439a90d',
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
          exposed_credential_check: {
            password_expression: 'url_decode(http.request.body.form[\\"password\\"][0])',
            username_expression: 'url_decode(http.request.body.form[\\"username\\"][0])',
          },
          expression: 'ip.src ne 1.1.1.1',
          logging: { enabled: true },
          ratelimit: {
            characteristics: ['ip.src'],
            period: 10,
            counting_expression: 'http.request.body.raw eq "abcd"',
            mitigation_timeout: 600,
            requests_per_period: 1000,
            requests_to_origin: true,
            score_per_period: 400,
            score_response_header_name: 0,
          },
          ref: 'my_ref',
        },
        {
          id: '3a03d665bac047339bb530ecb439a90d',
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
          exposed_credential_check: {
            password_expression: 'url_decode(http.request.body.form[\\"password\\"][0])',
            username_expression: 'url_decode(http.request.body.form[\\"username\\"][0])',
          },
          expression: 'ip.src ne 1.1.1.1',
          logging: { enabled: true },
          ratelimit: {
            characteristics: ['ip.src'],
            period: 10,
            counting_expression: 'http.request.body.raw eq "abcd"',
            mitigation_timeout: 600,
            requests_per_period: 1000,
            requests_to_origin: true,
            score_per_period: 400,
            score_response_header_name: 0,
          },
          ref: 'my_ref',
        },
      ],
      account_id: 'account_id',
      description: 'My ruleset to execute managed rulesets',
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.rulesets.update('2f2feab2026849078ba485f918791bdc', {
      rules: [{}, {}, {}],
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.rulesets.update('2f2feab2026849078ba485f918791bdc', {
      rules: [
        {
          id: '3a03d665bac047339bb530ecb439a90d',
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
          exposed_credential_check: {
            password_expression: 'url_decode(http.request.body.form[\\"password\\"][0])',
            username_expression: 'url_decode(http.request.body.form[\\"username\\"][0])',
          },
          expression: 'ip.src ne 1.1.1.1',
          logging: { enabled: true },
          ratelimit: {
            characteristics: ['ip.src'],
            period: 10,
            counting_expression: 'http.request.body.raw eq "abcd"',
            mitigation_timeout: 600,
            requests_per_period: 1000,
            requests_to_origin: true,
            score_per_period: 400,
            score_response_header_name: 0,
          },
          ref: 'my_ref',
        },
        {
          id: '3a03d665bac047339bb530ecb439a90d',
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
          exposed_credential_check: {
            password_expression: 'url_decode(http.request.body.form[\\"password\\"][0])',
            username_expression: 'url_decode(http.request.body.form[\\"username\\"][0])',
          },
          expression: 'ip.src ne 1.1.1.1',
          logging: { enabled: true },
          ratelimit: {
            characteristics: ['ip.src'],
            period: 10,
            counting_expression: 'http.request.body.raw eq "abcd"',
            mitigation_timeout: 600,
            requests_per_period: 1000,
            requests_to_origin: true,
            score_per_period: 400,
            score_response_header_name: 0,
          },
          ref: 'my_ref',
        },
        {
          id: '3a03d665bac047339bb530ecb439a90d',
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
          exposed_credential_check: {
            password_expression: 'url_decode(http.request.body.form[\\"password\\"][0])',
            username_expression: 'url_decode(http.request.body.form[\\"username\\"][0])',
          },
          expression: 'ip.src ne 1.1.1.1',
          logging: { enabled: true },
          ratelimit: {
            characteristics: ['ip.src'],
            period: 10,
            counting_expression: 'http.request.body.raw eq "abcd"',
            mitigation_timeout: 600,
            requests_per_period: 1000,
            requests_to_origin: true,
            score_per_period: 400,
            score_response_header_name: 0,
          },
          ref: 'my_ref',
        },
      ],
      account_id: 'account_id',
      description: 'My ruleset to execute managed rulesets',
      kind: 'managed',
      name: 'My ruleset',
      phase: 'ddos_l4',
    });
  });

  // TODO: investigate broken test
  test.skip('list', async () => {
    const responsePromise = client.rulesets.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('delete', async () => {
    const responsePromise = client.rulesets.delete('2f2feab2026849078ba485f918791bdc', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('get', async () => {
    const responsePromise = client.rulesets.get('2f2feab2026849078ba485f918791bdc', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
