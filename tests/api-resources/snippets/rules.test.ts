// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('update: only required params', async () => {
    const responsePromise = client.snippets.rules.update({
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      rules: [{ expression: 'ip.src eq 1.1.1.1', snippet_name: 'my_snippet' }],
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
    const response = await client.snippets.rules.update({
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      rules: [
        {
          expression: 'ip.src eq 1.1.1.1',
          snippet_name: 'my_snippet',
          description: 'Execute my_snippet when IP address is 1.1.1.1.',
          enabled: true,
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.snippets.rules.list({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.snippets.rules.list({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.snippets.rules.delete({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.snippets.rules.delete({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
  });
});
