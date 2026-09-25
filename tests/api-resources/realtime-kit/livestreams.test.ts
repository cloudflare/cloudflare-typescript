// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseLivestreams } from 'cloudflare/resources/realtime-kit/livestreams';
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
  resources: [BaseLivestreams],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RealtimeKit],
});

const runTests = (client: PartialCloudflare<{ realtimeKit: { livestreams: BaseLivestreams } }>) => {
  // requires active WebRTC session with real participants
  test.skip('getActiveLivestreamsForLivestreamID: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getActiveLivestreamsForLivestreamID(
      'livestream_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // requires active WebRTC session with real participants
  test.skip('getActiveLivestreamsForLivestreamID: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getActiveLivestreamsForLivestreamID(
      'livestream_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('getAllLivestreams: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getAllLivestreams(
      '14a396e7-ca44-4937-bf1f-050a69118543',
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

  // requires active WebRTC session with real participants
  test.skip('getAllLivestreams: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getAllLivestreams(
      '14a396e7-ca44-4937-bf1f-050a69118543',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        end_time: '2019-12-27T18:11:19.117Z',
        exclude_meetings: true,
        page_no: 0,
        per_page: 0,
        sort_order: 'ASC',
        start_time: '2019-12-27T18:11:19.117Z',
        status: 'LIVE',
      },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('getLivestreamAnalyticsComplete: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getLivestreamAnalyticsComplete(
      '14a396e7-ca44-4937-bf1f-050a69118543',
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

  // requires active WebRTC session with real participants
  test.skip('getLivestreamAnalyticsComplete: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getLivestreamAnalyticsComplete(
      '14a396e7-ca44-4937-bf1f-050a69118543',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        end_time: 0,
        filters: 'filters',
        start_time: 0,
      },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('getLivestreamAnalyticsDaywise: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getLivestreamAnalyticsDaywise(
      '14a396e7-ca44-4937-bf1f-050a69118543',
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

  // requires active WebRTC session with real participants
  test.skip('getLivestreamAnalyticsDaywise: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getLivestreamAnalyticsDaywise(
      '14a396e7-ca44-4937-bf1f-050a69118543',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        end_time: 0,
        filters: 'filters',
        start_time: 0,
      },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('getLivestreamSessionDetailsForSessionID: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getLivestreamSessionDetailsForSessionID(
      'livestream-session-id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // requires active WebRTC session with real participants
  test.skip('getLivestreamSessionDetailsForSessionID: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getLivestreamSessionDetailsForSessionID(
      'livestream-session-id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('getLivestreamSessionForLivestreamID: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getLivestreamSessionForLivestreamID(
      'livestream_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // requires active WebRTC session with real participants
  test.skip('getLivestreamSessionForLivestreamID: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getLivestreamSessionForLivestreamID(
      'livestream_id',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
        page_no: 0,
        per_page: 0,
      },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('getMeetingActiveLivestreams: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getMeetingActiveLivestreams(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // requires active WebRTC session with real participants
  test.skip('getMeetingActiveLivestreams: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getMeetingActiveLivestreams(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('getOrgAnalytics: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getOrgAnalytics(
      '14a396e7-ca44-4937-bf1f-050a69118543',
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

  // requires active WebRTC session with real participants
  test.skip('getOrgAnalytics: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getOrgAnalytics(
      '14a396e7-ca44-4937-bf1f-050a69118543',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        end_date: '2022-09-22T00:00:00Z',
        start_date: '2022-09-01T00:00:00Z',
      },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('startLivestreamingAMeeting: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.startLivestreamingAMeeting(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // requires active WebRTC session with real participants
  test.skip('startLivestreamingAMeeting: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.startLivestreamingAMeeting(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
        name: 'prdmmp-xhycsl',
        video_config: { height: 0, width: 0 },
      },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('stopLivestreamingAMeeting: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.stopLivestreamingAMeeting(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // requires active WebRTC session with real participants
  test.skip('stopLivestreamingAMeeting: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.stopLivestreamingAMeeting(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
  });
};
describe('resource livestreams', () => runTests(client));
describe('resource livestreams (tree shakable, base)', () => runTests(partialClient));
describe('resource livestreams (tree shakable, subresource)', () => runTests(parentPartialClient));
