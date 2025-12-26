// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Recordings extends APIResource {
  /**
   * Returns the active recording details for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.recordings.getActiveRecordings(
   *     'app_id',
   *     'meeting_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getActiveRecordings(
    appId: string,
    meetingId: string,
    params: RecordingGetActiveRecordingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecordingGetActiveRecordingsResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/recordings/active-recording/${meetingId}`,
      options,
    );
  }

  /**
   * Returns details of a recording for the given recording ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.recordings.getOneRecording(
   *     'app_id',
   *     'recording_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getOneRecording(
    appId: string,
    recordingId: string,
    params: RecordingGetOneRecordingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecordingGetOneRecordingResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/recordings/${recordingId}`,
      options,
    );
  }

  /**
   * Returns all recordings for an App. If the `meeting_id` parameter is passed,
   * returns all recordings for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.recordings.getRecordings(
   *     'app_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getRecordings(
    appId: string,
    params: RecordingGetRecordingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecordingGetRecordingsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/recordings`, {
      query,
      ...options,
    });
  }

  /**
   * Pause/Resume/Stop a given recording ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.recordings.pauseResumeStopRecording(
   *     '2a95132c15732412d22c1476fa83f27a',
   *     'recording_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       action: 'stop',
   *     },
   *   );
   * ```
   */
  pauseResumeStopRecording(
    appId: string,
    recordingId: string,
    params: RecordingPauseResumeStopRecordingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecordingPauseResumeStopRecordingResponse> {
    const { account_id, ...body } = params;
    return this._client.put(`/accounts/${account_id}/realtime/kit/${appId}/recordings/${recordingId}`, {
      body,
      ...options,
    });
  }

  /**
   * Starts recording a meeting. The meeting can be started by an App admin directly,
   * or a participant with permissions to start a recording, based on the type of
   * authorization used.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.recordings.startRecordings(
   *     'app_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       audio_config: {
   *         channel: 'stereo',
   *         codec: 'AAC',
   *         export_file: true,
   *       },
   *       file_name_prefix: 'string',
   *       interactive_config: { type: 'ID3' },
   *       max_seconds: 60,
   *       meeting_id: '97440c6a-140b-40a9-9499-b23fd7a3868a',
   *       realtimekit_bucket_config: { enabled: true },
   *       video_config: {
   *         codec: 'H264',
   *         export_file: true,
   *         height: 720,
   *         watermark: {
   *           position: 'left top',
   *           size: { height: 1, width: 1 },
   *           url: 'http://example.com',
   *         },
   *         width: 1280,
   *       },
   *     },
   *   );
   * ```
   */
  startRecordings(
    appId: string,
    params: RecordingStartRecordingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecordingStartRecordingsResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/realtime/kit/${appId}/recordings`, {
      body,
      ...options,
    });
  }

  /**
   * Starts a track recording in a meeting. Track recordings consist of "layers".
   * Layers are used to map audio/video tracks in a meeting to output destinations.
   * More information about track recordings is available in the
   * [Track Recordings Guide Page](https://docs.realtime.cloudflare.com/guides/capabilities/recording/recording-overview).
   *
   * @example
   * ```ts
   * await client.realtimeKit.recordings.startTrackRecording(
   *   'app_id',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     layers: {
   *       default: {
   *         file_name_prefix: 'string',
   *         outputs: [{ type: 'REALTIMEKIT_BUCKET' }],
   *       },
   *       'default-video': {
   *         file_name_prefix: 'string',
   *         outputs: [{ type: 'REALTIMEKIT_BUCKET' }],
   *       },
   *     },
   *     meeting_id: 'string',
   *     max_seconds: 60,
   *   },
   * );
   * ```
   */
  startTrackRecording(
    appId: string,
    params: RecordingStartTrackRecordingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/realtime/kit/${appId}/recordings/track`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface RecordingGetActiveRecordingsResponse {
  /**
   * Data returned by the operation
   */
  data: RecordingGetActiveRecordingsResponse.Data;

  /**
   * Success status of the operation
   */
  success: boolean;
}

export namespace RecordingGetActiveRecordingsResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the recording
     */
    id: string;

    /**
     * If the audio_config is passed, the URL for downloading the audio recording is
     * returned.
     */
    audio_download_url: string | null;

    /**
     * URL where the recording can be downloaded.
     */
    download_url: string | null;

    /**
     * Timestamp when the download URL expires.
     */
    download_url_expiry: string | null;

    /**
     * File size of the recording, in bytes.
     */
    file_size: number | null;

    /**
     * Timestamp when this recording was invoked.
     */
    invoked_time: string;

    /**
     * File name of the recording.
     */
    output_file_name: string;

    /**
     * ID of the meeting session this recording is for.
     */
    session_id: string | null;

    /**
     * Timestamp when this recording actually started after being invoked. Usually a
     * few seconds after `invoked_time`.
     */
    started_time: string | null;

    /**
     * Current status of the recording.
     */
    status: 'INVOKED' | 'RECORDING' | 'UPLOADING' | 'UPLOADED' | 'ERRORED' | 'PAUSED';

    /**
     * Timestamp when this recording was stopped. Optional; is present only when the
     * recording has actually been stopped.
     */
    stopped_time: string | null;

    /**
     * Total recording time in seconds.
     */
    recording_duration?: number;
  }
}

export interface RecordingGetOneRecordingResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Data returned by the operation
   */
  data?: RecordingGetOneRecordingResponse.Data;
}

export namespace RecordingGetOneRecordingResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the recording
     */
    id: string;

    /**
     * If the audio_config is passed, the URL for downloading the audio recording is
     * returned.
     */
    audio_download_url: string | null;

    /**
     * URL where the recording can be downloaded.
     */
    download_url: string | null;

    /**
     * Timestamp when the download URL expires.
     */
    download_url_expiry: string | null;

    /**
     * File size of the recording, in bytes.
     */
    file_size: number | null;

    /**
     * Timestamp when this recording was invoked.
     */
    invoked_time: string;

    /**
     * File name of the recording.
     */
    output_file_name: string;

    /**
     * ID of the meeting session this recording is for.
     */
    session_id: string | null;

    /**
     * Timestamp when this recording actually started after being invoked. Usually a
     * few seconds after `invoked_time`.
     */
    started_time: string | null;

    /**
     * Current status of the recording.
     */
    status: 'INVOKED' | 'RECORDING' | 'UPLOADING' | 'UPLOADED' | 'ERRORED' | 'PAUSED';

    /**
     * Timestamp when this recording was stopped. Optional; is present only when the
     * recording has actually been stopped.
     */
    stopped_time: string | null;

    /**
     * Total recording time in seconds.
     */
    recording_duration?: number;

    start_reason?: Data.StartReason;

    stop_reason?: Data.StopReason;

    storage_config?: Data.StorageConfig | null;
  }

  export namespace Data {
    export interface StartReason {
      caller?: StartReason.Caller;

      /**
       * Specifies if the recording was started using the "Start a Recording"API or using
       * the parameter RECORD_ON_START in the "Create a meeting" API.
       *
       * If the recording is initiated using the "RECORD_ON_START" parameter, the user
       * details will not be populated.
       */
      reason?: 'API_CALL' | 'RECORD_ON_START';
    }

    export namespace StartReason {
      export interface Caller {
        /**
         * Name of the user who started the recording.
         */
        name?: string;

        /**
         * The type can be an App or a user. If the type is `user`, then only the `user_Id`
         * and `name` are returned.
         */
        type?: 'ORGANIZATION' | 'USER';

        /**
         * The user ID of the person who started the recording.
         */
        user_Id?: string;
      }
    }

    export interface StopReason {
      caller?: StopReason.Caller;

      /**
       * Specifies the reason why the recording stopped.
       */
      reason?: 'API_CALL' | 'INTERNAL_ERROR' | 'ALL_PEERS_LEFT';
    }

    export namespace StopReason {
      export interface Caller {
        /**
         * Name of the user who stopped the recording.
         */
        name?: string;

        /**
         * The type can be an App or a user. If the type is `user`, then only the `user_Id`
         * and `name` are returned.
         */
        type?: 'ORGANIZATION' | 'USER';

        /**
         * The user ID of the person who stopped the recording.
         */
        user_Id?: string;
      }
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
  }
}

export interface RecordingGetRecordingsResponse {
  data: Array<RecordingGetRecordingsResponse.Data>;

  paging: RecordingGetRecordingsResponse.Paging;

  success: boolean;
}

export namespace RecordingGetRecordingsResponse {
  export interface Data {
    /**
     * ID of the recording
     */
    id: string;

    /**
     * If the audio_config is passed, the URL for downloading the audio recording is
     * returned.
     */
    audio_download_url: string | null;

