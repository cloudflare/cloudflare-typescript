// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatusesAPI from 'cloudflare/resources/addresses/prefixes/bgps/statuses';

export class Statuses extends APIResource {
  /**
   * Advertise or withdraw BGP route for a prefix.
   */
  edit(
    accountId: string,
    prefixId: string,
    body: StatusEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusEditResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/status`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: StatusEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the current advertisement state for a prefix.
   */
  get(
    accountId: string,
    prefixId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/status`,
        options,
      ) as Core.APIPromise<{ result: StatusGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface StatusEditResponse {
  /**
   * Enablement of prefix advertisement to the Internet.
   */
  advertised?: boolean;

  /**
   * Last time the advertisement status was changed. This field is only not 'null' if
   * on demand is enabled.
   */
  advertised_modified_at?: string | null;
}

export interface StatusGetResponse {
  /**
   * Enablement of prefix advertisement to the Internet.
   */
  advertised?: boolean;

  /**
   * Last time the advertisement status was changed. This field is only not 'null' if
   * on demand is enabled.
   */
  advertised_modified_at?: string | null;
}

export interface StatusEditParams {
  /**
   * Enablement of prefix advertisement to the Internet.
   */
  advertised: boolean;
}

export namespace Statuses {
  export import StatusEditResponse = StatusesAPI.StatusEditResponse;
  export import StatusGetResponse = StatusesAPI.StatusGetResponse;
  export import StatusEditParams = StatusesAPI.StatusEditParams;
}
