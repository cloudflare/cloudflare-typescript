// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource abuseReports', () => {
  // TODO: investigate unauthorized HTTP response
  test.skip('create: only required params', async () => {
    const responsePromise = client.abuseReports.create('report_type', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      act: 'abuse_dmca',
      address1: 'x',
      agent_name: 'x',
      agree: 1,
      city: 'x',
      country: 'x',
      email: 'email',
      email2: 'email2',
      host_notification: 'send',
      name: 'x',
      original_work: 'x',
      owner_notification: 'send',
      signature: 'signature',
      state: 'x',
      urls: 'urls',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('create: required and optional params', async () => {
    const response = await client.abuseReports.create('report_type', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      act: 'abuse_dmca',
      address1: 'x',
      agent_name: 'x',
      agree: 1,
      city: 'x',
      country: 'x',
      email: 'email',
      email2: 'email2',
      host_notification: 'send',
      name: 'x',
      original_work: 'x',
      owner_notification: 'send',
      signature: 'signature',
      state: 'x',
      urls: 'urls',
      comments: 'x',
      company: 'x',
      reported_country: 'xx',
      reported_user_agent: 'x',
      tele: 'x',
      title: 'x',
    });
  });
});
