// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseFieldExtractors } from 'cloudflare/resources/field-extractors/field-extractors';

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
  resources: [BaseFieldExtractors],
});

const runTests = (client: PartialCloudflare<{ fieldExtractors: BaseFieldExtractors }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.fieldExtractors.update('llm_prompts', {
      account_id: '123456',
      rules: [{ fields: [{ expression: 'x', name: 'x' }], ref: 'x' }],
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
    const response = await client.fieldExtractors.update('llm_prompts', {
      account_id: '123456',
      rules: [
        {
          fields: [{ expression: 'x', name: 'x' }],
          ref: 'x',
          description: 'description',
        },
      ],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.fieldExtractors.delete('llm_prompts', { account_id: '123456' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.fieldExtractors.delete('llm_prompts', { account_id: '123456' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.fieldExtractors.get('llm_prompts', { account_id: '123456' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.fieldExtractors.get('llm_prompts', { account_id: '123456' });
  });
};
describe('resource fieldExtractors', () => runTests(client));
describe('resource fieldExtractors (tree shakable, base)', () => runTests(partialClient));
