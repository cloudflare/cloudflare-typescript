// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DownloadAPI from './download';
import { Download, DownloadGetParams } from './download';
import * as OwnershipAPI from './ownership';
import {
  Ownership,
  OwnershipCreateParams,
  OwnershipCreateResponse,
  OwnershipDeleteParams,
  OwnershipGetParams,
  OwnershipGetResponse,
  OwnershipValidateParams,
  OwnershipValidateResponse,
} from './ownership';
import { SinglePage } from '../../../pagination';

export class PCAPs extends APIResource {
  ownership: OwnershipAPI.Ownership = new OwnershipAPI.Ownership(this._client);
  download: DownloadAPI.Download = new DownloadAPI.Download(this._client);

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
  list(
    params: PCAPListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PCAPListResponsesSinglePage, PCAPListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/pcaps`, PCAPListResponsesSinglePage, options);
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

export class PCAPListResponsesSinglePage extends SinglePage<PCAPListResponse> {}

export type PCAPCreateResponse =
  | PCAPCreateResponse.MagicVisibilityPCAPsPCAPsResponseSimple
  | PCAPCreateResponse.MagicVisibilityPCAPsPCAPsResponseFull;

export namespace PCAPCreateResponse {
  export interface MagicVisibilityPCAPsPCAPsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: MagicVisibilityPCAPsPCAPsResponseSimple.FilterV1;

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

  export namespace MagicVisibilityPCAPsPCAPsResponseSimple {
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

  export interface MagicVisibilityPCAPsPCAPsResponseFull {
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
    filter_v1?: MagicVisibilityPCAPsPCAPsResponseFull.FilterV1;

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

  export namespace MagicVisibilityPCAPsPCAPsResponseFull {
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

export type PCAPListResponse =
  | PCAPListResponse.MagicVisibilityPCAPsPCAPsResponseSimple
  | PCAPListResponse.MagicVisibilityPCAPsPCAPsResponseFull;

export namespace PCAPListResponse {
  export interface MagicVisibilityPCAPsPCAPsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: MagicVisibilityPCAPsPCAPsResponseSimple.FilterV1;

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

  export namespace MagicVisibilityPCAPsPCAPsResponseSimple {
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

  export interface MagicVisibilityPCAPsPCAPsResponseFull {
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
    filter_v1?: MagicVisibilityPCAPsPCAPsResponseFull.FilterV1;

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

  export namespace MagicVisibilityPCAPsPCAPsResponseFull {
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
  | PCAPGetResponse.MagicVisibilityPCAPsPCAPsResponseSimple
  | PCAPGetResponse.MagicVisibilityPCAPsPCAPsResponseFull;

export namespace PCAPGetResponse {
  export interface MagicVisibilityPCAPsPCAPsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: MagicVisibilityPCAPsPCAPsResponseSimple.FilterV1;

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

  export namespace MagicVisibilityPCAPsPCAPsResponseSimple {
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

  export interface MagicVisibilityPCAPsPCAPsResponseFull {
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
    filter_v1?: MagicVisibilityPCAPsPCAPsResponseFull.FilterV1;

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

  export namespace MagicVisibilityPCAPsPCAPsResponseFull {
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
  | PCAPCreateParams.MagicVisibilityPCAPsPCAPsRequestSimple
  | PCAPCreateParams.MagicVisibilityPCAPsPCAPsRequestFull;

export namespace PCAPCreateParams {
  export interface MagicVisibilityPCAPsPCAPsRequestSimple {
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
    filter_v1?: PCAPCreateParams.MagicVisibilityPCAPsPCAPsRequestSimple.FilterV1;
  }

  export namespace MagicVisibilityPCAPsPCAPsRequestSimple {
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

  export interface MagicVisibilityPCAPsPCAPsRequestFull {
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
    filter_v1?: PCAPCreateParams.MagicVisibilityPCAPsPCAPsRequestFull.FilterV1;

    /**
     * Body param: The limit of packets contained in a packet capture.
     */
    packet_limit?: number;
  }

  export namespace MagicVisibilityPCAPsPCAPsRequestFull {
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

PCAPs.PCAPListResponsesSinglePage = PCAPListResponsesSinglePage;
PCAPs.Ownership = Ownership;
PCAPs.Download = Download;

export declare namespace PCAPs {
  export {
    type PCAPCreateResponse as PCAPCreateResponse,
    type PCAPListResponse as PCAPListResponse,
    type PCAPGetResponse as PCAPGetResponse,
    PCAPListResponsesSinglePage as PCAPListResponsesSinglePage,
    type PCAPCreateParams as PCAPCreateParams,
    type PCAPListParams as PCAPListParams,
    type PCAPGetParams as PCAPGetParams,
  };

  export {
    Ownership as Ownership,
    type OwnershipCreateResponse as OwnershipCreateResponse,
    type OwnershipGetResponse as OwnershipGetResponse,
    type OwnershipValidateResponse as OwnershipValidateResponse,
    type OwnershipCreateParams as OwnershipCreateParams,
    type OwnershipDeleteParams as OwnershipDeleteParams,
    type OwnershipGetParams as OwnershipGetParams,
    type OwnershipValidateParams as OwnershipValidateParams,
  };

  export { Download as Download, type DownloadGetParams as DownloadGetParams };
}
