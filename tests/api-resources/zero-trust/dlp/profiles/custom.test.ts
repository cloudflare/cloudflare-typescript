// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource custom', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dlp.profiles.custom.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      profiles: [{}, {}, {}],
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
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.dlp.profiles.custom.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      profiles: [
        {
          allowed_match_count: 5,
          context_awareness: { enabled: true, skip: { files: true } },
          description: 'A standard CVV card number',
          entries: [
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
          ],
          name: 'Generic CVV Card Number',
        },
        {
          allowed_match_count: 5,
          context_awareness: { enabled: true, skip: { files: true } },
          description: 'A standard CVV card number',
          entries: [
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
          ],
          name: 'Generic CVV Card Number',
        },
        {
          allowed_match_count: 5,
          context_awareness: { enabled: true, skip: { files: true } },
          description: 'A standard CVV card number',
          entries: [
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
            {
              enabled: true,
              name: 'Credit card (Visa)',
              pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            },
          ],
          name: 'Generic CVV Card Number',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dlp.profiles.custom.update(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
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
    const response = await cloudflare.zeroTrust.dlp.profiles.custom.update(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        allowed_match_count: 5,
        context_awareness: { enabled: true, skip: { files: true } },
        description: 'A standard CVV card number',
        entries: [
          {
            enabled: true,
            name: 'Credit card (Visa)',
            pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            profile_id: {},
          },
          {
            enabled: true,
            name: 'Credit card (Visa)',
            pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            profile_id: {},
          },
          {
            enabled: true,
            name: 'Credit card (Visa)',
            pattern: { regex: '^4[0-9]{6,14}$', validation: 'luhn' },
            profile_id: {},
          },
        ],
        name: 'Generic CVV Card Number',
        shared_entries: [{ enabled: true }, { enabled: true }, { enabled: true }],
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dlp.profiles.custom.delete(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
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
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.dlp.profiles.custom.delete(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dlp.profiles.custom.get(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
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
    const response = await cloudflare.zeroTrust.dlp.profiles.custom.get(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
