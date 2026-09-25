// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Registrar } from 'cloudflare/resources/registrar/registrar';
import { BaseTransferIn } from 'cloudflare/resources/registrar/transfer-in';

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
  resources: [BaseTransferIn],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Registrar],
});

const runTests = (client: PartialCloudflare<{ registrar: { transferIn: BaseTransferIn } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.registrar.transferIn.create('example.com', {
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

  test('create: required and optional params', async () => {
    const response = await client.registrar.transferIn.create('example.com', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      auth_code: 'bml4b3M+Pj5hcmNoLWxpbnV4',
      auto_renew: false,
      contact_extensions: { application_purpose: 'bar', nexus_category: 'bar' },
      contacts: {
        administrator: {
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
        billing: {
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
        technical: {
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
      Prefer: 'Prefer',
    });
  });
};
describe('resource transferIn', () => runTests(client));
describe('resource transferIn (tree shakable, base)', () => runTests(partialClient));
describe('resource transferIn (tree shakable, subresource)', () => runTests(parentPartialClient));
