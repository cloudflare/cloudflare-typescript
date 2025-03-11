// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Attackers extends APIResource {
  /**
   * Lists attackers
   */
  list(accountId: number, options?: Core.RequestOptions): Core.APIPromise<AttackerListResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/attackers`, options);
  }
}

export interface AttackerListResponse {
  items: AttackerListResponse.Items;

  type: string;
}

export namespace AttackerListResponse {
  export interface Items {
    type: string;
  }
}

export declare namespace Attackers {
  export { type AttackerListResponse as AttackerListResponse };
}
