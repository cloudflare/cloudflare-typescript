// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasicAuthCredentials } from 'cloudflare/resources/zero-trust/cws/basic-auth-credentials/basic-auth-credentials';
import { BaseSecrets } from 'cloudflare/resources/zero-trust/cws/basic-auth-credentials/secrets';

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
  resources: [BaseSecrets],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasicAuthCredentials],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { cws: { basicAuthCredentials: { secrets: BaseSecrets } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.basicAuthCredentials.secrets.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', password: 'x' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.cws.basicAuthCredentials.secrets.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        password: 'x',
        expires_at: '2019-12-27T18:11:19.117Z',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.basicAuthCredentials.secrets.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.cws.basicAuthCredentials.secrets.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        cursor: 'cursor',
        direction: 'asc',
        order: 'created_at',
        per_page: 1,
      },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.basicAuthCredentials.secrets.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        credential_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.cws.basicAuthCredentials.secrets.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        credential_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.basicAuthCredentials.secrets.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        credential_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.cws.basicAuthCredentials.secrets.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        credential_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    );
  });
};
describe('resource secrets', () => runTests(client));
describe('resource secrets (tree shakable, base)', () => runTests(partialClient));
describe('resource secrets (tree shakable, subresource)', () => runTests(parentPartialClient));
