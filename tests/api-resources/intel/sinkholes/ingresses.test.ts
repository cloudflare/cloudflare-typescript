// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseIngresses } from 'cloudflare/resources/intel/sinkholes/ingresses';
import { Sinkholes } from 'cloudflare/resources/intel/sinkholes/sinkholes';

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
  resources: [BaseIngresses],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Sinkholes],
});

const runTests = (client: PartialCloudflare<{ intel: { sinkholes: { ingresses: BaseIngresses } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.intel.sinkholes.ingresses.create('93defa6e909e464e8c89a85859f36d3c', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cidr: 'cidr',
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
    const response = await client.intel.sinkholes.ingresses.create('93defa6e909e464e8c89a85859f36d3c', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cidr: 'cidr',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.intel.sinkholes.ingresses.update('de32ae5203724ed08dcc26e971a4d22f', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sinkhole_id: '93defa6e909e464e8c89a85859f36d3c',
      cidr: 'cidr',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.intel.sinkholes.ingresses.update('de32ae5203724ed08dcc26e971a4d22f', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sinkhole_id: '93defa6e909e464e8c89a85859f36d3c',
      cidr: 'cidr',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.intel.sinkholes.ingresses.delete('de32ae5203724ed08dcc26e971a4d22f', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sinkhole_id: '93defa6e909e464e8c89a85859f36d3c',
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
    const response = await client.intel.sinkholes.ingresses.delete('de32ae5203724ed08dcc26e971a4d22f', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sinkhole_id: '93defa6e909e464e8c89a85859f36d3c',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.intel.sinkholes.ingresses.get('de32ae5203724ed08dcc26e971a4d22f', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sinkhole_id: '93defa6e909e464e8c89a85859f36d3c',
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
    const response = await client.intel.sinkholes.ingresses.get('de32ae5203724ed08dcc26e971a4d22f', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      sinkhole_id: '93defa6e909e464e8c89a85859f36d3c',
    });
  });
};
describe('resource ingresses', () => runTests(client));
describe('resource ingresses (tree shakable, base)', () => runTests(partialClient));
describe('resource ingresses (tree shakable, subresource)', () => runTests(parentPartialClient));
