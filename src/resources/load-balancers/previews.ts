// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PreviewsAPI from 'cloudflare/resources/load-balancers/previews';
import * as PreviewAPI from 'cloudflare/resources/user/load-balancers/preview';

export class Previews extends APIResource {
  /**
   * Get the result of a previous preview operation using the provided preview_id.
   */
  get(
    previewId: unknown,
    params: PreviewGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PreviewAPI.LoadBalancingPreviewResult> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/load_balancers/preview/${previewId}`,
        options,
      ) as Core.APIPromise<{ result: PreviewAPI.LoadBalancingPreviewResult }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PreviewGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Previews {
  export import PreviewGetParams = PreviewsAPI.PreviewGetParams;
}
