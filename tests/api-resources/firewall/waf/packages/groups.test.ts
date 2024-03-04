// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource groups', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.firewall.waf.packages.groups.list('a25a9a7e9c00afc1fb2e0245519d725b', {
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.firewall.waf.packages.groups.list('a25a9a7e9c00afc1fb2e0245519d725b', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'desc',
      match: 'any',
      mode: 'on',
      order: 'mode',
      page: 1,
      per_page: 5,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.firewall.waf.packages.groups.edit(
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
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

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.firewall.waf.packages.groups.edit(
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', mode: 'on' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.firewall.waf.packages.groups.get(
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
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

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.firewall.waf.packages.groups.get(
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
      { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
