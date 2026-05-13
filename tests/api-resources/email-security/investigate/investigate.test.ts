// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { EmailSecurity } from 'cloudflare/resources/email-security/email-security';
import { BaseInvestigate } from 'cloudflare/resources/email-security/investigate/investigate';

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
  resources: [BaseInvestigate],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [EmailSecurity],
});

const runTests = (client: PartialCloudflare<{ emailSecurity: { investigate: BaseInvestigate } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.list({
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
    const response = await client.emailSecurity.investigate.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action_log: true,
      alert_id: 'alert_id',
      cursor: 'cursor',
      delivery_status: 'delivered',
      detections_only: true,
      domain: 'domain',
      end: '2019-12-27T18:11:19.117Z',
      final_disposition: 'MALICIOUS',
      message_action: 'PREVIEW',
      message_id: 'message_id',
      metric: 'metric',
      page: 1,
      per_page: 20,
      query: 'query',
      recipient: 'recipient',
      sender: 'sender',
      start: '2019-12-27T18:11:19.117Z',
      subject: 'subject',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.emailSecurity.investigate.get(
      '4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.emailSecurity.investigate.get(
      '4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', submission: true },
    );
  });
};
describe('resource investigate', () => runTests(client));
describe('resource investigate (tree shakable, base)', () => runTests(partialClient));
describe('resource investigate (tree shakable, subresource)', () => runTests(parentPartialClient));
