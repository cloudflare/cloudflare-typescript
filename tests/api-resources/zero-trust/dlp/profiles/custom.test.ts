// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource custom', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.profiles.custom.create({
      account_id: 'account_id',
      profiles: [
        {
          entries: [
            { enabled: true, name: 'name', pattern: { regex: 'regex' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex' } },
          ],
          name: 'name',
        },
        {
          entries: [
            { enabled: true, name: 'name', pattern: { regex: 'regex' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex' } },
          ],
          name: 'name',
        },
        {
          entries: [
            { enabled: true, name: 'name', pattern: { regex: 'regex' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex' } },
          ],
          name: 'name',
        },
      ],
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
    const response = await client.zeroTrust.dlp.profiles.custom.create({
      account_id: 'account_id',
      profiles: [
        {
          entries: [
            { enabled: true, name: 'name', pattern: { regex: 'regex', validation: 'luhn' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex', validation: 'luhn' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex', validation: 'luhn' } },
          ],
          name: 'name',
          allowed_match_count: 5,
          confidence_threshold: 'confidence_threshold',
          context_awareness: { enabled: true, skip: { files: true } },
          description: 'description',
          ocr_enabled: true,
          shared_entries: [
            { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'custom' },
            { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'custom' },
            { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'custom' },
          ],
        },
        {
          entries: [
            { enabled: true, name: 'name', pattern: { regex: 'regex', validation: 'luhn' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex', validation: 'luhn' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex', validation: 'luhn' } },
          ],
          name: 'name',
          allowed_match_count: 5,
          confidence_threshold: 'confidence_threshold',
          context_awareness: { enabled: true, skip: { files: true } },
          description: 'description',
          ocr_enabled: true,
          shared_entries: [
            { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'custom' },
            { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'custom' },
            { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'custom' },
          ],
        },
        {
          entries: [
            { enabled: true, name: 'name', pattern: { regex: 'regex', validation: 'luhn' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex', validation: 'luhn' } },
            { enabled: true, name: 'name', pattern: { regex: 'regex', validation: 'luhn' } },
          ],
          name: 'name',
          allowed_match_count: 5,
          confidence_threshold: 'confidence_threshold',
          context_awareness: { enabled: true, skip: { files: true } },
          description: 'description',
          ocr_enabled: true,
          shared_entries: [
            { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'custom' },
            { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'custom' },
            { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'custom' },
          ],
        },
      ],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.profiles.custom.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        entries: [
          {
            enabled: true,
            entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            name: 'name',
            pattern: { regex: 'regex' },
          },
          {
            enabled: true,
            entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            name: 'name',
            pattern: { regex: 'regex' },
          },
          {
            enabled: true,
            entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            name: 'name',
            pattern: { regex: 'regex' },
          },
        ],
        name: 'name',
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

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.profiles.custom.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        entries: [
          {
            enabled: true,
            entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            name: 'name',
            pattern: { regex: 'regex', validation: 'luhn' },
          },
          {
            enabled: true,
            entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            name: 'name',
            pattern: { regex: 'regex', validation: 'luhn' },
          },
          {
            enabled: true,
            entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            name: 'name',
            pattern: { regex: 'regex', validation: 'luhn' },
          },
        ],
        name: 'name',
        allowed_match_count: 0,
        confidence_threshold: 'confidence_threshold',
        context_awareness: { enabled: true, skip: { files: true } },
        description: 'description',
        ocr_enabled: true,
        shared_entries: [
          { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'predefined' },
          { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'predefined' },
          { enabled: true, entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', entry_type: 'predefined' },
        ],
      },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.profiles.custom.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.profiles.custom.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.profiles.custom.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
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
    const response = await client.zeroTrust.dlp.profiles.custom.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'account_id',
    });
  });
});
