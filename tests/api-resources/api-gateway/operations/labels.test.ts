// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource labels', () => {
  test('create: only required params', async () => {
    const responsePromise = client.apiGateway.operations.labels.create(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.apiGateway.operations.labels.create(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        managed: ['login'],
        user: ['login'],
      },
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.apiGateway.operations.labels.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.apiGateway.operations.labels.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
        managed: ['login'],
        user: ['login'],
      },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.apiGateway.operations.labels.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.apiGateway.operations.labels.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('bulkCreate: only required params', async () => {
    const responsePromise = client.apiGateway.operations.labels.bulkCreate({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      selector: { include: { operation_ids: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'] } },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkCreate: required and optional params', async () => {
    const response = await client.apiGateway.operations.labels.bulkCreate({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      selector: { include: { operation_ids: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'] } },
      managed: { labels: ['login'] },
      user: { labels: ['login'] },
    });
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.apiGateway.operations.labels.bulkDelete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.apiGateway.operations.labels.bulkDelete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('bulkUpdate: only required params', async () => {
    const responsePromise = client.apiGateway.operations.labels.bulkUpdate({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      managed: { labels: ['login'] },
      selector: { include: { operation_ids: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'] } },
      user: { labels: ['login'] },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkUpdate: required and optional params', async () => {
    const response = await client.apiGateway.operations.labels.bulkUpdate({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      managed: { labels: ['login'] },
      selector: { include: { operation_ids: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'] } },
      user: { labels: ['login'] },
    });
  });
});
