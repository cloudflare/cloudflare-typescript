// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource policies', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.access.apps.policies.create(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await cloudflare.access.apps.policies.create(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
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
    const responsePromise = cloudflare.access.apps.policies.update(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await cloudflare.access.apps.policies.update(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('delete', async () => {
    const responsePromise = cloudflare.access.apps.policies.delete(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
      cloudflare.access.apps.policies.delete(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('accessPoliciesCreateAnAccessPolicy: only required params', async () => {
    const responsePromise = cloudflare.access.apps.policies.accessPoliciesCreateAnAccessPolicy(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('accessPoliciesCreateAnAccessPolicy: required and optional params', async () => {
    const response = await cloudflare.access.apps.policies.accessPoliciesCreateAnAccessPolicy(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
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
  test.skip('accessPoliciesListAccessPolicies', async () => {
    const responsePromise = cloudflare.access.apps.policies.accessPoliciesListAccessPolicies(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('accessPoliciesListAccessPolicies: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.access.apps.policies.accessPoliciesListAccessPolicies(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.access.apps.policies.get(
      'string',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
      cloudflare.access.apps.policies.get(
        'string',
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
