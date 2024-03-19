// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configurations', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.tunnels.configurations.update(
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.tunnels.configurations.update(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        config: {
          ingress: [
            {
              hostname: 'tunnel.example.com',
              originRequest: {
                access: { audTag: ['string', 'string', 'string'], required: true, teamName: 'string' },
                caPool: 'string',
                connectTimeout: 0,
                disableChunkedEncoding: true,
                http2Origin: true,
                httpHostHeader: 'string',
                keepAliveConnections: 0,
                keepAliveTimeout: 0,
                noHappyEyeballs: true,
                noTLSVerify: true,
                originServerName: 'string',
                proxyType: 'string',
                tcpKeepAlive: 0,
                tlsTimeout: 0,
              },
              path: 'subpath',
              service: 'https://localhost:8001',
            },
            {
              hostname: 'tunnel.example.com',
              originRequest: {
                access: { audTag: ['string', 'string', 'string'], required: true, teamName: 'string' },
                caPool: 'string',
                connectTimeout: 0,
                disableChunkedEncoding: true,
                http2Origin: true,
                httpHostHeader: 'string',
                keepAliveConnections: 0,
                keepAliveTimeout: 0,
                noHappyEyeballs: true,
                noTLSVerify: true,
                originServerName: 'string',
                proxyType: 'string',
                tcpKeepAlive: 0,
                tlsTimeout: 0,
              },
              path: 'subpath',
              service: 'https://localhost:8001',
            },
            {
              hostname: 'tunnel.example.com',
              originRequest: {
                access: { audTag: ['string', 'string', 'string'], required: true, teamName: 'string' },
                caPool: 'string',
                connectTimeout: 0,
                disableChunkedEncoding: true,
                http2Origin: true,
                httpHostHeader: 'string',
                keepAliveConnections: 0,
                keepAliveTimeout: 0,
                noHappyEyeballs: true,
                noTLSVerify: true,
                originServerName: 'string',
                proxyType: 'string',
                tcpKeepAlive: 0,
                tlsTimeout: 0,
              },
              path: 'subpath',
              service: 'https://localhost:8001',
            },
          ],
          originRequest: {
            access: { audTag: ['string', 'string', 'string'], required: true, teamName: 'string' },
            caPool: 'string',
            connectTimeout: 0,
            disableChunkedEncoding: true,
            http2Origin: true,
            httpHostHeader: 'string',
            keepAliveConnections: 0,
            keepAliveTimeout: 0,
            noHappyEyeballs: true,
            noTLSVerify: true,
            originServerName: 'string',
            proxyType: 'string',
            tcpKeepAlive: 0,
            tlsTimeout: 0,
          },
          'warp-routing': { enabled: true },
        },
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.tunnels.configurations.get(
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

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.tunnels.configurations.get(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