    /**
     * URL where the recording can be downloaded.
     */
    download_url: string | null;

    /**
     * Timestamp when the download URL expires.
     */
    download_url_expiry: string | null;

    /**
     * File size of the recording, in bytes.
     */
    file_size: number | null;

    /**
     * Timestamp when this recording was invoked.
     */
    invoked_time: string;

    /**
     * File name of the recording.
     */
    output_file_name: string;

    /**
     * ID of the meeting session this recording is for.
     */
    session_id: string | null;

    /**
     * Timestamp when this recording actually started after being invoked. Usually a
     * few seconds after `invoked_time`.
     */
    started_time: string | null;

    /**
     * Current status of the recording.
     */
    status: 'INVOKED' | 'RECORDING' | 'UPLOADING' | 'UPLOADED' | 'ERRORED' | 'PAUSED';

    /**
     * Timestamp when this recording was stopped. Optional; is present only when the
     * recording has actually been stopped.
     */
    stopped_time: string | null;

    meeting?: Data.Meeting;

    /**
     * Total recording time in seconds.
     */
    recording_duration?: number;

    storage_config?: Data.StorageConfig | null;
  }

  export namespace Data {
    export interface Meeting {
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
  }

  export interface Paging {
    end_offset: number;

    start_offset: number;

    total_count: number;
  }
}

export interface RecordingPauseResumeStopRecordingResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Data returned by the operation
   */
  data?: RecordingPauseResumeStopRecordingResponse.Data;
}

export namespace RecordingPauseResumeStopRecordingResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the recording
     */
    id: string;

    /**
     * If the audio_config is passed, the URL for downloading the audio recording is
     * returned.
     */
    audio_download_url: string | null;

    /**
     * URL where the recording can be downloaded.
     */
    download_url: string | null;

    /**
     * Timestamp when the download URL expires.
     */
    download_url_expiry: string | null;

    /**
     * File size of the recording, in bytes.
     */
    file_size: number | null;

    /**
     * Timestamp when this recording was invoked.
     */
    invoked_time: string;

    /**
     * File name of the recording.
     */
    output_file_name: string;

    /**
     * ID of the meeting session this recording is for.
     */
    session_id: string | null;

    /**
     * Timestamp when this recording actually started after being invoked. Usually a
     * few seconds after `invoked_time`.
     */
    started_time: string | null;

    /**
     * Current status of the recording.
     */
    status: 'INVOKED' | 'RECORDING' | 'UPLOADING' | 'UPLOADED' | 'ERRORED' | 'PAUSED';

    /**
     * Timestamp when this recording was stopped. Optional; is present only when the
     * recording has actually been stopped.
     */
    stopped_time: string | null;

    /**
     * Total recording time in seconds.
     */
    recording_duration?: number;

    start_reason?: Data.StartReason;

    stop_reason?: Data.StopReason;

    storage_config?: Data.StorageConfig | null;
  }

  export namespace Data {
    export interface StartReason {
      caller?: StartReason.Caller;

      /**
       * Specifies if the recording was started using the "Start a Recording"API or using
       * the parameter RECORD_ON_START in the "Create a meeting" API.
       *
       * If the recording is initiated using the "RECORD_ON_START" parameter, the user
       * details will not be populated.
       */
      reason?: 'API_CALL' | 'RECORD_ON_START';
    }

    export namespace StartReason {
      export interface Caller {
        /**
         * Name of the user who started the recording.
         */
        name?: string;

        /**
         * The type can be an App or a user. If the type is `user`, then only the `user_Id`
         * and `name` are returned.
         */
        type?: 'ORGANIZATION' | 'USER';

        /**
         * The user ID of the person who started the recording.
         */
        user_Id?: string;
      }
    }

    export interface StopReason {
      caller?: StopReason.Caller;

      /**
       * Specifies the reason why the recording stopped.
       */
      reason?: 'API_CALL' | 'INTERNAL_ERROR' | 'ALL_PEERS_LEFT';
    }

    export namespace StopReason {
      export interface Caller {
        /**
         * Name of the user who stopped the recording.
         */
        name?: string;

        /**
         * The type can be an App or a user. If the type is `user`, then only the `user_Id`
         * and `name` are returned.
         */
        type?: 'ORGANIZATION' | 'USER';

        /**
         * The user ID of the person who stopped the recording.
         */
        user_Id?: string;
      }
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
  }
}

