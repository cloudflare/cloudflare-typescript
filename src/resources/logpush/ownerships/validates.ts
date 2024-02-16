// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValidatesAPI from 'cloudflare/resources/logpush/ownerships/validates';

export class Validates extends APIResource {
  /**
   * Validates ownership challenge of the destination.
   */
  postAccountsAccountIdentifierLogpushOwnershipValidate(
    accountOrZone: string,
    accountOrZoneId: string,
    body: ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse | null> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/ownership/validate`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse {
  valid?: boolean;
}

export interface ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;

  /**
   * Ownership challenge token to prove destination ownership.
   */
  ownership_challenge: string;
}

export namespace Validates {
  export import ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse = ValidatesAPI.ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse;
  export import ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams = ValidatesAPI.ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams;
}
