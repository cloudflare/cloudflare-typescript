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
   *   'preset_id',
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
   *   'preset_id',
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
   *     'preset_id',
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
     * Name of the preset
     */
    name: string;

    ui: Data.UI;

    permissions?: Data.Permissions;
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
      view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM';
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
          quality: 'hd' | 'vga' | 'qvga';
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
          quality: 'hd' | 'vga' | 'qvga';
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

    export interface UI {
      design_tokens: UI.DesignTokens;

      config_diff?: unknown;
    }

    export namespace UI {
      export interface DesignTokens {
        border_radius: 'rounded';

        border_width: 'thin';

        colors: DesignTokens.Colors;

        logo: string;

        spacing_base: number;

        theme: 'dark';
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

      /**
       * Chat permissions
       */
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

      is_recorder?: boolean;
    }

    export namespace Permissions {
      /**
       * Chat permissions
       */
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

        config: string | Plugins.UnionMember1;
      }

      export namespace Plugins {
        export interface UnionMember1 {
          access_control: 'FULL_ACCESS' | 'VIEW_ONLY';

          handles_view_only: boolean;
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
     * Name of the preset
     */
    name: string;

    ui: Data.UI;

    permissions?: Data.Permissions;
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
      view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM';
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
          quality: 'hd' | 'vga' | 'qvga';
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
          quality: 'hd' | 'vga' | 'qvga';
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

    export interface UI {
      design_tokens: UI.DesignTokens;

      config_diff?: unknown;
    }

    export namespace UI {
      export interface DesignTokens {
        border_radius: 'rounded';

        border_width: 'thin';

        colors: DesignTokens.Colors;

        logo: string;

        spacing_base: number;

        theme: 'dark';
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

      /**
       * Chat permissions
       */
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

      is_recorder?: boolean;
    }

    export namespace Permissions {
      /**
       * Chat permissions
       */
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

        config: string | Plugins.UnionMember1;
      }

      export namespace Plugins {
        export interface UnionMember1 {
          access_control: 'FULL_ACCESS' | 'VIEW_ONLY';

          handles_view_only: boolean;
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
     * Name of the preset
     */
    name: string;

    ui: Data.UI;

    permissions?: Data.Permissions;
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
      view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM';
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
          quality: 'hd' | 'vga' | 'qvga';
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
          quality: 'hd' | 'vga' | 'qvga';
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

    export interface UI {
      design_tokens: UI.DesignTokens;

      config_diff?: unknown;
    }

    export namespace UI {
      export interface DesignTokens {
        border_radius: 'rounded';

        border_width: 'thin';

        colors: DesignTokens.Colors;

        logo: string;

        spacing_base: number;

        theme: 'dark';
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

      /**
       * Chat permissions
       */
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

      is_recorder?: boolean;
    }

    export namespace Permissions {
      /**
       * Chat permissions
       */
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

        config: string | Plugins.UnionMember1;
      }

      export namespace Plugins {
        export interface UnionMember1 {
          access_control: 'FULL_ACCESS' | 'VIEW_ONLY';

          handles_view_only: boolean;
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
     * Name of the preset
     */
    name: string;

    ui: Data.UI;

    permissions?: Data.Permissions;
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
      view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM';
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
          quality: 'hd' | 'vga' | 'qvga';
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
          quality: 'hd' | 'vga' | 'qvga';
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

    export interface UI {
      design_tokens: UI.DesignTokens;

      config_diff?: unknown;
    }

    export namespace UI {
      export interface DesignTokens {
        border_radius: 'rounded';

        border_width: 'thin';

        colors: DesignTokens.Colors;

        logo: string;

        spacing_base: number;

        theme: 'dark';
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

      /**
       * Chat permissions
       */
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

      is_recorder?: boolean;
    }

    export namespace Permissions {
      /**
       * Chat permissions
       */
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

        config: string | Plugins.UnionMember1;
      }

      export namespace Plugins {
        export interface UnionMember1 {
          access_control: 'FULL_ACCESS' | 'VIEW_ONLY';

          handles_view_only: boolean;
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
  ui: PresetCreateParams.UI;

  /**
   * Body param
   */
  permissions?: PresetCreateParams.Permissions;
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
    view_type: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM';
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
        quality: 'hd' | 'vga' | 'qvga';
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
        quality: 'hd' | 'vga' | 'qvga';
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

  export interface UI {
    design_tokens: UI.DesignTokens;

    config_diff?: unknown;
  }

  export namespace UI {
    export interface DesignTokens {
      border_radius: 'rounded';

      border_width: 'thin';

      colors: DesignTokens.Colors;

      logo: string;

      spacing_base: number;

      theme: 'dark';
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

    /**
     * Chat permissions
     */
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

    is_recorder?: boolean;
  }

  export namespace Permissions {
    /**
     * Chat permissions
     */
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

      config: string | Plugins.UnionMember1;
    }

    export namespace Plugins {
      export interface UnionMember1 {
        access_control: 'FULL_ACCESS' | 'VIEW_ONLY';

        handles_view_only: boolean;
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
    view_type?: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM';
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
        quality?: 'hd' | 'vga' | 'qvga';
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
        quality?: 'hd' | 'vga' | 'qvga';
      }
    }
  }

  export interface Permissions {
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

    /**
     * Chat permissions
     */
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

    /**
     * Waiting room type
     */
    waiting_room_type?: 'SKIP' | 'ON_PRIVILEGED_USER_ENTRY' | 'SKIP_ON_ACCEPT';
  }

  export namespace Permissions {
    /**
     * Chat permissions
     */
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

      config?: string | Plugins.UnionMember1;
    }

    export namespace Plugins {
      export interface UnionMember1 {
        access_control?: 'FULL_ACCESS' | 'VIEW_ONLY';

        handles_view_only?: boolean;
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
    config_diff?: unknown;

    design_tokens?: UI.DesignTokens;
  }

  export namespace UI {
    export interface DesignTokens {
      border_radius?: 'rounded';

      border_width?: 'thin';

      colors?: DesignTokens.Colors;

      logo?: string;

      spacing_base?: number;

      theme?: 'dark';
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
