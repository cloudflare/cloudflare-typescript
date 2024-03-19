// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource issues', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.intel.attackSurfaceReport.issues.list({
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.intel.attackSurfaceReport.issues.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dismissed: false,
      issue_class: ['a_record_dangling', 'always_use_https_not_enabled'],
      'issue_class~neq': ['a_record_dangling', 'always_use_https_not_enabled'],
      issue_type: ['compliance_violation', 'email_security'],
      'issue_type~neq': ['compliance_violation', 'email_security'],
      page: 1,
      per_page: 25,
      product: ['access', 'dns'],
      'product~neq': ['access', 'dns'],
      severity: ['low', 'moderate'],
      'severity~neq': ['low', 'moderate'],
      subject: ['example.com', 'example.com', 'example.com'],
      'subject~neq': ['example.com', 'example.com', 'example.com'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('class: only required params', async () => {
    const responsePromise = cloudflare.intel.attackSurfaceReport.issues.class({
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

  // skipped: tests are disabled for the time being
  test.skip('class: required and optional params', async () => {
    const response = await cloudflare.intel.attackSurfaceReport.issues.class({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dismissed: false,
      issue_class: ['a_record_dangling', 'always_use_https_not_enabled'],
      'issue_class~neq': ['a_record_dangling', 'always_use_https_not_enabled'],
      issue_type: ['compliance_violation', 'email_security'],
      'issue_type~neq': ['compliance_violation', 'email_security'],
      product: ['access', 'dns'],
      'product~neq': ['access', 'dns'],
      severity: ['low', 'moderate'],
      'severity~neq': ['low', 'moderate'],
      subject: ['example.com', 'example.com', 'example.com'],
      'subject~neq': ['example.com', 'example.com', 'example.com'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('dismiss: only required params', async () => {
    const responsePromise = cloudflare.intel.attackSurfaceReport.issues.dismiss('string', {
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

  // skipped: tests are disabled for the time being
  test.skip('dismiss: required and optional params', async () => {
    const response = await cloudflare.intel.attackSurfaceReport.issues.dismiss('string', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dismiss: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('severity: only required params', async () => {
    const responsePromise = cloudflare.intel.attackSurfaceReport.issues.severity({
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

  // skipped: tests are disabled for the time being
  test.skip('severity: required and optional params', async () => {
    const response = await cloudflare.intel.attackSurfaceReport.issues.severity({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dismissed: false,
      issue_class: ['a_record_dangling', 'always_use_https_not_enabled'],
      'issue_class~neq': ['a_record_dangling', 'always_use_https_not_enabled'],
      issue_type: ['compliance_violation', 'email_security'],
      'issue_type~neq': ['compliance_violation', 'email_security'],
      product: ['access', 'dns'],
      'product~neq': ['access', 'dns'],
      severity: ['low', 'moderate'],
      'severity~neq': ['low', 'moderate'],
      subject: ['example.com', 'example.com', 'example.com'],
      'subject~neq': ['example.com', 'example.com', 'example.com'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('type: only required params', async () => {
    const responsePromise = cloudflare.intel.attackSurfaceReport.issues.type({
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

  // skipped: tests are disabled for the time being
  test.skip('type: required and optional params', async () => {
    const response = await cloudflare.intel.attackSurfaceReport.issues.type({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dismissed: false,
      issue_class: ['a_record_dangling', 'always_use_https_not_enabled'],
      'issue_class~neq': ['a_record_dangling', 'always_use_https_not_enabled'],
      issue_type: ['compliance_violation', 'email_security'],
      'issue_type~neq': ['compliance_violation', 'email_security'],
      product: ['access', 'dns'],
      'product~neq': ['access', 'dns'],
      severity: ['low', 'moderate'],
      'severity~neq': ['low', 'moderate'],
      subject: ['example.com', 'example.com', 'example.com'],
      'subject~neq': ['example.com', 'example.com', 'example.com'],
    });
  });
});
