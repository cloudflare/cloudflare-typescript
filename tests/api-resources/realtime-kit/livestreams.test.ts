// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource livestreams', () => {
  test('createIndependentLivestream: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.createIndependentLivestream('app_id', {
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

  test('createIndependentLivestream: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.createIndependentLivestream('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'prdmmp-xhycsl',
    });
  });

  test('getActiveLivestreamsForLivestreamId: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getActiveLivestreamsForLivestreamId(
      'app_id',
      'livestream_id',
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

  test('getActiveLivestreamsForLivestreamId: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getActiveLivestreamsForLivestreamId(
      'app_id',
      'livestream_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('getAllLivestreams: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getAllLivestreams('app_id', {
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

  test('getAllLivestreams: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getAllLivestreams('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      end_time: '2019-12-27T18:11:19.117Z',
      exclude_meetings: true,
      page_no: 0,
      per_page: 0,
      sort_order: 'ASC',
      start_time: '2019-12-27T18:11:19.117Z',
      status: 'LIVE',
    });
  });

  test('getLivestreamAnalyticsComplete: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getLivestreamAnalyticsComplete('app_id', {
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

  test('getLivestreamAnalyticsComplete: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getLivestreamAnalyticsComplete('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      end_time: '2019-12-27T18:11:19.117Z',
      start_time: '2019-12-27T18:11:19.117Z',
    });
  });

  test('getLivestreamSessionDetailsForSessionId: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getLivestreamSessionDetailsForSessionId(
      'app_id',
      'livestream-session-id',
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

  test('getLivestreamSessionDetailsForSessionId: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getLivestreamSessionDetailsForSessionId(
      'app_id',
      'livestream-session-id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('getLivestreamSessionForLivestreamId: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getLivestreamSessionForLivestreamId(
      'app_id',
      'livestream_id',
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

  test('getLivestreamSessionForLivestreamId: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getLivestreamSessionForLivestreamId(
      'app_id',
      'livestream_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', page_no: 0, per_page: 0 },
    );
  });

  test('getMeetingActiveLivestreams: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getMeetingActiveLivestreams(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  test('getMeetingActiveLivestreams: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getMeetingActiveLivestreams(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('getOrgAnalytics: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.getOrgAnalytics('app_id', {
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

  test('getOrgAnalytics: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.getOrgAnalytics('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      end_date: '2022-09-22',
      start_date: '2022-09-01',
    });
  });

  test('startLivestreamingAMeeting: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.startLivestreamingAMeeting(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  test('startLivestreamingAMeeting: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.startLivestreamingAMeeting(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        name: 'prdmmp-xhycsl',
        video_config: { height: 0, width: 0 },
      },
    );
  });

  test('stopLivestreamingAMeeting: only required params', async () => {
    const responsePromise = client.realtimeKit.livestreams.stopLivestreamingAMeeting(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  test('stopLivestreamingAMeeting: required and optional params', async () => {
    const response = await client.realtimeKit.livestreams.stopLivestreamingAMeeting(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
