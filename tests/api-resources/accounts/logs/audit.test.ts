// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audit', () => {
  // TODO: investigate broken test
  test.skip('list: only required params', async () => {
    const responsePromise = client.accounts.logs.audit.list({
      account_id: 'a67e14daa5f8dceeb91fe5449ba496ef',
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

  // TODO: investigate broken test
  test.skip('list: required and optional params', async () => {
    const response = await client.accounts.logs.audit.list({
      account_id: 'a67e14daa5f8dceeb91fe5449ba496ef',
      before: '2024-10-31',
      since: '2024-10-30',
      account_name: 'account_name',
      action_result: 'success',
      action_type: 'create',
      actor_context: 'api_key',
      actor_email: 'alice@example.com',
      actor_id: '1d20c3afe174f18b642710cec6298a9d',
      actor_ip_address: '17.168.228.63',
      actor_token_id: '144cdb2e39c55e203cf225d8d8208647',
      actor_token_name: 'Test Token',
      actor_type: 'cloudflare_admin',
      audit_log_id: 'f174be97-19b1-40d6-954d-70cd5fbd52db',
      cursor: 'Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==',
      direction: 'desc',
      limit: 25,
      raw_cf_ray_id: '8e8dd2156ef28414',
      raw_method: 'GET',
      raw_status_code: 200,
      raw_uri: 'raw_uri',
      resource_id: 'resource_id',
      resource_product: 'Stream',
      resource_scope: 'accounts',
      resource_type: 'Video',
      zone_id: 'zone_id',
      zone_name: 'example.com',
    });
  });
});
