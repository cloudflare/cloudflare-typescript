// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ActivationCheck extends APIResource {
  /**
   * Triggeres a new activation check for a PENDING Zone. This can be triggered every
   * 5 min for paygo/ent customers, every hour for FREE Zones.
   */
  trigger(
    params: ActivationCheckTriggerParams,
    options?: RequestOptions,
  ): APIPromise<ActivationCheckTriggerResponse> {
    const { zone_id } = params;
    return (
      this._client.put(path`/zones/${zone_id}/activation_check`, options) as APIPromise<{
        result: ActivationCheckTriggerResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ActivationCheckTriggerResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface ActivationCheckTriggerParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace ActivationCheck {
  export {
    type ActivationCheckTriggerResponse as ActivationCheckTriggerResponse,
    type ActivationCheckTriggerParams as ActivationCheckTriggerParams,
  };
}
