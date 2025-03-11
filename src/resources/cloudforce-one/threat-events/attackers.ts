// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Attackers extends APIResource {
  /**
   * Lists attackers
   */
  list(accountID: number, options?: RequestOptions): APIPromise<AttackerListResponse> {
    return this._client.get(path`/accounts/${accountID}/cloudforce-one/events/attackers`, options);
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
