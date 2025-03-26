// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Publish extends APIResource {
  /**
   * Publish current Zaraz preview configuration for a zone.
   */
  create(params: PublishCreateParams, options?: RequestOptions): APIPromise<PublishCreateResponse> {
    const { zone_id, body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/settings/zaraz/publish`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: PublishCreateResponse }>
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
