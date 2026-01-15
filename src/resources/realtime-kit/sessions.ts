// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Sessions extends APIResource {
  /**
   * Trigger Summary generation of Transcripts for the session ID.
   *
   * @example
   * ```ts
   * await client.realtimeKit.sessions.generateSummaryOfTranscripts(
   *   'app_id',
   *   'session_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  generateSummaryOfTranscripts(
    appId: string,
    sessionId: string,
    params: SessionGenerateSummaryOfTranscriptsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.post(`/accounts/${account_id}/realtime/kit/${appId}/sessions/${sessionId}/summary`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
   *     'peer_id',
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
   *     'session_id',
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
   *     'session_id',
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
   *     'session_id',
   *     'participant_id',
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
   *     'session_id',
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
   *     'session_id',
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
   *     'session_id',
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
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/sessions/${sessionId}/transcript`,
      options,
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

export interface SessionGetParticipantDataFromPeerIDResponse {
  data?: SessionGetParticipantDataFromPeerIDResponse.Data;

  success?: boolean;
}

export namespace SessionGetParticipantDataFromPeerIDResponse {
  export interface Data {
    participant?: Data.Participant;
  }

  export namespace Data {
    export interface Participant {
      id?: string;

      created_at?: string;

      custom_participant_id?: string;

      display_name?: string;

      duration?: number;

      joined_at?: string;

      left_at?: string;

      peer_report?: Participant.PeerReport;

      peer_stats?: Participant.PeerStats;

      quality_stats?: Participant.QualityStats;

      role?: string;

      updated_at?: string;

      user_id?: string;
    }

    export namespace Participant {
      export interface PeerReport {
        metadata?: PeerReport.Metadata;

        quality?: PeerReport.Quality;
      }

      export namespace PeerReport {
        export interface Metadata {
          audio_devices_updates?: Array<unknown>;

          browser_metadata?: Metadata.BrowserMetadata;

          candidate_pairs?: Metadata.CandidatePairs;

          device_info?: Metadata.DeviceInfo;

          events?: Array<Metadata.Event>;

          ip_information?: Metadata.IPInformation;

          pc_metadata?: Array<Metadata.PcMetadata>;

          room_view_type?: string;

          sdk_name?: string;

          sdk_version?: string;

          selected_device_updates?: Array<unknown>;

          speaker_devices_updates?: Array<unknown>;

          video_devices_updates?: Array<unknown>;
        }

        export namespace Metadata {
          export interface BrowserMetadata {
            browser?: string;

            browser_version?: string;

            engine?: string;

            user_agent?: string;

            webgl_support?: string;
          }

          export interface CandidatePairs {
            consuming_transport?: Array<unknown>;

            producing_transport?: Array<CandidatePairs.ProducingTransport>;
          }

          export namespace CandidatePairs {
            export interface ProducingTransport {
              available_outgoing_bitrate?: number;

              bytes_discarded_on_send?: number;

              bytes_received?: number;

              bytes_sent?: number;

              current_round_trip_time?: number;

              last_packet_received_timestamp?: number;

              last_packet_sent_timestamp?: number;

              local_candidate_address?: string;

              local_candidate_id?: string;

              local_candidate_network_type?: string;

              local_candidate_port?: number;

              local_candidate_protocol?: string;

              local_candidate_related_address?: string;

              local_candidate_related_port?: number;

              local_candidate_type?: string;

              nominated?: boolean;

              packets_discarded_on_send?: number;

              packets_received?: number;

              packets_sent?: number;

              remote_candidate_address?: string;

              remote_candidate_id?: string;

              remote_candidate_port?: number;

              remote_candidate_protocol?: string;

              remote_candidate_type?: string;

              total_round_trip_time?: number;
            }
          }

          export interface DeviceInfo {
            cpus?: number;

            is_mobile?: boolean;

            os?: string;

            os_version?: string;
          }

          export interface Event {
            name?: string;

            timestamp?: string;
          }

          export interface IPInformation {
            asn?: IPInformation.ASN;

            city?: string;

            country?: string;

            ipv4?: string;

            region?: string;

            timezone?: string;
          }

          export namespace IPInformation {
            export interface ASN {
              asn?: string;
            }
          }

          export interface PcMetadata {
            effective_network_type?: string;

            reflexive_connectivity?: boolean;

            relay_connectivity?: boolean;

            timestamp?: string;

            turn_connectivity?: boolean;
          }
        }

        export interface Quality {
          audio_consumer?: Array<unknown>;

          audio_consumer_cumulative?: unknown;

          audio_producer?: Array<Quality.AudioProducer>;

          audio_producer_cumulative?: Quality.AudioProducerCumulative;

          screenshare_audio_consumer?: Array<unknown>;

          screenshare_audio_consumer_cumulative?: unknown;

          screenshare_audio_producer?: Array<unknown>;

          screenshare_audio_producer_cumulative?: unknown;

          screenshare_video_consumer?: Array<unknown>;

          screenshare_video_consumer_cumulative?: unknown;

          screenshare_video_producer?: Array<unknown>;

          screenshare_video_producer_cumulative?: unknown;

          video_consumer?: Array<unknown>;

          video_consumer_cumulative?: unknown;

          video_producer?: Array<unknown>;

          video_producer_cumulative?: unknown;
        }

        export namespace Quality {
          export interface AudioProducer {
            bytes_sent?: number;

            jitter?: number;

            mid?: string;

            mos_quality?: number;

            packets_lost?: number;

            packets_sent?: number;

            producer_id?: string;

            rtt?: number;

            ssrc?: number;

            timestamp?: string;
          }

          export interface AudioProducerCumulative {
            packet_loss?: AudioProducerCumulative.PacketLoss;

            quality_mos?: AudioProducerCumulative.QualityMos;

            rtt?: AudioProducerCumulative.RTT;
          }

          export namespace AudioProducerCumulative {
            export interface PacketLoss {
              '10_or_greater_event_fraction'?: number;

              '25_or_greater_event_fraction'?: number;

              '5_or_greater_event_fraction'?: number;

              '50_or_greater_event_fraction'?: number;

              avg?: number;
            }

            export interface QualityMos {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            export interface RTT {
              '100ms_or_greater_event_fraction'?: number;

              '250ms_or_greater_event_fraction'?: number;

              '500ms_or_greater_event_fraction'?: number;

              avg?: number;
            }
          }
        }
      }

      export interface PeerStats {
        device_info?: PeerStats.DeviceInfo;

        events?: Array<PeerStats.Event>;

        ip_information?: PeerStats.IPInformation;

        precall_network_information?: PeerStats.PrecallNetworkInformation;
      }

      export namespace PeerStats {
        export interface DeviceInfo {
          browser?: string;

          browser_version?: string;

          cpus?: number;

          engine?: string;

          is_mobile?: boolean;

          os?: string;

          os_version?: string;

          sdk_name?: string;

          sdk_version?: string;

          user_agent?: string;

          webgl_support?: string;
        }

        export interface Event {
          metadata?: Event.Metadata;

          timestamp?: string;

          type?: string;
        }

        export namespace Event {
          export interface Metadata {
            connection_info?: Metadata.ConnectionInfo;
          }

          export namespace Metadata {
            export interface ConnectionInfo {
              backend_r_t_t?: number;

              connectivity?: ConnectionInfo.Connectivity;

              effective_network_type?: string;

              fractional_loss?: number;

              ip_details?: ConnectionInfo.IPDetails;

              jitter?: number;

              location?: ConnectionInfo.Location;

              r_t_t?: number;

              throughput?: number;

              turn_connectivity?: boolean;
            }

            export namespace ConnectionInfo {
              export interface Connectivity {
                host?: boolean;

                reflexive?: boolean;

                relay?: boolean;
              }

              export interface IPDetails {
                asn?: IPDetails.ASN;

                city?: string;

                country?: string;

                ip?: string;

                loc?: string;

                postal?: string;

                region?: string;

                timezone?: string;
              }

              export namespace IPDetails {
                export interface ASN {
                  asn?: string;
                }
              }

              export interface Location {
                coords?: Location.Coords;
              }

              export namespace Location {
                export interface Coords {
                  latitude?: number;

                  longitude?: number;
                }
              }
            }
          }
        }

        export interface IPInformation {
          asn?: IPInformation.ASN;

          city?: string;

          country?: string;

          ip_location?: string;

          ipv4?: string;

          org?: string;

          region?: string;

          timezone?: string;
        }

        export namespace IPInformation {
          export interface ASN {
            asn?: string;
          }
        }

        export interface PrecallNetworkInformation {
          backend_rtt?: number;

          effective_networktype?: string;

          fractional_loss?: number;

          jitter?: number;

          reflexive_connectivity?: boolean;

          relay_connectivity?: boolean;

          rtt?: number;

          throughput?: number;

          turn_connectivity?: boolean;
        }
      }

      export interface QualityStats {
        audio_bandwidth?: number;

        audio_stats?: Array<unknown>;

        average_quality?: number;

        end?: string | null;

        first_audio_packet_received?: string;

        first_video_packet_received?: string;

        last_audio_packet_received?: string;

        last_video_packet_received?: string;

        peer_ids?: Array<string>;

        start?: string | null;

        total_audio_packets?: number;

        total_audio_packets_lost?: number;

        total_video_packets?: number;

        total_video_packets_lost?: number;

        video_bandwidth?: number;

        video_stats?: Array<unknown>;
      }
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
    session?: Data.Session;
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

      peer_stats?: Participant.PeerStats;

      /**
       * Name of the preset associated with the participant.
       */
      preset_name?: string;

      quality_stats?: Array<Participant.QualityStat>;

      /**
       * timestamp when this participant's data was last updated.
       */
      updated_at?: string;

      /**
       * User id for this participant.
       */
      user_id?: string;
    }

    export namespace Participant {
      export interface PeerStats {
        config?: string;

        device_info?: PeerStats.DeviceInfo;

        events?: Array<PeerStats.Event>;

        ip_information?: PeerStats.IPInformation;

        precall_network_information?: PeerStats.PrecallNetworkInformation;

        status?: string;
      }

      export namespace PeerStats {
        export interface DeviceInfo {
          browser?: string;

          browser_version?: string;

          cpus?: number;

          engine?: string;

          is_mobile?: boolean;

          memory?: number;

          os?: string;

          os_version?: string;

          sdk_name?: string;

          sdk_version?: string;

          user_agent?: string;

          webgl_support?: string;
        }

        export interface Event {
          timestamp?: string;

          type?: string;
        }

        export interface IPInformation {
          city?: string;

          country?: string;

          ip_location?: string;

          ipv4?: string;

          org?: string;

          portal?: string;

          region?: string;

          timezone?: string;
        }

        export interface PrecallNetworkInformation {
          backend_rtt?: number;

          effective_networktype?: string;

          fractional_loss?: number;

          jitter?: number;

          reflexive_connectivity?: boolean;

          relay_connectivity?: boolean;

          rtt?: number;

          throughtput?: number;

          turn_connectivity?: boolean;
        }
      }

      export interface QualityStat {
        audio_bandwidth?: number;

        audio_packet_loss?: number;

        audio_stats?: Array<QualityStat.AudioStat>;

        average_quality?: number;

        end?: string;

        peer_id?: string;

        start?: string;

        video_bandwidth?: number;

        video_packet_loss?: number;

        video_stats?: Array<QualityStat.VideoStat>;
      }

      export namespace QualityStat {
        export interface AudioStat {
          concealment_events?: number;

          jitter?: number;

          packets_lost?: number;

          quality?: number;

          timestamp?: string;
        }

        export interface VideoStat {
          frame_height?: number;

          frame_width?: number;

          frames_dropped?: number;

          frames_per_second?: number;

          jitter?: number;

          packets_lost?: number;

          quality?: number;

          timestamp?: string;
        }
      }
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
   * Query param: The search query string. You can search using the meeting ID or
   * title.
   */
  search?: string;

  /**
   * Query param:
   */
  sort_by?: 'joinedAt' | 'duration';

  /**
   * Query param:
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
   * The account identifier tag.
   */
  account_id: string;
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
   * Query param:
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
   * Query param:
   */
  sort_by?: 'minutesConsumed' | 'createdAt';

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
   * Query param:
   */
  status?: 'LIVE' | 'ENDED';
}

export declare namespace Sessions {
  export {
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
