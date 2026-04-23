// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Meetings extends APIResource {
  /**
   * Create a meeting for the given App ID.
   *
   * @example
   * ```ts
   * const meeting = await client.realtimeKit.meetings.create(
   *   'app_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  create(
    appId: string,
    params: MeetingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/realtime/kit/${appId}/meetings`, { body, ...options });
  }

  /**
   * Adds a participant to the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.meetings.addParticipant(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       custom_participant_id: 'custom_participant_id',
   *       preset_name: 'preset_name',
   *     },
   *   );
   * ```
   */
  addParticipant(
    appId: string,
    meetingId: string,
    params: MeetingAddParticipantParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingAddParticipantResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/participants`,
      { body, ...options },
    );
  }

  /**
   * Deletes a participant for the given meeting and participant ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.meetings.deleteMeetingParticipant(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     'participant_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  deleteMeetingParticipant(
    appId: string,
    meetingId: string,
    participantId: string,
    params: MeetingDeleteMeetingParticipantParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingDeleteMeetingParticipantResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/participants/${participantId}`,
      options,
    );
  }

  /**
   * Updates a participant's details for the given meeting and participant ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.meetings.editParticipant(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     'participant_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  editParticipant(
    appId: string,
    meetingId: string,
    participantId: string,
    params: MeetingEditParticipantParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingEditParticipantResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/participants/${participantId}`,
      { body, ...options },
    );
  }

  /**
   * Returns all meetings for the given App ID.
   *
   * @example
   * ```ts
   * const meeting = await client.realtimeKit.meetings.get(
   *   'app_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    appId: string,
    params: MeetingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/meetings`, { query, ...options });
  }

  /**
   * Returns a meeting details in an App for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.meetings.getMeetingById(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getMeetingById(
    appId: string,
    meetingId: string,
    params: MeetingGetMeetingByIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingGetMeetingByIDResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}`, {
      query,
      ...options,
    });
  }

  /**
   * Returns a participant details for the given meeting and participant ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.meetings.getMeetingParticipant(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     'participant_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getMeetingParticipant(
    appId: string,
    meetingId: string,
    participantId: string,
    params: MeetingGetMeetingParticipantParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingGetMeetingParticipantResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/participants/${participantId}`,
      options,
    );
  }

  /**
   * Returns all participants detail for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.meetings.getMeetingParticipants(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getMeetingParticipants(
    appId: string,
    meetingId: string,
    params: MeetingGetMeetingParticipantsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingGetMeetingParticipantsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/participants`,
      { query, ...options },
    );
  }

  /**
   * Regenerates participant's authentication token for the given meeting and
   * participant ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.meetings.refreshParticipantToken(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     'participant_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  refreshParticipantToken(
    appId: string,
    meetingId: string,
    participantId: string,
    params: MeetingRefreshParticipantTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingRefreshParticipantTokenResponse> {
    const { account_id } = params;
    return this._client.post(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/participants/${participantId}/token`,
      options,
    );
  }

  /**
   * Replaces all the details for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.meetings.replaceMeetingById(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  replaceMeetingById(
    appId: string,
    meetingId: string,
    params: MeetingReplaceMeetingByIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingReplaceMeetingByIDResponse> {
    const { account_id, ...body } = params;
    return this._client.put(`/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}`, {
      body,
      ...options,
    });
  }

  /**
   * Updates a meeting in an App for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.meetings.updateMeetingById(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  updateMeetingById(
    appId: string,
    meetingId: string,
    params: MeetingUpdateMeetingByIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MeetingUpdateMeetingByIDResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}`, {
      body,
      ...options,
    });
  }
}

export interface MeetingCreateResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Data returned by the operation
   */
  data?: MeetingCreateResponse.Data;
}

export namespace MeetingCreateResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the meeting.
     */
    id: string;

    /**
     * Timestamp the object was created at. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * Timestamp the object was updated at. The time is returned in ISO format.
     */
    updated_at: string;

    /**
     * The AI Config allows you to customize the behavior of meeting transcriptions and
     * summaries
     */
    ai_config?: Data.AIConfig;

    /**
     * Specifies if the meeting should start getting livestreamed on start.
     */
    live_stream_on_start?: boolean;

    /**
     * Specifies if Chat within a meeting should persist for a week.
     */
    persist_chat?: boolean;

    /**
     * Specifies if the meeting should start getting recorded as soon as someone joins
     * the meeting.
     */
    record_on_start?: boolean;

    /**
     * Recording Configurations to be used for this meeting. This level of configs
     * takes higher preference over App level configs on the RealtimeKit developer
     * portal.
     */
    recording_config?: Data.RecordingConfig;

    /**
     * Time in seconds, for which a session remains active, after the last participant
     * has left the meeting.
     */
    session_keep_alive_time_in_secs?: number;

    /**
     * Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an
     * `INACTIVE` meeting.
     */
    status?: 'ACTIVE' | 'INACTIVE';

    /**
     * Automatically generate summary of meetings using transcripts. Requires
     * Transcriptions to be enabled, and can be retrieved via Webhooks or summary API.
     */
    summarize_on_end?: boolean;

    /**
     * Title of the meeting.
     */
    title?: string;
  }

  export namespace Data {
    /**
     * The AI Config allows you to customize the behavior of meeting transcriptions and
     * summaries
     */
    export interface AIConfig {
      /**
       * Summary Config
       */
      summarization?: AIConfig.Summarization;

      /**
       * Transcription Configurations
       */
      transcription?: AIConfig.Transcription;
    }

    export namespace AIConfig {
      /**
       * Summary Config
       */
      export interface Summarization {
        /**
         * Defines the style of the summary, such as general, team meeting, or sales call.
         */
        summary_type?:
          | 'general'
          | 'team_meeting'
          | 'sales_call'
          | 'client_check_in'
          | 'interview'
          | 'daily_standup'
          | 'one_on_one_meeting'
          | 'lecture'
          | 'code_review';

        /**
         * Determines the text format of the summary, such as plain text or markdown.
         */
        text_format?: 'plain_text' | 'markdown';

        /**
         * Sets the maximum number of words in the meeting summary.
         */
        word_limit?: number;
      }

      /**
       * Transcription Configurations
       */
      export interface Transcription {
        /**
         * Adds specific terms to improve accurate detection during transcription.
         */
        keywords?: Array<string>;

        /**
         * Specifies the language code for transcription to ensure accurate results.
         */
        language?: 'en-US' | 'en-IN' | 'de' | 'hi' | 'sv' | 'ru' | 'pl' | 'el' | 'fr' | 'nl';

        /**
         * Control the inclusion of offensive language in transcriptions.
         */
        profanity_filter?: boolean;
      }
    }

    /**
     * Recording Configurations to be used for this meeting. This level of configs
     * takes higher preference over App level configs on the RealtimeKit developer
     * portal.
     */
    export interface RecordingConfig {
      /**
       * Object containing configuration regarding the audio that is being recorded.
       */
      audio_config?: RecordingConfig.AudioConfig;

      /**
       * Adds a prefix to the beginning of the file name of the recording.
       */
      file_name_prefix?: string;

      live_streaming_config?: RecordingConfig.LiveStreamingConfig;

      /**
       * Specifies the maximum duration for recording in seconds, ranging from a minimum
       * of 60 seconds to a maximum of 24 hours.
       */
      max_seconds?: number;

      realtimekit_bucket_config?: RecordingConfig.RealtimekitBucketConfig;

      storage_config?: RecordingConfig.StorageConfig | null;

      video_config?: RecordingConfig.VideoConfig;
    }

    export namespace RecordingConfig {
      /**
       * Object containing configuration regarding the audio that is being recorded.
       */
      export interface AudioConfig {
        /**
         * Audio signal pathway within an audio file that carries a specific sound source.
         */
        channel?: 'mono' | 'stereo';

        /**
         * Codec using which the recording will be encoded. If VP8/VP9 is selected for
         * videoConfig, changing audioConfig is not allowed. In this case, the codec in the
         * audioConfig is automatically set to vorbis.
         */
        codec?: 'MP3' | 'AAC';

        /**
         * Controls whether to export audio file seperately
         */
        export_file?: boolean;
      }

      export interface LiveStreamingConfig {
        /**
         * RTMP URL to stream to
         */
        rtmp_url?: string;
      }

      export interface RealtimekitBucketConfig {
        /**
         * Controls whether recordings are uploaded to RealtimeKit's bucket. If set to
         * false, `download_url`, `audio_download_url`, `download_url_expiry` won't be
         * generated for a recording.
         */
        enabled: boolean;
      }

      export interface StorageConfig {
        /**
         * Type of storage media.
         */
        type: 'aws' | 'azure' | 'digitalocean' | 'gcs' | 'sftp';

        /**
         * Authentication method used for "sftp" type storage medium
         */
        auth_method?: 'KEY' | 'PASSWORD';

        /**
         * Name of the storage medium's bucket.
         */
        bucket?: string;

        /**
         * SSH destination server host for SFTP type storage medium
         */
        host?: string;

        /**
         * SSH destination server password for SFTP type storage medium when auth_method is
         * "PASSWORD". If auth_method is "KEY", this specifies the password for the ssh
         * private key.
         */
        password?: string;

        /**
         * Path relative to the bucket root at which the recording will be placed.
         */
        path?: string;

        /**
         * SSH destination server port for SFTP type storage medium
         */
        port?: number;

        /**
         * Private key used to login to destination SSH server for SFTP type storage
         * medium, when auth_method used is "KEY"
         */
        private_key?: string;

        /**
         * Region of the storage medium.
         */
        region?: string;

        /**
         * Secret key of the storage medium. Similar to `access_key`, it is only writeable
         * by clients, not readable.
         */
        secret?: string;

        /**
         * SSH destination server username for SFTP type storage medium
         */
        username?: string;
      }

      export interface VideoConfig {
        /**
         * Codec using which the recording will be encoded.
         */
        codec?: 'H264' | 'VP8';

        /**
         * Controls whether to export video file seperately
         */
        export_file?: boolean;

        /**
         * Height of the recording video in pixels
         */
        height?: number;

        /**
         * Watermark to be added to the recording
         */
        watermark?: VideoConfig.Watermark;

        /**
         * Width of the recording video in pixels
         */
        width?: number;
      }

      export namespace VideoConfig {
        /**
         * Watermark to be added to the recording
         */
        export interface Watermark {
          /**
           * Position of the watermark
           */
          position?: 'left top' | 'right top' | 'left bottom' | 'right bottom';

          /**
           * Size of the watermark
           */
          size?: Watermark.Size;

          /**
           * URL of the watermark image
           */
          url?: string;
        }

        export namespace Watermark {
          /**
           * Size of the watermark
           */
          export interface Size {
            /**
             * Height of the watermark in px
             */
            height?: number;

            /**
             * Width of the watermark in px
             */
            width?: number;
          }
        }
      }
    }
  }
}

