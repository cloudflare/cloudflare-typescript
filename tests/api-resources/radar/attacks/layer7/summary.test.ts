// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource summary', () => {
  test('get', async () => {
    const responsePromise = client.radar.attacks.layer7.summary.get();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.get({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.get({ asn: ['string', 'string', 'string'], continent: ['string', 'string', 'string'], dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], dateRange: ['7d', '7d', '7d'], dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], format: 'JSON', location: ['string', 'string', 'string'], name: ['string', 'string', 'string'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('httpMethod', async () => {
    const responsePromise = client.radar.attacks.layer7.summary.httpMethod();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('httpMethod: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.httpMethod({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('httpMethod: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.httpMethod({ asn: ['string', 'string', 'string'], continent: ['string', 'string', 'string'], dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], dateRange: ['7d', '7d', '7d'], dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], format: 'JSON', httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'], ipVersion: ['IPv4', 'IPv6'], location: ['string', 'string', 'string'], mitigationProduct: ['DDOS', 'WAF', 'BOT_MANAGEMENT'], name: ['string', 'string', 'string'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('httpVersion', async () => {
    const responsePromise = client.radar.attacks.layer7.summary.httpVersion();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('httpVersion: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.httpVersion({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('httpVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.httpVersion({ asn: ['string', 'string', 'string'], continent: ['string', 'string', 'string'], dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], dateRange: ['7d', '7d', '7d'], dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], format: 'JSON', httpMethod: ['GET', 'POST', 'DELETE'], ipVersion: ['IPv4', 'IPv6'], location: ['string', 'string', 'string'], mitigationProduct: ['DDOS', 'WAF', 'BOT_MANAGEMENT'], name: ['string', 'string', 'string'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('ipVersion', async () => {
    const responsePromise = client.radar.attacks.layer7.summary.ipVersion();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ipVersion: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.ipVersion({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('ipVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.ipVersion({ asn: ['string', 'string', 'string'], continent: ['string', 'string', 'string'], dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], dateRange: ['7d', '7d', '7d'], dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], format: 'JSON', httpMethod: ['GET', 'POST', 'DELETE'], httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'], location: ['string', 'string', 'string'], mitigationProduct: ['DDOS', 'WAF', 'BOT_MANAGEMENT'], name: ['string', 'string', 'string'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('managedRules', async () => {
    const responsePromise = client.radar.attacks.layer7.summary.managedRules();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('managedRules: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.managedRules({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('managedRules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.managedRules({ asn: ['string', 'string', 'string'], continent: ['string', 'string', 'string'], dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], dateRange: ['7d', '7d', '7d'], dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], format: 'JSON', httpMethod: ['GET', 'POST', 'DELETE'], httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'], ipVersion: ['IPv4', 'IPv6'], location: ['string', 'string', 'string'], mitigationProduct: ['DDOS', 'WAF', 'BOT_MANAGEMENT'], name: ['string', 'string', 'string'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('mitigationProduct', async () => {
    const responsePromise = client.radar.attacks.layer7.summary.mitigationProduct();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('mitigationProduct: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.mitigationProduct({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('mitigationProduct: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.attacks.layer7.summary.mitigationProduct({ asn: ['string', 'string', 'string'], continent: ['string', 'string', 'string'], dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], dateRange: ['7d', '7d', '7d'], dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], format: 'JSON', httpMethod: ['GET', 'POST', 'DELETE'], httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'], ipVersion: ['IPv4', 'IPv6'], location: ['string', 'string', 'string'], name: ['string', 'string', 'string'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });
});
