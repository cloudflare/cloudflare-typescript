// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource datasets', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dlp.datasets.create({
      account_id: 'string',
      name: 'string',
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
    const response = await cloudflare.zeroTrust.dlp.datasets.create({
      account_id: 'string',
      name: 'string',
      description: 'string',
      secret: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dlp.datasets.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'string',
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.dlp.datasets.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'string',
      description: 'string',
      name: 'string',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dlp.datasets.list({ account_id: 'string' });
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
    const response = await cloudflare.zeroTrust.dlp.datasets.list({ account_id: 'string' });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dlp.datasets.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'string',
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
    const response = await cloudflare.zeroTrust.dlp.datasets.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'string',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dlp.datasets.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'string',
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
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.dlp.datasets.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'string',
    });
  });
});
