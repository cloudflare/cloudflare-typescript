// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ThreatSignals } from 'cloudflare/resources/cloudforce-one/threat-signals/threat-signals';
import { BaseSkills } from 'cloudflare/resources/cloudforce-one/threat-signals/skills/skills';

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
  resources: [ThreatSignals],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatSignals: { skills: BaseSkills } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.skills.create({
      account_id: 'account_id',
      name: 'x',
      output_schema: 'x',
      prompt: 'x',
      type: 'summary',
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
    const response = await client.cloudforceOne.threatSignals.skills.create({
      account_id: 'account_id',
      name: 'x',
      output_schema: 'x',
      prompt: 'x',
      type: 'summary',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.skills.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.skills.list({
      account_id: 'account_id',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.skills.delete('skill_id', {
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

  test('delete: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.skills.delete('skill_id', {
      account_id: 'account_id',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.skills.edit('skill_id', {
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

  test('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.skills.edit('skill_id', {
      account_id: 'account_id',
      config: 'config',
      is_active: true,
      name: 'x',
      output_schema: 'x',
      prompt: 'x',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.skills.get('skill_id', {
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

  test('get: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.skills.get('skill_id', {
      account_id: 'account_id',
    });
  });
};
describe('resource skills', () => runTests(client));
describe('resource skills (tree shakable, base)', () => runTests(partialClient));
describe('resource skills (tree shakable, subresource)', () => runTests(parentPartialClient));
