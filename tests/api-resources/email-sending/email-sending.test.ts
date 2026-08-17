// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseEmailSending } from 'cloudflare/resources/email-sending/email-sending';

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
  resources: [BaseEmailSending],
});

const runTests = (client: PartialCloudflare<{ emailSending: BaseEmailSending }>) => {
  test('send: only required params', async () => {
    const responsePromise = client.emailSending.send({
      account_id: 'account_id',
      from: 'sender@example.com',
      subject: 'Monthly Report',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('send: required and optional params', async () => {
    const response = await client.emailSending.send({
      account_id: 'account_id',
      from: 'sender@example.com',
      subject: 'Monthly Report',
      attachments: [
        {
          content: 'JVBERi0xLjQK...',
          disposition: 'attachment',
          filename: 'report.pdf',
          type: 'application/pdf',
        },
      ],
      bcc: ['recipient-a@example.com', { address: 'recipient-b@example.com', name: 'Recipient B' }],
      cc: ['recipient-a@example.com', { address: 'recipient-b@example.com', name: 'Recipient B' }],
      headers: { 'X-Custom-Header': 'value' },
      html: '<h1>Hello</h1><p>Please find your report attached.</p>',
      reply_to: 'user@example.com',
      text: 'Hello\n\nPlease find your report attached.',
      to: ['recipient@example.com'],
    });
  });

  test('sendRaw: only required params', async () => {
    const responsePromise = client.emailSending.sendRaw({
      account_id: 'account_id',
      from: 'sender@example.com',
      mime_message:
        'From: sender@example.com\r\nTo: recipient@example.com\r\nSubject: Hello\r\nContent-Type: text/plain\r\n\r\nHello, World!',
      recipients: ['recipient@example.com'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sendRaw: required and optional params', async () => {
    const response = await client.emailSending.sendRaw({
      account_id: 'account_id',
      from: 'sender@example.com',
      mime_message:
        'From: sender@example.com\r\nTo: recipient@example.com\r\nSubject: Hello\r\nContent-Type: text/plain\r\n\r\nHello, World!',
      recipients: ['recipient@example.com'],
    });
  });
};
describe('resource emailSending', () => runTests(client));
describe('resource emailSending (tree shakable, base)', () => runTests(partialClient));