export interface MeetingAddParticipantResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Represents a participant.
   */
  data?: MeetingAddParticipantResponse.Data;
}

export namespace MeetingAddParticipantResponse {
  /**
   * Represents a participant.
   */
  export interface Data {
    /**
     * ID of the participant.
     */
    id: string;

    /**
     * The participant's auth token that can be used for joining a meeting from the
     * client side.
     */
    token: string;

    /**
     * When this object was created. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * A unique participant ID generated by the client.
     */
    custom_participant_id: string;

    /**
     * Preset applied to the participant.
     */
    preset_name: string;

    /**
     * When this object was updated. The time is returned in ISO format.
     */
    updated_at: string;

    /**
     * Name of the participant.
     */
    name?: string | null;

    /**
     * URL to a picture of the participant.
     */
    picture?: string | null;
  }
}

export interface MeetingDeleteMeetingParticipantResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Data returned by the operation
   */
  data?: MeetingDeleteMeetingParticipantResponse.Data;
}

export namespace MeetingDeleteMeetingParticipantResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * Timestamp this object was created at. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * A unique participant ID generated by the client.
     */
    custom_participant_id: string;

    /**
     * ID of the preset applied to this participant.
     */
    preset_id: string;

    /**
     * Timestamp this object was updated at. The time is returned in ISO format.
     */
    updated_at: string;
  }
}

export interface MeetingEditParticipantResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Represents a participant.
   */
  data?: MeetingEditParticipantResponse.Data;
}

export namespace MeetingEditParticipantResponse {
  /**
   * Represents a participant.
   */
  export interface Data {
    /**
     * ID of the participant.
     */
    id: string;

    /**
     * The participant's auth token that can be used for joining a meeting from the
     * client side.
     */
    token: string;

    /**
     * When this object was created. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * A unique participant ID generated by the client.
     */
    custom_participant_id: string;

    /**
     * Preset applied to the participant.
     */
    preset_name: string;

    /**
     * When this object was updated. The time is returned in ISO format.
     */
    updated_at: string;

    /**
     * Name of the participant.
     */
    name?: string | null;

    /**
     * URL to a picture of the participant.
     */
    picture?: string | null;
  }
}

export interface MeetingGetResponse {
  data: Array<MeetingGetResponse.Data>;

  paging: MeetingGetResponse.Paging;

  success: boolean;
}

export namespace MeetingGetResponse {
  export interface Data {
    /**
     * ID of the meeting.
     */
    id: string;

    /**
     * Timestamp the object was created at. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * Timestamp the object was updated at. The time is returned in ISO format.
     */
    updated_at: string;

    /**
     * Specifies if the meeting should start getting livestreamed on start.
     */
    live_stream_on_start?: boolean;

    /**
     * Specifies if Chat within a meeting should persist for a week.
     */
    persist_chat?: boolean;

    /**
     * Specifies if the meeting should start getting recorded as soon as someone joins
     * the meeting.
     */
    record_on_start?: boolean;

    /**
     * Time in seconds, for which a session remains active, after the last participant
     * has left the meeting.
     */
    session_keep_alive_time_in_secs?: number;

    /**
     * Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an
     * `INACTIVE` meeting.
     */
    status?: 'ACTIVE' | 'INACTIVE';

    /**
     * Automatically generate summary of meetings using transcripts. Requires
     * Transcriptions to be enabled, and can be retrieved via Webhooks or summary API.
     */
    summarize_on_end?: boolean;

    /**
     * Title of the meeting.
     */
    title?: string;
  }

  export interface Paging {
    end_offset: number;

    start_offset: number;

    total_count: number;
  }
}

export interface MeetingGetMeetingByIDResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Data returned by the operation
   */
  data?: MeetingGetMeetingByIDResponse.Data;
}

export namespace MeetingGetMeetingByIDResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the meeting.
     */
    id: string;

    /**
     * Timestamp the object was created at. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * Timestamp the object was updated at. The time is returned in ISO format.
     */
    updated_at: string;

    /**
     * The AI Config allows you to customize the behavior of meeting transcriptions and
     * summaries
     */
    ai_config?: Data.AIConfig;

    /**
     * Specifies if the meeting should start getting livestreamed on start.
     */
    live_stream_on_start?: boolean;

    /**
     * Specifies if Chat within a meeting should persist for a week.
     */
    persist_chat?: boolean;

    /**
     * Specifies if the meeting should start getting recorded as soon as someone joins
     * the meeting.
     */
    record_on_start?: boolean;

    /**
     * Recording Configurations to be used for this meeting. This level of configs
     * takes higher preference over App level configs on the RealtimeKit developer
     * portal.
     */
    recording_config?: Data.RecordingConfig;

    /**
     * Time in seconds, for which a session remains active, after the last participant
     * has left the meeting.
     */
    session_keep_alive_time_in_secs?: number;

    /**
     * Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an
     * `INACTIVE` meeting.
     */
    status?: 'ACTIVE' | 'INACTIVE';

    /**
     * Automatically generate summary of meetings using transcripts. Requires
     * Transcriptions to be enabled, and can be retrieved via Webhooks or summary API.
     */
    summarize_on_end?: boolean;

    /**
     * Title of the meeting.
     */
    title?: string;
  }

  export namespace Data {
    /**
     * The AI Config allows you to customize the behavior of meeting transcriptions and
     * summaries
     */
    export interface AIConfig {
      /**
       * Summary Config
       */
      summarization?: AIConfig.Summarization;

      /**
       * Transcription Configurations
       */
      transcription?: AIConfig.Transcription;
    }

    export namespace AIConfig {
      /**
       * Summary Config
       */
      export interface Summarization {
        /**
         * Defines the style of the summary, such as general, team meeting, or sales call.
         */
        summary_type?:
          | 'general'
          | 'team_meeting'
          | 'sales_call'
          | 'client_check_in'
          | 'interview'
          | 'daily_standup'
          | 'one_on_one_meeting'
          | 'lecture'
          | 'code_review';

        /**
         * Determines the text format of the summary, such as plain text or markdown.
         */
        text_format?: 'plain_text' | 'markdown';

        /**
         * Sets the maximum number of words in the meeting summary.
         */
        word_limit?: number;
      }

      /**
       * Transcription Configurations
       */
      export interface Transcription {
        /**
         * Adds specific terms to improve accurate detection during transcription.
         */
        keywords?: Array<string>;

        /**
         * Specifies the language code for transcription to ensure accurate results.
         */
        language?: 'en-US' | 'en-IN' | 'de' | 'hi' | 'sv' | 'ru' | 'pl' | 'el' | 'fr' | 'nl';

        /**
         * Control the inclusion of offensive language in transcriptions.
         */
        profanity_filter?: boolean;
      }
    }

    /**
     * Recording Configurations to be used for this meeting. This level of configs
     * takes higher preference over App level configs on the RealtimeKit developer
     * portal.
     */
    export interface RecordingConfig {
      /**
       * Object containing configuration regarding the audio that is being recorded.
       */
      audio_config?: RecordingConfig.AudioConfig;

      /**
       * Adds a prefix to the beginning of the file name of the recording.
       */
      file_name_prefix?: string;

      live_streaming_config?: RecordingConfig.LiveStreamingConfig;

      /**
       * Specifies the maximum duration for recording in seconds, ranging from a minimum
       * of 60 seconds to a maximum of 24 hours.
       */
      max_seconds?: number;

      realtimekit_bucket_config?: RecordingConfig.RealtimekitBucketConfig;

      storage_config?: RecordingConfig.StorageConfig | null;

      video_config?: RecordingConfig.VideoConfig;
    }

    export namespace RecordingConfig {
      /**
       * Object containing configuration regarding the audio that is being recorded.
       */
      export interface AudioConfig {
        /**
         * Audio signal pathway within an audio file that carries a specific sound source.
         */
        channel?: 'mono' | 'stereo';

        /**
         * Codec using which the recording will be encoded. If VP8/VP9 is selected for
         * videoConfig, changing audioConfig is not allowed. In this case, the codec in the
         * audioConfig is automatically set to vorbis.
         */
        codec?: 'MP3' | 'AAC';

        /**
         * Controls whether to export audio file seperately
         */
        export_file?: boolean;
      }

      export interface LiveStreamingConfig {
        /**
         * RTMP URL to stream to
         */
        rtmp_url?: string;
      }

      export interface RealtimekitBucketConfig {
        /**
         * Controls whether recordings are uploaded to RealtimeKit's bucket. If set to
         * false, `download_url`, `audio_download_url`, `download_url_expiry` won't be
         * generated for a recording.
         */
        enabled: boolean;
      }

      export interface StorageConfig {
        /**
         * Type of storage media.
         */
        type: 'aws' | 'azure' | 'digitalocean' | 'gcs' | 'sftp';

        /**
         * Authentication method used for "sftp" type storage medium
         */
        auth_method?: 'KEY' | 'PASSWORD';

        /**
         * Name of the storage medium's bucket.
         */
        bucket?: string;

        /**
         * SSH destination server host for SFTP type storage medium
         */
        host?: string;

        /**
         * SSH destination server password for SFTP type storage medium when auth_method is
         * "PASSWORD". If auth_method is "KEY", this specifies the password for the ssh
         * private key.
         */
        password?: string;

        /**
         * Path relative to the bucket root at which the recording will be placed.
         */
        path?: string;

        /**
         * SSH destination server port for SFTP type storage medium
         */
        port?: number;

        /**
         * Private key used to login to destination SSH server for SFTP type storage
         * medium, when auth_method used is "KEY"
         */
        private_key?: string;

        /**
         * Region of the storage medium.
         */
        region?: string;

        /**
         * Secret key of the storage medium. Similar to `access_key`, it is only writeable
         * by clients, not readable.
         */
        secret?: string;

        /**
         * SSH destination server username for SFTP type storage medium
         */
        username?: string;
      }

      export interface VideoConfig {
        /**
         * Codec using which the recording will be encoded.
         */
        codec?: 'H264' | 'VP8';

        /**
         * Controls whether to export video file seperately
         */
        export_file?: boolean;

        /**
         * Height of the recording video in pixels
         */
        height?: number;

        /**
         * Watermark to be added to the recording
         */
        watermark?: VideoConfig.Watermark;

        /**
         * Width of the recording video in pixels
         */
        width?: number;
      }

      export namespace VideoConfig {
        /**
         * Watermark to be added to the recording
         */
        export interface Watermark {
          /**
           * Position of the watermark
           */
          position?: 'left top' | 'right top' | 'left bottom' | 'right bottom';

          /**
           * Size of the watermark
           */
          size?: Watermark.Size;

          /**
           * URL of the watermark image
           */
          url?: string;
        }

        export namespace Watermark {
          /**
           * Size of the watermark
           */
          export interface Size {
            /**
             * Height of the watermark in px
             */
            height?: number;

            /**
             * Width of the watermark in px
             */
            width?: number;
          }
        }
      }
    }
  }
}

export interface MeetingGetMeetingParticipantResponse {
  /**
   * Data returned by the operation
   */
  data: MeetingGetMeetingParticipantResponse.Data;

  /**
   * Success status of the operation
   */
  success: boolean;
}

export namespace MeetingGetMeetingParticipantResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the participant.
     */
    id: string;

    /**
     * When this object was created. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * A unique participant ID generated by the client.
     */
    custom_participant_id: string;

    /**
     * Preset applied to the participant.
     */
    preset_name: string;

    /**
     * When this object was updated. The time is returned in ISO format.
     */
    updated_at: string;

    /**
     * Name of the participant.
     */
    name?: string | null;

    /**
     * URL to a picture of the participant.
     */
    picture?: string | null;
  }
}

export interface MeetingGetMeetingParticipantsResponse {
  data: Array<MeetingGetMeetingParticipantsResponse.Data>;

  paging: MeetingGetMeetingParticipantsResponse.Paging;

  success: boolean;
}

export namespace MeetingGetMeetingParticipantsResponse {
  /**
   * Represents a participant.
   */
  export interface Data {
    /**
     * ID of the participant.
     */
    id: string;

    /**
     * When this object was created. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * A unique participant ID generated by the client.
     */
    custom_participant_id: string;

    /**
     * Preset applied to the participant.
     */
    preset_name: string;

    /**
     * When this object was updated. The time is returned in ISO format.
     */
    updated_at: string;

    /**
     * Name of the participant.
     */
    name?: string | null;

    /**
     * URL to a picture of the participant.
     */
    picture?: string | null;
  }

  export interface Paging {
    end_offset: number;

    start_offset: number;

    total_count: number;
  }
}

export interface MeetingRefreshParticipantTokenResponse {
  /**
   * Data returned by the operation
   */
  data: MeetingRefreshParticipantTokenResponse.Data;

  /**
   * Success status of the operation
   */
  success: boolean;
}

export namespace MeetingRefreshParticipantTokenResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * Regenerated participant's authentication token.
     */
    token: string;
  }
}

export interface MeetingReplaceMeetingByIDResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Data returned by the operation
   */
  data?: MeetingReplaceMeetingByIDResponse.Data;
}

export namespace MeetingReplaceMeetingByIDResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the meeting.
     */
    id: string;

    /**
     * Timestamp the object was created at. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * Timestamp the object was updated at. The time is returned in ISO format.
     */
    updated_at: string;

    /**
     * The AI Config allows you to customize the behavior of meeting transcriptions and
     * summaries
     */
    ai_config?: Data.AIConfig;

    /**
     * Specifies if the meeting should start getting livestreamed on start.
     */
    live_stream_on_start?: boolean;

    /**
     * Specifies if Chat within a meeting should persist for a week.
     */
    persist_chat?: boolean;

    /**
     * Specifies if the meeting should start getting recorded as soon as someone joins
     * the meeting.
     */
    record_on_start?: boolean;

    /**
     * Recording Configurations to be used for this meeting. This level of configs
     * takes higher preference over App level configs on the RealtimeKit developer
     * portal.
     */
    recording_config?: Data.RecordingConfig;

    /**
     * Time in seconds, for which a session remains active, after the last participant
     * has left the meeting.
     */
    session_keep_alive_time_in_secs?: number;

    /**
     * Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an
     * `INACTIVE` meeting.
     */
    status?: 'ACTIVE' | 'INACTIVE';

    /**
     * Automatically generate summary of meetings using transcripts. Requires
     * Transcriptions to be enabled, and can be retrieved via Webhooks or summary API.
     */
    summarize_on_end?: boolean;

    /**
     * Title of the meeting.
     */
    title?: string;
  }

  export namespace Data {
    /**
     * The AI Config allows you to customize the behavior of meeting transcriptions and
     * summaries
     */
    export interface AIConfig {
      /**
       * Summary Config
       */
      summarization?: AIConfig.Summarization;

      /**
       * Transcription Configurations
       */
      transcription?: AIConfig.Transcription;
    }

    export namespace AIConfig {
      /**
       * Summary Config
       */
      export interface Summarization {
        /**
         * Defines the style of the summary, such as general, team meeting, or sales call.
         */
        summary_type?:
          | 'general'
          | 'team_meeting'
          | 'sales_call'
          | 'client_check_in'
          | 'interview'
          | 'daily_standup'
          | 'one_on_one_meeting'
          | 'lecture'
          | 'code_review';

        /**
         * Determines the text format of the summary, such as plain text or markdown.
         */
        text_format?: 'plain_text' | 'markdown';

        /**
         * Sets the maximum number of words in the meeting summary.
         */
        word_limit?: number;
      }

      /**
       * Transcription Configurations
       */
      export interface Transcription {
        /**
         * Adds specific terms to improve accurate detection during transcription.
         */
        keywords?: Array<string>;

        /**
         * Specifies the language code for transcription to ensure accurate results.
         */
        language?: 'en-US' | 'en-IN' | 'de' | 'hi' | 'sv' | 'ru' | 'pl' | 'el' | 'fr' | 'nl';

        /**
         * Control the inclusion of offensive language in transcriptions.
         */
        profanity_filter?: boolean;
      }
    }

    /**
     * Recording Configurations to be used for this meeting. This level of configs
     * takes higher preference over App level configs on the RealtimeKit developer
     * portal.
     */
    export interface RecordingConfig {
      /**
       * Object containing configuration regarding the audio that is being recorded.
       */
      audio_config?: RecordingConfig.AudioConfig;

      /**
       * Adds a prefix to the beginning of the file name of the recording.
       */
      file_name_prefix?: string;

      live_streaming_config?: RecordingConfig.LiveStreamingConfig;

      /**
       * Specifies the maximum duration for recording in seconds, ranging from a minimum
       * of 60 seconds to a maximum of 24 hours.
       */
      max_seconds?: number;

      realtimekit_bucket_config?: RecordingConfig.RealtimekitBucketConfig;

      storage_config?: RecordingConfig.StorageConfig | null;

      video_config?: RecordingConfig.VideoConfig;
    }

    export namespace RecordingConfig {
      /**
       * Object containing configuration regarding the audio that is being recorded.
       */
      export interface AudioConfig {
        /**
         * Audio signal pathway within an audio file that carries a specific sound source.
         */
        channel?: 'mono' | 'stereo';

        /**
         * Codec using which the recording will be encoded. If VP8/VP9 is selected for
         * videoConfig, changing audioConfig is not allowed. In this case, the codec in the
         * audioConfig is automatically set to vorbis.
         */
        codec?: 'MP3' | 'AAC';

        /**
         * Controls whether to export audio file seperately
         */
        export_file?: boolean;
      }

      export interface LiveStreamingConfig {
        /**
         * RTMP URL to stream to
         */
        rtmp_url?: string;
      }

      export interface RealtimekitBucketConfig {
        /**
         * Controls whether recordings are uploaded to RealtimeKit's bucket. If set to
         * false, `download_url`, `audio_download_url`, `download_url_expiry` won't be
         * generated for a recording.
         */
        enabled: boolean;
      }

      export interface StorageConfig {
        /**
         * Type of storage media.
         */
        type: 'aws' | 'azure' | 'digitalocean' | 'gcs' | 'sftp';

        /**
         * Authentication method used for "sftp" type storage medium
         */
        auth_method?: 'KEY' | 'PASSWORD';

        /**
         * Name of the storage medium's bucket.
         */
        bucket?: string;

        /**
         * SSH destination server host for SFTP type storage medium
         */
        host?: string;

        /**
         * SSH destination server password for SFTP type storage medium when auth_method is
         * "PASSWORD". If auth_method is "KEY", this specifies the password for the ssh
         * private key.
         */
        password?: string;

        /**
         * Path relative to the bucket root at which the recording will be placed.
         */
        path?: string;

        /**
         * SSH destination server port for SFTP type storage medium
         */
        port?: number;

        /**
         * Private key used to login to destination SSH server for SFTP type storage
         * medium, when auth_method used is "KEY"
         */
        private_key?: string;

        /**
         * Region of the storage medium.
         */
        region?: string;

        /**
         * Secret key of the storage medium. Similar to `access_key`, it is only writeable
         * by clients, not readable.
         */
        secret?: string;

        /**
         * SSH destination server username for SFTP type storage medium
         */
        username?: string;
      }

      export interface VideoConfig {
        /**
         * Codec using which the recording will be encoded.
         */
        codec?: 'H264' | 'VP8';

        /**
         * Controls whether to export video file seperately
         */
        export_file?: boolean;

        /**
         * Height of the recording video in pixels
         */
        height?: number;

        /**
         * Watermark to be added to the recording
         */
        watermark?: VideoConfig.Watermark;

        /**
         * Width of the recording video in pixels
         */
        width?: number;
      }

      export namespace VideoConfig {
        /**
         * Watermark to be added to the recording
         */
        export interface Watermark {
          /**
           * Position of the watermark
           */
          position?: 'left top' | 'right top' | 'left bottom' | 'right bottom';

          /**
           * Size of the watermark
           */
          size?: Watermark.Size;

          /**
           * URL of the watermark image
           */
          url?: string;
        }

        export namespace Watermark {
          /**
           * Size of the watermark
           */
          export interface Size {
            /**
             * Height of the watermark in px
             */
            height?: number;

            /**
             * Width of the watermark in px
             */
            width?: number;
          }
        }
      }
    }
  }
}

export interface MeetingUpdateMeetingByIDResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Data returned by the operation
   */
  data?: MeetingUpdateMeetingByIDResponse.Data;
}

export namespace MeetingUpdateMeetingByIDResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the meeting.
     */
    id: string;

    /**
     * Timestamp the object was created at. The time is returned in ISO format.
     */
    created_at: string;

    /**
     * Timestamp the object was updated at. The time is returned in ISO format.
     */
    updated_at: string;

    /**
     * The AI Config allows you to customize the behavior of meeting transcriptions and
     * summaries
     */
    ai_config?: Data.AIConfig;

    /**
     * Specifies if the meeting should start getting livestreamed on start.
     */
    live_stream_on_start?: boolean;

    /**
     * Specifies if Chat within a meeting should persist for a week.
     */
    persist_chat?: boolean;

    /**
     * Specifies if the meeting should start getting recorded as soon as someone joins
     * the meeting.
     */
    record_on_start?: boolean;

    /**
     * Recording Configurations to be used for this meeting. This level of configs
     * takes higher preference over App level configs on the RealtimeKit developer
     * portal.
     */
    recording_config?: Data.RecordingConfig;

    /**
     * Time in seconds, for which a session remains active, after the last participant
     * has left the meeting.
     */
    session_keep_alive_time_in_secs?: number;

    /**
     * Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an
     * `INACTIVE` meeting.
     */
    status?: 'ACTIVE' | 'INACTIVE';

    /**
     * Automatically generate summary of meetings using transcripts. Requires
     * Transcriptions to be enabled, and can be retrieved via Webhooks or summary API.
     */
    summarize_on_end?: boolean;

    /**
     * Title of the meeting.
     */
    title?: string;
  }

  export namespace Data {
    /**
     * The AI Config allows you to customize the behavior of meeting transcriptions and
     * summaries
     */
    export interface AIConfig {
      /**
       * Summary Config
       */
      summarization?: AIConfig.Summarization;

      /**
       * Transcription Configurations
       */
      transcription?: AIConfig.Transcription;
    }

    export namespace AIConfig {
      /**
       * Summary Config
       */
      export interface Summarization {
        /**
         * Defines the style of the summary, such as general, team meeting, or sales call.
         */
        summary_type?:
          | 'general'
          | 'team_meeting'
          | 'sales_call'
          | 'client_check_in'
          | 'interview'
          | 'daily_standup'
          | 'one_on_one_meeting'
          | 'lecture'
          | 'code_review';

        /**
         * Determines the text format of the summary, such as plain text or markdown.
         */
        text_format?: 'plain_text' | 'markdown';

        /**
         * Sets the maximum number of words in the meeting summary.
         */
        word_limit?: number;
      }

      /**
       * Transcription Configurations
       */
      export interface Transcription {
        /**
         * Adds specific terms to improve accurate detection during transcription.
         */
        keywords?: Array<string>;

        /**
         * Specifies the language code for transcription to ensure accurate results.
         */
        language?: 'en-US' | 'en-IN' | 'de' | 'hi' | 'sv' | 'ru' | 'pl' | 'el' | 'fr' | 'nl';

        /**
         * Control the inclusion of offensive language in transcriptions.
         */
        profanity_filter?: boolean;
      }
    }

    /**
     * Recording Configurations to be used for this meeting. This level of configs
     * takes higher preference over App level configs on the RealtimeKit developer
     * portal.
     */
    export interface RecordingConfig {
      /**
       * Object containing configuration regarding the audio that is being recorded.
       */
      audio_config?: RecordingConfig.AudioConfig;

      /**
       * Adds a prefix to the beginning of the file name of the recording.
       */
      file_name_prefix?: string;

      live_streaming_config?: RecordingConfig.LiveStreamingConfig;

      /**
       * Specifies the maximum duration for recording in seconds, ranging from a minimum
       * of 60 seconds to a maximum of 24 hours.
       */
      max_seconds?: number;

      realtimekit_bucket_config?: RecordingConfig.RealtimekitBucketConfig;

      storage_config?: RecordingConfig.StorageConfig | null;

      video_config?: RecordingConfig.VideoConfig;
    }

    export namespace RecordingConfig {
      /**
       * Object containing configuration regarding the audio that is being recorded.
       */
      export interface AudioConfig {
        /**
         * Audio signal pathway within an audio file that carries a specific sound source.
         */
        channel?: 'mono' | 'stereo';

        /**
         * Codec using which the recording will be encoded. If VP8/VP9 is selected for
         * videoConfig, changing audioConfig is not allowed. In this case, the codec in the
         * audioConfig is automatically set to vorbis.
         */
        codec?: 'MP3' | 'AAC';

        /**
         * Controls whether to export audio file seperately
         */
        export_file?: boolean;
      }

      export interface LiveStreamingConfig {
        /**
         * RTMP URL to stream to
         */
        rtmp_url?: string;
      }

      export interface RealtimekitBucketConfig {
        /**
         * Controls whether recordings are uploaded to RealtimeKit's bucket. If set to
         * false, `download_url`, `audio_download_url`, `download_url_expiry` won't be
         * generated for a recording.
         */
        enabled: boolean;
      }

      export interface StorageConfig {
        /**
         * Type of storage media.
         */
        type: 'aws' | 'azure' | 'digitalocean' | 'gcs' | 'sftp';

        /**
         * Authentication method used for "sftp" type storage medium
         */
        auth_method?: 'KEY' | 'PASSWORD';

        /**
         * Name of the storage medium's bucket.
         */
        bucket?: string;

        /**
         * SSH destination server host for SFTP type storage medium
         */
        host?: string;

        /**
         * SSH destination server password for SFTP type storage medium when auth_method is
         * "PASSWORD". If auth_method is "KEY", this specifies the password for the ssh
         * private key.
         */
        password?: string;

        /**
         * Path relative to the bucket root at which the recording will be placed.
         */
        path?: string;

        /**
         * SSH destination server port for SFTP type storage medium
         */
        port?: number;

        /**
         * Private key used to login to destination SSH server for SFTP type storage
         * medium, when auth_method used is "KEY"
         */
        private_key?: string;

        /**
         * Region of the storage medium.
         */
        region?: string;

        /**
         * Secret key of the storage medium. Similar to `access_key`, it is only writeable
         * by clients, not readable.
         */
        secret?: string;

        /**
         * SSH destination server username for SFTP type storage medium
         */
        username?: string;
      }

      export interface VideoConfig {
        /**
         * Codec using which the recording will be encoded.
         */
        codec?: 'H264' | 'VP8';

        /**
         * Controls whether to export video file seperately
         */
        export_file?: boolean;

        /**
         * Height of the recording video in pixels
         */
        height?: number;

        /**
         * Watermark to be added to the recording
         */
        watermark?: VideoConfig.Watermark;

        /**
         * Width of the recording video in pixels
         */
        width?: number;
      }

      export namespace VideoConfig {
        /**
         * Watermark to be added to the recording
         */
        export interface Watermark {
          /**
           * Position of the watermark
           */
          position?: 'left top' | 'right top' | 'left bottom' | 'right bottom';

          /**
           * Size of the watermark
           */
          size?: Watermark.Size;

          /**
           * URL of the watermark image
           */
          url?: string;
        }

        export namespace Watermark {
          /**
           * Size of the watermark
           */
          export interface Size {
            /**
             * Height of the watermark in px
             */
            height?: number;

            /**
             * Width of the watermark in px
             */
            width?: number;
          }
        }
      }
    }
  }
}

