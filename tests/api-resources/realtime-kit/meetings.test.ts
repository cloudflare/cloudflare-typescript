// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource meetings', () => {
  test('create: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.create('app_id', {
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

  test('create: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.create('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ai_config: {
        summarization: { summary_type: 'general', text_format: 'plain_text', word_limit: 150 },
        transcription: { keywords: ['string'], language: 'en-US', profanity_filter: true },
      },
      live_stream_on_start: true,
      persist_chat: true,
      record_on_start: true,
      recording_config: {
        audio_config: { channel: 'mono', codec: 'MP3', export_file: true },
        file_name_prefix: 'file_name_prefix',
        live_streaming_config: { rtmp_url: 'rtmp://a.rtmp.youtube.com/live2' },
        max_seconds: 60,
        realtimekit_bucket_config: { enabled: true },
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
        video_config: {
          codec: 'H264',
          export_file: true,
          height: 720,
          watermark: { position: 'left top', size: { height: 1, width: 1 }, url: 'https://example.com' },
          width: 1280,
        },
      },
      session_keep_alive_time_in_secs: 60,
      summarize_on_end: true,
      title: 'title',
    });
  });

  test('addParticipant: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.addParticipant(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        custom_participant_id: 'custom_participant_id',
        preset_name: 'preset_name',
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

  test('addParticipant: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.addParticipant(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        custom_participant_id: 'custom_participant_id',
        preset_name: 'preset_name',
        name: 'Mary Sue',
        picture: 'https://i.imgur.com/test.jpg',
      },
    );
  });

  test('deleteMeetingParticipant: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.deleteMeetingParticipant(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'participant_id',
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

  test('deleteMeetingParticipant: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.deleteMeetingParticipant(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'participant_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('editParticipant: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.editParticipant(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'participant_id',
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

  test('editParticipant: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.editParticipant(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'participant_id',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        name: 'Jane Doe',
        picture: 'https://example.com',
        preset_name: 'preset_name',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.get('app_id', {
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

  test('get: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.get('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      end_time: '2019-12-27T18:11:19.117Z',
      page_no: 0,
      per_page: 0,
      search: 'search',
      start_time: '2019-12-27T18:11:19.117Z',
    });
  });

  test('getMeetingById: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.getMeetingById(
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

  test('getMeetingById: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.getMeetingById(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', name: 'name' },
    );
  });

  test('getMeetingParticipant: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.getMeetingParticipant(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'participant_id',
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

  test('getMeetingParticipant: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.getMeetingParticipant(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'participant_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('getMeetingParticipants: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.getMeetingParticipants(
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

  test('getMeetingParticipants: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.getMeetingParticipants(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', page_no: 0, per_page: 0 },
    );
  });

  test('refreshParticipantToken: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.refreshParticipantToken(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'participant_id',
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

  test('refreshParticipantToken: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.refreshParticipantToken(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'participant_id',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('replaceMeetingById: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.replaceMeetingById(
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

  test('replaceMeetingById: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.replaceMeetingById(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        ai_config: {
          summarization: { summary_type: 'general', text_format: 'plain_text', word_limit: 150 },
          transcription: { keywords: ['string'], language: 'en-US', profanity_filter: true },
        },
        live_stream_on_start: true,
        persist_chat: true,
        record_on_start: true,
        recording_config: {
          audio_config: { channel: 'mono', codec: 'MP3', export_file: true },
          file_name_prefix: 'file_name_prefix',
          live_streaming_config: { rtmp_url: 'rtmp://a.rtmp.youtube.com/live2' },
          max_seconds: 60,
          realtimekit_bucket_config: { enabled: true },
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
          video_config: {
            codec: 'H264',
            export_file: true,
            height: 720,
            watermark: { position: 'left top', size: { height: 1, width: 1 }, url: 'https://example.com' },
            width: 1280,
          },
        },
        session_keep_alive_time_in_secs: 60,
        summarize_on_end: true,
        title: 'title',
      },
    );
  });

  test('updateMeetingById: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.updateMeetingById(
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

  test('updateMeetingById: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.updateMeetingById(
      'app_id',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        ai_config: {
          summarization: { summary_type: 'general', text_format: 'plain_text', word_limit: 150 },
          transcription: { keywords: ['string'], language: 'en-US', profanity_filter: true },
        },
        live_stream_on_start: true,
        persist_chat: true,
        record_on_start: true,
        session_keep_alive_time_in_secs: 60,
        status: 'INACTIVE',
        summarize_on_end: true,
        title: 'title',
      },
    );
  });
});
