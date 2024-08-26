// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource policies', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.applications.policies.create('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { decision: 'allow', include: [{ email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }], name: 'Allow devs', account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.zeroTrust.access.applications.policies.create('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { decision: 'allow', include: [{ email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }], name: 'Allow devs', account_id: 'account_id', approval_groups: [{ approvals_needed: 1, email_addresses: ['test1@cloudflare.com', 'test2@cloudflare.com'], email_list_uuid: 'email_list_uuid' }, { approvals_needed: 3, email_addresses: ['test@cloudflare.com', 'test2@cloudflare.com'], email_list_uuid: '597147a1-976b-4ef2-9af0-81d5d007fc34' }], approval_required: true, exclude: [{ email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }], isolation_required: false, precedence: 0, purpose_justification_prompt: 'Please enter a justification for entering this protected domain.', purpose_justification_required: true, require: [{ email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }], session_duration: '24h' });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.applications.policies.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { decision: 'allow', include: [{ email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }], name: 'Allow devs', account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.zeroTrust.access.applications.policies.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { decision: 'allow', include: [{ email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }], name: 'Allow devs', account_id: 'account_id', approval_groups: [{ approvals_needed: 1, email_addresses: ['test1@cloudflare.com', 'test2@cloudflare.com'], email_list_uuid: 'email_list_uuid' }, { approvals_needed: 3, email_addresses: ['test@cloudflare.com', 'test2@cloudflare.com'], email_list_uuid: '597147a1-976b-4ef2-9af0-81d5d007fc34' }], approval_required: true, exclude: [{ email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }], isolation_required: false, precedence: 0, purpose_justification_prompt: 'Please enter a justification for entering this protected domain.', purpose_justification_required: true, require: [{ email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }, { email: { email: 'test@example.com' } }], session_duration: '24h' });
  });

  // TODO: investigate broken test
  test.skip('list', async () => {
    const responsePromise = client.zeroTrust.access.applications.policies.list('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('delete', async () => {
    const responsePromise = client.zeroTrust.access.applications.policies.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('get', async () => {
    const responsePromise = client.zeroTrust.access.applications.policies.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
