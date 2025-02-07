// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource secrets', () => {
  test('update: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.secrets.update(
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', dispatch_namespace: 'my-dispatch-namespace' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.secrets.update(
      'this-is_my_script-01',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        dispatch_namespace: 'my-dispatch-namespace',
        name: 'MY_SECRET',
        text: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        type: 'secret_text',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.secrets.list(
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', dispatch_namespace: 'my-dispatch-namespace' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.secrets.list(
      'this-is_my_script-01',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', dispatch_namespace: 'my-dispatch-namespace' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.workersForPlatforms.dispatch.namespaces.scripts.secrets.get('mySecret', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dispatch_namespace: 'my-dispatch-namespace',
      script_name: 'this-is_my_script-01',
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
    const response = await client.workersForPlatforms.dispatch.namespaces.scripts.secrets.get('mySecret', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dispatch_namespace: 'my-dispatch-namespace',
      script_name: 'this-is_my_script-01',
    });
  });
});