export interface MeetingCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The AI Config allows you to customize the behavior of meeting
   * transcriptions and summaries
   */
  ai_config?: MeetingCreateParams.AIConfig;

  /**
   * Body param: Specifies if the meeting should start getting livestreamed on start.
   */
  live_stream_on_start?: boolean | null;

  /**
   * Body param: If a meeting is set to persist_chat, meeting chat would remain for a
   * week within the meeting space.
   */
  persist_chat?: boolean;

  /**
   * Body param: Specifies if the meeting should start getting recorded as soon as
   * someone joins the meeting.
   */
  record_on_start?: boolean | null;

  /**
   * Body param: Recording Configurations to be used for this meeting. This level of
   * configs takes higher preference over App level configs on the RealtimeKit
   * developer portal.
   */
  recording_config?: MeetingCreateParams.RecordingConfig;

  /**
   * Body param: Time in seconds, for which a session remains active, after the last
   * participant has left the meeting.
   */
  session_keep_alive_time_in_secs?: number;

  /**
   * Body param: Automatically generate summary of meetings using transcripts.
   * Requires Transcriptions to be enabled, and can be retrieved via Webhooks or
   * summary API.
   */
  summarize_on_end?: boolean;

  /**
   * Body param: Title of the meeting
   */
  title?: string | null;
}

export namespace MeetingCreateParams {
  /**
   * The AI Config allows you to customize the behavior of meeting transcriptions and
   * summaries
   */
  export interface AIConfig {
    /**
     * Summary Config
     */
    summarization?: AIConfig.Summarization;

    /**
     * Transcription Configurations
     */
    transcription?: AIConfig.Transcription;
  }

  export namespace AIConfig {
    /**
     * Summary Config
     */
    export interface Summarization {
      /**
       * Defines the style of the summary, such as general, team meeting, or sales call.
       */
      summary_type?:
        | 'general'
        | 'team_meeting'
        | 'sales_call'
        | 'client_check_in'
        | 'interview'
        | 'daily_standup'
        | 'one_on_one_meeting'
        | 'lecture'
        | 'code_review';

      /**
       * Determines the text format of the summary, such as plain text or markdown.
       */
      text_format?: 'plain_text' | 'markdown';

      /**
       * Sets the maximum number of words in the meeting summary.
       */
      word_limit?: number;
    }

    /**
     * Transcription Configurations
     */
    export interface Transcription {
      /**
       * Adds specific terms to improve accurate detection during transcription.
       */
      keywords?: Array<string>;

      /**
       * Specifies the language code for transcription to ensure accurate results.
       */
      language?: 'en-US' | 'en-IN' | 'de' | 'hi' | 'sv' | 'ru' | 'pl' | 'el' | 'fr' | 'nl';

      /**
       * Control the inclusion of offensive language in transcriptions.
       */
      profanity_filter?: boolean;
    }
  }

  /**
   * Recording Configurations to be used for this meeting. This level of configs
   * takes higher preference over App level configs on the RealtimeKit developer
   * portal.
   */
  export interface RecordingConfig {
    /**
     * Object containing configuration regarding the audio that is being recorded.
     */
    audio_config?: RecordingConfig.AudioConfig;

    /**
     * Adds a prefix to the beginning of the file name of the recording.
     */
    file_name_prefix?: string;

    live_streaming_config?: RecordingConfig.LiveStreamingConfig;

    /**
     * Specifies the maximum duration for recording in seconds, ranging from a minimum
     * of 60 seconds to a maximum of 24 hours.
     */
    max_seconds?: number;

    realtimekit_bucket_config?: RecordingConfig.RealtimekitBucketConfig;

    storage_config?: RecordingConfig.StorageConfig | null;

    video_config?: RecordingConfig.VideoConfig;
  }

  export namespace RecordingConfig {
    /**
     * Object containing configuration regarding the audio that is being recorded.
     */
    export interface AudioConfig {
      /**
       * Audio signal pathway within an audio file that carries a specific sound source.
       */
      channel?: 'mono' | 'stereo';

      /**
       * Codec using which the recording will be encoded. If VP8/VP9 is selected for
       * videoConfig, changing audioConfig is not allowed. In this case, the codec in the
       * audioConfig is automatically set to vorbis.
       */
      codec?: 'MP3' | 'AAC';

      /**
       * Controls whether to export audio file seperately
       */
      export_file?: boolean;
    }

    export interface LiveStreamingConfig {
      /**
       * RTMP URL to stream to
       */
      rtmp_url?: string;
    }

    export interface RealtimekitBucketConfig {
      /**
       * Controls whether recordings are uploaded to RealtimeKit's bucket. If set to
       * false, `download_url`, `audio_download_url`, `download_url_expiry` won't be
       * generated for a recording.
       */
      enabled: boolean;
    }

    export interface StorageConfig {
      /**
       * Type of storage media.
       */
      type: 'aws' | 'azure' | 'digitalocean' | 'gcs' | 'sftp';

      /**
       * Access key of the storage medium. Access key is not required for the `gcs`
       * storage media type.
       *
       * Note that this field is not readable by clients, only writeable.
       */
      access_key?: string;

      /**
       * Authentication method used for "sftp" type storage medium
       */
      auth_method?: 'KEY' | 'PASSWORD';

      /**
       * Name of the storage medium's bucket.
       */
      bucket?: string;

      /**
       * SSH destination server host for SFTP type storage medium
       */
      host?: string;

      /**
       * SSH destination server password for SFTP type storage medium when auth_method is
       * "PASSWORD". If auth_method is "KEY", this specifies the password for the ssh
       * private key.
       */
      password?: string;

      /**
       * Path relative to the bucket root at which the recording will be placed.
       */
      path?: string;

      /**
       * SSH destination server port for SFTP type storage medium
       */
      port?: number;

      /**
       * Private key used to login to destination SSH server for SFTP type storage
       * medium, when auth_method used is "KEY"
       */
      private_key?: string;

