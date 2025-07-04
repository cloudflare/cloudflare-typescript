// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configurations', () => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.tunnels.cloudflared.configurations.update(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.zeroTrust.tunnels.cloudflared.configurations.update(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        config: {
          ingress: [
            {
              hostname: 'tunnel.example.com',
              service: 'https://localhost:8001',
              originRequest: {
                access: { audTag: ['string'], teamName: 'zero-trust-organization-name', required: false },
                caPool: 'caPool',
                connectTimeout: 10,
                disableChunkedEncoding: true,
                http2Origin: true,
                httpHostHeader: 'httpHostHeader',
                keepAliveConnections: 100,
                keepAliveTimeout: 90,
                noHappyEyeballs: false,
                noTLSVerify: false,
                originServerName: 'originServerName',
                proxyType: 'proxyType',
                tcpKeepAlive: 30,
                tlsTimeout: 10,
              },
              path: 'subpath',
            },
          ],
          originRequest: {
            access: { audTag: ['string'], teamName: 'zero-trust-organization-name', required: false },
            caPool: 'caPool',
            connectTimeout: 10,
            disableChunkedEncoding: true,
            http2Origin: true,
            httpHostHeader: 'httpHostHeader',
            keepAliveConnections: 100,
            keepAliveTimeout: 90,
            noHappyEyeballs: false,
            noTLSVerify: false,
            originServerName: 'originServerName',
            proxyType: 'proxyType',
            tcpKeepAlive: 30,
            tlsTimeout: 10,
          },
        },
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.tunnels.cloudflared.configurations.get(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.tunnels.cloudflared.configurations.get(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
