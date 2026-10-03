// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { EmailSending } from 'cloudflare/resources/email-sending/email-sending';
import { BaseSuppressions } from 'cloudflare/resources/email-sending/suppressions';

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
  resources: [BaseSuppressions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [EmailSending],
});

const runTests = (client: PartialCloudflare<{ emailSending: { suppressions: BaseSuppressions } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.emailSending.suppressions.create({
      account_id: '12345678',
      email: 'user@example.com',
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
    const response = await client.emailSending.suppressions.create({
      account_id: '12345678',
      email: 'user@example.com',
      expires_at: '2027-01-01T00:00:00Z',
      note: 'Imported from CRM',
      scope: { type: 'sending_domain', value: 'mail.example.com' },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.emailSending.suppressions.list({ account_id: '12345678' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.emailSending.suppressions.list({
      account_id: '12345678',
      cursor: 'eyJ0Ijo0LCJwaCI6ImRvbWFpbiIsInAiOjEyMywiYyI6ImMzZGM1ZjBiMzRhMTRmZjhlMWIzZWMwNDg5NWUxYjIyIn0',
      email: 'user@example.com',
      per_page: 100,
      reason: 'hard_bounce',
      scope_type: 'sending_domain',
      scope_value: 'mail.example.com',
      search: 'billing@',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.emailSending.suppressions.delete('396a5436-d4b0-42a6-b3fc-48e8fa522321', {
      account_id: '12345678',
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
    const response = await client.emailSending.suppressions.delete('396a5436-d4b0-42a6-b3fc-48e8fa522321', {
      account_id: '12345678',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.emailSending.suppressions.edit('396a5436-d4b0-42a6-b3fc-48e8fa522321', {
      account_id: '12345678',
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
    const response = await client.emailSending.suppressions.edit('396a5436-d4b0-42a6-b3fc-48e8fa522321', {
      account_id: '12345678',
      expires_at: '2027-01-01T00:00:00Z',
      note: 'Customer re-confirmed opt-in',
      scope: {},
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailSending.suppressions.get('396a5436-d4b0-42a6-b3fc-48e8fa522321', {
      account_id: '12345678',
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
    const response = await client.emailSending.suppressions.get('396a5436-d4b0-42a6-b3fc-48e8fa522321', {
      account_id: '12345678',
    });
  });

  test('import: only required params', async () => {
    const responsePromise = client.emailSending.suppressions.import({
      account_id: '12345678',
      items: [{ email: 'user@example.com' }, { email: 'other@example.com' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('import: required and optional params', async () => {
    const response = await client.emailSending.suppressions.import({
      account_id: '12345678',
      items: [
        {
          email: 'user@example.com',
          expires_at: '2027-01-01T00:00:00Z',
          note: 'Imported from CRM',
          scope: { type: 'sending_domain', value: 'mail.example.com' },
        },
        {
          email: 'other@example.com',
          expires_at: '2027-01-01T00:00:00Z',
          note: 'Imported from CRM',
          scope: { type: 'sending_domain', value: 'mail.example.com' },
        },
      ],
    });
  });
};
describe('resource suppressions', () => runTests(client));
describe('resource suppressions (tree shakable, base)', () => runTests(partialClient));
describe('resource suppressions (tree shakable, subresource)', () => runTests(parentPartialClient));
