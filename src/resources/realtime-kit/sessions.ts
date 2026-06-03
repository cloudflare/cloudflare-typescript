// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Sessions extends APIResource {
  /**
   * Trigger Summary generation of Transcripts for the session ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.generateSummaryOfTranscripts(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  generateSummaryOfTranscripts(
    appId: string,
    sessionId: string,
    params: SessionGenerateSummaryOfTranscriptsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGenerateSummaryOfTranscriptsResponse> {
    const { account_id } = params;
    return this._client.post(
      `/accounts/${account_id}/realtime/kit/${appId}/sessions/${sessionId}/summary`,
      options,
    );
  }

  /**
   * Returns details of the given peer ID along with call statistics for the given
   * session ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getParticipantDataFromPeerId(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getParticipantDataFromPeerId(
    appId: string,
    peerId: string,
    params: SessionGetParticipantDataFromPeerIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetParticipantDataFromPeerIDResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/sessions/peer-report/${peerId}`, {
      query,
      ...options,
    });
  }

  /**
   * Returns a URL to download all chat messages of the session ID in CSV format.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionChat(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getSessionChat(
    appId: string,
    sessionId: string,
    params: SessionGetSessionChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetSessionChatResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/sessions/${sessionId}/chat`,
      options,
    );
  }

  /**
   * Returns data of the given session ID including recording details.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionDetails(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getSessionDetails(
    appId: string,
    sessionId: string,
    params: SessionGetSessionDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetSessionDetailsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/sessions/${sessionId}`, {
      query,
      ...options,
    });
  }

  /**
   * Returns details of the given participant ID along with call statistics for the
   * given session ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionParticipantDetails(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getSessionParticipantDetails(
    appId: string,
    sessionId: string,
    participantId: string,
    params: SessionGetSessionParticipantDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetSessionParticipantDetailsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/sessions/${sessionId}/participants/${participantId}`,
      { query, ...options },
    );
  }

  /**
   * Returns a list of participants for the given session ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionParticipants(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getSessionParticipants(
    appId: string,
    sessionId: string,
    params: SessionGetSessionParticipantsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetSessionParticipantsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/sessions/${sessionId}/participants`,
      { query, ...options },
    );
  }

  /**
   * Returns a Summary URL to download the Summary of Transcripts for the session ID
   * as plain text.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionSummary(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getSessionSummary(
    appId: string,
    sessionId: string,
    params: SessionGetSessionSummaryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetSessionSummaryResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/sessions/${sessionId}/summary`,
      options,
    );
  }

  /**
   * Returns a URL to download the transcript for the session ID in CSV format.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionTranscripts(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getSessionTranscripts(
    appId: string,
    sessionId: string,
    params: SessionGetSessionTranscriptsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetSessionTranscriptsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/sessions/${sessionId}/transcript`,
      { query, ...options },
    );
  }

  /**
   * Returns details of all sessions of an App.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessions('app_id', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  getSessions(
    appId: string,
    params: SessionGetSessionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetSessionsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/sessions`, { query, ...options });
  }
}

export interface SessionGenerateSummaryOfTranscriptsResponse {
  data?: SessionGenerateSummaryOfTranscriptsResponse.Data;

  success?: boolean;
}

export namespace SessionGenerateSummaryOfTranscriptsResponse {
  export interface Data {
    session_id?: string;

    status?: string;
  }
}

export interface SessionGetParticipantDataFromPeerIDResponse {
  data?: SessionGetParticipantDataFromPeerIDResponse.Data;

  success?: boolean;
}

export namespace SessionGetParticipantDataFromPeerIDResponse {
  export interface Data {
    /**
     * Participant ID. This maps to the corresponding peerId.
     */
    id?: string;

    /**
     * timestamp when this participant was created.
     */
    created_at?: string;

    /**
     * ID passed by client to create this participant.
     */
    custom_participant_id?: string;

    /**
     * Display name of participant when joining the session.
     */
    display_name?: string;

    /**
     * number of minutes for which the participant was in the session.
     */
    duration?: number;

    /**
     * timestamp at which participant joined the session.
     */
    joined_at?: string;

    /**
     * timestamp at which participant left the session.
     */
    left_at?: string;

    peer_events?: Array<{ [key: string]: unknown }>;

    /**
     * Peer call statistics report.
     */
    peer_report?: Data.PeerReport;

    /**
     * Name of the preset associated with the participant.
     */
    preset_name?: string;

    session_id?: string;

    /**
     * timestamp when this participant's data was last updated.
     */
    updated_at?: string;

    /**
     * User id for this participant.
     */
    user_id?: string;
  }

  export namespace Data {
    /**
     * Peer call statistics report.
     */
    export interface PeerReport {
      metadata?: { [key: string]: unknown };

      quality?: { [key: string]: unknown };

      [k: string]: unknown;
    }
  }
}

