// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseMeetings } from 'cloudflare/resources/realtime-kit/meetings';
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
  resources: [BaseMeetings],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RealtimeKit],
});

const runTests = (client: PartialCloudflare<{ realtimeKit: { meetings: BaseMeetings } }>) => {
  // TODO: auth not handled well
  test.skip('create: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.create('14a396e7-ca44-4937-bf1f-050a69118543', {
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

  // TODO: auth not handled well
  test.skip('create: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.create('14a396e7-ca44-4937-bf1f-050a69118543', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ai_config: {
        summarization: {
          summary_type: 'general',
          text_format: 'plain_text',
          word_limit: 150,
        },
        transcription: {
          keywords: ['string'],
          language: 'en-US',
          profanity_filter: true,
        },
      },
      live_stream_on_start: true,
      persist_chat: true,
      record_on_start: true,
      recording_config: {
        audio_config: {
          channel: 'mono',
          codec: 'MP3',
          export_file: true,
        },
        file_name_prefix: 'file_name_prefix',
        live_streaming_config: { rtmp_url: 'rtmp://a.rtmp.youtube.com/live2' },
        max_seconds: 60,
        realtimekit_bucket_config: { enabled: true },
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
        video_config: {
          codec: 'H264',
          export_file: true,
          height: 720,
          watermark: {
            position: 'left top',
            size: { height: 1, width: 1 },
            url: 'https://example.com',
          },
          width: 1280,
        },
      },
      session_keep_alive_time_in_secs: 60,
      summarize_on_end: true,
      title: 'title',
      transcribe_on_end: true,
    });
  });

  // TODO: auth not handled well
  test.skip('addParticipant: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.addParticipant(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
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

  // TODO: auth not handled well
  test.skip('addParticipant: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.addParticipant(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
        custom_participant_id: 'custom_participant_id',
        preset_name: 'preset_name',
        name: 'Mary Sue',
        picture: 'https://i.imgur.com/test.jpg',
      },
    );
  });

  // TODO: auth not handled well
  test.skip('deleteMeetingParticipant: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.deleteMeetingParticipant('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      meeting_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: auth not handled well
  test.skip('deleteMeetingParticipant: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.deleteMeetingParticipant('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      meeting_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // TODO: auth not handled well
  test.skip('editParticipant: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.editParticipant('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      meeting_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: auth not handled well
  test.skip('editParticipant: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.editParticipant('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      meeting_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'Jane Doe',
      picture: 'https://example.com',
      preset_name: 'preset_name',
    });
  });

  // TODO: auth not handled well
  test.skip('get: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.get('14a396e7-ca44-4937-bf1f-050a69118543', {
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

  // TODO: auth not handled well
  test.skip('get: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.get('14a396e7-ca44-4937-bf1f-050a69118543', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      end_time: '2019-12-27T18:11:19.117Z',
      page_no: 0,
      per_page: 0,
      search: 'search',
      start_time: '2019-12-27T18:11:19.117Z',
      status: 'ACTIVE',
    });
  });

  // TODO: auth not handled well
  test.skip('getMeetingByID: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.getMeetingByID(
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

  // TODO: auth not handled well
  test.skip('getMeetingByID: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.getMeetingByID(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
        name: 'name',
      },
    );
  });

  // TODO: auth not handled well
  test.skip('getMeetingParticipant: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.getMeetingParticipant('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      meeting_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: auth not handled well
  test.skip('getMeetingParticipant: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.getMeetingParticipant('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      meeting_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // TODO: auth not handled well
  test.skip('getMeetingParticipants: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.getMeetingParticipants(
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

  // TODO: auth not handled well
  test.skip('getMeetingParticipants: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.getMeetingParticipants(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
        page_no: 0,
        per_page: 0,
      },
    );
  });

  // TODO: auth not handled well
  test.skip('refreshParticipantToken: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.refreshParticipantToken('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      meeting_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: auth not handled well
  test.skip('refreshParticipantToken: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.refreshParticipantToken('participant_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
      meeting_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // TODO: auth not handled well
  test.skip('replaceMeetingByID: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.replaceMeetingByID(
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

  // TODO: auth not handled well
  test.skip('replaceMeetingByID: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.replaceMeetingByID(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
        ai_config: {
          summarization: {
            summary_type: 'general',
            text_format: 'plain_text',
            word_limit: 150,
          },
          transcription: {
            keywords: ['string'],
            language: 'en-US',
            profanity_filter: true,
          },
        },
        live_stream_on_start: true,
        persist_chat: true,
        record_on_start: true,
        recording_config: {
          audio_config: {
            channel: 'mono',
            codec: 'MP3',
            export_file: true,
          },
          file_name_prefix: 'file_name_prefix',
          live_streaming_config: { rtmp_url: 'rtmp://a.rtmp.youtube.com/live2' },
          max_seconds: 60,
          realtimekit_bucket_config: { enabled: true },
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
          video_config: {
            codec: 'H264',
            export_file: true,
            height: 720,
            watermark: {
              position: 'left top',
              size: { height: 1, width: 1 },
              url: 'https://example.com',
            },
            width: 1280,
          },
        },
        session_keep_alive_time_in_secs: 60,
        summarize_on_end: true,
        title: 'title',
        transcribe_on_end: true,
      },
    );
  });

  // TODO: auth not handled well
  test.skip('updateMeetingByID: only required params', async () => {
    const responsePromise = client.realtimeKit.meetings.updateMeetingByID(
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

  // TODO: auth not handled well
  test.skip('updateMeetingByID: required and optional params', async () => {
    const response = await client.realtimeKit.meetings.updateMeetingByID(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        app_id: '14a396e7-ca44-4937-bf1f-050a69118543',
        ai_config: {
          summarization: {
            summary_type: 'general',
            text_format: 'plain_text',
            word_limit: 150,
          },
          transcription: {
            keywords: ['string'],
            language: 'en-US',
            profanity_filter: true,
          },
        },
        live_stream_on_start: true,
        persist_chat: true,
        record_on_start: true,
        recording_config: {
          audio_config: {
            channel: 'mono',
            codec: 'MP3',
            export_file: true,
          },
          file_name_prefix: 'file_name_prefix',
          live_streaming_config: { rtmp_url: 'rtmp://a.rtmp.youtube.com/live2' },
          max_seconds: 60,
          realtimekit_bucket_config: { enabled: true },
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
          video_config: {
            codec: 'H264',
            export_file: true,
            height: 720,
            watermark: {
              position: 'left top',
              size: { height: 1, width: 1 },
              url: 'https://example.com',
            },
            width: 1280,
          },
        },
        session_keep_alive_time_in_secs: 60,
        status: 'INACTIVE',
        summarize_on_end: true,
        title: 'title',
        transcribe_on_end: true,
      },
    );
  });
};
describe('resource meetings', () => runTests(client));
describe('resource meetings (tree shakable, base)', () => runTests(partialClient));
describe('resource meetings (tree shakable, subresource)', () => runTests(parentPartialClient));