export interface RecordingStartRecordingsResponse {
  /**
   * Success status of the operation
   */
  success: boolean;

  /**
   * Data returned by the operation
   */
  data?: RecordingStartRecordingsResponse.Data;
}

export namespace RecordingStartRecordingsResponse {
  /**
   * Data returned by the operation
   */
  export interface Data {
    /**
     * ID of the recording
     */
    id: string;

    /**
     * If the audio_config is passed, the URL for downloading the audio recording is
     * returned.
     */
    audio_download_url: string | null;

    /**
     * URL where the recording can be downloaded.
     */
    download_url: string | null;

    /**
     * Timestamp when the download URL expires.
     */
    download_url_expiry: string | null;

    /**
     * File size of the recording, in bytes.
     */
    file_size: number | null;

    /**
     * Timestamp when this recording was invoked.
     */
    invoked_time: string;

    /**
     * File name of the recording.
     */
    output_file_name: string;

    /**
     * ID of the meeting session this recording is for.
     */
    session_id: string | null;

    /**
     * Timestamp when this recording actually started after being invoked. Usually a
     * few seconds after `invoked_time`.
     */
    started_time: string | null;

    /**
     * Current status of the recording.
     */
    status: 'INVOKED' | 'RECORDING' | 'UPLOADING' | 'UPLOADED' | 'ERRORED' | 'PAUSED';

    /**
     * Timestamp when this recording was stopped. Optional; is present only when the
     * recording has actually been stopped.
     */
    stopped_time: string | null;

    /**
     * Total recording time in seconds.
     */
    recording_duration?: number;

    start_reason?: Data.StartReason;

    stop_reason?: Data.StopReason;

    storage_config?: Data.StorageConfig | null;
  }

  export namespace Data {
    export interface StartReason {
      caller?: StartReason.Caller;

      /**
       * Specifies if the recording was started using the "Start a Recording"API or using
       * the parameter RECORD_ON_START in the "Create a meeting" API.
       *
       * If the recording is initiated using the "RECORD_ON_START" parameter, the user
       * details will not be populated.
       */
      reason?: 'API_CALL' | 'RECORD_ON_START';
    }

    export namespace StartReason {
      export interface Caller {
        /**
         * Name of the user who started the recording.
         */
        name?: string;

        /**
         * The type can be an App or a user. If the type is `user`, then only the `user_Id`
         * and `name` are returned.
         */
        type?: 'ORGANIZATION' | 'USER';

        /**
         * The user ID of the person who started the recording.
         */
        user_Id?: string;
      }
    }

    export interface StopReason {
      caller?: StopReason.Caller;

      /**
       * Specifies the reason why the recording stopped.
       */
      reason?: 'API_CALL' | 'INTERNAL_ERROR' | 'ALL_PEERS_LEFT';
    }

    export namespace StopReason {
      export interface Caller {
        /**
         * Name of the user who stopped the recording.
         */
        name?: string;

        /**
         * The type can be an App or a user. If the type is `user`, then only the `user_Id`
         * and `name` are returned.
         */
        type?: 'ORGANIZATION' | 'USER';

        /**
         * The user ID of the person who stopped the recording.
         */
        user_Id?: string;
      }
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
  }
}

export interface RecordingGetActiveRecordingsParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface RecordingGetOneRecordingParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface RecordingGetRecordingsParams {
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
   * Query param: If passed, only shows expired/non-expired recordings on
   * RealtimeKit's bucket
   */
  expired?: boolean;

  /**
   * Query param: ID of a meeting. Optional. Will limit results to only this meeting
   * if passed.
   */
  meeting_id?: string;

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
   * Query param:
   */
  sort_by?: 'invokedTime';

  /**
   * Query param:
   */
  sort_order?: 'ASC' | 'DESC';

  /**
   * Query param: The start time range for which you want to retrieve the meetings.
   * The time must be specified in ISO format.
   */
  start_time?: string;

  /**
   * Query param: Filter by one or more recording status
   */
  status?: Array<'INVOKED' | 'RECORDING' | 'UPLOADING' | 'UPLOADED'>;
}

export interface RecordingPauseResumeStopRecordingParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  action: 'stop' | 'pause' | 'resume';
}