export interface SessionGetSessionChatResponse {
  data?: SessionGetSessionChatResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionChatResponse {
  export interface Data {
    /**
     * URL where the chat logs can be downloaded
     */
    chat_download_url: string;

    /**
     * Time when the download URL will expire
     */
    chat_download_url_expiry: string;
  }
}

export interface SessionGetSessionDetailsResponse {
  data?: SessionGetSessionDetailsResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionDetailsResponse {
  export interface Data {
    /**
     * ID of the session
     */
    id: string;

    /**
     * ID of the meeting this session is associated with. In the case of V2 meetings,
     * it is always a UUID. In V1 meetings, it is a room name of the form
     * `abcdef-ghijkl`
     */
    associated_id: string;

    /**
     * timestamp when session created
     */
    created_at: string;

    /**
     * number of participants currently in the session
     */
    live_participants: number;

    /**
     * number of maximum participants that were in the session
     */
    max_concurrent_participants: number;

    /**
     * Title of the meeting this session belongs to
     */
    meeting_display_name: string;

    /**
     * number of minutes consumed since the session started
     */
    minutes_consumed: number;

    /**
     * App id that hosted this session
     */
    organization_id: string;

    /**
     * timestamp when session started
     */
    started_at: string;

    /**
     * current status of session
     */
    status: 'LIVE' | 'ENDED';

    /**
     * type of session
     */
    type: 'meeting' | 'livestream' | 'participant';

    /**
     * timestamp when session was last updated
     */
    updated_at: string;

    breakout_rooms?: Array<unknown>;

    /**
     * timestamp when session ended
     */
    ended_at?: string;

    /**
     * Any meta data about session.
     */
    meta?: unknown;
  }
}

export interface SessionGetSessionParticipantDetailsResponse {
  data?: SessionGetSessionParticipantDetailsResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionParticipantDetailsResponse {
  export interface Data {
    participant?: Data.Participant;
  }

  export namespace Data {
    export interface Participant {
      /**
       * Participant ID. This maps to the corresponding peerId.
       */
      id?: string;

      /**
       * timestamp when this participant was created.
       */
      created_at?: string;

      /**
       * ID passed by client to create this participant.
       */
      custom_participant_id?: string;

      /**
       * Display name of participant when joining the session.
       */
      display_name?: string;

      /**
       * number of minutes for which the participant was in the session.
       */
      duration?: number;

      /**
       * timestamp at which participant joined the session.
       */
      joined_at?: string;

      /**
       * timestamp at which participant left the session.
       */
      left_at?: string;

      /**
       * Name of the preset associated with the participant.
       */
      preset_name?: string;

      /**
       * timestamp when this participant's data was last updated.
       */
      updated_at?: string;

      /**
       * User id for this participant.
       */
      user_id?: string;
    }
  }
}

export interface SessionGetSessionParticipantsResponse {
  data?: SessionGetSessionParticipantsResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionParticipantsResponse {
  export interface Data {
    participants?: Array<Data.Participant>;
  }

  export namespace Data {
    export interface Participant {
      /**
       * Participant ID. This maps to the corresponding peerId.
       */
      id?: string;

      /**
       * timestamp when this participant was created.
       */
      created_at?: string;

      /**
       * ID passed by client to create this participant.
       */
      custom_participant_id?: string;

      /**
       * Display name of participant when joining the session.
       */
      display_name?: string;

      /**
       * number of minutes for which the participant was in the session.
       */
      duration?: number;

      /**
       * timestamp at which participant joined the session.
       */
      joined_at?: string;

      /**
       * timestamp at which participant left the session.
       */
      left_at?: string;

      /**
       * Name of the preset associated with the participant.
       */
      preset_name?: string;

      /**
       * timestamp when this participant's data was last updated.
       */
      updated_at?: string;

      /**
       * User id for this participant.
       */
      user_id?: string;
    }
  }
}

export interface SessionGetSessionSummaryResponse {
  data?: SessionGetSessionSummaryResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionSummaryResponse {
  export interface Data {
    sessionId: string;

    /**
     * URL where the summary of transcripts can be downloaded
     */
    summaryDownloadUrl: string;

    /**
     * Time of Expiry before when you need to download the csv file.
     */
    summaryDownloadUrlExpiry: string;
  }
}

export interface SessionGetSessionTranscriptsResponse {
  data?: SessionGetSessionTranscriptsResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionTranscriptsResponse {
  export interface Data {
    sessionId: string;

    /**
     * URL where the transcript can be downloaded
     */
    transcript_download_url: string;

    /**
     * Time when the download URL will expire
     */
    transcript_download_url_expiry: string;
  }
}

export interface SessionGetSessionsResponse {
  data?: SessionGetSessionsResponse.Data;

