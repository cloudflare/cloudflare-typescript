// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  // TODO: investigate broken test
  test.skip('create', async () => {
    const responsePromise = client.rulesets.rules.create('2f2feab2026849078ba485f918791bdc', {
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
  test.skip('delete: only required params', async () => {
    const responsePromise = client.rulesets.rules.delete('3a03d665bac047339bb530ecb439a90d', {
      ruleset_id: '2f2feab2026849078ba485f918791bdc',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.rulesets.rules.delete('3a03d665bac047339bb530ecb439a90d', {
      ruleset_id: '2f2feab2026849078ba485f918791bdc',
      account_id: 'account_id',
    });
  });

  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.rulesets.rules.edit('3a03d665bac047339bb530ecb439a90d', {
      ruleset_id: '2f2feab2026849078ba485f918791bdc',
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
  test.skip('edit: required and optional params', async () => {
    const response = await client.rulesets.rules.edit('3a03d665bac047339bb530ecb439a90d', {
      ruleset_id: '2f2feab2026849078ba485f918791bdc',
      account_id: 'account_id',
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
      position: { before: 'da5e8e506c8e7877fe06cdf4c41add54' },
      ratelimit: {
        characteristics: ['ip.src'],
        period: 60,
        counting_expression: 'http.request.body.raw eq "abcd"',
        mitigation_timeout: 600,
        requests_per_period: 1000,
        requests_to_origin: true,
        score_per_period: 400,
        score_response_header_name: 'my-score',
      },
      ref: 'my_ref',
    });
  });
});
