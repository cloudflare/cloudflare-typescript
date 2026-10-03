// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Skills } from 'cloudflare/resources/cloudforce-one/threat-signals/skills/skills';
import { BaseTagCategories } from 'cloudflare/resources/cloudforce-one/threat-signals/skills/tag-categories';

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
  resources: [BaseTagCategories],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Skills],
});

const runTests = (
  client: PartialCloudflare<{
    cloudforceOne: { threatSignals: { skills: { tagCategories: BaseTagCategories } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.skills.tagCategories.update(
      'default-tagging-skill',
      { account_id: 'account_id', category_uuids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] },
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
    const response = await client.cloudforceOne.threatSignals.skills.tagCategories.update(
      'default-tagging-skill',
      { account_id: 'account_id', category_uuids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.skills.tagCategories.get(
      'default-tagging-skill',
      { account_id: 'account_id' },
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
    const response = await client.cloudforceOne.threatSignals.skills.tagCategories.get(
      'default-tagging-skill',
      { account_id: 'account_id' },
    );
  });
};
describe('resource tagCategories', () => runTests(client));
describe('resource tagCategories (tree shakable, base)', () => runTests(partialClient));
describe('resource tagCategories (tree shakable, subresource)', () => runTests(parentPartialClient));
