// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey:
    'v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource policies', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.access.applications.policies.create(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        decision: 'allow',
        include: [
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
        ],
        name: 'Allow devs',
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.access.applications.policies.create(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        decision: 'allow',
        include: [
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
        ],
        name: 'Allow devs',
        account_id: 'string',
        zone_id: 'string',
        approval_groups: [
          {
            approvals_needed: 1,
            email_addresses: ['test1@cloudflare.com', 'test2@cloudflare.com'],
            email_list_uuid: 'string',
          },
          {
            approvals_needed: 3,
            email_addresses: ['test@cloudflare.com', 'test2@cloudflare.com'],
            email_list_uuid: '597147a1-976b-4ef2-9af0-81d5d007fc34',
          },
        ],
        approval_required: true,
        exclude: [
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
        ],
        isolation_required: false,
        precedence: 0,
        purpose_justification_prompt: 'Please enter a justification for entering this protected domain.',
        purpose_justification_required: true,
        require: [
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
        ],
        session_duration: '24h',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.access.applications.policies.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        decision: 'allow',
        include: [
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
        ],
        name: 'Allow devs',
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.access.applications.policies.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        decision: 'allow',
        include: [
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
        ],
        name: 'Allow devs',
        account_id: 'string',
        zone_id: 'string',
        approval_groups: [
          {
            approvals_needed: 1,
            email_addresses: ['test1@cloudflare.com', 'test2@cloudflare.com'],
            email_list_uuid: 'string',
          },
          {
            approvals_needed: 3,
            email_addresses: ['test@cloudflare.com', 'test2@cloudflare.com'],
            email_list_uuid: '597147a1-976b-4ef2-9af0-81d5d007fc34',
          },
        ],
        approval_required: true,
        exclude: [
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
        ],
        isolation_required: false,
        precedence: 0,
        purpose_justification_prompt: 'Please enter a justification for entering this protected domain.',
        purpose_justification_required: true,
        require: [
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
          { email: { email: 'test@example.com' } },
        ],
        session_duration: '24h',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.access.applications.policies.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.policies.list('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.policies.list(
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { account_id: 'string', zone_id: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.access.applications.policies.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.policies.delete(
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.policies.delete(
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { account_id: 'string', zone_id: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.access.applications.policies.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.policies.get(
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.applications.policies.get(
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { account_id: 'string', zone_id: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
