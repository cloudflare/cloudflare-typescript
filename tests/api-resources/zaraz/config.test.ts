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

describe('resource config', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zaraz.config.update('023e105f4ecef8ad9ca31a8372d0c353', {
      dataLayer: true,
      debugKey: 'my-debug-key',
      settings: { autoInjectScript: true },
      tools: {
        aJvt: {
          blockingTriggers: ['string', 'string', 'string'],
          defaultFields: { testKey: 'TEST123456' },
          enabled: true,
          name: 'Facebook Pixel',
          library: 'string',
          neoEvents: [
            { blockingTriggers: ['string', 'string', 'string'], data: {}, firingTriggers: ['string'] },
            { blockingTriggers: ['string', 'string', 'string'], data: {}, firingTriggers: ['string'] },
            { blockingTriggers: ['string', 'string', 'string'], data: {}, firingTriggers: ['string'] },
          ],
          type: 'library',
        },
      },
      triggers: {
        ktBn: {
          excludeRules: [
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
          ],
          loadRules: [
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
          ],
          name: 'string',
        },
      },
      variables: { Autd: { name: 'ip', type: 'string', value: '{{ system.device.ip }}' } },
      zarazVersion: 43,
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.zaraz.config.update('023e105f4ecef8ad9ca31a8372d0c353', {
      dataLayer: true,
      debugKey: 'my-debug-key',
      settings: {
        autoInjectScript: true,
        contextEnricher: { escapedWorkerName: 'string', workerTag: 'string' },
        cookieDomain: 'string',
        ecommerce: true,
        eventsApiPath: 'string',
        hideExternalReferer: true,
        hideIPAddress: true,
        hideQueryParams: true,
        hideUserAgent: true,
        initPath: '/i',
        injectIframes: true,
        mcRootPath: 'string',
        scriptPath: 'string',
        trackPath: 'string',
      },
      tools: {
        aJvt: {
          blockingTriggers: ['string', 'string', 'string'],
          defaultFields: { testKey: 'TEST123456' },
          defaultPurpose: 'string',
          enabled: true,
          name: 'Facebook Pixel',
          library: 'string',
          neoEvents: [
            { blockingTriggers: ['string', 'string', 'string'], data: {}, firingTriggers: ['string'] },
            { blockingTriggers: ['string', 'string', 'string'], data: {}, firingTriggers: ['string'] },
            { blockingTriggers: ['string', 'string', 'string'], data: {}, firingTriggers: ['string'] },
          ],
          type: 'library',
        },
      },
      triggers: {
        ktBn: {
          description: 'string',
          excludeRules: [
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
          ],
          loadRules: [
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
            { id: 'string', match: 'string', op: 'CONTAINS', value: 'string' },
          ],
          name: 'string',
          system: 'pageload',
        },
      },
      variables: { Autd: { name: 'ip', type: 'string', value: '{{ system.device.ip }}' } },
      zarazVersion: 43,
      consent: {
        buttonTextTranslations: {
          accept_all: { foo: 'string' },
          confirm_my_choices: { foo: 'string' },
          reject_all: { foo: 'string' },
        },
        companyEmail: 'string',
        companyName: 'string',
        companyStreetAddress: 'string',
        consentModalIntroHTML: 'string',
        consentModalIntroHTMLWithTranslations: { foo: 'string' },
        cookieName: 'zaraz-consent',
        customCSS: 'string',
        customIntroDisclaimerDismissed: true,
        defaultLanguage: 'string',
        enabled: false,
        hideModal: true,
        purposes: { foo: { description: 'string', name: 'string' } },
        purposesWithTranslations: {
          foo: { description: { foo: 'string' }, name: { foo: 'string' }, order: 0 },
        },
      },
      historyChange: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.zaraz.config.get('023e105f4ecef8ad9ca31a8372d0c353');
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
      cloudflare.zaraz.config.get('023e105f4ecef8ad9ca31a8372d0c353', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
