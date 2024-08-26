// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { OwnershipResource } from './ownership';
import { Download } from './download';
import * as PCAPsAPI from './pcaps';
import * as DownloadAPI from './download';
import * as OwnershipAPI from './ownership';
import { SinglePage } from '../../pagination';

export class PCAPs extends APIResource {
  ownership: OwnershipAPI.OwnershipResource = new OwnershipAPI.OwnershipResource(this._client);
  download: DownloadAPI.Download = new DownloadAPI.Download(this._client);

  /**
   * Create new PCAP request for account.
   */
  create(params: PCAPCreateParams, options?: Core.RequestOptions): Core.APIPromise<PCAPCreateResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/pcaps`, { body, ...options }) as Core.APIPromise<{ result: PCAPCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all packet capture requests for an account.
   */
  list(params: PCAPListParams, options?: Core.RequestOptions): Core.PagePromise<PCAPListResponsesSinglePage, PCAPListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/pcaps`, PCAPListResponsesSinglePage, options);
  }

  /**
   * Get information for a PCAP request by id.
   */
  get(pcapId: string, params: PCAPGetParams, options?: Core.RequestOptions): Core.APIPromise<PCAPGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/pcaps/${pcapId}`, options) as Core.APIPromise<{ result: PCAPGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class PCAPListResponsesSinglePage extends SinglePage<PCAPListResponse> {
}

export interface PCAP {
  /**
   * The ID for the packet capture.
   */
  id?: string;

  /**
   * The packet capture filter. When this field is empty, all packets are captured.
   */
  filter_v1?: PCAPFilter;

  /**
   * The status of the packet capture request.
   */
  status?: 'unknown' | 'success' | 'pending' | 'running' | 'conversion_pending' | 'conversion_running' | 'complete' | 'failed';

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

/**
 * The packet capture filter. When this field is empty, all packets are captured.
 */
export interface PCAPFilter {
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

/**
 * The packet capture filter. When this field is empty, all packets are captured.
 */
export interface PCAPFilterParam {
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

export type PCAPCreateResponse = PCAP | PCAPCreateResponse.MagicVisibilityPCAPsResponseFull

export namespace PCAPCreateResponse {
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
    filter_v1?: PCAPsAPI.PCAPFilter;

    /**
     * The status of the packet capture request.
     */
    status?: 'unknown' | 'success' | 'pending' | 'running' | 'conversion_pending' | 'conversion_running' | 'complete' | 'failed';

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
}

export type PCAPListResponse = PCAP | PCAPListResponse.MagicVisibilityPCAPsResponseFull

export namespace PCAPListResponse {
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
    filter_v1?: PCAPsAPI.PCAPFilter;

    /**
     * The status of the packet capture request.
     */
    status?: 'unknown' | 'success' | 'pending' | 'running' | 'conversion_pending' | 'conversion_running' | 'complete' | 'failed';

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
}

export type PCAPGetResponse = PCAP | PCAPGetResponse.MagicVisibilityPCAPsResponseFull

export namespace PCAPGetResponse {
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
    filter_v1?: PCAPsAPI.PCAPFilter;

    /**
     * The status of the packet capture request.
     */
    status?: 'unknown' | 'success' | 'pending' | 'running' | 'conversion_pending' | 'conversion_running' | 'complete' | 'failed';

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
}

export type PCAPCreateParams = PCAPCreateParams.MagicVisibilityPCAPsRequestSimple | PCAPCreateParams.MagicVisibilityPCAPsRequestFull

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
    filter_v1?: PCAPFilterParam;
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
    filter_v1?: PCAPFilterParam;

    /**
     * Body param: The limit of packets contained in a packet capture.
     */
    packet_limit?: number;
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
  export import OwnershipResource = OwnershipAPI.OwnershipResource;
  export import Ownership = OwnershipAPI.Ownership;
  export import OwnershipGetResponse = OwnershipAPI.OwnershipGetResponse;
  export import OwnershipCreateParams = OwnershipAPI.OwnershipCreateParams;
  export import OwnershipDeleteParams = OwnershipAPI.OwnershipDeleteParams;
  export import OwnershipGetParams = OwnershipAPI.OwnershipGetParams;
  export import OwnershipValidateParams = OwnershipAPI.OwnershipValidateParams;
  export import Download = DownloadAPI.Download;
  export import DownloadGetParams = DownloadAPI.DownloadGetParams;
}
