// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource activeSession', () => {
  test('createPoll: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.createPoll('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
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

  test('createPoll: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.createPoll('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
      options: ['string'],
      question: 'question',
      anonymous: true,
      hide_votes: true,
    });
  });

  test('getActiveSession: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.getActiveSession('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getActiveSession: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.getActiveSession('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
  });

  test('kickAllParticipants: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.kickAllParticipants('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('kickAllParticipants: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.kickAllParticipants('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
  });

  test('kickParticipants: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.kickParticipants('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
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

  test('kickParticipants: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.kickParticipants('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
      custom_participant_ids: ['string'],
      participant_ids: ['string'],
    });
  });
});
