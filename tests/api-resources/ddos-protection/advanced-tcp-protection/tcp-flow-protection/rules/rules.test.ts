// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      burst_sensitivity: 'burst_sensitivity',
      mode: 'mode',
      name: 'name',
      rate_sensitivity: 'rate_sensitivity',
      scope: 'scope',
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
    const response = await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      burst_sensitivity: 'burst_sensitivity',
      mode: 'mode',
      name: 'name',
      rate_sensitivity: 'rate_sensitivity',
      scope: 'scope',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.list({
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
    const response = await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'direction',
      order: 'order',
      page: 0,
      per_page: 0,
    });
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.bulkDelete({
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

  test('bulkDelete: required and optional params', async () => {
    const response = await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.bulkDelete({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
