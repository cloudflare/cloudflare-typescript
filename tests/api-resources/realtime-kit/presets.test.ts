// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource presets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.realtimeKit.presets.create('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      config: {
        max_screenshare_count: 0,
        max_video_streams: { desktop: 0, mobile: 0 },
        media: { screenshare: { frame_rate: 0, quality: 'hd' }, video: { frame_rate: 30, quality: 'hd' } },
        view_type: 'GROUP_CALL',
      },
      name: 'name',
      ui: {
        design_tokens: {
          border_radius: 'rounded',
          border_width: 'thin',
          colors: {
            background: { '600': '600', '700': '700', '800': '800', '900': '900', '1000': '1000' },
            brand: { '300': '300', '400': '400', '500': '500', '600': '600', '700': '700' },
            danger: 'danger',
            success: 'success',
            text: 'text',
            text_on_brand: 'text_on_brand',
            video_bg: 'video_bg',
            warning: 'warning',
          },
          logo: 'logo',
          spacing_base: 0,
          theme: 'dark',
        },
      },
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
    const response = await client.realtimeKit.presets.create('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      config: {
        max_screenshare_count: 0,
        max_video_streams: { desktop: 0, mobile: 0 },
        media: {
          screenshare: { frame_rate: 0, quality: 'hd' },
          video: { frame_rate: 30, quality: 'hd' },
          audio: { enable_high_bitrate: true, enable_stereo: true },
        },
        view_type: 'GROUP_CALL',
      },
      name: 'name',
      ui: {
        design_tokens: {
          border_radius: 'rounded',
          border_width: 'thin',
          colors: {
            background: { '600': '600', '700': '700', '800': '800', '900': '900', '1000': '1000' },
            brand: { '300': '300', '400': '400', '500': '500', '600': '600', '700': '700' },
            danger: 'danger',
            success: 'success',
            text: 'text',
            text_on_brand: 'text_on_brand',
            video_bg: 'video_bg',
            warning: 'warning',
          },
          logo: 'logo',
          spacing_base: 0,
          theme: 'dark',
        },
        config_diff: {},
      },
      permissions: {
        accept_waiting_requests: true,
        can_accept_production_requests: true,
        can_change_participant_permissions: true,
        can_edit_display_name: true,
        can_livestream: true,
        can_record: true,
        can_spotlight: true,
        chat: {
          private: { can_receive: true, can_send: true, files: true, text: true },
          public: { can_send: true, files: true, text: true },
        },
        connected_meetings: {
          can_alter_connected_meetings: true,
          can_switch_connected_meetings: true,
          can_switch_to_parent_meeting: true,
        },
        disable_participant_audio: true,
        disable_participant_screensharing: true,
        disable_participant_video: true,
        hidden_participant: true,
        kick_participant: true,
        media: {
          audio: { can_produce: 'ALLOWED' },
          screenshare: { can_produce: 'ALLOWED' },
          video: { can_produce: 'ALLOWED' },
        },
        pin_participant: true,
        plugins: {
          can_close: true,
          can_edit_config: true,
          can_start: true,
          config: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        polls: { can_create: true, can_view: true, can_vote: true },
        recorder_type: 'RECORDER',
        show_participant_list: true,
        waiting_room_type: 'SKIP',
        is_recorder: true,
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.realtimeKit.presets.update('app_id', 'preset_id', {
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

  test('update: required and optional params', async () => {
    const response = await client.realtimeKit.presets.update('app_id', 'preset_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      config: {
        max_screenshare_count: 0,
        max_video_streams: { desktop: 0, mobile: 0 },
        media: { screenshare: { frame_rate: 0, quality: 'hd' }, video: { frame_rate: 30, quality: 'hd' } },
        view_type: 'GROUP_CALL',
      },
      name: 'name',
      permissions: {
        accept_waiting_requests: true,
        can_accept_production_requests: true,
        can_change_participant_permissions: true,
        can_edit_display_name: true,
        can_livestream: true,
        can_record: true,
        can_spotlight: true,
        chat: {
          private: { can_receive: true, can_send: true, files: true, text: true },
          public: { can_send: true, files: true, text: true },
        },
        connected_meetings: {
          can_alter_connected_meetings: true,
          can_switch_connected_meetings: true,
          can_switch_to_parent_meeting: true,
        },
        disable_participant_audio: true,
        disable_participant_screensharing: true,
        disable_participant_video: true,
        hidden_participant: true,
        is_recorder: true,
        kick_participant: true,
        media: {
          audio: { can_produce: 'ALLOWED' },
          screenshare: { can_produce: 'ALLOWED' },
          video: { can_produce: 'ALLOWED' },
        },
        pin_participant: true,
        plugins: {
          can_close: true,
          can_edit_config: true,
          can_start: true,
          config: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        polls: { can_create: true, can_view: true, can_vote: true },
        recorder_type: 'RECORDER',
        show_participant_list: true,
        waiting_room_type: 'SKIP',
      },
      ui: {
        config_diff: {},
        design_tokens: {
          border_radius: 'rounded',
          border_width: 'thin',
          colors: {
            background: { '600': '600', '700': '700', '800': '800', '900': '900', '1000': '1000' },
            brand: { '300': '300', '400': '400', '500': '500', '600': '600', '700': '700' },
            danger: 'danger',
            success: 'success',
            text: 'text',
            text_on_brand: 'text_on_brand',
            video_bg: 'video_bg',
            warning: 'warning',
          },
          logo: 'logo',
          spacing_base: 0,
          theme: 'dark',
        },
      },
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.realtimeKit.presets.delete('app_id', 'preset_id', {
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

  test('delete: required and optional params', async () => {
    const response = await client.realtimeKit.presets.delete('app_id', 'preset_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.realtimeKit.presets.get('app_id', {
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
    const response = await client.realtimeKit.presets.get('app_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page_no: 0,
      per_page: 0,
    });
  });

  test('getPresetById: only required params', async () => {
    const responsePromise = client.realtimeKit.presets.getPresetById('app_id', 'preset_id', {
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

  test('getPresetById: required and optional params', async () => {
    const response = await client.realtimeKit.presets.getPresetById('app_id', 'preset_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
