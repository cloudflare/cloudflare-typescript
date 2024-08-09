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
    const responsePromise = client.zeroTrust.tunnels.configurations.update(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
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
    const response = await client.zeroTrust.tunnels.configurations.update(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '699d98642c564d2e855e9661899b7252',
        config: {
          ingress: [
            {
              hostname: 'tunnel.example.com',
              originRequest: {
                access: { audTag: ['string', 'string', 'string'], required: true, teamName: 'teamName' },
                caPool: 'caPool',
                connectTimeout: 0,
                disableChunkedEncoding: true,
                http2Origin: true,
                httpHostHeader: 'httpHostHeader',
                keepAliveConnections: 0,
                keepAliveTimeout: 0,
                noHappyEyeballs: true,
                noTLSVerify: true,
                originServerName: 'originServerName',
                proxyType: 'proxyType',
                tcpKeepAlive: 0,
                tlsTimeout: 0,
              },
              path: 'subpath',
              service: 'https://localhost:8001',
            },
            {
              hostname: 'tunnel.example.com',
              originRequest: {
                access: { audTag: ['string', 'string', 'string'], required: true, teamName: 'teamName' },
                caPool: 'caPool',
                connectTimeout: 0,
                disableChunkedEncoding: true,
                http2Origin: true,
                httpHostHeader: 'httpHostHeader',
                keepAliveConnections: 0,
                keepAliveTimeout: 0,
                noHappyEyeballs: true,
                noTLSVerify: true,
                originServerName: 'originServerName',
                proxyType: 'proxyType',
                tcpKeepAlive: 0,
                tlsTimeout: 0,
              },
              path: 'subpath',
              service: 'https://localhost:8001',
            },
            {
              hostname: 'tunnel.example.com',
              originRequest: {
                access: { audTag: ['string', 'string', 'string'], required: true, teamName: 'teamName' },
                caPool: 'caPool',
                connectTimeout: 0,
                disableChunkedEncoding: true,
                http2Origin: true,
                httpHostHeader: 'httpHostHeader',
                keepAliveConnections: 0,
                keepAliveTimeout: 0,
                noHappyEyeballs: true,
                noTLSVerify: true,
                originServerName: 'originServerName',
                proxyType: 'proxyType',
                tcpKeepAlive: 0,
                tlsTimeout: 0,
              },
              path: 'subpath',
              service: 'https://localhost:8001',
            },
          ],
          originRequest: {
            access: { audTag: ['string', 'string', 'string'], required: true, teamName: 'teamName' },
            caPool: 'caPool',
            connectTimeout: 0,
            disableChunkedEncoding: true,
            http2Origin: true,
            httpHostHeader: 'httpHostHeader',
            keepAliveConnections: 0,
            keepAliveTimeout: 0,
            noHappyEyeballs: true,
            noTLSVerify: true,
            originServerName: 'originServerName',
            proxyType: 'proxyType',
            tcpKeepAlive: 0,
            tlsTimeout: 0,
          },
          'warp-routing': { enabled: true },
        },
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.tunnels.configurations.get(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
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
    const response = await client.zeroTrust.tunnels.configurations.get(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });
});
