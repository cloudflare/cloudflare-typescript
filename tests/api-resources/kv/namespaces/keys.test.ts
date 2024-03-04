// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource keys', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.kv.namespaces.keys.list('0f2ac74b498b48028cb68387c421e279', {
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.kv.namespaces.keys.list('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor:
        '6Ck1la0VxJ0djhidm1MdX2FyDGxLKVeeHZZmORS_8XeSuhz9SjIJRaSa2lnsF01tQOHrfTGAP3R5X1Kv5iVUuMbNKhWNAXHOl6ePB0TUL8nw',
      limit: 10,
      prefix: 'My-Prefix',
    });
  });
});
