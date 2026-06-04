// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Presets extends APIResource {
  /**
   * Creates a preset belonging to the current App
   *
   * @example
   * ```ts
   * const preset = await client.realtimeKit.presets.create('app_id', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   config: {
   *     max_screenshare_count: 0,
   *     max_video_streams: { ... },
   *     media: { ... },
   *     view_type: 'GROUP_CALL',
   *   },
   *   name: 'name',
   *   permissions: {
   *     accept_waiting_requests: true,
   *     can_accept_production_requests: true,
   *     can_change_participant_permissions: true,
   *     can_edit_display_name: true,
   *     can_livestream: true,
   *     can_record: true,
   *     can_spotlight: true,
   *     chat: { ... },
   *     connected_meetings: { ... },
   *     disable_participant_audio: true,
   *     disable_participant_screensharing: true,
   *     disable_participant_video: true,
   *     hidden_participant: true,
   *     kick_participant: true,
   *     media: { ... },
   *     pin_participant: true,
   *     plugins: { ... },
   *     polls: { ... },
   *     recorder_type: 'RECORDER',
   *     show_participant_list: true,
   *     waiting_room_type: 'SKIP',
   *   },
   *   ui: {
   *     design_tokens: { ... },
   *   },
   * });
   * ```
   */
  create(
    appId: string,
    params: PresetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PresetCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/realtime/kit/${appId}/presets`, { body, ...options });
  }

  /**
   * Update a preset by the provided preset ID
   *
   * @example
   * ```ts
   * const preset = await client.realtimeKit.presets.update(
   *   'app_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(
    appId: string,
    presetId: string,
    params: PresetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PresetUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/realtime/kit/${appId}/presets/${presetId}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a preset using the provided preset ID
   *
   * @example
   * ```ts
   * const preset = await client.realtimeKit.presets.delete(
   *   'app_id',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    appId: string,
    presetId: string,
    params: PresetDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PresetDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/realtime/kit/${appId}/presets/${presetId}`, options);
  }

  /**
   * Fetches all the presets belonging to an App.
   *
   * @example
   * ```ts
   * const preset = await client.realtimeKit.presets.get(
   *   'app_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    appId: string,
    params: PresetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PresetGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/presets`, { query, ...options });
  }

  /**
   * Fetches details of a preset using the provided preset ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.presets.getPresetById(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getPresetById(
    appId: string,
    presetId: string,
    params: PresetGetPresetByIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PresetGetPresetByIDResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/presets/${presetId}`, options);
  }
}

export interface PresetCreateResponse {
  /**
   * Data returned by the operation
   */
  data: PresetCreateResponse.Data;

  /**
   * Success status of the operation
   */
  success: boolean;
}

