// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { RealtimeKit } from 'cloudflare/resources/realtime-kit/realtime-kit';
import { BaseSessions } from 'cloudflare/resources/realtime-kit/sessions';

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
  resources: [BaseSessions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RealtimeKit],
});

const runTests = (client: PartialCloudflare<{ realtimeKit: { sessions: BaseSessions } }>) => {
  // TODO: HTTP 401 from prism, support api tokens
  test.skip('generateSummaryOfTranscripts: only required params', async () => {
    const responsePromise = client.realtimeKit.sessions.generateSummaryOfTranscripts('session_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('generateSummaryOfTranscripts: required and optional params', async () => {
    const response = await client.realtimeKit.sessions.generateSummaryOfTranscripts('session_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getParticipantDataFromPeerID: only required params', async () => {
    const responsePromise = client.realtimeKit.sessions.getParticipantDataFromPeerID('peer_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getParticipantDataFromPeerID: required and optional params', async () => {
    const response = await client.realtimeKit.sessions.getParticipantDataFromPeerID('peer_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
      filters: 'device_info',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionChat: only required params', async () => {
    const responsePromise = client.realtimeKit.sessions.getSessionChat('session_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionChat: required and optional params', async () => {
    const response = await client.realtimeKit.sessions.getSessionChat('session_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionDetails: only required params', async () => {
    const responsePromise = client.realtimeKit.sessions.getSessionDetails('session_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionDetails: required and optional params', async () => {
    const response = await client.realtimeKit.sessions.getSessionDetails('session_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
      include_breakout_rooms: true,
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionParticipantDetails: only required params', async () => {
    const responsePromise = client.realtimeKit.sessions.getSessionParticipantDetails('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
      session_id: 'session_id',
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
  test.skip('getSessionParticipantDetails: required and optional params', async () => {
    const response = await client.realtimeKit.sessions.getSessionParticipantDetails('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
      session_id: 'session_id',
      filters: 'device_info',
      include_peer_events: true,
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionParticipants: only required params', async () => {
    const responsePromise = client.realtimeKit.sessions.getSessionParticipants('session_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionParticipants: required and optional params', async () => {
    const response = await client.realtimeKit.sessions.getSessionParticipants('session_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
      include_peer_events: true,
      page_no: 0,
      per_page: 0,
      search: 'search',
      sort_by: 'joinedAt',
      sort_order: 'ASC',
      view: 'raw',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionSummary: only required params', async () => {
    const responsePromise = client.realtimeKit.sessions.getSessionSummary('session_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionSummary: required and optional params', async () => {
    const response = await client.realtimeKit.sessions.getSessionSummary('session_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionTranscripts: only required params', async () => {
    const responsePromise = client.realtimeKit.sessions.getSessionTranscripts('session_id', {
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

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessionTranscripts: required and optional params', async () => {
    const response = await client.realtimeKit.sessions.getSessionTranscripts('session_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: 'app_id',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getSessions: only required params', async () => {
    const responsePromise = client.realtimeKit.sessions.getSessions('app_id', {
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
  test.skip('getSessions: required and optional params', async () => {
    const response = await client.realtimeKit.sessions.getSessions('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      associated_id: 'associated_id',
      end_time: '2019-12-27T18:11:19.117Z',
      page_no: 0,
      participants: '1:10',
      per_page: 0,
      search: 'search',
      sort_by: 'minutesConsumed',
      sort_order: 'ASC',
      start_time: '2019-12-27T18:11:19.117Z',
      status: 'LIVE',
    });
  });
};
describe('resource sessions', () => runTests(client));
describe('resource sessions (tree shakable, base)', () => runTests(partialClient));
describe('resource sessions (tree shakable, subresource)', () => runTests(parentPartialClient));
