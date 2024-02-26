// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ActivationChecksAPI from 'cloudflare/resources/activation-checks';

export class ActivationChecks extends APIResource {
  /**
   * Triggeres a new activation check for a PENDING Zone. This can be triggered every
   * 5 min for paygo/ent customers, every hour for FREE Zones.
   */
  update(
    params: ActivationCheckUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActivationCheckUpdateResponse> {
    const { zone_id } = params;
    return (
      this._client.put(`/zones/${zone_id}/activation_check`, options) as Core.APIPromise<{
        result: ActivationCheckUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ActivationCheckUpdateResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface ActivationCheckUpdateParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace ActivationChecks {
  export import ActivationCheckUpdateResponse = ActivationChecksAPI.ActivationCheckUpdateResponse;
  export import ActivationCheckUpdateParams = ActivationChecksAPI.ActivationCheckUpdateParams;
}
