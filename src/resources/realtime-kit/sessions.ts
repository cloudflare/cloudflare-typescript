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
   * Returns participant details for the given peer ID along with call statistics.
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
    participant?: Data.Participant;
  }

  export namespace Data {
    export interface Participant {
      /**
       * ID of the participant.
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
       * Connection lifecycle events for the participant's peer.
       */
      peer_events?: Array<Participant.PeerEvent>;

      /**
       * Peer call statistics report.
       */
      peer_report?: Participant.PeerReport;

      /**
       * Name of the preset associated with the participant.
       */
      role?: string;

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

    export namespace Participant {
      /**
       * A connection lifecycle event recorded for a participant's peer.
       */
      export interface PeerEvent {
        /**
         * ID of the peer event.
         */
        id?: string;

        /**
         * Timestamp when this peer event was created.
         */
        created_at?: string;

        /**
         * Name of the peer event.
         */
        event_name?: 'PEER_CREATED' | 'PEER_JOINING' | 'PEER_LEAVING';

        /**
         * Minutes consumed attributed to this event.
         */
        minutes_consumed?: number;

        /**
         * ID of the participant this event belongs to.
         */
        participant_id?: string | null;

        /**
         * Peer ID this event belongs to.
         */
        peer_id?: string;

        /**
         * View type of the preset associated with the peer.
         */
        preset_view_type?: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM' | 'LIVESTREAM' | 'CHAT' | null;

        /**
         * ID of the session this event belongs to.
         */
        session_id?: string | null;

        /**
         * ID of the socket session associated with this event.
         */
        socket_session_id?: string | null;

        /**
         * Timestamp when this peer event was last updated.
         */
        updated_at?: string;
      }

      /**
       * Peer call statistics report.
       */
      export interface PeerReport {
        /**
         * Connection and device metadata for the participant.
         */
        metadata?: PeerReport.Metadata;

        /**
         * Media quality statistics for the participant.
         */
        quality?: PeerReport.Quality;
      }

      export namespace PeerReport {
        /**
         * Connection and device metadata for the participant.
         */
        export interface Metadata {
          audio_devices_updates?: Array<Metadata.AudioDevicesUpdate>;

          browser_metadata?: Metadata.BrowserMetadata;

          candidate_pairs?: Metadata.CandidatePairs;

          device_info?: Metadata.DeviceInfo;

          events?: Array<Metadata.Event>;

          ip_information?: Metadata.IPInformation;

          native_metadata?: Metadata.NativeMetadata;

          pc_metadata?: Array<Metadata.PcMetadata>;

          room_view_type?: string;

          sdk_name?: string;

          sdk_type?: string;

          sdk_version?: string;

          selected_device_updates?: Array<Metadata.SelectedDeviceUpdate>;

          speaker_devices_updates?: Array<Metadata.SpeakerDevicesUpdate>;

          video_devices_updates?: Array<Metadata.VideoDevicesUpdate>;
        }

        export namespace Metadata {
          /**
           * A change to the set of available devices at a point in time.
           */
          export interface AudioDevicesUpdate {
            /**
             * Devices that became available.
             */
            added?: Array<AudioDevicesUpdate.Added>;

            /**
             * Devices that became unavailable.
             */
            removed?: Array<AudioDevicesUpdate.Removed>;

            /**
             * Timestamp of the device update.
             */
            timestamp?: string;
          }

          export namespace AudioDevicesUpdate {
            /**
             * A media device (camera, microphone, or speaker).
             */
            export interface Added {
              /**
               * ID of the device.
               */
              device_id?: string;

              /**
               * Kind of device, for example audioinput or videoinput.
               */
              kind?: string;

              /**
               * Human-readable label of the device.
               */
              label?: string;
            }

            /**
             * A media device (camera, microphone, or speaker).
             */
            export interface Removed {
              /**
               * ID of the device.
               */
              device_id?: string;

              /**
               * Kind of device, for example audioinput or videoinput.
               */
              kind?: string;

              /**
               * Human-readable label of the device.
               */
              label?: string;
            }
          }

          export interface BrowserMetadata {
            browser?: string;

            browser_version?: string;

            engine?: string;

            user_agent?: string;

            webgl_support?: boolean | null;
          }

          export interface CandidatePairs {
            consuming_transport?: Array<CandidatePairs.ConsumingTransport>;

            producing_transport?: Array<CandidatePairs.ProducingTransport>;
          }

          export namespace CandidatePairs {
            /**
             * ICE candidate pair statistics for a transport.
             */
            export interface ConsumingTransport {
              available_incoming_bitrate?: number;

              available_outgoing_bitrate?: number;

              bytes_discarded_on_send?: number;

              bytes_received?: number;

              bytes_sent?: number;

              current_round_trip_time?: number;

              /**
               * Epoch milliseconds when the last packet was received.
               */
              last_packet_received_timestamp?: number;

              /**
               * Epoch milliseconds when the last packet was sent.
               */
              last_packet_sent_timestamp?: number;

              local_candidate_address?: string;

              local_candidate_id?: string;

              local_candidate_network_type?: string;

              local_candidate_port?: number;

              local_candidate_protocol?: string;

              local_candidate_related_address?: string;

              local_candidate_related_port?: number;

              local_candidate_type?: string;

              local_candidate_url?: string;

              nominated?: boolean;

              packets_discarded_on_send?: number;

              packets_received?: number;

              packets_sent?: number;

              remote_candidate_address?: string;

              remote_candidate_id?: string;

              remote_candidate_port?: number;

              remote_candidate_protocol?: string;

              remote_candidate_type?: string;

              remote_candidate_url?: string;

              total_round_trip_time?: number;
            }

            /**
             * ICE candidate pair statistics for a transport.
             */
            export interface ProducingTransport {
              available_incoming_bitrate?: number;

              available_outgoing_bitrate?: number;

              bytes_discarded_on_send?: number;

              bytes_received?: number;

              bytes_sent?: number;

              current_round_trip_time?: number;

              /**
               * Epoch milliseconds when the last packet was received.
               */
              last_packet_received_timestamp?: number;

              /**
               * Epoch milliseconds when the last packet was sent.
               */
              last_packet_sent_timestamp?: number;

              local_candidate_address?: string;

              local_candidate_id?: string;

              local_candidate_network_type?: string;

              local_candidate_port?: number;

              local_candidate_protocol?: string;

              local_candidate_related_address?: string;

              local_candidate_related_port?: number;

              local_candidate_type?: string;

              local_candidate_url?: string;

              nominated?: boolean;

              packets_discarded_on_send?: number;

              packets_received?: number;

              packets_sent?: number;

              remote_candidate_address?: string;

              remote_candidate_id?: string;

              remote_candidate_port?: number;

              remote_candidate_protocol?: string;

              remote_candidate_type?: string;

              remote_candidate_url?: string;

              total_round_trip_time?: number;
            }
          }

          export interface DeviceInfo {
            cpus?: number;

            is_mobile?: boolean;

            os?: string;

            os_version?: string;
          }

          /**
           * A timestamped event recorded during the participant's connection.
           */
          export interface Event {
            /**
             * Event-specific metadata. Keys vary per event; values are primitive scalars
             * (string, number, boolean, or null).
             */
            metadata?: { [key: string]: string | number | boolean | null };

            /**
             * Name of the event.
             */
            name?: string;

            /**
             * Timestamp when the event occurred.
             */
            timestamp?: string;
          }

          export interface IPInformation {
            asn?: IPInformation.ASN;

            city?: string;

            country?: string;

            ipv4?: string;

            org?: string;

            region?: string;

            timezone?: string;
          }

          export namespace IPInformation {
            export interface ASN {
              asn?: string;

              domain?: string;

              name?: string;

              route?: string;

              type?: string;
            }
          }

          export interface NativeMetadata {
            audio_encoder?: string;

            video_encoder?: string;
          }

          export interface PcMetadata {
            effective_network_type?: string;

            reflexive_connectivity?: boolean;

            relay_connectivity?: boolean;

            sdp?: Array<string>;

            timestamp?: string;

            turn_connectivity?: boolean;
          }

          export interface SelectedDeviceUpdate {
            /**
             * A media device (camera, microphone, or speaker).
             */
            device?: SelectedDeviceUpdate.Device;

            timestamp?: string;
          }

          export namespace SelectedDeviceUpdate {
            /**
             * A media device (camera, microphone, or speaker).
             */
            export interface Device {
              /**
               * ID of the device.
               */
              device_id?: string;

              /**
               * Kind of device, for example audioinput or videoinput.
               */
              kind?: string;

              /**
               * Human-readable label of the device.
               */
              label?: string;
            }
          }

          /**
           * A change to the set of available devices at a point in time.
           */
          export interface SpeakerDevicesUpdate {
            /**
             * Devices that became available.
             */
            added?: Array<SpeakerDevicesUpdate.Added>;

            /**
             * Devices that became unavailable.
             */
            removed?: Array<SpeakerDevicesUpdate.Removed>;

            /**
             * Timestamp of the device update.
             */
            timestamp?: string;
          }

          export namespace SpeakerDevicesUpdate {
            /**
             * A media device (camera, microphone, or speaker).
             */
            export interface Added {
              /**
               * ID of the device.
               */
              device_id?: string;

              /**
               * Kind of device, for example audioinput or videoinput.
               */
              kind?: string;

              /**
               * Human-readable label of the device.
               */
              label?: string;
            }

            /**
             * A media device (camera, microphone, or speaker).
             */
            export interface Removed {
              /**
               * ID of the device.
               */
              device_id?: string;

              /**
               * Kind of device, for example audioinput or videoinput.
               */
              kind?: string;

              /**
               * Human-readable label of the device.
               */
              label?: string;
            }
          }

          /**
           * A change to the set of available devices at a point in time.
           */
          export interface VideoDevicesUpdate {
            /**
             * Devices that became available.
             */
            added?: Array<VideoDevicesUpdate.Added>;

            /**
             * Devices that became unavailable.
             */
            removed?: Array<VideoDevicesUpdate.Removed>;

            /**
             * Timestamp of the device update.
             */
            timestamp?: string;
          }

          export namespace VideoDevicesUpdate {
            /**
             * A media device (camera, microphone, or speaker).
             */
            export interface Added {
              /**
               * ID of the device.
               */
              device_id?: string;

              /**
               * Kind of device, for example audioinput or videoinput.
               */
              kind?: string;

              /**
               * Human-readable label of the device.
               */
              label?: string;
            }

            /**
             * A media device (camera, microphone, or speaker).
             */
            export interface Removed {
              /**
               * ID of the device.
               */
              device_id?: string;

              /**
               * Kind of device, for example audioinput or videoinput.
               */
              kind?: string;

              /**
               * Human-readable label of the device.
               */
              label?: string;
            }
          }
        }

        /**
         * Media quality statistics for the participant.
         */
        export interface Quality {
          audio_consumer?: Array<Quality.AudioConsumer>;

          /**
           * Aggregated inbound (consumer) audio statistics for the session.
           */
          audio_consumer_cumulative?: Quality.AudioConsumerCumulative;

          audio_producer?: Array<Quality.AudioProducer>;

          /**
           * Aggregated outbound (producer) audio statistics for the session.
           */
          audio_producer_cumulative?: Quality.AudioProducerCumulative;

          screenshare_audio_consumer?: Array<Quality.ScreenshareAudioConsumer>;

          /**
           * Aggregated inbound (consumer) audio statistics for the session.
           */
          screenshare_audio_consumer_cumulative?: Quality.ScreenshareAudioConsumerCumulative;

          screenshare_audio_producer?: Array<Quality.ScreenshareAudioProducer>;

          /**
           * Aggregated outbound (producer) audio statistics for the session.
           */
          screenshare_audio_producer_cumulative?: Quality.ScreenshareAudioProducerCumulative;

          screenshare_video_consumer?: Array<Quality.ScreenshareVideoConsumer>;

          /**
           * Aggregated inbound (consumer) video statistics for the session.
           */
          screenshare_video_consumer_cumulative?: Quality.ScreenshareVideoConsumerCumulative;

          screenshare_video_producer?: Array<Quality.ScreenshareVideoProducer>;

          /**
           * Aggregated outbound (producer) video statistics for the session.
           */
          screenshare_video_producer_cumulative?: Quality.ScreenshareVideoProducerCumulative;

          video_consumer?: Array<Quality.VideoConsumer>;

          /**
           * Aggregated inbound (consumer) video statistics for the session.
           */
          video_consumer_cumulative?: Quality.VideoConsumerCumulative;

          video_producer?: Array<Quality.VideoProducer>;

          /**
           * Aggregated outbound (producer) video statistics for the session.
           */
          video_producer_cumulative?: Quality.VideoProducerCumulative;
        }

        export namespace Quality {
          /**
           * Per-sample inbound (consumer) audio statistics.
           */
          export interface AudioConsumer {
            bytes_received?: number;

            concealment_events?: number;

            consumer_id?: string;

            jitter?: number;

            jitter_buffer_delay?: number;

            jitter_buffer_emitted_count?: number;

            mid?: string;

            mos_quality?: number;

            packets_lost?: number;

            packets_received?: number;

            peer_id?: string;

            producer_id?: string;

            ssrc?: number;

            timestamp?: string;
          }

          /**
           * Aggregated inbound (consumer) audio statistics for the session.
           */
          export interface AudioConsumerCumulative {
            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            jitter_buffer_delay?: AudioConsumerCumulative.JitterBufferDelay;

            /**
             * Cumulative packet loss distribution.
             */
            packet_loss?: AudioConsumerCumulative.PacketLoss;

            /**
             * Distribution summary with average and percentiles.
             */
            quality_mos?: AudioConsumerCumulative.QualityMos;
          }

          export namespace AudioConsumerCumulative {
            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            export interface JitterBufferDelay {
              '100ms_or_greater_event_fraction'?: number;

              '250ms_or_greater_event_fraction'?: number;

              '500ms_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Cumulative packet loss distribution.
             */
            export interface PacketLoss {
              '10_or_greater_event_fraction'?: number;

              '25_or_greater_event_fraction'?: number;

              '5_or_greater_event_fraction'?: number;

              '50_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface QualityMos {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }
          }

          /**
           * Per-sample outbound (producer) audio statistics.
           */
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

          /**
           * Aggregated outbound (producer) audio statistics for the session.
           */
          export interface AudioProducerCumulative {
            /**
             * Cumulative packet loss distribution.
             */
            packet_loss?: AudioProducerCumulative.PacketLoss;

            /**
             * Distribution summary with average and percentiles.
             */
            quality_mos?: AudioProducerCumulative.QualityMos;

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            rtt?: AudioProducerCumulative.RTT;
          }

          export namespace AudioProducerCumulative {
            /**
             * Cumulative packet loss distribution.
             */
            export interface PacketLoss {
              '10_or_greater_event_fraction'?: number;

              '25_or_greater_event_fraction'?: number;

              '5_or_greater_event_fraction'?: number;

              '50_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface QualityMos {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            export interface RTT {
              '100ms_or_greater_event_fraction'?: number;

              '250ms_or_greater_event_fraction'?: number;

              '500ms_or_greater_event_fraction'?: number;

              avg?: number;
            }
          }

          /**
           * Per-sample inbound (consumer) audio statistics.
           */
          export interface ScreenshareAudioConsumer {
            bytes_received?: number;

            concealment_events?: number;

            consumer_id?: string;

            jitter?: number;

            jitter_buffer_delay?: number;

            jitter_buffer_emitted_count?: number;

            mid?: string;

            mos_quality?: number;

            packets_lost?: number;

            packets_received?: number;

            peer_id?: string;

            producer_id?: string;

            ssrc?: number;

            timestamp?: string;
          }

          /**
           * Aggregated inbound (consumer) audio statistics for the session.
           */
          export interface ScreenshareAudioConsumerCumulative {
            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            jitter_buffer_delay?: ScreenshareAudioConsumerCumulative.JitterBufferDelay;

            /**
             * Cumulative packet loss distribution.
             */
            packet_loss?: ScreenshareAudioConsumerCumulative.PacketLoss;

            /**
             * Distribution summary with average and percentiles.
             */
            quality_mos?: ScreenshareAudioConsumerCumulative.QualityMos;
          }

          export namespace ScreenshareAudioConsumerCumulative {
            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            export interface JitterBufferDelay {
              '100ms_or_greater_event_fraction'?: number;

              '250ms_or_greater_event_fraction'?: number;

              '500ms_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Cumulative packet loss distribution.
             */
            export interface PacketLoss {
              '10_or_greater_event_fraction'?: number;

              '25_or_greater_event_fraction'?: number;

              '5_or_greater_event_fraction'?: number;

              '50_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface QualityMos {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }
          }

          /**
           * Per-sample outbound (producer) audio statistics.
           */
          export interface ScreenshareAudioProducer {
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

          /**
           * Aggregated outbound (producer) audio statistics for the session.
           */
          export interface ScreenshareAudioProducerCumulative {
            /**
             * Cumulative packet loss distribution.
             */
            packet_loss?: ScreenshareAudioProducerCumulative.PacketLoss;

            /**
             * Distribution summary with average and percentiles.
             */
            quality_mos?: ScreenshareAudioProducerCumulative.QualityMos;

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            rtt?: ScreenshareAudioProducerCumulative.RTT;
          }

          export namespace ScreenshareAudioProducerCumulative {
            /**
             * Cumulative packet loss distribution.
             */
            export interface PacketLoss {
              '10_or_greater_event_fraction'?: number;

              '25_or_greater_event_fraction'?: number;

              '5_or_greater_event_fraction'?: number;

              '50_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface QualityMos {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            export interface RTT {
              '100ms_or_greater_event_fraction'?: number;

              '250ms_or_greater_event_fraction'?: number;

              '500ms_or_greater_event_fraction'?: number;

              avg?: number;
            }
          }

          /**
           * Per-sample inbound (consumer) video statistics.
           */
          export interface ScreenshareVideoConsumer {
            bytes_received?: number;

            consumer_id?: string;

            fir_count?: number;

            frame_height?: number;

            frame_width?: number;

            frames_decoded?: number;

            frames_dropped?: number;

            frames_per_second?: number;

            jitter?: number;

            jitter_buffer_delay?: number;

            jitter_buffer_emitted_count?: number;

            key_frames_decoded?: number;

            mid?: string;

            mos_quality?: number;

            packets_lost?: number;

            packets_received?: number;

            peer_id?: string;

            producer_id?: string;

            ssrc?: number;

            timestamp?: string;
          }

          /**
           * Aggregated inbound (consumer) video statistics for the session.
           */
          export interface ScreenshareVideoConsumerCumulative {
            /**
             * Distribution summary with average and percentiles.
             */
            frame_per_second?: ScreenshareVideoConsumerCumulative.FramePerSecond;

            /**
             * Distribution summary with average and percentiles.
             */
            frame_width?: ScreenshareVideoConsumerCumulative.FrameWidth;

            issues?: ScreenshareVideoConsumerCumulative.Issues;

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            jitter_buffer_delay?: ScreenshareVideoConsumerCumulative.JitterBufferDelay;

            key_frames_decoded_fraction?: number;

            /**
             * Cumulative packet loss distribution.
             */
            packet_loss?: ScreenshareVideoConsumerCumulative.PacketLoss;

            /**
             * Distribution summary with average and percentiles.
             */
            quality_mos?: ScreenshareVideoConsumerCumulative.QualityMos;
          }

          export namespace ScreenshareVideoConsumerCumulative {
            /**
             * Distribution summary with average and percentiles.
             */
            export interface FramePerSecond {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface FrameWidth {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            export interface Issues {
              lag_fraction?: number;

              no_video_fraction?: number;

              poor_resolution_fraction?: number;
            }

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            export interface JitterBufferDelay {
              '100ms_or_greater_event_fraction'?: number;

              '250ms_or_greater_event_fraction'?: number;

              '500ms_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Cumulative packet loss distribution.
             */
            export interface PacketLoss {
              '10_or_greater_event_fraction'?: number;

              '25_or_greater_event_fraction'?: number;

              '5_or_greater_event_fraction'?: number;

              '50_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface QualityMos {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }
          }

          /**
           * Per-sample outbound (producer) video statistics.
           */
          export interface ScreenshareVideoProducer {
            bytes_sent?: number;

            fir_count?: number;

            frame_height?: number;

            frame_width?: number;

            frames_encoded?: number;

            frames_per_second?: number;

            jitter?: number;

            key_frames_encoded?: number;

            mid?: string;

            mos_quality?: number;

            packets_lost?: number;

            packets_sent?: number;

            pli_count?: number;

            producer_id?: string;

            quality_limitation_durations?: ScreenshareVideoProducer.QualityLimitationDurations;

            quality_limitation_reason?: 'cpu' | 'bandwidth' | 'none' | 'other';

            quality_limitation_resolution_changes?: number;

            rtt?: number;

            ssrc?: number;

            timestamp?: string;
          }

          export namespace ScreenshareVideoProducer {
            export interface QualityLimitationDurations {
              bandwidth?: number;

              cpu?: number;

              none?: number;

              other?: number;
            }
          }

          /**
           * Aggregated outbound (producer) video statistics for the session.
           */
          export interface ScreenshareVideoProducerCumulative {
            /**
             * Distribution summary with average and percentiles.
             */
            frame_per_second?: ScreenshareVideoProducerCumulative.FramePerSecond;

            /**
             * Distribution summary with average and percentiles.
             */
            frame_width?: ScreenshareVideoProducerCumulative.FrameWidth;

            high_negative_feedback_fraction?: number;

            issues?: ScreenshareVideoProducerCumulative.Issues;

            key_frames_encoded_fraction?: number;

            /**
             * Cumulative packet loss distribution.
             */
            packet_loss?: ScreenshareVideoProducerCumulative.PacketLoss;

            /**
             * Distribution summary with average and percentiles.
             */
            quality_mos?: ScreenshareVideoProducerCumulative.QualityMos;

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            rtt?: ScreenshareVideoProducerCumulative.RTT;
          }

          export namespace ScreenshareVideoProducerCumulative {
            /**
             * Distribution summary with average and percentiles.
             */
            export interface FramePerSecond {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface FrameWidth {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            export interface Issues {
              bandwidth_quality_limitation_fraction?: number;

              cpu_quality_limitation_fraction?: number;

              no_video_fraction?: number;

              poor_resolution_fraction?: number;

              quality_limitation_fraction?: number;
            }

            /**
             * Cumulative packet loss distribution.
             */
            export interface PacketLoss {
              '10_or_greater_event_fraction'?: number;

              '25_or_greater_event_fraction'?: number;

              '5_or_greater_event_fraction'?: number;

              '50_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface QualityMos {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            export interface RTT {
              '100ms_or_greater_event_fraction'?: number;

              '250ms_or_greater_event_fraction'?: number;

              '500ms_or_greater_event_fraction'?: number;

              avg?: number;
            }
          }

          /**
           * Per-sample inbound (consumer) video statistics.
           */
          export interface VideoConsumer {
            bytes_received?: number;

            consumer_id?: string;

            fir_count?: number;

            frame_height?: number;

            frame_width?: number;

            frames_decoded?: number;

            frames_dropped?: number;

            frames_per_second?: number;

            jitter?: number;

            jitter_buffer_delay?: number;

            jitter_buffer_emitted_count?: number;

            key_frames_decoded?: number;

            mid?: string;

            mos_quality?: number;

            packets_lost?: number;

            packets_received?: number;

            peer_id?: string;

            producer_id?: string;

            ssrc?: number;

            timestamp?: string;
          }

          /**
           * Aggregated inbound (consumer) video statistics for the session.
           */
          export interface VideoConsumerCumulative {
            /**
             * Distribution summary with average and percentiles.
             */
            frame_per_second?: VideoConsumerCumulative.FramePerSecond;

            /**
             * Distribution summary with average and percentiles.
             */
            frame_width?: VideoConsumerCumulative.FrameWidth;

            issues?: VideoConsumerCumulative.Issues;

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            jitter_buffer_delay?: VideoConsumerCumulative.JitterBufferDelay;

            key_frames_decoded_fraction?: number;

            /**
             * Cumulative packet loss distribution.
             */
            packet_loss?: VideoConsumerCumulative.PacketLoss;

            /**
             * Distribution summary with average and percentiles.
             */
            quality_mos?: VideoConsumerCumulative.QualityMos;
          }

          export namespace VideoConsumerCumulative {
            /**
             * Distribution summary with average and percentiles.
             */
            export interface FramePerSecond {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface FrameWidth {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            export interface Issues {
              lag_fraction?: number;

              no_video_fraction?: number;

              poor_resolution_fraction?: number;
            }

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            export interface JitterBufferDelay {
              '100ms_or_greater_event_fraction'?: number;

              '250ms_or_greater_event_fraction'?: number;

              '500ms_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Cumulative packet loss distribution.
             */
            export interface PacketLoss {
              '10_or_greater_event_fraction'?: number;

              '25_or_greater_event_fraction'?: number;

              '5_or_greater_event_fraction'?: number;

              '50_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface QualityMos {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }
          }

          /**
           * Per-sample outbound (producer) video statistics.
           */
          export interface VideoProducer {
            bytes_sent?: number;

            fir_count?: number;

            frame_height?: number;

            frame_width?: number;

            frames_encoded?: number;

            frames_per_second?: number;

            jitter?: number;

            key_frames_encoded?: number;

            mid?: string;

            mos_quality?: number;

            packets_lost?: number;

            packets_sent?: number;

            pli_count?: number;

            producer_id?: string;

            quality_limitation_durations?: VideoProducer.QualityLimitationDurations;

            quality_limitation_reason?: 'cpu' | 'bandwidth' | 'none' | 'other';

            quality_limitation_resolution_changes?: number;

            rtt?: number;

            ssrc?: number;

            timestamp?: string;
          }

          export namespace VideoProducer {
            export interface QualityLimitationDurations {
              bandwidth?: number;

              cpu?: number;

              none?: number;

              other?: number;
            }
          }

          /**
           * Aggregated outbound (producer) video statistics for the session.
           */
          export interface VideoProducerCumulative {
            /**
             * Distribution summary with average and percentiles.
             */
            frame_per_second?: VideoProducerCumulative.FramePerSecond;

            /**
             * Distribution summary with average and percentiles.
             */
            frame_width?: VideoProducerCumulative.FrameWidth;

            high_negative_feedback_fraction?: number;

            issues?: VideoProducerCumulative.Issues;

            key_frames_encoded_fraction?: number;

            /**
             * Cumulative packet loss distribution.
             */
            packet_loss?: VideoProducerCumulative.PacketLoss;

            /**
             * Distribution summary with average and percentiles.
             */
            quality_mos?: VideoProducerCumulative.QualityMos;

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            rtt?: VideoProducerCumulative.RTT;
          }

          export namespace VideoProducerCumulative {
            /**
             * Distribution summary with average and percentiles.
             */
            export interface FramePerSecond {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface FrameWidth {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            export interface Issues {
              bandwidth_quality_limitation_fraction?: number;

              cpu_quality_limitation_fraction?: number;

              no_video_fraction?: number;

              poor_resolution_fraction?: number;

              quality_limitation_fraction?: number;
            }

            /**
             * Cumulative packet loss distribution.
             */
            export interface PacketLoss {
              '10_or_greater_event_fraction'?: number;

              '25_or_greater_event_fraction'?: number;

              '5_or_greater_event_fraction'?: number;

              '50_or_greater_event_fraction'?: number;

              avg?: number;
            }

            /**
             * Distribution summary with average and percentiles.
             */
            export interface QualityMos {
              avg?: number;

              p50?: number;

              p75?: number;

              p90?: number;
            }

            /**
             * Cumulative latency distribution (milliseconds-based thresholds).
             */
            export interface RTT {
              '100ms_or_greater_event_fraction'?: number;

              '250ms_or_greater_event_fraction'?: number;

              '500ms_or_greater_event_fraction'?: number;

              avg?: number;
            }
          }
        }
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
       * Connection lifecycle events for the participant's peer. Only included when
       * `include_peer_events` is true.
       */
      peer_events?: Array<Participant.PeerEvent>;

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

    export namespace Participant {
      /**
       * A connection lifecycle event recorded for a participant's peer.
       */
      export interface PeerEvent {
        /**
         * ID of the peer event.
         */
        id?: string;

        /**
         * Timestamp when this peer event was created.
         */
        created_at?: string;

        /**
         * Name of the peer event.
         */
        event_name?: 'PEER_CREATED' | 'PEER_JOINING' | 'PEER_LEAVING';

        /**
         * Minutes consumed attributed to this event.
         */
        minutes_consumed?: number;

        /**
         * ID of the participant this event belongs to.
         */
        participant_id?: string | null;

        /**
         * Peer ID this event belongs to.
         */
        peer_id?: string;

        /**
         * View type of the preset associated with the peer.
         */
        preset_view_type?: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM' | 'LIVESTREAM' | 'CHAT' | null;

        /**
         * ID of the session this event belongs to.
         */
        session_id?: string | null;

        /**
         * ID of the socket session associated with this event.
         */
        socket_session_id?: string | null;

        /**
         * Timestamp when this peer event was last updated.
         */
        updated_at?: string;
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
       * Connection lifecycle events for the participant's peer. Only included when
       * `include_peer_events` is true.
       */
      peer_events?: Array<Participant.PeerEvent>;

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

    export namespace Participant {
      /**
       * A connection lifecycle event recorded for a participant's peer.
       */
      export interface PeerEvent {
        /**
         * ID of the peer event.
         */
        id?: string;

        /**
         * Timestamp when this peer event was created.
         */
        created_at?: string;

        /**
         * Name of the peer event.
         */
        event_name?: 'PEER_CREATED' | 'PEER_JOINING' | 'PEER_LEAVING';

        /**
         * Minutes consumed attributed to this event.
         */
        minutes_consumed?: number;

        /**
         * ID of the participant this event belongs to.
         */
        participant_id?: string | null;

        /**
         * Peer ID this event belongs to.
         */
        peer_id?: string;

        /**
         * View type of the preset associated with the peer.
         */
        preset_view_type?: 'GROUP_CALL' | 'WEBINAR' | 'AUDIO_ROOM' | 'LIVESTREAM' | 'CHAT' | null;

        /**
         * ID of the session this event belongs to.
         */
        session_id?: string | null;

        /**
         * ID of the socket session associated with this event.
         */
        socket_session_id?: string | null;

        /**
         * Timestamp when this peer event was last updated.
         */
        updated_at?: string;
      }
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
   * Query param: Filter to apply to the peer report.
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
