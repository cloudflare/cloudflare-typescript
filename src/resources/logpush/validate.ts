// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValidateAPI from 'cloudflare/resources/logpush/validate';

export class Validate extends APIResource {
  /**
   * Checks if there is an existing job with a destination.
   */
  destination(
    accountOrZone: string,
    accountOrZoneId: string,
    body: ValidateDestinationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValidateDestinationResponse | null> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/validate/destination/exists`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ValidateDestinationResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Validates logpull origin with logpull_options.
   */
  origin(
    accountOrZone: string,
    accountOrZoneId: string,
    body: ValidateOriginParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValidateOriginResponse | null> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/validate/origin`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ValidateOriginResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ValidateDestinationResponse {
  exists?: boolean;
}

export interface ValidateOriginResponse {
  message?: string;

  valid?: boolean;
}

export interface ValidateDestinationParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;
}

export interface ValidateOriginParams {
  /**
   * This field is deprecated. Use `output_options` instead. Configuration string. It
   * specifies things like requested fields and timestamp formats. If migrating from
   * the logpull api, copy the url (full url or just the query string) of your call
   * here, and logpush will keep on making this call for you, setting start and end
   * times appropriately.
   */
  logpull_options: string | null;
}

export namespace Validate {
  export import ValidateDestinationResponse = ValidateAPI.ValidateDestinationResponse;
  export import ValidateOriginResponse = ValidateAPI.ValidateOriginResponse;
  export import ValidateDestinationParams = ValidateAPI.ValidateDestinationParams;
  export import ValidateOriginParams = ValidateAPI.ValidateOriginParams;
}
