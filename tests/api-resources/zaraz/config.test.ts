// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource config', () => {
  test('update: only required params', async () => {
    const responsePromise = client.zaraz.config.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dataLayer: true,
      debugKey: 'debugKey',
      settings: { autoInjectScript: true },
      tools: {
        foo: {
          blockingTriggers: ['string'],
          component: 'component',
          defaultFields: { foo: 'string' },
          enabled: true,
          name: 'name',
          permissions: ['string'],
          settings: { foo: 'string' },
          type: 'component',
        },
      },
      triggers: {
        foo: {
          excludeRules: [
            {
              id: 'id',
              match: 'match',
              op: 'CONTAINS',
              value: 'value',
            },
          ],
          loadRules: [
            {
              id: 'id',
              match: 'match',
              op: 'CONTAINS',
              value: 'value',
            },
          ],
          name: 'name',
        },
      },
      variables: {
        foo: {
          name: 'name',
          type: 'string',
          value: 'value',
        },
      },
      zarazVersion: 0,
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
    const response = await client.zaraz.config.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dataLayer: true,
      debugKey: 'debugKey',
      settings: {
        autoInjectScript: true,
        contextEnricher: { escapedWorkerName: 'escapedWorkerName', workerTag: 'workerTag' },
        cookieDomain: 'cookieDomain',
        ecommerce: true,
        eventsApiPath: 'eventsApiPath',
        hideExternalReferer: true,
        hideIPAddress: true,
        hideQueryParams: true,
        hideUserAgent: true,
        initPath: 'initPath',
        injectIframes: true,
        mcRootPath: 'mcRootPath',
        scriptPath: 'scriptPath',
        trackPath: 'trackPath',
      },
      tools: {
        foo: {
          blockingTriggers: ['string'],
          component: 'component',
          defaultFields: { foo: 'string' },
          enabled: true,
          name: 'name',
          permissions: ['string'],
          settings: { foo: 'string' },
          type: 'component',
          actions: {
            foo: {
              actionType: 'actionType',
              blockingTriggers: ['string'],
              data: {},
              firingTriggers: ['string'],
            },
          },
          defaultPurpose: 'defaultPurpose',
          neoEvents: [
            {
              actionType: 'actionType',
              blockingTriggers: ['string'],
              data: {},
              firingTriggers: ['string'],
            },
          ],
          vendorName: 'vendorName',
          vendorPolicyUrl: 'vendorPolicyUrl',
        },
      },
      triggers: {
        foo: {
          excludeRules: [
            {
              id: 'id',
              match: 'match',
              op: 'CONTAINS',
              value: 'value',
            },
          ],
          loadRules: [
            {
              id: 'id',
              match: 'match',
              op: 'CONTAINS',
              value: 'value',
            },
          ],
          name: 'name',
          description: 'description',
          system: 'pageload',
        },
      },
      variables: {
        foo: {
          name: 'name',
          type: 'string',
          value: 'value',
        },
      },
      zarazVersion: 0,
      analytics: {
        defaultPurpose: 'defaultPurpose',
        enabled: true,
        sessionExpTime: 60,
      },
      consent: {
        enabled: true,
        buttonTextTranslations: {
          accept_all: { foo: 'string' },
          confirm_my_choices: { foo: 'string' },
          reject_all: { foo: 'string' },
        },
        companyEmail: 'companyEmail',
        companyName: 'companyName',
        companyStreetAddress: 'companyStreetAddress',
        consentModalIntroHTML: 'consentModalIntroHTML',
        consentModalIntroHTMLWithTranslations: { foo: 'string' },
        cookieName: 'cookieName',
        customCSS: 'customCSS',
        customIntroDisclaimerDismissed: true,
        defaultLanguage: 'defaultLanguage',
        hideModal: true,
        purposes: { foo: { description: 'description', name: 'name' } },
        purposesWithTranslations: {
          foo: {
            description: { foo: 'string' },
            name: { foo: 'string' },
            order: 0,
          },
        },
        tcfCompliant: true,
      },
      historyChange: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zaraz.config.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zaraz.config.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
