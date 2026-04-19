// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emailSending', () => {
  test('send: only required params', async () => {
    const responsePromise = client.emailSending.send({
      account_id: 'account_id',
      from: 'sender@example.com',
      subject: 'Monthly Report',
      to: ['recipient@example.com'],
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
      to: ['recipient@example.com'],
      attachments: [
        {
          content: 'JVBERi0xLjQK...',
          disposition: 'attachment',
          filename: 'report.pdf',
          type: 'application/pdf',
        },
      ],
      bcc: 'user@example.com',
      cc: 'user@example.com',
      headers: { 'X-Custom-Header': 'value' },
      html: '<h1>Hello</h1><p>Please find your report attached.</p>',
      reply_to: 'user@example.com',
      text: 'Hello\n\nPlease find your report attached.',
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
});
