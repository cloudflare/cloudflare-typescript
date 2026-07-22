// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { RegistrarSandbox } from 'cloudflare/resources/registrar-sandbox/registrar-sandbox';
import { BaseRegistrations } from 'cloudflare/resources/registrar-sandbox/registrations';

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
  resources: [BaseRegistrations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RegistrarSandbox],
});

const runTests = (client: PartialCloudflare<{ registrarSandbox: { registrations: BaseRegistrations } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.registrarSandbox.registrations.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domain_name: 'my-brand-example.io',
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
    const response = await client.registrarSandbox.registrations.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domain_name: 'my-brand-example.io',
      acknowledgements: { fees: 'bar' },
      auto_renew: false,
      contact_extensions: { application_purpose: 'bar', nexus_category: 'bar' },
      contacts: {
        administrator: {
          email: 'katherine@example.io',
          phone: '+1.5555550102',
          postal_info: {
            address: {
              city: 'San Francisco',
              country_code: 'US',
              postal_code: '94103',
              state: 'CA',
              street: '789 Mission St',
            },
            name: 'Katherine Johnson',
            organization: 'Example Admin Inc',
          },
          fax: '+1.5555555555',
        },
        billing: {
          email: 'dorothy@example.io',
          phone: '+1.5555550103',
          postal_info: {
            address: {
              city: 'San Francisco',
              country_code: 'US',
              postal_code: '94105',
              state: 'CA',
              street: '101 Howard St',
            },
            name: 'Dorothy Vaughan',
            organization: 'Example Billing Inc',
          },
          fax: '+1.5555555555',
        },
        registrant: {
          email: 'ada@example.io',
          phone: '+1.5555555555',
          postal_info: {
            address: {
              city: 'Austin',
              country_code: 'US',
              postal_code: '78701',
              state: 'TX',
              street: '123 Main St',
            },
            name: 'Ada Lovelace',
            organization: 'Example Inc',
          },
          fax: '+1.5555555555',
        },
        technical: {
          email: 'grace@example.io',
          phone: '+1.5555550101',
          postal_info: {
            address: {
              city: 'San Francisco',
              country_code: 'US',
              postal_code: '94105',
              state: 'CA',
              street: '456 Market St',
            },
            name: 'Grace Hopper',
            organization: 'Example Technical Inc',
          },
          fax: '+1.5555555555',
        },
      },
      privacy_mode: 'redaction',
      years: 1,
      Prefer: 'Prefer',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.registrarSandbox.registrations.list({
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
    const response = await client.registrarSandbox.registrations.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'cursor',
      direction: 'asc',
      per_page: 1,
      sort_by: 'registry_created_at',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.registrarSandbox.registrations.edit('example.com', {
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

  test('edit: required and optional params', async () => {
    const response = await client.registrarSandbox.registrations.edit('example.com', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      auto_renew: false,
      Prefer: 'respond-async',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.registrarSandbox.registrations.get('example.com', {
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
    const response = await client.registrarSandbox.registrations.get('example.com', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource registrations', () => runTests(client));
describe('resource registrations (tree shakable, base)', () => runTests(partialClient));
describe('resource registrations (tree shakable, subresource)', () => runTests(parentPartialClient));
