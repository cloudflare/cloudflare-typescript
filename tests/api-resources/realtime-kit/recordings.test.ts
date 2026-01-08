// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recordings', () => {
  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getActiveRecordings: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.getActiveRecordings('app_id', 'meeting_id', {
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
  test.skip('getActiveRecordings: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.getActiveRecordings('app_id', 'meeting_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getOneRecording: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.getOneRecording('app_id', 'recording_id', {
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
  test.skip('getOneRecording: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.getOneRecording('app_id', 'recording_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('getRecordings: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.getRecordings('app_id', {
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
  test.skip('getRecordings: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.getRecordings('app_id', {
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
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('pauseResumeStopRecording: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.pauseResumeStopRecording(
      '2a95132c15732412d22c1476fa83f27a',
      'recording_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', action: 'stop' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('pauseResumeStopRecording: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.pauseResumeStopRecording(
      '2a95132c15732412d22c1476fa83f27a',
      'recording_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', action: 'stop' },
    );
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('startRecordings: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.startRecordings('app_id', {
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
  test.skip('startRecordings: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.startRecordings('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      allow_multiple_recordings: false,
      audio_config: { channel: 'stereo', codec: 'AAC', export_file: true },
      file_name_prefix: 'string',
      interactive_config: { type: 'ID3' },
      max_seconds: 60,
      meeting_id: '97440c6a-140b-40a9-9499-b23fd7a3868a',
      realtimekit_bucket_config: { enabled: true },
      rtmp_out_config: { rtmp_url: 'rtmp://a.rtmp.youtube.com/live2' },
      storage_config: {
        type: 'aws',
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
        username: 'username',
      },
      url: 'https://example.com',
      video_config: {
        codec: 'H264',
        export_file: true,
        height: 720,
        watermark: { position: 'left top', size: { height: 1, width: 1 }, url: 'http://example.com' },
        width: 1280,
      },
    });
  });

  // TODO: HTTP 401 from prism, support api tokens
  test.skip('startTrackRecording: only required params', async () => {
    const responsePromise = client.realtimeKit.recordings.startTrackRecording('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      layers: { default: {}, 'default-video': {} },
      meeting_id: 'string',
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
  test.skip('startTrackRecording: required and optional params', async () => {
    const response = await client.realtimeKit.recordings.startTrackRecording('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      layers: {
        default: {
          file_name_prefix: 'string',
          outputs: [
            {
              storage_config: {
                type: 'aws',
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
                username: 'username',
              },
              type: 'REALTIMEKIT_BUCKET',
            },
          ],
        },
        'default-video': {
          file_name_prefix: 'string',
          outputs: [
            {
              storage_config: {
                type: 'aws',
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
                username: 'username',
              },
              type: 'REALTIMEKIT_BUCKET',
            },
          ],
        },
      },
      meeting_id: 'string',
      max_seconds: 60,
    });
  });
});
