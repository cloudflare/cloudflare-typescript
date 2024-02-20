// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ActivationChecksAPI from 'cloudflare/resources/activation-checks';

export class ActivationChecks extends APIResource {
  /**
   * Triggeres a new activation check for a PENDING Zone. This can be triggered every
   * 5 min for paygo/ent customers, every hour for FREE Zones.
   */
  replace(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<ActivationCheckReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneId}/activation_check`, options) as Core.APIPromise<{
        result: ActivationCheckReplaceResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ActivationCheckReplaceResponse {
  /**
   * Identifier
   */
  id?: string;
}

export namespace ActivationChecks {
  export import ActivationCheckReplaceResponse = ActivationChecksAPI.ActivationCheckReplaceResponse;
}
