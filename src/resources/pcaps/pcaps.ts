// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PcapsAPI from 'cloudflare/resources/pcaps/pcaps';
import * as DownloadsAPI from 'cloudflare/resources/pcaps/downloads';
import * as OwnershipsAPI from 'cloudflare/resources/pcaps/ownerships/ownerships';

export class Pcaps extends APIResource {
  ownerships: OwnershipsAPI.Ownerships = new OwnershipsAPI.Ownerships(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Get information for a PCAP request by id.
   */
  get(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PcapGetResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/pcaps/${identifier}`, options) as Core.APIPromise<{
        result: PcapGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create new PCAP request for account.
   */
  magicPcapCollectionCreatePcapRequest(
    accountIdentifier: string,
    body: PcapMagicPcapCollectionCreatePcapRequestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PcapMagicPcapCollectionCreatePcapRequestResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/pcaps`, { body, ...options }) as Core.APIPromise<{
        result: PcapMagicPcapCollectionCreatePcapRequestResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all packet capture requests for an account.
   */
  magicPcapCollectionListPacketCaptureRequests(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PcapMagicPcapCollectionListPacketCaptureRequestsResponse | null> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/pcaps`, options) as Core.APIPromise<{
        result: PcapMagicPcapCollectionListPacketCaptureRequestsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PcapGetResponse =
  | PcapGetResponse.Z0Vmh0HyPcapsResponseSimple
  | PcapGetResponse.Z0Vmh0HyPcapsResponseFull;

export namespace PcapGetResponse {
  export interface Z0Vmh0HyPcapsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: Z0Vmh0HyPcapsResponseSimple.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace Z0Vmh0HyPcapsResponseSimple {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }

  export interface Z0Vmh0HyPcapsResponseFull {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The maximum number of bytes to capture. This field only applies to `full` packet
     * captures.
     */
    byte_limit?: number;

    /**
     * The name of the data center used for the packet capture. This can be a specific
     * colo (ord02) or a multi-colo name (ORD). This field only applies to `full`
     * packet captures.
     */
    colo_name?: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf?: string;

    /**
     * An error message that describes why the packet capture failed. This field only
     * applies to `full` packet captures.
     */
    error_message?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: Z0Vmh0HyPcapsResponseFull.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace Z0Vmh0HyPcapsResponseFull {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }
}

export type PcapMagicPcapCollectionCreatePcapRequestResponse =
  | PcapMagicPcapCollectionCreatePcapRequestResponse.Z0Vmh0HyPcapsResponseSimple
  | PcapMagicPcapCollectionCreatePcapRequestResponse.Z0Vmh0HyPcapsResponseFull;

export namespace PcapMagicPcapCollectionCreatePcapRequestResponse {
  export interface Z0Vmh0HyPcapsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: Z0Vmh0HyPcapsResponseSimple.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace Z0Vmh0HyPcapsResponseSimple {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }

  export interface Z0Vmh0HyPcapsResponseFull {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The maximum number of bytes to capture. This field only applies to `full` packet
     * captures.
     */
    byte_limit?: number;

    /**
     * The name of the data center used for the packet capture. This can be a specific
     * colo (ord02) or a multi-colo name (ORD). This field only applies to `full`
     * packet captures.
     */
    colo_name?: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf?: string;

    /**
     * An error message that describes why the packet capture failed. This field only
     * applies to `full` packet captures.
     */
    error_message?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: Z0Vmh0HyPcapsResponseFull.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace Z0Vmh0HyPcapsResponseFull {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }
}

export type PcapMagicPcapCollectionListPacketCaptureRequestsResponse = Array<
  | PcapMagicPcapCollectionListPacketCaptureRequestsResponse.Z0Vmh0HyPcapsResponseSimple
  | PcapMagicPcapCollectionListPacketCaptureRequestsResponse.Z0Vmh0HyPcapsResponseFull
>;

export namespace PcapMagicPcapCollectionListPacketCaptureRequestsResponse {
  export interface Z0Vmh0HyPcapsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: Z0Vmh0HyPcapsResponseSimple.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace Z0Vmh0HyPcapsResponseSimple {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }

  export interface Z0Vmh0HyPcapsResponseFull {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The maximum number of bytes to capture. This field only applies to `full` packet
     * captures.
     */
    byte_limit?: number;

    /**
     * The name of the data center used for the packet capture. This can be a specific
     * colo (ord02) or a multi-colo name (ORD). This field only applies to `full`
     * packet captures.
     */
    colo_name?: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf?: string;

    /**
     * An error message that describes why the packet capture failed. This field only
     * applies to `full` packet captures.
     */
    error_message?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: Z0Vmh0HyPcapsResponseFull.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace Z0Vmh0HyPcapsResponseFull {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }
}

export type PcapMagicPcapCollectionCreatePcapRequestParams =
  | PcapMagicPcapCollectionCreatePcapRequestParams.Z0Vmh0HyPcapsRequestSimple
  | PcapMagicPcapCollectionCreatePcapRequestParams.Z0Vmh0HyPcapsRequestFull;

export namespace PcapMagicPcapCollectionCreatePcapRequestParams {
  export interface Z0Vmh0HyPcapsRequestSimple {
    /**
     * The limit of packets contained in a packet capture.
     */
    packet_limit: number;

    /**
     * The system used to collect packet captures.
     */
    system: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type: 'simple' | 'full';

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: PcapMagicPcapCollectionCreatePcapRequestParams.Z0Vmh0HyPcapsRequestSimple.FilterV1;
  }

  export namespace Z0Vmh0HyPcapsRequestSimple {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }

  export interface Z0Vmh0HyPcapsRequestFull {
    /**
     * The name of the data center used for the packet capture. This can be a specific
     * colo (ord02) or a multi-colo name (ORD). This field only applies to `full`
     * packet captures.
     */
    colo_name: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf: string;

    /**
     * The system used to collect packet captures.
     */
    system: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type: 'simple' | 'full';

    /**
     * The maximum number of bytes to capture. This field only applies to `full` packet
     * captures.
     */
    byte_limit?: number;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: PcapMagicPcapCollectionCreatePcapRequestParams.Z0Vmh0HyPcapsRequestFull.FilterV1;

    /**
     * The limit of packets contained in a packet capture.
     */
    packet_limit?: number;
  }

  export namespace Z0Vmh0HyPcapsRequestFull {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }
}

export namespace Pcaps {
  export import PcapGetResponse = PcapsAPI.PcapGetResponse;
  export import PcapMagicPcapCollectionCreatePcapRequestResponse = PcapsAPI.PcapMagicPcapCollectionCreatePcapRequestResponse;
  export import PcapMagicPcapCollectionListPacketCaptureRequestsResponse = PcapsAPI.PcapMagicPcapCollectionListPacketCaptureRequestsResponse;
  export import PcapMagicPcapCollectionCreatePcapRequestParams = PcapsAPI.PcapMagicPcapCollectionCreatePcapRequestParams;
  export import Ownerships = OwnershipsAPI.Ownerships;
  export import OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse = OwnershipsAPI.OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse;
  export import OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse = OwnershipsAPI.OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse;
  export import OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams = OwnershipsAPI.OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams;
  export import Downloads = DownloadsAPI.Downloads;
}