      /**
       * Region of the storage medium.
       */
      region?: string;

      /**
       * Secret key of the storage medium. Similar to `access_key`, it is only writeable
       * by clients, not readable.
       */
      secret?: string;

      /**
       * SSH destination server username for SFTP type storage medium
       */
      username?: string;
    }

    export interface VideoConfig {
      /**
       * Codec using which the recording will be encoded.
       */
      codec?: 'H264' | 'VP8';

      /**
       * Controls whether to export video file seperately
       */
      export_file?: boolean;

      /**
       * Height of the recording video in pixels
       */
      height?: number;

      /**
       * Watermark to be added to the recording
       */
      watermark?: VideoConfig.Watermark;

      /**
       * Width of the recording video in pixels
       */
      width?: number;
    }

    export namespace VideoConfig {
      /**
       * Watermark to be added to the recording
       */
      export interface Watermark {
        /**
         * Position of the watermark
         */
        position?: 'left top' | 'right top' | 'left bottom' | 'right bottom';

        /**
         * Size of the watermark
         */
        size?: Watermark.Size;

        /**
         * URL of the watermark image
         */
        url?: string;
      }

      export namespace Watermark {
        /**
         * Size of the watermark
         */
        export interface Size {
          /**
           * Height of the watermark in px
           */
          height?: number;

          /**
           * Width of the watermark in px
           */
          width?: number;
        }
      }
    }
  }
}

export interface MeetingAddParticipantParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A unique participant ID. You must specify a unique ID for the
   * participant, for example, UUID, email address, and so on.
   */
  custom_participant_id: string;

  /**
   * Body param: Name of the preset to apply to this participant.
   */
  preset_name: string;

  /**
   * Body param: (Optional) Name of the participant.
   */
  name?: string | null;

  /**
   * Body param: (Optional) A URL to a picture to be used for the participant.
   */
  picture?: string | null;
}

export interface MeetingDeleteMeetingParticipantParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface MeetingEditParticipantParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: (Optional) Name of the participant.
   */
  name?: string | null;

  /**
   * Body param: (Optional) A URL to a picture to be used for the participant.
   */
  picture?: string | null;

  /**
   * Body param: (Optional) Name of the preset to apply to this participant.
   */
  preset_name?: string | null;
}

export interface MeetingGetParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: The end time range for which you want to retrieve the meetings. The
   * time must be specified in ISO format.
   */
  end_time?: string;

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
   * Query param: The search query string. You can search using the meeting ID or
   * title.
   */
  search?: string;

  /**
   * Query param: The start time range for which you want to retrieve the meetings.
   * The time must be specified in ISO format.
   */
  start_time?: string;
}

export interface MeetingGetMeetingByIDParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param
   */
  name?: string;
}

export interface MeetingGetMeetingParticipantParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface MeetingGetMeetingParticipantsParams {
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

export interface MeetingRefreshParticipantTokenParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface MeetingReplaceMeetingByIDParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The AI Config allows you to customize the behavior of meeting
   * transcriptions and summaries
   */
  ai_config?: MeetingReplaceMeetingByIDParams.AIConfig;

  /**
   * Body param: Specifies if the meeting should start getting livestreamed on start.
   */
  live_stream_on_start?: boolean | null;

  /**
   * Body param: If a meeting is set to persist_chat, meeting chat would remain for a
   * week within the meeting space.
   */
  persist_chat?: boolean;

  /**
   * Body param: Specifies if the meeting should start getting recorded as soon as
   * someone joins the meeting.
   */
  record_on_start?: boolean | null;

  /**
   * Body param: Recording Configurations to be used for this meeting. This level of
   * configs takes higher preference over App level configs on the RealtimeKit
   * developer portal.
   */
  recording_config?: MeetingReplaceMeetingByIDParams.RecordingConfig;

  /**
   * Body param: Time in seconds, for which a session remains active, after the last
   * participant has left the meeting.
   */
  session_keep_alive_time_in_secs?: number;

  /**
   * Body param: Automatically generate summary of meetings using transcripts.
   * Requires Transcriptions to be enabled, and can be retrieved via Webhooks or
   * summary API.
   */
  summarize_on_end?: boolean;

  /**
   * Body param: Title of the meeting
   */
  title?: string | null;
}

export namespace MeetingReplaceMeetingByIDParams {
  /**
   * The AI Config allows you to customize the behavior of meeting transcriptions and
   * summaries
   */
  export interface AIConfig {
    /**
     * Summary Config
     */
    summarization?: AIConfig.Summarization;

    /**
     * Transcription Configurations
     */
    transcription?: AIConfig.Transcription;
  }

  export namespace AIConfig {
    /**
     * Summary Config
     */
    export interface Summarization {
      /**
       * Defines the style of the summary, such as general, team meeting, or sales call.
       */
      summary_type?:
        | 'general'
        | 'team_meeting'
        | 'sales_call'
        | 'client_check_in'
        | 'interview'
        | 'daily_standup'
        | 'one_on_one_meeting'
        | 'lecture'
        | 'code_review';

      /**
       * Determines the text format of the summary, such as plain text or markdown.
       */
      text_format?: 'plain_text' | 'markdown';

      /**
       * Sets the maximum number of words in the meeting summary.
       */
      word_limit?: number;
    }

    /**
     * Transcription Configurations
     */
    export interface Transcription {
      /**
       * Adds specific terms to improve accurate detection during transcription.
       */
      keywords?: Array<string>;

      /**
       * Specifies the language code for transcription to ensure accurate results.
       */
      language?: 'en-US' | 'en-IN' | 'de' | 'hi' | 'sv' | 'ru' | 'pl' | 'el' | 'fr' | 'nl';

      /**
       * Control the inclusion of offensive language in transcriptions.
       */
      profanity_filter?: boolean;
    }
  }

  /**
   * Recording Configurations to be used for this meeting. This level of configs
   * takes higher preference over App level configs on the RealtimeKit developer
   * portal.
   */
  export interface RecordingConfig {
    /**
     * Object containing configuration regarding the audio that is being recorded.
     */
    audio_config?: RecordingConfig.AudioConfig;

    /**
     * Adds a prefix to the beginning of the file name of the recording.
     */
    file_name_prefix?: string;

    live_streaming_config?: RecordingConfig.LiveStreamingConfig;

    /**
     * Specifies the maximum duration for recording in seconds, ranging from a minimum
     * of 60 seconds to a maximum of 24 hours.
     */
    max_seconds?: number;

    realtimekit_bucket_config?: RecordingConfig.RealtimekitBucketConfig;

    storage_config?: RecordingConfig.StorageConfig | null;

    video_config?: RecordingConfig.VideoConfig;
  }

  export namespace RecordingConfig {
    /**
     * Object containing configuration regarding the audio that is being recorded.
     */
    export interface AudioConfig {
      /**
       * Audio signal pathway within an audio file that carries a specific sound source.
       */
      channel?: 'mono' | 'stereo';

      /**
       * Codec using which the recording will be encoded. If VP8/VP9 is selected for
       * videoConfig, changing audioConfig is not allowed. In this case, the codec in the
       * audioConfig is automatically set to vorbis.
       */
      codec?: 'MP3' | 'AAC';

      /**
       * Controls whether to export audio file seperately
       */
      export_file?: boolean;
    }

    export interface LiveStreamingConfig {
      /**
       * RTMP URL to stream to
       */
      rtmp_url?: string;
    }

