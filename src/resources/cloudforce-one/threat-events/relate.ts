// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Relate extends APIResource {
  /**
   * Creates event references for a event
   */
  update(
    accountId: number,
    eventId: string,
    body: RelateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelateUpdateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/cloudforce-one/events/relate/${eventId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RelateUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes an event refence
   */
  delete(
    accountId: number,
    eventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelateDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/cloudforce-one/events/relate/${eventId}`,
        options,
      ) as Core.APIPromise<{ result: RelateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RelateUpdateResponse {
  success: boolean;
}

export interface RelateDeleteResponse {
  success: boolean;
}

export interface RelateUpdateParams {
  events: Array<string>;
}

export declare namespace Relate {
  export {
    type RelateUpdateResponse as RelateUpdateResponse,
    type RelateDeleteResponse as RelateDeleteResponse,
    type RelateUpdateParams as RelateUpdateParams,
  };
}
