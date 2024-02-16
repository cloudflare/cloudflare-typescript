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

describe('resource incomings', () => {
  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.secondaryDNS.incomings.delete('269d8f4853475ca241c4e730be286b20');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('secondaryDNSSecondaryZoneCreateSecondaryZoneConfiguration: only required params', async () => {
    const responsePromise =
      cloudflare.secondaryDNS.incomings.secondaryDNSSecondaryZoneCreateSecondaryZoneConfiguration(
        '269d8f4853475ca241c4e730be286b20',
        {
          auto_refresh_seconds: 86400,
          name: 'www.example.com.',
          peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
        },
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
  test.skip('secondaryDNSSecondaryZoneCreateSecondaryZoneConfiguration: required and optional params', async () => {
    const response =
      await cloudflare.secondaryDNS.incomings.secondaryDNSSecondaryZoneCreateSecondaryZoneConfiguration(
        '269d8f4853475ca241c4e730be286b20',
        {
          auto_refresh_seconds: 86400,
          name: 'www.example.com.',
          peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
        },
      );
  });

  // skipped: tests are disabled for the time being
  test.skip('secondaryDNSSecondaryZoneSecondaryZoneConfigurationDetails', async () => {
    const responsePromise =
      cloudflare.secondaryDNS.incomings.secondaryDNSSecondaryZoneSecondaryZoneConfigurationDetails(
        '269d8f4853475ca241c4e730be286b20',
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
  test.skip('secondaryDNSSecondaryZoneSecondaryZoneConfigurationDetails: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.secondaryDNS.incomings.secondaryDNSSecondaryZoneSecondaryZoneConfigurationDetails(
        '269d8f4853475ca241c4e730be286b20',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('secondaryDNSSecondaryZoneUpdateSecondaryZoneConfiguration: only required params', async () => {
    const responsePromise =
      cloudflare.secondaryDNS.incomings.secondaryDNSSecondaryZoneUpdateSecondaryZoneConfiguration(
        '269d8f4853475ca241c4e730be286b20',
        {
          auto_refresh_seconds: 86400,
          name: 'www.example.com.',
          peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
        },
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
  test.skip('secondaryDNSSecondaryZoneUpdateSecondaryZoneConfiguration: required and optional params', async () => {
    const response =
      await cloudflare.secondaryDNS.incomings.secondaryDNSSecondaryZoneUpdateSecondaryZoneConfiguration(
        '269d8f4853475ca241c4e730be286b20',
        {
          auto_refresh_seconds: 86400,
          name: 'www.example.com.',
          peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
        },
      );
  });
});
