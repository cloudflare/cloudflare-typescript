// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Publish extends APIResource {
  /**
   * Publish current Zaraz preview configuration for a zone.
   */
  create(params: PublishCreateParams, options?: Core.RequestOptions): Core.APIPromise<PublishCreateResponse> {
    const { zone_id, body } = params ?? {};
    return (
      this._client.post(`/zones/${zone_id}/settings/zaraz/publish`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: PublishCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PublishCreateResponse = string;

export interface PublishCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Zaraz configuration description.
   */
  body?: string;
}

export declare namespace Publish {
  export {
    type PublishCreateResponse as PublishCreateResponse,
    type PublishCreateParams as PublishCreateParams,
  };
}
