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

describe('resource acls', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.acls.update(
      '01a7362d577a6c3019a474fd6f485823',
      '23ff594956f20c2a721606e94745a8aa',
      { ip_range: '192.0.2.53/28', name: 'my-acl-1' },
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.acls.update(
      '01a7362d577a6c3019a474fd6f485823',
      '23ff594956f20c2a721606e94745a8aa',
      { ip_range: '192.0.2.53/28', name: 'my-acl-1' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.secondaryDNS.acls.delete(
      '01a7362d577a6c3019a474fd6f485823',
      '23ff594956f20c2a721606e94745a8aa',
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
  test.skip('get', async () => {
    const responsePromise = cloudflare.secondaryDNS.acls.get(
      '01a7362d577a6c3019a474fd6f485823',
      '23ff594956f20c2a721606e94745a8aa',
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
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.secondaryDNS.acls.get(
        '01a7362d577a6c3019a474fd6f485823',
        '23ff594956f20c2a721606e94745a8aa',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('secondaryDNSACLCreateACL: only required params', async () => {
    const responsePromise = cloudflare.secondaryDNS.acls.secondaryDNSACLCreateACL(
      '01a7362d577a6c3019a474fd6f485823',
      {},
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
  test.skip('secondaryDNSACLCreateACL: required and optional params', async () => {
    const response = await cloudflare.secondaryDNS.acls.secondaryDNSACLCreateACL(
      '01a7362d577a6c3019a474fd6f485823',
      {},
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('secondaryDNSACLListACLs', async () => {
    const responsePromise = cloudflare.secondaryDNS.acls.secondaryDNSACLListACLs(
      '01a7362d577a6c3019a474fd6f485823',
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
  test.skip('secondaryDNSACLListACLs: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.secondaryDNS.acls.secondaryDNSACLListACLs('01a7362d577a6c3019a474fd6f485823', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
