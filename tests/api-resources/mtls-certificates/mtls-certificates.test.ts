// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mtlsCertificates', () => {
  test('create: only required params', async () => {
    const responsePromise = client.mtlsCertificates.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ca: true,
      certificates:
        '-----BEGIN CERTIFICATE-----\nMIIDmDCCAoCgAwIBAgIUKTOAZNjcXVZRj4oQt0SHsl1c1vMwDQYJKoZIhvcNAQEL\nBQAwUTELMAkGA1UEBhMCVVMxFjAUBgNVBAgMDVNhbiBGcmFuY2lzY28xEzARBgNV\nBAcMCkNhbGlmb3JuaWExFTATBgNVBAoMDEV4YW1wbGUgSW5jLjAgFw0yMjExMjIx\nNjU5NDdaGA8yMTIyMTAyOTE2NTk0N1owUTELMAkGA1UEBhMCVVMxFjAUBgNVBAgM\nDVNhbiBGcmFuY2lzY28xEzARBgNVBAcMCkNhbGlmb3JuaWExFTATBgNVBAoMDEV4\nYW1wbGUgSW5jLjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMRcORwg\nJFTdcG/2GKI+cFYiOBNDKjCZUXEOvXWY42BkH9wxiMT869CO+enA1w5pIrXow6kC\nM1sQspHHaVmJUlotEMJxyoLFfA/8Kt1EKFyobOjuZs2SwyVyJ2sStvQuUQEosULZ\nCNGZEqoH5g6zhMPxaxm7ZLrrsDZ9maNGVqo7EWLWHrZ57Q/5MtTrbxQL+eXjUmJ9\nK3kS+3uEwMdqR6Z3BluU1ivanpPc1CN2GNhdO0/hSY4YkGEnuLsqJyDd3cIiB1Mx\nuCBJ4ZaqOd2viV1WcP3oU3dxVPm4MWyfYIldMWB14FahScxLhWdRnM9YZ/i9IFcL\nypXsuz7DjrJPtPUCAwEAAaNmMGQwHQYDVR0OBBYEFP5JzLUawNF+c3AXsYTEWHh7\nz2czMB8GA1UdIwQYMBaAFP5JzLUawNF+c3AXsYTEWHh7z2czMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEBMA0GCSqGSIb3DQEBCwUAA4IBAQBc+Be7\nNDhpE09y7hLPZGRPl1cSKBw4RI0XIv6rlbSTFs5EebpTGjhx/whNxwEZhB9HZ711\n1Oa1YlT8xkI9DshB78mjAHCKBAJ76moK8tkG0aqdYpJ4ZcJTVBB7l98Rvgc7zfTi\ni7WemTy72deBbSeiEtXavm4EF0mWjHhQ5Nxpnp00Bqn5g1x8CyTDypgmugnep+xG\n+iFzNmTdsz7WI9T/7kDMXqB7M/FPWBORyS98OJqNDswCLF8bIZYwUBEe+bRHFomo\nShMzaC3tvim7WCb16noDkSTMlfKO4pnvKhpcVdSgwcruATV7y+W+Lvmz2OT/Gui4\nJhqeoTewsxndhDDE\n-----END CERTIFICATE-----',
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
    const response = await client.mtlsCertificates.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ca: true,
      certificates:
        '-----BEGIN CERTIFICATE-----\nMIIDmDCCAoCgAwIBAgIUKTOAZNjcXVZRj4oQt0SHsl1c1vMwDQYJKoZIhvcNAQEL\nBQAwUTELMAkGA1UEBhMCVVMxFjAUBgNVBAgMDVNhbiBGcmFuY2lzY28xEzARBgNV\nBAcMCkNhbGlmb3JuaWExFTATBgNVBAoMDEV4YW1wbGUgSW5jLjAgFw0yMjExMjIx\nNjU5NDdaGA8yMTIyMTAyOTE2NTk0N1owUTELMAkGA1UEBhMCVVMxFjAUBgNVBAgM\nDVNhbiBGcmFuY2lzY28xEzARBgNVBAcMCkNhbGlmb3JuaWExFTATBgNVBAoMDEV4\nYW1wbGUgSW5jLjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMRcORwg\nJFTdcG/2GKI+cFYiOBNDKjCZUXEOvXWY42BkH9wxiMT869CO+enA1w5pIrXow6kC\nM1sQspHHaVmJUlotEMJxyoLFfA/8Kt1EKFyobOjuZs2SwyVyJ2sStvQuUQEosULZ\nCNGZEqoH5g6zhMPxaxm7ZLrrsDZ9maNGVqo7EWLWHrZ57Q/5MtTrbxQL+eXjUmJ9\nK3kS+3uEwMdqR6Z3BluU1ivanpPc1CN2GNhdO0/hSY4YkGEnuLsqJyDd3cIiB1Mx\nuCBJ4ZaqOd2viV1WcP3oU3dxVPm4MWyfYIldMWB14FahScxLhWdRnM9YZ/i9IFcL\nypXsuz7DjrJPtPUCAwEAAaNmMGQwHQYDVR0OBBYEFP5JzLUawNF+c3AXsYTEWHh7\nz2czMB8GA1UdIwQYMBaAFP5JzLUawNF+c3AXsYTEWHh7z2czMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEBMA0GCSqGSIb3DQEBCwUAA4IBAQBc+Be7\nNDhpE09y7hLPZGRPl1cSKBw4RI0XIv6rlbSTFs5EebpTGjhx/whNxwEZhB9HZ711\n1Oa1YlT8xkI9DshB78mjAHCKBAJ76moK8tkG0aqdYpJ4ZcJTVBB7l98Rvgc7zfTi\ni7WemTy72deBbSeiEtXavm4EF0mWjHhQ5Nxpnp00Bqn5g1x8CyTDypgmugnep+xG\n+iFzNmTdsz7WI9T/7kDMXqB7M/FPWBORyS98OJqNDswCLF8bIZYwUBEe+bRHFomo\nShMzaC3tvim7WCb16noDkSTMlfKO4pnvKhpcVdSgwcruATV7y+W+Lvmz2OT/Gui4\nJhqeoTewsxndhDDE\n-----END CERTIFICATE-----',
      name: 'example_ca_cert',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEXDkcICRU3XBv\n9hiiPnBWIjgTQyowmVFxDr11mONgZB/cMYjE/OvQjvnpwNcOaSK16MOpAjNbELKR\nx2lZiVJaLRDCccqCxXwP/CrdRChcqGzo7mbNksMlcidrErb0LlEBKLFC2QjRmRKq\nB+YOs4TD8WsZu2S667A2fZmjRlaqOxFi1h62ee0P+TLU628UC/nl41JifSt5Evt7\nhMDHakemdwZblNYr2p6T3NQjdhjYXTtP4UmOGJBhJ7i7Kicg3d3CIgdTMbggSeGW\nqjndr4ldVnD96FN3cVT5uDFsn2CJXTFgdeBWoUnMS4VnUZzPWGf4vSBXC8qV7Ls+\nw46yT7T1AgMBAAECggEAQZnp/oqCeNPOR6l5S2L+1tfx0gWjZ78hJVteUpZ0iHSK\n7F6kKeOxyOird7vUXV0kmo+cJq+0hp0Ke4eam640FCpwKfYoSQ4/R3vgujGWJnai\nhCN5tv5sMet0XeJPuz5qE7ALoKCvwI6aXLHs20aAeZIDTQJ9QbGSGnJVzOWn+JDT\nidIgZpN57RpXfSAwnJPTQK/PN8i5z108hsaDOdEgGmxYZ7kYqMqzX20KXmth58LD\nfPixs5JGtS60iiKC/wOcGzkB2/AdTSojR76oEU77cANP/3zO25NG//whUdYlW0t0\nd7PgXxIeJe+xgYnamDQJx3qonVyt4H77ha0ObRAj9QKBgQDicZr+VTwFMnELP3a+\nFXGnjehRiuS1i7MXGKxNweCD+dFlML0FplSQS8Ro2n+d8lu8BBXGx0qm6VXu8Rhn\n7TAUL6q+PCgfarzxfIhacb/TZCqfieIHsMlVBfhV5HCXnk+kis0tuC/PRArcWTwD\nHJUJXkBhvkUsNswvQzavDPI7KwKBgQDd/WgLkj7A3X5fgIHZH/GbDSBiXwzKb+rF\n4ZCT2XFgG/OAW7vapfcX/w+v+5lBLyrocmOAS3PGGAhM5T3HLnUCQfnK4qgps1Lq\nibkc9Tmnsn60LanUjuUMsYv/zSw70tozbzhJ0pioEpWfRxRZBztO2Rr8Ntm7h6Fk\n701EXGNAXwKBgQCD1xsjy2J3sCerIdcz0u5qXLAPkeuZW+34m4/ucdwTWwc0gEz9\nlhsULFj9p4G351zLuiEnq+7mAWLcDJlmIO3mQt6JhiLiL9Y0T4pgBmxmWqKKYtAs\nJB0EmMY+1BNN44mBRqMxZFTJu1cLdhT/xstrOeoIPqytknYNanfTMZlzIwKBgHrL\nXe5oq0XMP8dcMneEcAUwsaU4pr6kQd3L9EmUkl5zl7J9C+DaxWAEuwzBw/iGutlx\nzRB+rD/7szu14wJ29EqXbDGKRzMp+se5/yfBjm7xEZ1hVPw7PwBShfqt57X/4Ktq\n7lwHnmH6RcGhc+P7WBc5iO/S94YAdIp8xOT3pf9JAoGAE0QkqJUY+5Mgr+fBO0VN\nV72ZoPveGpW+De59uhKAOnu1zljQCUtk59m6+DXfm0tNYKtawa5n8iN71Zh+s62x\nXSt3pYi1Y5CCCmv8Y4BhwIcPwXKk3zEvLgSHVTpC0bayA9aSO4bbZgVXa5w+Z0w/\nvvfp9DWo1IS3EnQRrz6WMYA=\n-----END PRIVATE KEY-----',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.mtlsCertificates.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.mtlsCertificates.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      type: ['custom'],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.mtlsCertificates.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('delete: required and optional params', async () => {
    const response = await client.mtlsCertificates.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.mtlsCertificates.get('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('get: required and optional params', async () => {
    const response = await client.mtlsCertificates.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
