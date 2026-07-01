// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAudit } from 'cloudflare/resources/organizations/logs/audit';
import { Logs } from 'cloudflare/resources/organizations/logs/logs';

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
  resources: [BaseAudit],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Logs],
});

const runTests = (client: PartialCloudflare<{ organizations: { logs: { audit: BaseAudit } } }>) => {
  // TODO DS-16345: required params 'since' and 'before' not populated by Prism mock
  test.skip('list: only required params', async () => {
    const responsePromise = client.organizations.logs.audit.list('a67e14daa5f8dceeb91fe5449ba496ef', {
      before: '2024-10-31',
      since: '2024-10-30',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO DS-16345: required params 'since' and 'before' not populated by Prism mock
  test.skip('list: required and optional params', async () => {
    const response = await client.organizations.logs.audit.list('a67e14daa5f8dceeb91fe5449ba496ef', {
      before: '2024-10-31',
      since: '2024-10-30',
      id: { not: ['f174be97-19b1-40d6-954d-70cd5fbd52db'] },
      action_result: { not: ['success'] },
      action_type: { not: ['create'] },
      actor_context: { not: ['api_key'] },
      actor_email: { not: ['alice@example.com'] },
      actor_id: { not: ['1d20c3afe174f18b642710cec6298a9d'] },
      actor_ip_address: { not: ['17.168.228.63'] },
      actor_token_id: { not: ['144cdb2e39c55e203cf225d8d8208647'] },
      actor_token_name: { not: ['Test Token'] },
      actor_type: { not: ['user'] },
      cursor: 'Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==',
      direction: 'desc',
      limit: 25,
      raw_cf_ray_id: { not: ['8e8dd2156ef28414'] },
      raw_method: { not: ['GET'] },
      raw_status_code: { not: [200] },
      raw_uri: { not: ['string'] },
      resource_id: { not: ['string'] },
      resource_product: { not: ['Stream'] },
      resource_scope: { not: ['organizations'] },
      resource_type: { not: ['Video'] },
    });
  });

  test('history: only required params', async () => {
    const responsePromise = client.organizations.logs.audit.history('f174be97-19b1-40d6-954d-70cd5fbd52db', {
      organization_id: 'a67e14daa5f8dceeb91fe5449ba496ef',
      action_time: '2024-10-30T15:00:00Z',
      before: '2024-10-31',
      since: '2024-10-30',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('history: required and optional params', async () => {
    const response = await client.organizations.logs.audit.history('f174be97-19b1-40d6-954d-70cd5fbd52db', {
      organization_id: 'a67e14daa5f8dceeb91fe5449ba496ef',
      action_time: '2024-10-30T15:00:00Z',
      before: '2024-10-31',
      since: '2024-10-30',
      cursor: 'Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==',
      direction: 'desc',
      limit: 25,
    });
  });
};
describe('resource audit', () => runTests(client));
describe('resource audit (tree shakable, base)', () => runTests(partialClient));
describe('resource audit (tree shakable, subresource)', () => runTests(parentPartialClient));
