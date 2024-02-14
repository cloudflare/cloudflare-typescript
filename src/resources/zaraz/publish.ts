// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PublishAPI from 'cloudflare/resources/zaraz/publish';

export class Publish extends APIResource {
  /**
   * Publish current Zaraz preview configuration for a zone.
   */
  create(
    zoneId: string,
    body: PublishCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PublishCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/settings/zaraz/publish`, { body, ...options }) as Core.APIPromise<{
        result: PublishCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PublishCreateResponse = string;

export type PublishCreateParams = string;

export namespace Publish {
  export import PublishCreateResponse = PublishAPI.PublishCreateResponse;
  export import PublishCreateParams = PublishAPI.PublishCreateParams;
}
