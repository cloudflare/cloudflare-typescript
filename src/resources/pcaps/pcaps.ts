// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PcapsAPI from 'cloudflare/resources/pcaps/pcaps';
import * as DownloadsAPI from 'cloudflare/resources/pcaps/downloads';
import * as OwnershipsAPI from 'cloudflare/resources/pcaps/ownerships';

export class Pcaps extends APIResource {
  ownerships: OwnershipsAPI.Ownerships = new OwnershipsAPI.Ownerships(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Create new PCAP request for account.
   */
  create(
    accountIdentifier: string,
    body: PcapCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PcapCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/pcaps`, { body, ...options }) as Core.APIPromise<{
        result: PcapCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all packet capture requests for an account.
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<PcapListResponse | null> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/pcaps`, options) as Core.APIPromise<{
        result: PcapListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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
}

export type PcapCreateResponse =
  | PcapCreateResponse._5cvYhiwuPcapsResponseSimple
  | PcapCreateResponse._5cvYhiwuPcapsResponseFull;

export namespace PcapCreateResponse {
  export interface _5cvYhiwuPcapsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: _5cvYhiwuPcapsResponseSimple.FilterV1;

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

  export namespace _5cvYhiwuPcapsResponseSimple {
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

  export interface _5cvYhiwuPcapsResponseFull {
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
    filter_v1?: _5cvYhiwuPcapsResponseFull.FilterV1;

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

  export namespace _5cvYhiwuPcapsResponseFull {
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

export type PcapListResponse = Array<
  PcapListResponse._5cvYhiwuPcapsResponseSimple | PcapListResponse._5cvYhiwuPcapsResponseFull
>;

export namespace PcapListResponse {
  export interface _5cvYhiwuPcapsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: _5cvYhiwuPcapsResponseSimple.FilterV1;

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

  export namespace _5cvYhiwuPcapsResponseSimple {
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

  export interface _5cvYhiwuPcapsResponseFull {
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
    filter_v1?: _5cvYhiwuPcapsResponseFull.FilterV1;

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

  export namespace _5cvYhiwuPcapsResponseFull {
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

export type PcapGetResponse =
  | PcapGetResponse._5cvYhiwuPcapsResponseSimple
  | PcapGetResponse._5cvYhiwuPcapsResponseFull;

export namespace PcapGetResponse {
  export interface _5cvYhiwuPcapsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: _5cvYhiwuPcapsResponseSimple.FilterV1;

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

  export namespace _5cvYhiwuPcapsResponseSimple {
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

  export interface _5cvYhiwuPcapsResponseFull {
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
    filter_v1?: _5cvYhiwuPcapsResponseFull.FilterV1;

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

  export namespace _5cvYhiwuPcapsResponseFull {
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

export type PcapCreateParams =
  | PcapCreateParams._5cvYhiwuPcapsRequestSimple
  | PcapCreateParams._5cvYhiwuPcapsRequestFull;

export namespace PcapCreateParams {
  export interface _5cvYhiwuPcapsRequestSimple {
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
    filter_v1?: PcapCreateParams._5cvYhiwuPcapsRequestSimple.FilterV1;
  }

  export namespace _5cvYhiwuPcapsRequestSimple {
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

  export interface _5cvYhiwuPcapsRequestFull {
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
    filter_v1?: PcapCreateParams._5cvYhiwuPcapsRequestFull.FilterV1;

    /**
     * The limit of packets contained in a packet capture.
     */
    packet_limit?: number;
  }

  export namespace _5cvYhiwuPcapsRequestFull {
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
  export import PcapCreateResponse = PcapsAPI.PcapCreateResponse;
  export import PcapListResponse = PcapsAPI.PcapListResponse;
  export import PcapGetResponse = PcapsAPI.PcapGetResponse;
  export import PcapCreateParams = PcapsAPI.PcapCreateParams;
  export import Ownerships = OwnershipsAPI.Ownerships;
  export import OwnershipCreateResponse = OwnershipsAPI.OwnershipCreateResponse;
  export import OwnershipGetResponse = OwnershipsAPI.OwnershipGetResponse;
  export import OwnershipValidateResponse = OwnershipsAPI.OwnershipValidateResponse;
  export import OwnershipCreateParams = OwnershipsAPI.OwnershipCreateParams;
  export import OwnershipValidateParams = OwnershipsAPI.OwnershipValidateParams;
  export import Downloads = DownloadsAPI.Downloads;
}
