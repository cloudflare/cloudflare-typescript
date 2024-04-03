// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource delegations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.addressing.prefixes.delegations.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        cidr: '192.0.2.0/24',
        delegated_account_id: 'b1946ac92492d2347c6235b4d2611184',
      },
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
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.addressing.prefixes.delegations.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        cidr: '192.0.2.0/24',
        delegated_account_id: 'b1946ac92492d2347c6235b4d2611184',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.addressing.prefixes.delegations.list(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.addressing.prefixes.delegations.list(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.addressing.prefixes.delegations.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'd933b1530bc56c9953cf8ce166da8004',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} },
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
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.addressing.prefixes.delegations.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'd933b1530bc56c9953cf8ce166da8004',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} },
    );
  });
});
