// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource activeSession', () => {
  // TODO: HTTP 401 from prism, support api tokens
  test.skip('createPoll: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.createPoll('app_id', 'meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      options: ['string'],
      question: 'question',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('createPoll: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.createPoll('app_id', 'meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      options: ['string'],
      question: 'question',
      anonymous: true,
      hide_votes: true,
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getActiveSession: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.getActiveSession('app_id', 'meeting_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getActiveSession: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.getActiveSession('app_id', 'meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('kickAllParticipants: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.kickAllParticipants('app_id', 'meeting_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('kickAllParticipants: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.kickAllParticipants('app_id', 'meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('kickParticipants: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.kickParticipants('app_id', 'meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      custom_participant_ids: ['string'],
      participant_ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('kickParticipants: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.kickParticipants('app_id', 'meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      custom_participant_ids: ['string'],
      participant_ids: ['string'],
    });
  });
});
