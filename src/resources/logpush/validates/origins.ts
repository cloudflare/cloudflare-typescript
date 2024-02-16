// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginsAPI from 'cloudflare/resources/logpush/validates/origins';

export class Origins extends APIResource {
  /**
   * Validates logpull origin with logpull_options.
   */
  postAccountsAccountIdentifierLogpushValidateOrigin(
    accountOrZone: string,
    accountOrZoneId: string,
    body: OriginPostAccountsAccountIdentifierLogpushValidateOriginParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse | null> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/validate/origin`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse {
  message?: string;

  valid?: boolean;
}

export interface OriginPostAccountsAccountIdentifierLogpushValidateOriginParams {
  /**
   * This field is deprecated. Use `output_options` instead. Configuration string. It
   * specifies things like requested fields and timestamp formats. If migrating from
   * the logpull api, copy the url (full url or just the query string) of your call
   * here, and logpush will keep on making this call for you, setting start and end
   * times appropriately.
   */
  logpull_options: string | null;
}

export namespace Origins {
  export import OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse = OriginsAPI.OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse;
  export import OriginPostAccountsAccountIdentifierLogpushValidateOriginParams = OriginsAPI.OriginPostAccountsAccountIdentifierLogpushValidateOriginParams;
}
