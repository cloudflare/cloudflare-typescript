// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Feeds } from 'cloudflare/resources/cloudforce-one/threat-signals/feeds/feeds';
import { BaseSkills } from 'cloudflare/resources/cloudforce-one/threat-signals/feeds/skills';

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
  resources: [BaseSkills],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Feeds],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatSignals: { feeds: { skills: BaseSkills } } } }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.feeds.skills.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id', skill_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] },
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
    const response = await client.cloudforceOne.threatSignals.feeds.skills.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id', skill_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.feeds.skills.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.cloudforceOne.threatSignals.feeds.skills.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });
};
describe('resource skills', () => runTests(client));
describe('resource skills (tree shakable, base)', () => runTests(partialClient));
describe('resource skills (tree shakable, subresource)', () => runTests(parentPartialClient));
