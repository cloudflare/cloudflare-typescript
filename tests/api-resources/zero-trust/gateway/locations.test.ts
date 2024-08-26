// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.locations.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Austin Office Location',
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
    const response = await client.zeroTrust.gateway.locations.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Austin Office Location',
      client_default: false,
      dns_destination_ips_id: '0e4a32c6-6fb8-4858-9296-98f51631e8e6',
      ecs_support: false,
      endpoints: {
        doh: {
          enabled: true,
          networks: [
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
          ],
          require_token: true,
        },
        dot: {
          enabled: true,
          networks: [
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
          ],
        },
        ipv4: { enabled: true },
        ipv6: {
          enabled: true,
          networks: [
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
          ],
        },
      },
      networks: [{ network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.locations.update('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Austin Office Location',
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
    const response = await client.zeroTrust.gateway.locations.update('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Austin Office Location',
      client_default: false,
      dns_destination_ips_id: '0e4a32c6-6fb8-4858-9296-98f51631e8e6',
      ecs_support: false,
      endpoints: {
        doh: {
          enabled: true,
          networks: [
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
          ],
          require_token: true,
        },
        dot: {
          enabled: true,
          networks: [
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
          ],
        },
        ipv4: { enabled: true },
        ipv6: {
          enabled: true,
          networks: [
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
            { network: '2001:85a3::/64' },
          ],
        },
      },
      networks: [{ network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }, { network: '192.0.2.1/32' }],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.locations.list({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.gateway.locations.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.locations.delete('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.locations.delete('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.locations.get('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.gateway.locations.get('ed35569b41ce4d1facfe683550f54086', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