  paging?: SessionGetSessionsResponse.Paging;

  success?: boolean;
}

export namespace SessionGetSessionsResponse {
  export interface Data {
    sessions?: Array<Data.Session>;
  }

  export namespace Data {
    export interface Session {
      /**
       * ID of the session
       */
      id: string;

      /**
       * ID of the meeting this session is associated with. In the case of V2 meetings,
       * it is always a UUID. In V1 meetings, it is a room name of the form
       * `abcdef-ghijkl`
       */
      associated_id: string;

      /**
       * timestamp when session created
       */
      created_at: string;

      /**
       * number of participants currently in the session
       */
      live_participants: number;

      /**
       * number of maximum participants that were in the session
       */
      max_concurrent_participants: number;

      /**
       * Title of the meeting this session belongs to
       */
      meeting_display_name: string;

      /**
       * number of minutes consumed since the session started
       */
      minutes_consumed: number;

      /**
       * App id that hosted this session
       */
      organization_id: string;

      /**
       * timestamp when session started
       */
      started_at: string;

      /**
       * current status of session
       */
      status: 'LIVE' | 'ENDED';

      /**
       * type of session
       */
      type: 'meeting' | 'livestream' | 'participant';

      /**
       * timestamp when session was last updated
       */
      updated_at: string;

      breakout_rooms?: Array<unknown>;

      /**
       * timestamp when session ended
       */
      ended_at?: string;

      /**
       * Any meta data about session.
       */
      meta?: unknown;
    }
  }

  export interface Paging {
    end_offset?: number;

    start_offset?: number;

    total_count?: number;
  }
}

export interface SessionGenerateSummaryOfTranscriptsParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface SessionGetParticipantDataFromPeerIDParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Comma separated list of filters to apply. Note that there must be
   * no spaces between the filters.
   */
  filters?: 'device_info' | 'ip_information' | 'precall_network_information' | 'events' | 'quality_stats';

