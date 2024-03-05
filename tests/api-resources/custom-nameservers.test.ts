// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customNameservers', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.customNameservers.create({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
      ns_name: 'ns1.example.com',
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
    const response = await cloudflare.customNameservers.create({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
      ns_name: 'ns1.example.com',
      ns_set: 1,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.customNameservers.list({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
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
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.customNameservers.list({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.customNameservers.delete('ns1.example.com', {
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
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
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.customNameservers.delete('ns1.example.com', {
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('availabilty: only required params', async () => {
    const responsePromise = cloudflare.customNameservers.availabilty({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
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
  test.skip('availabilty: required and optional params', async () => {
    const response = await cloudflare.customNameservers.availabilty({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('verify: only required params', async () => {
    const responsePromise = cloudflare.customNameservers.verify({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
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
  test.skip('verify: required and optional params', async () => {
    const response = await cloudflare.customNameservers.verify({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
    });
  });
});
