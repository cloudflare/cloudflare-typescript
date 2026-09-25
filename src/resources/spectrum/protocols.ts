// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseProtocols extends APIResource {
  static override readonly _key: readonly ['spectrum', 'protocols'] = Object.freeze([
    'spectrum',
    'protocols',
  ] as const);

  /**
   * Retrieves a list of Spectrum application protocols available for a zone.
   */
  list(
    params: ProtocolListParams,
    options?: RequestOptions,
  ): PagePromise<ProtocolListResponsesSinglePage, ProtocolListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/spectrum/protocols`,
      SinglePage<ProtocolListResponse>,
      options,
    );
  }
}
export class Protocols extends BaseProtocols {}

export type ProtocolListResponsesSinglePage = SinglePage<ProtocolListResponse>;

export interface ProtocolListResponse {
  /**
   * The full name of the application protocol.
   */
  description: string;

  /**
   * The short name of the application protocol.
   */
  name: string;

  /**
   * The available listening ports for the given protocol.
   */
  ports: Array<number>;

  /**
   * The transport layer protocol used by the application protocol
   */
  transport: string;
}

export interface ProtocolListParams {
  /**
   * Zone identifier.
   */
  zone_id: string;
}

export declare namespace Protocols {
  export {
    type ProtocolListResponse as ProtocolListResponse,
    type ProtocolListResponsesSinglePage as ProtocolListResponsesSinglePage,
    type ProtocolListParams as ProtocolListParams,
  };
}
