// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PCAPsAPI from 'cloudflare/resources/pcaps/pcaps';
import * as DownloadsAPI from 'cloudflare/resources/pcaps/downloads';
import * as OwnershipsAPI from 'cloudflare/resources/pcaps/ownerships';

export class PCAPs extends APIResource {
  ownerships: OwnershipsAPI.Ownerships = new OwnershipsAPI.Ownerships(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Create new PCAP request for account.
   */
  create(params: PCAPCreateParams, options?: Core.RequestOptions): Core.APIPromise<PCAPCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pcaps`, { body, ...options }) as Core.APIPromise<{
        result: PCAPCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all packet capture requests for an account.
   */
  list(params: PCAPListParams, options?: Core.RequestOptions): Core.APIPromise<PCAPListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/pcaps`, options) as Core.APIPromise<{
        result: PCAPListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information for a PCAP request by id.
   */
  get(
    pcapId: string,
    params: PCAPGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PCAPGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/pcaps/${pcapId}`, options) as Core.APIPromise<{
        result: PCAPGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PCAPCreateResponse =
  | PCAPCreateResponse.MagicVisibilityPCAPsResponseSimple
  | PCAPCreateResponse.MagicVisibilityPCAPsResponseFull;

export namespace PCAPCreateResponse {
  export interface MagicVisibilityPCAPsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: MagicVisibilityPCAPsResponseSimple.FilterV1;

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

  export namespace MagicVisibilityPCAPsResponseSimple {
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

  export interface MagicVisibilityPCAPsResponseFull {
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
    filter_v1?: MagicVisibilityPCAPsResponseFull.FilterV1;

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

  export namespace MagicVisibilityPCAPsResponseFull {
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

export type PCAPListResponse = Array<
  PCAPListResponse.MagicVisibilityPCAPsResponseSimple | PCAPListResponse.MagicVisibilityPCAPsResponseFull
>;

export namespace PCAPListResponse {
  export interface MagicVisibilityPCAPsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: MagicVisibilityPCAPsResponseSimple.FilterV1;

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

  export namespace MagicVisibilityPCAPsResponseSimple {
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

  export interface MagicVisibilityPCAPsResponseFull {
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
    filter_v1?: MagicVisibilityPCAPsResponseFull.FilterV1;

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

  export namespace MagicVisibilityPCAPsResponseFull {
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

export type PCAPGetResponse =
  | PCAPGetResponse.MagicVisibilityPCAPsResponseSimple
  | PCAPGetResponse.MagicVisibilityPCAPsResponseFull;

export namespace PCAPGetResponse {
  export interface MagicVisibilityPCAPsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: MagicVisibilityPCAPsResponseSimple.FilterV1;

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

  export namespace MagicVisibilityPCAPsResponseSimple {
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

  export interface MagicVisibilityPCAPsResponseFull {
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
    filter_v1?: MagicVisibilityPCAPsResponseFull.FilterV1;

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

  export namespace MagicVisibilityPCAPsResponseFull {
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

export type PCAPCreateParams =
  | PCAPCreateParams.MagicVisibilityPCAPsRequestSimple
  | PCAPCreateParams.MagicVisibilityPCAPsRequestFull;

export namespace PCAPCreateParams {
  export interface MagicVisibilityPCAPsRequestSimple {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: The limit of packets contained in a packet capture.
     */
    packet_limit: number;

    /**
     * Body param: The system used to collect packet captures.
     */
    system: 'magic-transit';

    /**
     * Body param: The packet capture duration in seconds.
     */
    time_limit: number;

    /**
     * Body param: The type of packet capture. `Simple` captures sampled packets, and
     * `full` captures entire payloads and non-sampled packets.
     */
    type: 'simple' | 'full';

    /**
     * Body param: The packet capture filter. When this field is empty, all packets are
     * captured.
     */
    filter_v1?: PCAPCreateParams.MagicVisibilityPCAPsRequestSimple.FilterV1;
  }

  export namespace MagicVisibilityPCAPsRequestSimple {
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

  export interface MagicVisibilityPCAPsRequestFull {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: The name of the data center used for the packet capture. This can be
     * a specific colo (ord02) or a multi-colo name (ORD). This field only applies to
     * `full` packet captures.
     */
    colo_name: string;

    /**
     * Body param: The full URI for the bucket. This field only applies to `full`
     * packet captures.
     */
    destination_conf: string;

    /**
     * Body param: The system used to collect packet captures.
     */
    system: 'magic-transit';

    /**
     * Body param: The packet capture duration in seconds.
     */
    time_limit: number;

    /**
     * Body param: The type of packet capture. `Simple` captures sampled packets, and
     * `full` captures entire payloads and non-sampled packets.
     */
    type: 'simple' | 'full';

    /**
     * Body param: The maximum number of bytes to capture. This field only applies to
     * `full` packet captures.
     */
    byte_limit?: number;

    /**
     * Body param: The packet capture filter. When this field is empty, all packets are
     * captured.
     */
    filter_v1?: PCAPCreateParams.MagicVisibilityPCAPsRequestFull.FilterV1;

    /**
     * Body param: The limit of packets contained in a packet capture.
     */
    packet_limit?: number;
  }

  export namespace MagicVisibilityPCAPsRequestFull {
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

export interface PCAPListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PCAPGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace PCAPs {
  export import PCAPCreateResponse = PCAPsAPI.PCAPCreateResponse;
  export import PCAPListResponse = PCAPsAPI.PCAPListResponse;
  export import PCAPGetResponse = PCAPsAPI.PCAPGetResponse;
  export import PCAPCreateParams = PCAPsAPI.PCAPCreateParams;
  export import PCAPListParams = PCAPsAPI.PCAPListParams;
  export import PCAPGetParams = PCAPsAPI.PCAPGetParams;
  export import Ownerships = OwnershipsAPI.Ownerships;
  export import MagicVisibilityPCAPsOwnership = OwnershipsAPI.MagicVisibilityPCAPsOwnership;
  export import OwnershipGetResponse = OwnershipsAPI.OwnershipGetResponse;
  export import OwnershipCreateParams = OwnershipsAPI.OwnershipCreateParams;
  export import OwnershipDeleteParams = OwnershipsAPI.OwnershipDeleteParams;
  export import OwnershipGetParams = OwnershipsAPI.OwnershipGetParams;
  export import OwnershipValidateParams = OwnershipsAPI.OwnershipValidateParams;
  export import Downloads = DownloadsAPI.Downloads;
  export import DownloadGetParams = DownloadsAPI.DownloadGetParams;
}
