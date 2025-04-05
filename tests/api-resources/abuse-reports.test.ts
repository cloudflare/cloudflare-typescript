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
    const responsePromise = client.abuseReports.create('abuse_dmca', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address1: 'x',
      agent_name: 'x',
      agree: 0,
      city: 'x',
      country: 'x',
      host_notification: 'send',
      original_work: 'x',
      owner_notification: 'send',
      signature: 'signature',
      state: 'x',
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
    const response = await client.abuseReports.create('abuse_dmca', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      address1: 'x',
      agent_name: 'x',
      agree: 0,
      city: 'x',
      country: 'x',
      host_notification: 'send',
      original_work: 'x',
      owner_notification: 'send',
      signature: 'signature',
      state: 'x',
      act: 'abuse_dmca',
      comments: 'x',
      company: 'x',
      destination_ips: 'destination_ips',
      email: 'email',
      email2: 'email2',
      justification: 'x',
      name: 'x',
      ncmec_notification: 'send',
      ncsei_subject_representation: true,
      ports_protocols: 'ports_protocols',
      reported_country: 'xx',
      reported_user_agent: 'x',
      source_ips: 'source_ips',
      tele: 'x',
      title: 'x',
      trademark_number: 'x',
      trademark_office: 'x',
      trademark_symbol: 'x',
      urls: 'urls',
    });
  });
});
