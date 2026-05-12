// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { LoadBalancers } from 'cloudflare/resources/load-balancers/load-balancers';
import { BaseMonitorGroups } from 'cloudflare/resources/load-balancers/monitor-groups/monitor-groups';

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
  resources: [BaseMonitorGroups],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [LoadBalancers],
});

const runTests = (client: PartialCloudflare<{ loadBalancers: { monitorGroups: BaseMonitorGroups } }>) => {
  // HTTP 422 error from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.loadBalancers.monitorGroups.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'Primary datacenter monitors',
      members: [
        {
          enabled: true,
          monitor_id: 'monitor_id',
          monitoring_only: false,
          must_be_healthy: true,
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 422 error from prism
  test.skip('create: required and optional params', async () => {
    const response = await client.loadBalancers.monitorGroups.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'Primary datacenter monitors',
      members: [
        {
          enabled: true,
          monitor_id: 'monitor_id',
          monitoring_only: false,
          must_be_healthy: true,
        },
      ],
    });
  });

  // HTTP 422 error from prism
  test.skip('update: only required params', async () => {
    const responsePromise = client.loadBalancers.monitorGroups.update('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'Primary datacenter monitors',
      members: [
        {
          enabled: true,
          monitor_id: 'monitor_id',
          monitoring_only: false,
          must_be_healthy: true,
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 422 error from prism
  test.skip('update: required and optional params', async () => {
    const response = await client.loadBalancers.monitorGroups.update('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'Primary datacenter monitors',
      members: [
        {
          enabled: true,
          monitor_id: 'monitor_id',
          monitoring_only: false,
          must_be_healthy: true,
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.loadBalancers.monitorGroups.list({
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
    const response = await client.loadBalancers.monitorGroups.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.loadBalancers.monitorGroups.delete('17b5962d775c646f3f9725cbc7a53df4', {
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

  test('delete: required and optional params', async () => {
    const response = await client.loadBalancers.monitorGroups.delete('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // HTTP 422 error from prism
  test.skip('edit: only required params', async () => {
    const responsePromise = client.loadBalancers.monitorGroups.edit('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'Primary datacenter monitors',
      members: [
        {
          enabled: true,
          monitor_id: 'monitor_id',
          monitoring_only: false,
          must_be_healthy: true,
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 422 error from prism
  test.skip('edit: required and optional params', async () => {
    const response = await client.loadBalancers.monitorGroups.edit('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      description: 'Primary datacenter monitors',
      members: [
        {
          enabled: true,
          monitor_id: 'monitor_id',
          monitoring_only: false,
          must_be_healthy: true,
        },
      ],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.loadBalancers.monitorGroups.get('17b5962d775c646f3f9725cbc7a53df4', {
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

  test('get: required and optional params', async () => {
    const response = await client.loadBalancers.monitorGroups.get('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource monitorGroups', () => runTests(client));
describe('resource monitorGroups (tree shakable, base)', () => runTests(partialClient));
describe('resource monitorGroups (tree shakable, subresource)', () => runTests(parentPartialClient));