export namespace PresetCreateResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the preset
     */
    id: string;

    config: Data.Config;

    /**
     * Timestamp this preset was created at
     */
    created_at: string;

    /**
     * Name of the preset
     */
    name: string;

    permissions: Data.Permissions;

    ui: Data.UI;

    /**
     * Timestamp this preset was last updated
     */
    updated_at: string;
  }

  export namespace Data {
    export interface Config {
      /**
       * Maximum number of screen shares that can be active at a given time
       */
      max_screenshare_count: number;

      /**
       * Maximum number of streams that are visible on a device
       */
      max_video_streams: Config.MaxVideoStreams;

      /**
       * Media configuration options. eg: Video quality
       */
      media: Config.Media;

      /**
       * Type of the meeting
       */
      view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM' | 'LIVESTREAM';

      /**
       * Livestream viewer quality levels.
       */
      livestream_viewer_qualities?: Array<number> | null;
    }

    export namespace Config {
      /**
       * Maximum number of streams that are visible on a device
       */
      export interface MaxVideoStreams {
        /**
         * Maximum number of video streams visible on desktop devices
         */
        desktop: number;

        /**
         * Maximum number of streams visible on mobile devices
         */
        mobile: number;
      }

      /**
       * Media configuration options. eg: Video quality
       */
      export interface Media {
        /**
         * Configuration options for participant screen shares
         */
        screenshare: Media.Screenshare;

        /**
         * Configuration options for participant videos
         */
        video: Media.Video;

        /**
         * Control options for Audio quality.
         */
        audio?: Media.Audio;
      }

      export namespace Media {
        /**
         * Configuration options for participant screen shares
         */
        export interface Screenshare {
          /**
           * Frame rate of screen share
           */
          frame_rate: number;

          /**
           * Quality of screen share
           */
          quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';
        }

        /**
         * Configuration options for participant videos
         */
        export interface Video {
          /**
           * Frame rate of participants' video
           */
          frame_rate: number;

          /**
           * Video quality of participants
           */
          quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';

          /**
           * Enable simulcast for participant videos.
           */
          simulcast?: boolean;
        }

        /**
         * Control options for Audio quality.
         */
        export interface Audio {
          /**
           * Enable High Quality Audio for your meetings
           */
          enable_high_bitrate?: boolean;

          /**
           * Enable Stereo for your meetings
           */
          enable_stereo?: boolean;
        }
      }
    }

    export interface Permissions {
      /**
       * Whether this participant can accept waiting requests
       */
      accept_waiting_requests: boolean;

      can_accept_production_requests: boolean;

      can_change_participant_permissions: boolean;

      can_edit_display_name: boolean;

      can_livestream: boolean;

      can_record: boolean;

      can_spotlight: boolean;

      chat: Permissions.Chat;

      connected_meetings: Permissions.ConnectedMeetings;

      disable_participant_audio: boolean;

      disable_participant_screensharing: boolean;

      disable_participant_video: boolean;

      /**
       * Whether this participant is visible to others or not
       */
      hidden_participant: boolean;

      kick_participant: boolean;

      /**
       * Media permissions
       */
      media: Permissions.Media;

      pin_participant: boolean;

      /**
       * Plugin permissions
       */
      plugins: Permissions.Plugins;

      /**
       * Poll permissions
       */
      polls: Permissions.Polls;

      /**
       * Type of the recording peer
       */
      recorder_type: 'RECORDER' | 'LIVESTREAMER' | 'NONE';

      show_participant_list: boolean;

      /**
       * Waiting room type
       */
      waiting_room_type: 'SKIP' | 'ON_PRIVILEGED_USER_ENTRY' | 'SKIP_ON_ACCEPT';

      accept_stage_requests?: boolean;

      is_recorder?: boolean;

      stage_access?: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';

      stage_enabled?: boolean;

      transcription_enabled?: boolean;
    }

    export namespace Permissions {
      export interface Chat {
        private: Chat.Private;

        public: Chat.Public;
      }

      export namespace Chat {
        export interface Private {
          can_receive: boolean;

          can_send: boolean;

          files: boolean;

          text: boolean;
        }

        export interface Public {
          /**
           * Can send messages in general
           */
          can_send: boolean;

          /**
           * Can send file messages
           */
          files: boolean;

          /**
           * Can send text messages
           */
          text: boolean;
        }
      }

      export interface ConnectedMeetings {
        can_alter_connected_meetings: boolean;

        can_switch_connected_meetings: boolean;

        can_switch_to_parent_meeting: boolean;
      }

      /**
       * Media permissions
       */
      export interface Media {
        /**
         * Audio permissions
         */
        audio: Media.Audio;

        /**
         * Screenshare permissions
         */
        screenshare: Media.Screenshare;

        /**
         * Video permissions
         */
        video: Media.Video;
      }

      export namespace Media {
        /**
         * Audio permissions
         */
        export interface Audio {
          /**
           * Can produce audio
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }

        /**
         * Screenshare permissions
         */
        export interface Screenshare {
          /**
           * Can produce screen share video
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }

        /**
         * Video permissions
         */
        export interface Video {
          /**
           * Can produce video
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }
      }

      /**
       * Plugin permissions
       */
      export interface Plugins {
        /**
         * Can close plugins that are already open
         */
        can_close: boolean;

        /**
         * Can edit plugin config
         */
        can_edit_config: boolean;

        /**
         * Can start plugins
         */
        can_start: boolean;

        /**
         * Plugin configuration keyed by plugin UUID.
         */
        config: { [key: string]: Plugins.Config };
      }

      export namespace Plugins {
        export interface Config {
          access_control?: 'FULL_ACCESS' | 'VIEW_ONLY';

          handles_view_only?: boolean;

          [k: string]: unknown;
        }
      }

      /**
       * Poll permissions
       */
      export interface Polls {
        /**
         * Can create polls
         */
        can_create: boolean;

        /**
         * Can view polls
         */
        can_view: boolean;

        /**
         * Can vote on polls
         */
        can_vote: boolean;
      }
    }

    export interface UI {
      design_tokens: UI.DesignTokens;
    }

    export namespace UI {
      export interface DesignTokens {
        border_radius: 'sharp' | 'rounded' | 'extra-rounded' | 'circular';

        border_width: 'none' | 'thin' | 'fat';

        colors: DesignTokens.Colors;

        spacing_base: number;

        theme: 'darkest' | 'dark' | 'light';

        font_family?: string;

        google_font?: string;

        logo?: string;
      }

      export namespace DesignTokens {
        export interface Colors {
          background: Colors.Background;

          brand: Colors.Brand;

          danger: string;

          success: string;

          text: string;

          text_on_brand: string;

          video_bg: string;

          warning: string;
        }

        export namespace Colors {
          export interface Background {
            '1000': string;

            '600': string;

            '700': string;

            '800': string;

            '900': string;
          }

          export interface Brand {
            '300': string;

            '400': string;

            '500': string;

            '600': string;

            '700': string;
          }
        }
      }
    }
  }
}

export interface PresetUpdateResponse {
  /**
   * Data returned by the operation
   */
  data: PresetUpdateResponse.Data;

  /**
   * Success status of the operation
   */
  success: boolean;
}

export namespace PresetUpdateResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the preset
     */
    id: string;

    config: Data.Config;

    /**
     * Timestamp this preset was created at
     */
    created_at: string;

    /**
     * Name of the preset
     */
    name: string;

    permissions: Data.Permissions;

    ui: Data.UI;

    /**
     * Timestamp this preset was last updated
     */
    updated_at: string;
  }

  export namespace Data {
    export interface Config {
      /**
       * Maximum number of screen shares that can be active at a given time
       */
      max_screenshare_count: number;

      /**
       * Maximum number of streams that are visible on a device
       */
      max_video_streams: Config.MaxVideoStreams;

      /**
       * Media configuration options. eg: Video quality
       */
      media: Config.Media;

      /**
       * Type of the meeting
       */
      view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM' | 'LIVESTREAM';

      /**
       * Livestream viewer quality levels.
       */
      livestream_viewer_qualities?: Array<number> | null;
    }

    export namespace Config {
      /**
       * Maximum number of streams that are visible on a device
       */
      export interface MaxVideoStreams {
        /**
         * Maximum number of video streams visible on desktop devices
         */
        desktop: number;

        /**
         * Maximum number of streams visible on mobile devices
         */
        mobile: number;
      }

      /**
       * Media configuration options. eg: Video quality
       */
      export interface Media {
        /**
         * Configuration options for participant screen shares
         */
        screenshare: Media.Screenshare;

        /**
         * Configuration options for participant videos
         */
        video: Media.Video;

        /**
         * Control options for Audio quality.
         */
        audio?: Media.Audio;
      }

      export namespace Media {
        /**
         * Configuration options for participant screen shares
         */
        export interface Screenshare {
          /**
           * Frame rate of screen share
           */
          frame_rate: number;

          /**
           * Quality of screen share
           */
          quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';
        }

        /**
         * Configuration options for participant videos
         */
        export interface Video {
          /**
           * Frame rate of participants' video
           */
          frame_rate: number;

          /**
           * Video quality of participants
           */
          quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';

          /**
           * Enable simulcast for participant videos.
           */
          simulcast?: boolean;
        }

        /**
         * Control options for Audio quality.
         */
        export interface Audio {
          /**
           * Enable High Quality Audio for your meetings
           */
          enable_high_bitrate?: boolean;

          /**
           * Enable Stereo for your meetings
           */
          enable_stereo?: boolean;
        }
      }
    }

    export interface Permissions {
      /**
       * Whether this participant can accept waiting requests
       */
      accept_waiting_requests: boolean;

      can_accept_production_requests: boolean;

      can_change_participant_permissions: boolean;

      can_edit_display_name: boolean;

      can_livestream: boolean;

      can_record: boolean;

      can_spotlight: boolean;

      chat: Permissions.Chat;

      connected_meetings: Permissions.ConnectedMeetings;

      disable_participant_audio: boolean;

      disable_participant_screensharing: boolean;

      disable_participant_video: boolean;

      /**
       * Whether this participant is visible to others or not
       */
      hidden_participant: boolean;

      kick_participant: boolean;

      /**
       * Media permissions
       */
      media: Permissions.Media;

      pin_participant: boolean;

      /**
       * Plugin permissions
       */
      plugins: Permissions.Plugins;

      /**
       * Poll permissions
       */
      polls: Permissions.Polls;

      /**
       * Type of the recording peer
       */
      recorder_type: 'RECORDER' | 'LIVESTREAMER' | 'NONE';

      show_participant_list: boolean;

      /**
       * Waiting room type
       */
      waiting_room_type: 'SKIP' | 'ON_PRIVILEGED_USER_ENTRY' | 'SKIP_ON_ACCEPT';

      accept_stage_requests?: boolean;

      is_recorder?: boolean;

      stage_access?: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';

      stage_enabled?: boolean;

      transcription_enabled?: boolean;
    }

    export namespace Permissions {
      export interface Chat {
        private: Chat.Private;

        public: Chat.Public;
      }

      export namespace Chat {
        export interface Private {
          can_receive: boolean;

          can_send: boolean;

          files: boolean;

          text: boolean;
        }

        export interface Public {
          /**
           * Can send messages in general
           */
          can_send: boolean;

          /**
           * Can send file messages
           */
          files: boolean;

          /**
           * Can send text messages
           */
          text: boolean;
        }
      }

      export interface ConnectedMeetings {
        can_alter_connected_meetings: boolean;

        can_switch_connected_meetings: boolean;

        can_switch_to_parent_meeting: boolean;
      }

      /**
       * Media permissions
       */
      export interface Media {
        /**
         * Audio permissions
         */
        audio: Media.Audio;

        /**
         * Screenshare permissions
         */
        screenshare: Media.Screenshare;

        /**
         * Video permissions
         */
        video: Media.Video;
      }

      export namespace Media {
        /**
         * Audio permissions
         */
        export interface Audio {
          /**
           * Can produce audio
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }

        /**
         * Screenshare permissions
         */
        export interface Screenshare {
          /**
           * Can produce screen share video
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }

        /**
         * Video permissions
         */
        export interface Video {
          /**
           * Can produce video
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }
      }

      /**
       * Plugin permissions
       */
      export interface Plugins {
        /**
         * Can close plugins that are already open
         */
        can_close: boolean;

        /**
         * Can edit plugin config
         */
        can_edit_config: boolean;

        /**
         * Can start plugins
         */
        can_start: boolean;

        /**
         * Plugin configuration keyed by plugin UUID.
         */
        config: { [key: string]: Plugins.Config };
      }

      export namespace Plugins {
        export interface Config {
          access_control?: 'FULL_ACCESS' | 'VIEW_ONLY';

          handles_view_only?: boolean;

          [k: string]: unknown;
        }
      }

      /**
       * Poll permissions
       */
      export interface Polls {
        /**
         * Can create polls
         */
        can_create: boolean;

        /**
         * Can view polls
         */
        can_view: boolean;

        /**
         * Can vote on polls
         */
        can_vote: boolean;
      }
    }

    export interface UI {
      design_tokens: UI.DesignTokens;
    }

    export namespace UI {
      export interface DesignTokens {
        border_radius: 'sharp' | 'rounded' | 'extra-rounded' | 'circular';

        border_width: 'none' | 'thin' | 'fat';

        colors: DesignTokens.Colors;

        spacing_base: number;

        theme: 'darkest' | 'dark' | 'light';

        font_family?: string;

        google_font?: string;

        logo?: string;
      }

      export namespace DesignTokens {
        export interface Colors {
          background: Colors.Background;

          brand: Colors.Brand;

          danger: string;

          success: string;

          text: string;

          text_on_brand: string;

          video_bg: string;

          warning: string;
        }

        export namespace Colors {
          export interface Background {
            '1000': string;

            '600': string;

            '700': string;

            '800': string;

            '900': string;
          }

          export interface Brand {
            '300': string;

            '400': string;

            '500': string;

            '600': string;

            '700': string;
          }
        }
      }
    }
  }
}

export interface PresetDeleteResponse {
  /**
   * Data returned by the operation
   */
  data: PresetDeleteResponse.Data;

  /**
   * Success status of the operation
   */
  success: boolean;
}

export namespace PresetDeleteResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the preset
     */
    id: string;

    config: Data.Config;

    /**
     * Timestamp this preset was created at
     */
    created_at: string;

    /**
     * Name of the preset
     */
    name: string;

    permissions: Data.Permissions;

    ui: Data.UI;

    /**
     * Timestamp this preset was last updated
     */
    updated_at: string;
  }

  export namespace Data {
    export interface Config {
      /**
       * Maximum number of screen shares that can be active at a given time
       */
      max_screenshare_count: number;

      /**
       * Maximum number of streams that are visible on a device
       */
      max_video_streams: Config.MaxVideoStreams;

      /**
       * Media configuration options. eg: Video quality
       */
      media: Config.Media;

      /**
       * Type of the meeting
       */
      view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM' | 'LIVESTREAM';

      /**
       * Livestream viewer quality levels.
       */
      livestream_viewer_qualities?: Array<number> | null;
    }

    export namespace Config {
      /**
       * Maximum number of streams that are visible on a device
       */
      export interface MaxVideoStreams {
        /**
         * Maximum number of video streams visible on desktop devices
         */
        desktop: number;

        /**
         * Maximum number of streams visible on mobile devices
         */
        mobile: number;
      }

      /**
       * Media configuration options. eg: Video quality
       */
      export interface Media {
        /**
         * Configuration options for participant screen shares
         */
        screenshare: Media.Screenshare;

        /**
         * Configuration options for participant videos
         */
        video: Media.Video;

        /**
         * Control options for Audio quality.
         */
        audio?: Media.Audio;
      }

      export namespace Media {
        /**
         * Configuration options for participant screen shares
         */
        export interface Screenshare {
          /**
           * Frame rate of screen share
           */
          frame_rate: number;

          /**
           * Quality of screen share
           */
          quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';
        }

        /**
         * Configuration options for participant videos
         */
        export interface Video {
          /**
           * Frame rate of participants' video
           */
          frame_rate: number;

          /**
           * Video quality of participants
           */
          quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';

          /**
           * Enable simulcast for participant videos.
           */
          simulcast?: boolean;
        }

        /**
         * Control options for Audio quality.
         */
        export interface Audio {
          /**
           * Enable High Quality Audio for your meetings
           */
          enable_high_bitrate?: boolean;

          /**
           * Enable Stereo for your meetings
           */
          enable_stereo?: boolean;
        }
      }
    }

    export interface Permissions {
      /**
       * Whether this participant can accept waiting requests
       */
      accept_waiting_requests: boolean;

      can_accept_production_requests: boolean;

      can_change_participant_permissions: boolean;

      can_edit_display_name: boolean;

      can_livestream: boolean;

      can_record: boolean;

      can_spotlight: boolean;

      chat: Permissions.Chat;

      connected_meetings: Permissions.ConnectedMeetings;

      disable_participant_audio: boolean;

      disable_participant_screensharing: boolean;

      disable_participant_video: boolean;

      /**
       * Whether this participant is visible to others or not
       */
      hidden_participant: boolean;

      kick_participant: boolean;

      /**
       * Media permissions
       */
      media: Permissions.Media;

      pin_participant: boolean;

      /**
       * Plugin permissions
       */
      plugins: Permissions.Plugins;

      /**
       * Poll permissions
       */
      polls: Permissions.Polls;

      /**
       * Type of the recording peer
       */
      recorder_type: 'RECORDER' | 'LIVESTREAMER' | 'NONE';

      show_participant_list: boolean;

      /**
       * Waiting room type
       */
      waiting_room_type: 'SKIP' | 'ON_PRIVILEGED_USER_ENTRY' | 'SKIP_ON_ACCEPT';

      accept_stage_requests?: boolean;

      is_recorder?: boolean;

      stage_access?: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';

      stage_enabled?: boolean;

      transcription_enabled?: boolean;
    }

    export namespace Permissions {
      export interface Chat {
        private: Chat.Private;

        public: Chat.Public;
      }

      export namespace Chat {
        export interface Private {
          can_receive: boolean;

          can_send: boolean;

          files: boolean;

          text: boolean;
        }

        export interface Public {
          /**
           * Can send messages in general
           */
          can_send: boolean;

          /**
           * Can send file messages
           */
          files: boolean;

          /**
           * Can send text messages
           */
          text: boolean;
        }
      }

      export interface ConnectedMeetings {
        can_alter_connected_meetings: boolean;

        can_switch_connected_meetings: boolean;

        can_switch_to_parent_meeting: boolean;
      }

      /**
       * Media permissions
       */
      export interface Media {
        /**
         * Audio permissions
         */
        audio: Media.Audio;

        /**
         * Screenshare permissions
         */
        screenshare: Media.Screenshare;

        /**
         * Video permissions
         */
        video: Media.Video;
      }

      export namespace Media {
        /**
         * Audio permissions
         */
        export interface Audio {
          /**
           * Can produce audio
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }

        /**
         * Screenshare permissions
         */
        export interface Screenshare {
          /**
           * Can produce screen share video
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }

        /**
         * Video permissions
         */
        export interface Video {
          /**
           * Can produce video
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }
      }

      /**
       * Plugin permissions
       */
      export interface Plugins {
        /**
         * Can close plugins that are already open
         */
        can_close: boolean;

        /**
         * Can edit plugin config
         */
        can_edit_config: boolean;

        /**
         * Can start plugins
         */
        can_start: boolean;

        /**
         * Plugin configuration keyed by plugin UUID.
         */
        config: { [key: string]: Plugins.Config };
      }

      export namespace Plugins {
        export interface Config {
          access_control?: 'FULL_ACCESS' | 'VIEW_ONLY';

          handles_view_only?: boolean;

          [k: string]: unknown;
        }
      }

      /**
       * Poll permissions
       */
      export interface Polls {
        /**
         * Can create polls
         */
        can_create: boolean;

        /**
         * Can view polls
         */
        can_view: boolean;

        /**
         * Can vote on polls
         */
        can_vote: boolean;
      }
    }

    export interface UI {
      design_tokens: UI.DesignTokens;
    }

    export namespace UI {
      export interface DesignTokens {
        border_radius: 'sharp' | 'rounded' | 'extra-rounded' | 'circular';

        border_width: 'none' | 'thin' | 'fat';

        colors: DesignTokens.Colors;

        spacing_base: number;

        theme: 'darkest' | 'dark' | 'light';

        font_family?: string;

        google_font?: string;

        logo?: string;
      }

      export namespace DesignTokens {
        export interface Colors {
          background: Colors.Background;

          brand: Colors.Brand;

          danger: string;

          success: string;

          text: string;

          text_on_brand: string;

          video_bg: string;

          warning: string;
        }

        export namespace Colors {
          export interface Background {
            '1000': string;

            '600': string;

            '700': string;

            '800': string;

            '900': string;
          }

          export interface Brand {
            '300': string;

            '400': string;

            '500': string;

            '600': string;

            '700': string;
          }
        }
      }
    }
  }
}

export interface PresetGetResponse {
  data: Array<PresetGetResponse.Data>;

  paging: PresetGetResponse.Paging;

  success: boolean;
}

export namespace PresetGetResponse {
  /**
   * Returned by Get All Presets route
   */
  export interface Data {
    /**
     * ID of the preset
     */
    id?: string;

    /**
     * Timestamp this preset was created at
     */
    created_at?: string;

    /**
     * Name of the preset
     */
    name?: string;

    /**
     * Timestamp this preset was last updated
     */
    updated_at?: string;
  }

  export interface Paging {
    end_offset: number;

    start_offset: number;

    total_count: number;
  }
}

export interface PresetGetPresetByIDResponse {
  /**
   * Data returned by the operation
   */
  data: PresetGetPresetByIDResponse.Data;

  /**
   * Success status of the operation
   */
  success: boolean;
}

export namespace PresetGetPresetByIDResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the preset
     */
    id: string;

    config: Data.Config;

    /**
     * Timestamp this preset was created at
     */
    created_at: string;

    /**
     * Name of the preset
     */
    name: string;

    permissions: Data.Permissions;

    ui: Data.UI;

    /**
     * Timestamp this preset was last updated
     */
    updated_at: string;
  }

  export namespace Data {
    export interface Config {
      /**
       * Maximum number of screen shares that can be active at a given time
       */
      max_screenshare_count: number;

      /**
       * Maximum number of streams that are visible on a device
       */
      max_video_streams: Config.MaxVideoStreams;

      /**
       * Media configuration options. eg: Video quality
       */
      media: Config.Media;

      /**
       * Type of the meeting
       */
      view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM' | 'LIVESTREAM';

      /**
       * Livestream viewer quality levels.
       */
      livestream_viewer_qualities?: Array<number> | null;
    }

    export namespace Config {
      /**
       * Maximum number of streams that are visible on a device
       */
      export interface MaxVideoStreams {
        /**
         * Maximum number of video streams visible on desktop devices
         */
        desktop: number;

        /**
         * Maximum number of streams visible on mobile devices
         */
        mobile: number;
      }

      /**
       * Media configuration options. eg: Video quality
       */
      export interface Media {
        /**
         * Configuration options for participant screen shares
         */
        screenshare: Media.Screenshare;

        /**
         * Configuration options for participant videos
         */
        video: Media.Video;

        /**
         * Control options for Audio quality.
         */
        audio?: Media.Audio;
      }

      export namespace Media {
        /**
         * Configuration options for participant screen shares
         */
        export interface Screenshare {
          /**
           * Frame rate of screen share
           */
          frame_rate: number;

          /**
           * Quality of screen share
           */
          quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';
        }

        /**
         * Configuration options for participant videos
         */
        export interface Video {
          /**
           * Frame rate of participants' video
           */
          frame_rate: number;

          /**
           * Video quality of participants
           */
          quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';

          /**
           * Enable simulcast for participant videos.
           */
          simulcast?: boolean;
        }

        /**
         * Control options for Audio quality.
         */
        export interface Audio {
          /**
           * Enable High Quality Audio for your meetings
           */
          enable_high_bitrate?: boolean;

          /**
           * Enable Stereo for your meetings
           */
          enable_stereo?: boolean;
        }
      }
    }

    export interface Permissions {
      /**
       * Whether this participant can accept waiting requests
       */
      accept_waiting_requests: boolean;

      can_accept_production_requests: boolean;

      can_change_participant_permissions: boolean;

      can_edit_display_name: boolean;

      can_livestream: boolean;

      can_record: boolean;

      can_spotlight: boolean;

      chat: Permissions.Chat;

      connected_meetings: Permissions.ConnectedMeetings;

      disable_participant_audio: boolean;

      disable_participant_screensharing: boolean;

      disable_participant_video: boolean;

      /**
       * Whether this participant is visible to others or not
       */
      hidden_participant: boolean;

      kick_participant: boolean;

      /**
       * Media permissions
       */
      media: Permissions.Media;

      pin_participant: boolean;

      /**
       * Plugin permissions
       */
      plugins: Permissions.Plugins;

      /**
       * Poll permissions
       */
      polls: Permissions.Polls;

      /**
       * Type of the recording peer
       */
      recorder_type: 'RECORDER' | 'LIVESTREAMER' | 'NONE';

      show_participant_list: boolean;

      /**
       * Waiting room type
       */
      waiting_room_type: 'SKIP' | 'ON_PRIVILEGED_USER_ENTRY' | 'SKIP_ON_ACCEPT';

      accept_stage_requests?: boolean;

      is_recorder?: boolean;

      stage_access?: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';

      stage_enabled?: boolean;

      transcription_enabled?: boolean;
    }

    export namespace Permissions {
      export interface Chat {
        private: Chat.Private;

        public: Chat.Public;
      }

      export namespace Chat {
        export interface Private {
          can_receive: boolean;

          can_send: boolean;

          files: boolean;

          text: boolean;
        }

        export interface Public {
          /**
           * Can send messages in general
           */
          can_send: boolean;

          /**
           * Can send file messages
           */
          files: boolean;

          /**
           * Can send text messages
           */
          text: boolean;
        }
      }

      export interface ConnectedMeetings {
        can_alter_connected_meetings: boolean;

        can_switch_connected_meetings: boolean;

        can_switch_to_parent_meeting: boolean;
      }

      /**
       * Media permissions
       */
      export interface Media {
        /**
         * Audio permissions
         */
        audio: Media.Audio;

        /**
         * Screenshare permissions
         */
        screenshare: Media.Screenshare;

        /**
         * Video permissions
         */
        video: Media.Video;
      }

      export namespace Media {
        /**
         * Audio permissions
         */
        export interface Audio {
          /**
           * Can produce audio
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }

        /**
         * Screenshare permissions
         */
        export interface Screenshare {
          /**
           * Can produce screen share video
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }

        /**
         * Video permissions
         */
        export interface Video {
          /**
           * Can produce video
           */
          can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
        }
      }

      /**
       * Plugin permissions
       */
      export interface Plugins {
        /**
         * Can close plugins that are already open
         */
        can_close: boolean;

        /**
         * Can edit plugin config
         */
        can_edit_config: boolean;

        /**
         * Can start plugins
         */
        can_start: boolean;

        /**
         * Plugin configuration keyed by plugin UUID.
         */
        config: { [key: string]: Plugins.Config };
      }

      export namespace Plugins {
        export interface Config {
          access_control?: 'FULL_ACCESS' | 'VIEW_ONLY';

          handles_view_only?: boolean;

          [k: string]: unknown;
        }
      }

      /**
       * Poll permissions
       */
      export interface Polls {
        /**
         * Can create polls
         */
        can_create: boolean;

        /**
         * Can view polls
         */
        can_view: boolean;

        /**
         * Can vote on polls
         */
        can_vote: boolean;
      }
    }

    export interface UI {
      design_tokens: UI.DesignTokens;
    }

    export namespace UI {
      export interface DesignTokens {
        border_radius: 'sharp' | 'rounded' | 'extra-rounded' | 'circular';

        border_width: 'none' | 'thin' | 'fat';

        colors: DesignTokens.Colors;

        spacing_base: number;

        theme: 'darkest' | 'dark' | 'light';

        font_family?: string;

        google_font?: string;

        logo?: string;
      }

      export namespace DesignTokens {
        export interface Colors {
          background: Colors.Background;

          brand: Colors.Brand;

          danger: string;

          success: string;

          text: string;

          text_on_brand: string;

          video_bg: string;

          warning: string;
        }

        export namespace Colors {
          export interface Background {
            '1000': string;

            '600': string;

            '700': string;

            '800': string;

            '900': string;
          }

          export interface Brand {
            '300': string;

            '400': string;

            '500': string;

            '600': string;

            '700': string;
          }
        }
      }
    }
  }
}

export interface PresetCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  config: PresetCreateParams.Config;

  /**
   * Body param: Name of the preset
   */
  name: string;

  /**
   * Body param
   */
  permissions: PresetCreateParams.Permissions;

  /**
   * Body param
   */
  ui: PresetCreateParams.UI;
}

export namespace PresetCreateParams {
  export interface Config {
    /**
     * Maximum number of screen shares that can be active at a given time
     */
    max_screenshare_count: number;

    /**
     * Maximum number of streams that are visible on a device
     */
    max_video_streams: Config.MaxVideoStreams;

    /**
     * Media configuration options. eg: Video quality
     */
    media: Config.Media;

    /**
     * Type of the meeting
     */
    view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM' | 'LIVESTREAM';

    /**
     * Livestream viewer quality levels.
     */
    livestream_viewer_qualities?: Array<number> | null;
  }

  export namespace Config {
    /**
     * Maximum number of streams that are visible on a device
     */
    export interface MaxVideoStreams {
      /**
       * Maximum number of video streams visible on desktop devices
       */
      desktop: number;

      /**
       * Maximum number of streams visible on mobile devices
       */
      mobile: number;
    }

    /**
     * Media configuration options. eg: Video quality
     */
    export interface Media {
      /**
       * Configuration options for participant screen shares
       */
      screenshare: Media.Screenshare;

      /**
       * Configuration options for participant videos
       */
      video: Media.Video;

      /**
       * Control options for Audio quality.
       */
      audio?: Media.Audio;
    }

    export namespace Media {
      /**
       * Configuration options for participant screen shares
       */
      export interface Screenshare {
        /**
         * Frame rate of screen share
         */
        frame_rate: number;

        /**
         * Quality of screen share
         */
        quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';
      }

      /**
       * Configuration options for participant videos
       */
      export interface Video {
        /**
         * Frame rate of participants' video
         */
        frame_rate: number;

        /**
         * Video quality of participants
         */
        quality: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';

        /**
         * Enable simulcast for participant videos.
         */
        simulcast?: boolean;
      }

      /**
       * Control options for Audio quality.
       */
      export interface Audio {
        /**
         * Enable High Quality Audio for your meetings
         */
        enable_high_bitrate?: boolean;

        /**
         * Enable Stereo for your meetings
         */
        enable_stereo?: boolean;
      }
    }
  }

  export interface Permissions {
    /**
     * Whether this participant can accept waiting requests
     */
    accept_waiting_requests: boolean;

    can_accept_production_requests: boolean;

    can_change_participant_permissions: boolean;

    can_edit_display_name: boolean;

    can_livestream: boolean;

    can_record: boolean;

    can_spotlight: boolean;

    chat: Permissions.Chat;

    connected_meetings: Permissions.ConnectedMeetings;

    disable_participant_audio: boolean;

    disable_participant_screensharing: boolean;

    disable_participant_video: boolean;

    /**
     * Whether this participant is visible to others or not
     */
    hidden_participant: boolean;

    kick_participant: boolean;

    /**
     * Media permissions
     */
    media: Permissions.Media;

    pin_participant: boolean;

    /**
     * Plugin permissions
     */
    plugins: Permissions.Plugins;

    /**
     * Poll permissions
     */
    polls: Permissions.Polls;

    /**
     * Type of the recording peer
     */
    recorder_type: 'RECORDER' | 'LIVESTREAMER' | 'NONE';

    show_participant_list: boolean;

    /**
     * Waiting room type
     */
    waiting_room_type: 'SKIP' | 'ON_PRIVILEGED_USER_ENTRY' | 'SKIP_ON_ACCEPT';

    accept_stage_requests?: boolean;

    is_recorder?: boolean;

    stage_access?: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';

    stage_enabled?: boolean;

    transcription_enabled?: boolean;
  }

  export namespace Permissions {
    export interface Chat {
      private: Chat.Private;

      public: Chat.Public;
    }

    export namespace Chat {
      export interface Private {
        can_receive: boolean;

        can_send: boolean;

        files: boolean;

        text: boolean;
      }

      export interface Public {
        /**
         * Can send messages in general
         */
        can_send: boolean;

        /**
         * Can send file messages
         */
        files: boolean;

        /**
         * Can send text messages
         */
        text: boolean;
      }
    }

    export interface ConnectedMeetings {
      can_alter_connected_meetings: boolean;

      can_switch_connected_meetings: boolean;

      can_switch_to_parent_meeting: boolean;
    }

    /**
     * Media permissions
     */
    export interface Media {
      /**
       * Audio permissions
       */
      audio: Media.Audio;

      /**
       * Screenshare permissions
       */
      screenshare: Media.Screenshare;

      /**
       * Video permissions
       */
      video: Media.Video;
    }

    export namespace Media {
      /**
       * Audio permissions
       */
      export interface Audio {
        /**
         * Can produce audio
         */
        can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
      }

      /**
       * Screenshare permissions
       */
      export interface Screenshare {
        /**
         * Can produce screen share video
         */
        can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
      }

      /**
       * Video permissions
       */
      export interface Video {
        /**
         * Can produce video
         */
        can_produce: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
      }
    }

    /**
     * Plugin permissions
     */
    export interface Plugins {
      /**
       * Can close plugins that are already open
       */
      can_close: boolean;

      /**
       * Can edit plugin config
       */
      can_edit_config: boolean;

      /**
       * Can start plugins
       */
      can_start: boolean;

      /**
       * Plugin configuration keyed by plugin UUID.
       */
      config: { [key: string]: Plugins.Config };
    }

    export namespace Plugins {
      export interface Config {
        access_control?: 'FULL_ACCESS' | 'VIEW_ONLY';

        handles_view_only?: boolean;

        [k: string]: unknown;
      }
    }

    /**
     * Poll permissions
     */
    export interface Polls {
      /**
       * Can create polls
       */
      can_create: boolean;

      /**
       * Can view polls
       */
      can_view: boolean;

      /**
       * Can vote on polls
       */
      can_vote: boolean;
    }
  }

  export interface UI {
    design_tokens: UI.DesignTokens;
  }

  export namespace UI {
    export interface DesignTokens {
      border_radius: 'sharp' | 'rounded' | 'extra-rounded' | 'circular';

      border_width: 'none' | 'thin' | 'fat';

      colors: DesignTokens.Colors;

      spacing_base: number;

      theme: 'darkest' | 'dark' | 'light';

      font_family?: string;

      google_font?: string;

      logo?: string;
    }

    export namespace DesignTokens {
      export interface Colors {
        background: Colors.Background;

        brand: Colors.Brand;

        danger: string;

        success: string;

        text: string;

        text_on_brand: string;

        video_bg: string;

        warning: string;
      }

      export namespace Colors {
        export interface Background {
          '1000': string;

          '600': string;

          '700': string;

          '800': string;

          '900': string;
        }

        export interface Brand {
          '300': string;

          '400': string;

          '500': string;

          '600': string;

          '700': string;
        }
      }
    }
  }
}

export interface PresetUpdateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  config?: PresetUpdateParams.Config;

  /**
   * Body param: Name of the preset
   */
  name?: string;

  /**
   * Body param
   */
  permissions?: PresetUpdateParams.Permissions;

  /**
   * Body param
   */
  ui?: PresetUpdateParams.UI;
}

export namespace PresetUpdateParams {
  export interface Config {
    /**
     * Livestream viewer quality levels.
     */
    livestream_viewer_qualities?: Array<number> | null;

    /**
     * Maximum number of screen shares that can be active at a given time
     */
    max_screenshare_count?: number;

    /**
     * Maximum number of streams that are visible on a device
     */
    max_video_streams?: Config.MaxVideoStreams;

    /**
     * Media configuration options. eg: Video quality
     */
    media?: Config.Media;

    /**
     * Type of the meeting
     */
    view_type?: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM' | 'LIVESTREAM';
  }

  export namespace Config {
    /**
     * Maximum number of streams that are visible on a device
     */
    export interface MaxVideoStreams {
      /**
       * Maximum number of video streams visible on desktop devices
       */
      desktop?: number;

      /**
       * Maximum number of streams visible on mobile devices
       */
      mobile?: number;
    }

    /**
     * Media configuration options. eg: Video quality
     */
    export interface Media {
      /**
       * Control options for Audio quality.
       */
      audio?: Media.Audio;

      /**
       * Configuration options for participant screen shares
       */
      screenshare?: Media.Screenshare;

      /**
       * Configuration options for participant videos
       */
      video?: Media.Video;
    }

    export namespace Media {
      /**
       * Control options for Audio quality.
       */
      export interface Audio {
        /**
         * Enable High Quality Audio for your meetings
         */
        enable_high_bitrate?: boolean;

        /**
         * Enable Stereo for your meetings
         */
        enable_stereo?: boolean;
      }

      /**
       * Configuration options for participant screen shares
       */
      export interface Screenshare {
        /**
         * Frame rate of screen share
         */
        frame_rate?: number;

        /**
         * Quality of screen share
         */
        quality?: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';
      }

      /**
       * Configuration options for participant videos
       */
      export interface Video {
        /**
         * Frame rate of participants' video
         */
        frame_rate?: number;

        /**
         * Video quality of participants
         */
        quality?: 'hd' | 'vga' | 'qvga' | 'fhd' | 'uhd';

        /**
         * Enable simulcast for participant videos.
         */
        simulcast?: boolean;
      }
    }
  }

  export interface Permissions {
    accept_stage_requests?: boolean;

    /**
     * Whether this participant can accept waiting requests
     */
    accept_waiting_requests?: boolean;

    can_accept_production_requests?: boolean;

    can_change_participant_permissions?: boolean;

    can_edit_display_name?: boolean;

    can_livestream?: boolean;

    can_record?: boolean;

    can_spotlight?: boolean;

    chat?: Permissions.Chat;

    connected_meetings?: Permissions.ConnectedMeetings;

    disable_participant_audio?: boolean;

    disable_participant_screensharing?: boolean;

    disable_participant_video?: boolean;

    /**
     * Whether this participant is visible to others or not
     */
    hidden_participant?: boolean;

    is_recorder?: boolean;

    kick_participant?: boolean;

    /**
     * Media permissions
     */
    media?: Permissions.Media;

    pin_participant?: boolean;

    /**
     * Plugin permissions
     */
    plugins?: Permissions.Plugins;

    /**
     * Poll permissions
     */
    polls?: Permissions.Polls;

    /**
     * Type of the recording peer
     */
    recorder_type?: 'RECORDER' | 'LIVESTREAMER' | 'NONE';

    show_participant_list?: boolean;

    stage_access?: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';

    stage_enabled?: boolean;

    transcription_enabled?: boolean;

    /**
     * Waiting room type
     */
    waiting_room_type?: 'SKIP' | 'ON_PRIVILEGED_USER_ENTRY' | 'SKIP_ON_ACCEPT';
  }

  export namespace Permissions {
    export interface Chat {
      private?: Chat.Private;

      public?: Chat.Public;
    }

    export namespace Chat {
      export interface Private {
        can_receive?: boolean;

        can_send?: boolean;

        files?: boolean;

        text?: boolean;
      }

      export interface Public {
        /**
         * Can send messages in general
         */
        can_send?: boolean;

        /**
         * Can send file messages
         */
        files?: boolean;

        /**
         * Can send text messages
         */
        text?: boolean;
      }
    }

    export interface ConnectedMeetings {
      can_alter_connected_meetings?: boolean;

      can_switch_connected_meetings?: boolean;

      can_switch_to_parent_meeting?: boolean;
    }

    /**
     * Media permissions
     */
    export interface Media {
      /**
       * Audio permissions
       */
      audio?: Media.Audio;

      /**
       * Screenshare permissions
       */
      screenshare?: Media.Screenshare;

      /**
       * Video permissions
       */
      video?: Media.Video;
    }

    export namespace Media {
      /**
       * Audio permissions
       */
      export interface Audio {
        /**
         * Can produce audio
         */
        can_produce?: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
      }

      /**
       * Screenshare permissions
       */
      export interface Screenshare {
        /**
         * Can produce screen share video
         */
        can_produce?: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
      }

      /**
       * Video permissions
       */
      export interface Video {
        /**
         * Can produce video
         */
        can_produce?: 'ALLOWED' | 'NOT_ALLOWED' | 'CAN_REQUEST';
      }
    }

    /**
     * Plugin permissions
     */
    export interface Plugins {
      /**
       * Can close plugins that are already open
       */
      can_close?: boolean;

      /**
       * Can edit plugin config
       */
      can_edit_config?: boolean;

      /**
       * Can start plugins
       */
      can_start?: boolean;

      /**
       * Plugin configuration keyed by plugin UUID.
       */
      config?: { [key: string]: Plugins.Config };
    }

    export namespace Plugins {
      export interface Config {
        access_control?: 'FULL_ACCESS' | 'VIEW_ONLY';

        handles_view_only?: boolean;

        [k: string]: unknown;
      }
    }

    /**
     * Poll permissions
     */
    export interface Polls {
      /**
       * Can create polls
       */
      can_create?: boolean;

      /**
       * Can view polls
       */
      can_view?: boolean;

      /**
       * Can vote on polls
       */
      can_vote?: boolean;
    }
  }

  export interface UI {
    design_tokens?: UI.DesignTokens;
  }

  export namespace UI {
    export interface DesignTokens {
      border_radius?: 'sharp' | 'rounded' | 'extra-rounded' | 'circular';

      border_width?: 'none' | 'thin' | 'fat';

      colors?: DesignTokens.Colors;

      font_family?: string;

      google_font?: string;

      logo?: string;

      spacing_base?: number;

      theme?: 'darkest' | 'dark' | 'light';
    }

    export namespace DesignTokens {
      export interface Colors {
        background?: Colors.Background;

        brand?: Colors.Brand;

        danger?: string;

        success?: string;

        text?: string;

        text_on_brand?: string;

        video_bg?: string;

        warning?: string;
      }

      export namespace Colors {
        export interface Background {
          '1000'?: string;

          '600'?: string;

          '700'?: string;

          '800'?: string;

          '900'?: string;
        }

        export interface Brand {
          '300'?: string;

          '400'?: string;

          '500'?: string;

          '600'?: string;

          '700'?: string;
        }
      }
    }
  }
}

export interface PresetDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface PresetGetParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: The page number from which you want your page search results to be
   * displayed.
   */
  page_no?: number;

  /**
   * Query param: Number of results per page
   */
  per_page?: number;

  /**
   * Query param: Search presets by name.
   */
  search?: string;
}

export interface PresetGetPresetByIDParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export declare namespace Presets {
  export {
    type PresetCreateResponse as PresetCreateResponse,
    type PresetUpdateResponse as PresetUpdateResponse,
    type PresetDeleteResponse as PresetDeleteResponse,
    type PresetGetResponse as PresetGetResponse,
    type PresetGetPresetByIDResponse as PresetGetPresetByIDResponse,
    type PresetCreateParams as PresetCreateParams,
    type PresetUpdateParams as PresetUpdateParams,
    type PresetDeleteParams as PresetDeleteParams,
    type PresetGetParams as PresetGetParams,
    type PresetGetPresetByIDParams as PresetGetPresetByIDParams,
  };
}
