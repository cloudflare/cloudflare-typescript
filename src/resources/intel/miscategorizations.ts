// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MiscategorizationsAPI from 'cloudflare/resources/intel/miscategorizations';
import * as Shared from 'cloudflare/resources/shared';

export class Miscategorizations extends APIResource {
  /**
   * Create Miscategorization
   */
  create(
    params: MiscategorizationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/intel/miscategorization`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MiscategorizationCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Content category IDs to add.
   */
  content_adds?: Array<number>;

  /**
   * Body param: Content category IDs to remove.
   */
  content_removes?: Array<number>;

  /**
   * Body param:
   */
  indicator_type?: 'domain' | 'ipv4' | 'ipv6' | 'url';

  /**
   * Body param: Provide only if indicator_type is `ipv4` or `ipv6`.
   */
  ip?: unknown;

  /**
   * Body param: Security category IDs to add.
   */
  security_adds?: Array<number>;

  /**
   * Body param: Security category IDs to remove.
   */
  security_removes?: Array<number>;

  /**
   * Body param: Provide only if indicator_type is `domain` or `url`. Example if
   * indicator_type is `domain`: `example.com`. Example if indicator_type is `url`:
   * `https://example.com/news/`.
   */
  url?: string;
}

export namespace Miscategorizations {
  export import MiscategorizationCreateParams = MiscategorizationsAPI.MiscategorizationCreateParams;
}