  /**
   * Query param: if true, response includes all the peer events of participant.
   */
  include_peer_events?: boolean;
}

export interface SessionGetSessionChatParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface SessionGetSessionDetailsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: List all breakout rooms
   */
  include_breakout_rooms?: boolean;
}

export interface SessionGetSessionParticipantDetailsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Comma separated list of filters to apply. Note that there must be
   * no spaces between the filters.
   */
  filters?: 'device_info' | 'ip_information' | 'precall_network_information' | 'events' | 'quality_stats';

  /**
   * Query param: if true, response includes all the peer events of participant.
   */
  include_peer_events?: boolean;
}

export interface SessionGetSessionParticipantsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: if true, response includes all the peer events of participants.
   */
  include_peer_events?: boolean;

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
   * Query param: The search query string. You can search using participant ID,
   * custom participant ID, or display name.
   */
  search?: string;

  /**
   * Query param
   */
  sort_by?: 'joinedAt' | 'duration';

  /**
   * Query param
   */
  sort_order?: 'ASC' | 'DESC';

  /**
   * Query param: In breakout room sessions, the view parameter can be set to `raw`
   * for session specific duration for participants or `consolidated` to accumulate
   * breakout room durations.
   */
  view?: 'raw' | 'consolidated';
}

export interface SessionGetSessionSummaryParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface SessionGetSessionTranscriptsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Transcript file format to fetch.
   */
  format?: 'SRT' | 'VTT' | 'JSON' | 'CSV';
}

export interface SessionGetSessionsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: ID of the meeting that sessions should be associated with
   */
  associated_id?: string;

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
   * Query param
   */
  participants?: string;

  /**
   * Query param: Number of results per page
   */
  per_page?: number;

  /**
   * Query param: Search string that matches sessions based on meeting title, meeting
   * ID, and session ID
   */
  search?: string;

  /**
   * Query param
   */
  sort_by?: 'minutesConsumed' | 'createdAt';

  /**
   * Query param
   */
  sort_order?: 'ASC' | 'DESC';

  /**
   * Query param: The start time range for which you want to retrieve the meetings.
   * The time must be specified in ISO format.
   */
  start_time?: string;

  /**
   * Query param
   */
  status?: 'LIVE' | 'ENDED';
}

export declare namespace Sessions {
  export {
    type SessionGenerateSummaryOfTranscriptsResponse as SessionGenerateSummaryOfTranscriptsResponse,
    type SessionGetParticipantDataFromPeerIDResponse as SessionGetParticipantDataFromPeerIDResponse,
    type SessionGetSessionChatResponse as SessionGetSessionChatResponse,
    type SessionGetSessionDetailsResponse as SessionGetSessionDetailsResponse,
    type SessionGetSessionParticipantDetailsResponse as SessionGetSessionParticipantDetailsResponse,
    type SessionGetSessionParticipantsResponse as SessionGetSessionParticipantsResponse,
    type SessionGetSessionSummaryResponse as SessionGetSessionSummaryResponse,
    type SessionGetSessionTranscriptsResponse as SessionGetSessionTranscriptsResponse,
    type SessionGetSessionsResponse as SessionGetSessionsResponse,
    type SessionGenerateSummaryOfTranscriptsParams as SessionGenerateSummaryOfTranscriptsParams,
    type SessionGetParticipantDataFromPeerIDParams as SessionGetParticipantDataFromPeerIDParams,
    type SessionGetSessionChatParams as SessionGetSessionChatParams,
    type SessionGetSessionDetailsParams as SessionGetSessionDetailsParams,
    type SessionGetSessionParticipantDetailsParams as SessionGetSessionParticipantDetailsParams,
    type SessionGetSessionParticipantsParams as SessionGetSessionParticipantsParams,
    type SessionGetSessionSummaryParams as SessionGetSessionSummaryParams,
    type SessionGetSessionTranscriptsParams as SessionGetSessionTranscriptsParams,
    type SessionGetSessionsParams as SessionGetSessionsParams,
  };
}
