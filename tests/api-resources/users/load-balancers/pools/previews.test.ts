// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource previews', () => {
  // skipped: tests are disabled for the time being
  test.skip('loadBalancerPoolsPreviewPool: only required params', async () => {
    const responsePromise = cloudflare.users.loadBalancers.pools.previews.loadBalancerPoolsPreviewPool(
      '17b5962d775c646f3f9725cbc7a53df4',
      { expected_codes: '2xx' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('loadBalancerPoolsPreviewPool: required and optional params', async () => {
    const response = await cloudflare.users.loadBalancers.pools.previews.loadBalancerPoolsPreviewPool(
      '17b5962d775c646f3f9725cbc7a53df4',
      {
        expected_codes: '2xx',
        allow_insecure: true,
        consecutive_down: 0,
        consecutive_up: 0,
        description: 'Login page monitor',
        expected_body: 'alive',
        follow_redirects: true,
        header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
        interval: 0,
        method: 'GET',
        path: '/health',
        port: 0,
        probe_zone: 'example.com',
        retries: 0,
        timeout: 0,
        type: 'https',
      },
    );
  });
});
