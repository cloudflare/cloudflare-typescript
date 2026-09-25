// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { RealtimeKit } from 'cloudflare/resources/realtime-kit/realtime-kit';
import { BaseRecordings } from 'cloudflare/resources/realtime-kit/recordings';

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
  resources: [BaseRecordings],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RealtimeKit],
});

const runTests = (client: PartialCloudflare<{ realtimeKit: { recordings: BaseRecordings } }>) => {
  // requires active WebRTC session with real participants
  test.skip('getActiveRecordings: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.getActiveRecordings('meeting_id', {
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
  test.skip('getActiveRecordings: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.getActiveRecordings('meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
    });
  });

  // requires active WebRTC session with real participants
  test.skip('getOneRecording: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.getOneRecording(
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
  test.skip('getOneRecording: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.getOneRecording(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', app_id: '14a396e7-ca44-4937-bf1f-050a69118543' },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('getRecordings: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.getRecordings(
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
  test.skip('getRecordings: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.getRecordings(
      '14a396e7-ca44-4937-bf1f-050a69118543',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        end_time: '2019-12-27T18:11:19.117Z',
        expired: true,
        meeting_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        page_no: 0,
        per_page: 0,
        search: 'search',
        sort_by: 'invokedTime',
        sort_order: 'ASC',
        start_time: '2019-12-27T18:11:19.117Z',
        status: ['INVOKED'],
      },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('pauseResumeStopRecording: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.pauseResumeStopRecording(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
        action: 'stop',
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

  // requires active WebRTC session with real participants
  test.skip('pauseResumeStopRecording: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.pauseResumeStopRecording(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
        action: 'stop',
      },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('startRecordings: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.startRecordings(
      '14a396e7-ca44-4937-bf1f-050a69118543',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', meeting_id: '97440c6a-140b-40a9-9499-b23fd7a3868a' },
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
  test.skip('startRecordings: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.startRecordings(
      '14a396e7-ca44-4937-bf1f-050a69118543',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        meeting_id: '97440c6a-140b-40a9-9499-b23fd7a3868a',
        allow_multiple_recordings: false,
        audio_config: {
          channel: 'stereo',
          codec: 'AAC',
          export_file: true,
        },
        file_name_prefix: 'string',
        interactive_config: { type: 'ID3' },
        max_seconds: 60,
        realtimekit_bucket_config: { enabled: true },
        rtmp_out_config: { rtmp_url: 'rtmp://a.rtmp.youtube.com/live2' },
        storage_config: {
          access_key: 'access_key',
          auth_method: 'KEY',
          bucket: 'bucket',
          host: 'host',
          password: 'password',
          path: 'path',
          port: 0,
          private_key: 'private_key',
          region: 'us-east-1',
          secret: 'secret',
          type: 'gcs',
          username: 'username',
        },
        url: 'https://example.com',
        video_config: {
          codec: 'H264',
          export_file: true,
          height: 720,
          watermark: {
            position: 'left top',
            size: { height: 1, width: 1 },
            url: 'http://example.com',
          },
          width: 1280,
        },
      },
    );
  });

  // requires active WebRTC session with real participants
  test.skip('startTrackRecording: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.startTrackRecording(
      '14a396e7-ca44-4937-bf1f-050a69118543',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', meeting_id: '97440c6a-140b-40a9-9499-b23fd7a3868a' },
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
  test.skip('startTrackRecording: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.startTrackRecording(
      '14a396e7-ca44-4937-bf1f-050a69118543',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        meeting_id: '97440c6a-140b-40a9-9499-b23fd7a3868a',
        layers: { foo: { file_name_prefix: 'file_name_prefix', media_kind: 'audio' } },
        user_ids: ['x'],
      },
    );
  });
};
describe('resource recordings', () => runTests(client));
describe('resource recordings (tree shakable, base)', () => runTests(partialClient));
describe('resource recordings (tree shakable, subresource)', () => runTests(parentPartialClient));