export interface RecordingStartRecordingsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: By default, a meeting allows only one recording to run at a time.
   * Enabling the `allow_multiple_recordings` parameter to true allows you to
   * initiate multiple recordings concurrently in the same meeting. This allows you
   * to record separate videos of the same meeting with different configurations,
   * such as portrait mode or landscape mode.
   */
  allow_multiple_recordings?: boolean;

  /**
   * Body param: Object containing configuration regarding the audio that is being
   * recorded.
   */
  audio_config?: RecordingStartRecordingsParams.AudioConfig;

  /**
   * Body param: Update the recording file name.
   */
  file_name_prefix?: string;

  /**
   * Body param: Allows you to add timed metadata to your recordings, which are
   * digital markers inserted into a video file to provide contextual information at
   * specific points in the content range. The ID3 tags containing this information
   * are available to clients on the playback timeline in HLS format. The output
   * files are generated in a compressed .tar format.
   */
  interactive_config?: RecordingStartRecordingsParams.InteractiveConfig;

  /**
   * Body param: Specifies the maximum duration for recording in seconds, ranging
   * from a minimum of 60 seconds to a maximum of 24 hours.
   */
  max_seconds?: number;

  /**
   * Body param: ID of the meeting to record.
   */
  meeting_id?: string;

  /**
   * Body param:
   */
  realtimekit_bucket_config?: RecordingStartRecordingsParams.RealtimekitBucketConfig;

  /**
   * Body param:
   */
  rtmp_out_config?: RecordingStartRecordingsParams.RtmpOutConfig;

  /**
   * Body param:
   */
  storage_config?: RecordingStartRecordingsParams.StorageConfig | null;

  /**
   * Body param: Pass a custom url to record arbitary screen
   */
  url?: string;

  /**
   * Body param:
   */
  video_config?: RecordingStartRecordingsParams.VideoConfig;
}

export namespace RecordingStartRecordingsParams {
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

  /**
   * Allows you to add timed metadata to your recordings, which are digital markers
   * inserted into a video file to provide contextual information at specific points
   * in the content range. The ID3 tags containing this information are available to
   * clients on the playback timeline in HLS format. The output files are generated
   * in a compressed .tar format.
   */
  export interface InteractiveConfig {
    /**
     * The metadata is presented in the form of ID3 tags.
     */
    type?: 'ID3';
  }

  export interface RealtimekitBucketConfig {
    /**
     * Controls whether recordings are uploaded to RealtimeKit's bucket. If set to
     * false, `download_url`, `audio_download_url`, `download_url_expiry` won't be
     * generated for a recording.
     */
    enabled: boolean;
  }

  export interface RtmpOutConfig {
    /**
     * RTMP URL to stream to
     */
    rtmp_url?: string;
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

export interface RecordingStartTrackRecordingParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  layers: { [key: string]: RecordingStartTrackRecordingParams.Layers };

  /**
   * Body param: ID of the meeting to record.
   */
  meeting_id: string;

  /**
   * Body param: Maximum seconds this recording should be active for (beta)
   */
  max_seconds?: number;
}

export namespace RecordingStartTrackRecordingParams {
  export interface Layers {
    /**
     * A file name prefix to apply for files generated from this layer
     */
    file_name_prefix?: string;

    outputs?: Array<Layers.Output>;
  }

  export namespace Layers {
    export interface Output {
      storage_config?: Output.StorageConfig | null;

      /**
       * The type of output destination this layer is being exported to.
       */
      type?: 'REALTIMEKIT_BUCKET' | 'STORAGE_CONFIG';
    }

    export namespace Output {
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
    }
  }
}

export declare namespace Recordings {
  export {
    type RecordingGetActiveRecordingsResponse as RecordingGetActiveRecordingsResponse,
    type RecordingGetOneRecordingResponse as RecordingGetOneRecordingResponse,
    type RecordingGetRecordingsResponse as RecordingGetRecordingsResponse,
    type RecordingPauseResumeStopRecordingResponse as RecordingPauseResumeStopRecordingResponse,
    type RecordingStartRecordingsResponse as RecordingStartRecordingsResponse,
    type RecordingGetActiveRecordingsParams as RecordingGetActiveRecordingsParams,
    type RecordingGetOneRecordingParams as RecordingGetOneRecordingParams,
    type RecordingGetRecordingsParams as RecordingGetRecordingsParams,
    type RecordingPauseResumeStopRecordingParams as RecordingPauseResumeStopRecordingParams,
    type RecordingStartRecordingsParams as RecordingStartRecordingsParams,
    type RecordingStartTrackRecordingParams as RecordingStartTrackRecordingParams,
  };
}
