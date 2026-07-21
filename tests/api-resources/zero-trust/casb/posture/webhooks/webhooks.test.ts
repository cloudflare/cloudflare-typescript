// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Posture } from 'cloudflare/resources/zero-trust/casb/posture/posture';
import { BaseWebhooks } from 'cloudflare/resources/zero-trust/casb/posture/webhooks/webhooks';

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
  resources: [BaseWebhooks],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Posture],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { casb: { posture: { webhooks: BaseWebhooks } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.webhooks.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      authentication_type: 'Bearer Auth',
      destination_url: 'https://example.com/webhook',
      label: 'Send to Slack',
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
    const response = await client.zeroTrust.casb.posture.webhooks.create({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      authentication_type: 'Bearer Auth',
      destination_url: 'https://example.com/webhook',
      label: 'Send to Slack',
      headers: [
        { key: 'Authorization', value: 'Bearer token123' },
        { key: 'X-Custom-Header', value: 'value' },
      ],
      signing_secret: 'my-secret-key',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.webhooks.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '46148281d8a93d002ef242d8b0d5f9f6',
        authentication_type: 'Bearer Auth',
        destination_url: 'https://example.com/webhook',
        label: 'Send to Slack',
        status: 'enabled',
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

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.webhooks.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '46148281d8a93d002ef242d8b0d5f9f6',
        authentication_type: 'Bearer Auth',
        destination_url: 'https://example.com/webhook',
        label: 'Send to Slack',
        status: 'enabled',
        headers: [
          { key: 'Authorization', value: 'Bearer token123' },
          { key: 'X-Custom-Header', value: 'value' },
        ],
        signing_secret: 'my-secret-key',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.webhooks.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
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
    const response = await client.zeroTrust.casb.posture.webhooks.list({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.webhooks.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.webhooks.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
  });

  test('evaluate: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.webhooks.evaluate({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      authentication_type: 'Bearer Auth',
      destination_url: 'https://example.com/webhook',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('evaluate: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.webhooks.evaluate({
      account_id: '46148281d8a93d002ef242d8b0d5f9f6',
      authentication_type: 'Bearer Auth',
      destination_url: 'https://example.com/webhook',
      headers: [
        { key: 'Authorization', value: 'Bearer token123' },
        { key: 'X-Custom-Header', value: 'value' },
      ],
      signing_secret: 'my-secret-key',
    });
  });

  test('evaluateExisting: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.webhooks.evaluateExisting(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('evaluateExisting: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.webhooks.evaluateExisting(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.casb.posture.webhooks.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.casb.posture.webhooks.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
    );
  });
};
describe('resource webhooks', () => runTests(client));
describe('resource webhooks (tree shakable, base)', () => runTests(partialClient));
describe('resource webhooks (tree shakable, subresource)', () => runTests(parentPartialClient));
