// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource registrations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.registrar.registrations.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domain_name: 'my-new-startup.com',
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
    const response = await client.registrar.registrations.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      domain_name: 'my-new-startup.com',
      auto_renew: false,
      contacts: {
        registrant: {
          email: 'ada@example.com',
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
      },
      privacy_mode: 'redaction',
      years: 1,
      Prefer: 'Prefer',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.registrar.registrations.list({
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
    const response = await client.registrar.registrations.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'cursor',
      direction: 'asc',
      per_page: 1,
      sort_by: 'registry_created_at',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.registrar.registrations.edit('example.com', {
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
    const response = await client.registrar.registrations.edit('example.com', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      auto_renew: false,
      Prefer: 'respond-async',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.registrar.registrations.get('example.com', {
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
    const response = await client.registrar.registrations.get('example.com', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