    export interface RealtimekitBucketConfig {
      /**
       * Controls whether recordings are uploaded to RealtimeKit's bucket. If set to
       * false, `download_url`, `audio_download_url`, `download_url_expiry` won't be
       * generated for a recording.
       */
      enabled: boolean;
    }

    export interface StorageConfig {
      /**
       * Type of storage media.
       */
      type: 'aws' | 'azure' | 'digitalocean' | 'gcs' | 'sftp';

      /**
       * Access key of the storage medium. Access key is not required for the `gcs`
       * storage media type.
       *
       * Note that this field is not readable by clients, only writeable.
       */
      access_key?: string;

      /**
       * Authentication method used for "sftp" type storage medium
       */
      auth_method?: 'KEY' | 'PASSWORD';

      /**
       * Name of the storage medium's bucket.
       */
      bucket?: string;

      /**
       * SSH destination server host for SFTP type storage medium
       */
      host?: string;

      /**
       * SSH destination server password for SFTP type storage medium when auth_method is
       * "PASSWORD". If auth_method is "KEY", this specifies the password for the ssh
       * private key.
       */
      password?: string;

      /**
       * Path relative to the bucket root at which the recording will be placed.
       */
      path?: string;

      /**
       * SSH destination server port for SFTP type storage medium
       */
      port?: number;

      /**
       * Private key used to login to destination SSH server for SFTP type storage
       * medium, when auth_method used is "KEY"
       */
      private_key?: string;

      /**
       * Region of the storage medium.
       */
      region?: string;

      /**
       * Secret key of the storage medium. Similar to `access_key`, it is only writeable
       * by clients, not readable.
       */
      secret?: string;

      /**
       * SSH destination server username for SFTP type storage medium
       */
      username?: string;
    }

    export interface VideoConfig {
      /**
       * Codec using which the recording will be encoded.
       */
      codec?: 'H264' | 'VP8';

      /**
       * Controls whether to export video file seperately
       */
      export_file?: boolean;

      /**
       * Height of the recording video in pixels
       */
      height?: number;

      /**
       * Watermark to be added to the recording
       */
      watermark?: VideoConfig.Watermark;

      /**
       * Width of the recording video in pixels
       */
      width?: number;
    }

    export namespace VideoConfig {
      /**
       * Watermark to be added to the recording
       */
      export interface Watermark {
        /**
         * Position of the watermark
         */
        position?: 'left top' | 'right top' | 'left bottom' | 'right bottom';

        /**
         * Size of the watermark
         */
        size?: Watermark.Size;

        /**
         * URL of the watermark image
         */
        url?: string;
      }

      export namespace Watermark {
        /**
         * Size of the watermark
         */
        export interface Size {
          /**
           * Height of the watermark in px
           */
          height?: number;

          /**
           * Width of the watermark in px
           */
          width?: number;
        }
      }
    }
  }
}

export interface MeetingUpdateMeetingByIDParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The AI Config allows you to customize the behavior of meeting
   * transcriptions and summaries
   */
  ai_config?: MeetingUpdateMeetingByIDParams.AIConfig;

  /**
   * Body param: Specifies if the meeting should start getting livestreamed on start.
   */
  live_stream_on_start?: boolean;

  /**
   * Body param: If a meeting is updated to persist_chat, meeting chat would remain
   * for a week within the meeting space.
   */
  persist_chat?: boolean;

  /**
   * Body param: Specifies if the meeting should start getting recorded as soon as
   * someone joins the meeting.
   */
  record_on_start?: boolean;

  /**
   * Body param: Time in seconds, for which a session remains active, after the last
   * participant has left the meeting.
   */
  session_keep_alive_time_in_secs?: number;

  /**
   * Body param: Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be
   * able to join an `INACTIVE` meeting.
   */
  status?: 'ACTIVE' | 'INACTIVE';

  /**
   * Body param: Automatically generate summary of meetings using transcripts.
   * Requires Transcriptions to be enabled, and can be retrieved via Webhooks or
   * summary API.
   */
  summarize_on_end?: boolean;

  /**
   * Body param: Title of the meeting
   */
  title?: string;
}

export namespace MeetingUpdateMeetingByIDParams {
  /**
   * The AI Config allows you to customize the behavior of meeting transcriptions and
   * summaries
   */
  export interface AIConfig {
    /**
     * Summary Config
     */
    summarization?: AIConfig.Summarization;

    /**
     * Transcription Configurations
     */
    transcription?: AIConfig.Transcription;
  }

  export namespace AIConfig {
    /**
     * Summary Config
     */
    export interface Summarization {
      /**
       * Defines the style of the summary, such as general, team meeting, or sales call.
       */
      summary_type?:
        | 'general'
        | 'team_meeting'
        | 'sales_call'
        | 'client_check_in'
        | 'interview'
        | 'daily_standup'
        | 'one_on_one_meeting'
        | 'lecture'
        | 'code_review';

      /**
       * Determines the text format of the summary, such as plain text or markdown.
       */
      text_format?: 'plain_text' | 'markdown';

      /**
       * Sets the maximum number of words in the meeting summary.
       */
      word_limit?: number;
    }

    /**
     * Transcription Configurations
     */
    export interface Transcription {
      /**
       * Adds specific terms to improve accurate detection during transcription.
       */
      keywords?: Array<string>;

      /**
       * Specifies the language code for transcription to ensure accurate results.
       */
      language?: 'en-US' | 'en-IN' | 'de' | 'hi' | 'sv' | 'ru' | 'pl' | 'el' | 'fr' | 'nl';

      /**
       * Control the inclusion of offensive language in transcriptions.
       */
      profanity_filter?: boolean;
    }
  }
}

export declare namespace Meetings {
  export {
    type MeetingCreateResponse as MeetingCreateResponse,
    type MeetingAddParticipantResponse as MeetingAddParticipantResponse,
    type MeetingDeleteMeetingParticipantResponse as MeetingDeleteMeetingParticipantResponse,
    type MeetingEditParticipantResponse as MeetingEditParticipantResponse,
    type MeetingGetResponse as MeetingGetResponse,
    type MeetingGetMeetingByIDResponse as MeetingGetMeetingByIDResponse,
    type MeetingGetMeetingParticipantResponse as MeetingGetMeetingParticipantResponse,
    type MeetingGetMeetingParticipantsResponse as MeetingGetMeetingParticipantsResponse,
    type MeetingRefreshParticipantTokenResponse as MeetingRefreshParticipantTokenResponse,
    type MeetingReplaceMeetingByIDResponse as MeetingReplaceMeetingByIDResponse,
    type MeetingUpdateMeetingByIDResponse as MeetingUpdateMeetingByIDResponse,
    type MeetingCreateParams as MeetingCreateParams,
    type MeetingAddParticipantParams as MeetingAddParticipantParams,
    type MeetingDeleteMeetingParticipantParams as MeetingDeleteMeetingParticipantParams,
    type MeetingEditParticipantParams as MeetingEditParticipantParams,
    type MeetingGetParams as MeetingGetParams,
    type MeetingGetMeetingByIDParams as MeetingGetMeetingByIDParams,
    type MeetingGetMeetingParticipantParams as MeetingGetMeetingParticipantParams,
    type MeetingGetMeetingParticipantsParams as MeetingGetMeetingParticipantsParams,
    type MeetingRefreshParticipantTokenParams as MeetingRefreshParticipantTokenParams,
    type MeetingReplaceMeetingByIDParams as MeetingReplaceMeetingByIDParams,
    type MeetingUpdateMeetingByIDParams as MeetingUpdateMeetingByIDParams,
  };
}
