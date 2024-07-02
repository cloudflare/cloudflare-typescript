// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as StatusesAPI from './statuses';

export class Statuses extends APIResource {
  /**
   * Advertise or withdraw BGP route for a prefix.
   */
  edit(
    prefixId: string,
    params: StatusEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/status`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: StatusEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the current advertisement state for a prefix.
   */
  get(
    prefixId: string,
    params: StatusGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/status`,
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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Enablement of prefix advertisement to the Internet.
   */
  advertised: boolean;
}

export interface StatusGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Statuses {
  export import StatusEditResponse = StatusesAPI.StatusEditResponse;
  export import StatusGetResponse = StatusesAPI.StatusGetResponse;
  export import StatusEditParams = StatusesAPI.StatusEditParams;
  export import StatusGetParams = StatusesAPI.StatusGetParams;
}
