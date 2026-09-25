// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseActiveSession } from 'cloudflare/resources/realtime-kit/active-session';
import { RealtimeKit } from 'cloudflare/resources/realtime-kit/realtime-kit';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseActiveSession],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RealtimeKit],
});

const runTests = (client: PartialCloudflare<{ realtimeKit: { activeSession: BaseActiveSession } }>) => {
  // requires active WebRTC session with real participants
  test.skip('createPoll: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.createPoll('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
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

  // requires active WebRTC session with real participants
  test.skip('createPoll: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.createPoll('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      options: ['string'],
      question: 'question',
      anonymous: true,
      hide_votes: true,
    });
  });

  // requires active WebRTC session with real participants
  test.skip('getActiveSession: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.getActiveSession('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // requires active WebRTC session with real participants
  test.skip('getActiveSession: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.getActiveSession('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
    });
  });

  // requires active WebRTC session with real participants
  test.skip('kickAllParticipants: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.kickAllParticipants('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // requires active WebRTC session with real participants
  test.skip('kickAllParticipants: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.kickAllParticipants('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
    });
  });

  // requires active WebRTC session with real participants
  test.skip('kickParticipants: only required params', async () => {
    const responsePromise = client.realtimeKit.activeSession.kickParticipants('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // requires active WebRTC session with real participants
  test.skip('kickParticipants: required and optional params', async () => {
    const response = await client.realtimeKit.activeSession.kickParticipants('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      custom_participant_ids: ['string'],
      participant_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });
};
describe('resource activeSession', () => runTests(client));
describe('resource activeSession (tree shakable, base)', () => runTests(partialClient));
describe('resource activeSession (tree shakable, subresource)', () => runTests(parentPartialClient));
