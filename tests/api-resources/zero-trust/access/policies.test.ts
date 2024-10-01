// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource policies', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      decision: 'allow',
      include: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      name: 'Allow devs',
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
    const response = await client.zeroTrust.access.policies.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      decision: 'allow',
      include: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      name: 'Allow devs',
      approval_groups: [
        {
          approvals_needed: 1,
          email_addresses: ['test1@cloudflare.com', 'test2@cloudflare.com'],
          email_list_uuid: 'email_list_uuid',
        },
        {
          approvals_needed: 3,
          email_addresses: ['test@cloudflare.com', 'test2@cloudflare.com'],
          email_list_uuid: '597147a1-976b-4ef2-9af0-81d5d007fc34',
        },
      ],
      approval_required: true,
      connection_rules: { ssh: { usernames: ['root', 'ubuntu'] } },
      exclude: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      isolation_required: false,
      purpose_justification_prompt: 'Please enter a justification for entering this protected domain.',
      purpose_justification_required: true,
      require: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      session_duration: '24h',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      decision: 'allow',
      include: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      name: 'Allow devs',
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
    const response = await client.zeroTrust.access.policies.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      decision: 'allow',
      include: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      name: 'Allow devs',
      approval_groups: [
        {
          approvals_needed: 1,
          email_addresses: ['test1@cloudflare.com', 'test2@cloudflare.com'],
          email_list_uuid: 'email_list_uuid',
        },
        {
          approvals_needed: 3,
          email_addresses: ['test@cloudflare.com', 'test2@cloudflare.com'],
          email_list_uuid: '597147a1-976b-4ef2-9af0-81d5d007fc34',
        },
      ],
      approval_required: true,
      connection_rules: { ssh: { usernames: ['root', 'ubuntu'] } },
      exclude: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      isolation_required: false,
      purpose_justification_prompt: 'Please enter a justification for entering this protected domain.',
      purpose_justification_required: true,
      require: [
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
        { email: { email: 'test@example.com' } },
      ],
      session_duration: '24h',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.zeroTrust.access.policies.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.zeroTrust.access.policies.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.access.policies.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.zeroTrust.access.policies.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
