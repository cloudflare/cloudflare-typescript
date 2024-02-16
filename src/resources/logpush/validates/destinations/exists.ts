// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ExistsAPI from 'cloudflare/resources/logpush/validates/destinations/exists';

export class Exists extends APIResource {
  /**
   * Checks if there is an existing job with a destination.
   */
  deleteAccountsAccountIdentifierLogpushValidateDestinationExists(
    accountOrZone: string,
    accountOrZoneId: string,
    body: ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse | null> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/validate/destination/exists`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse {
  exists?: boolean;
}

export interface ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;
}

export namespace Exists {
  export import ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse = ExistsAPI.ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse;
  export import ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams = ExistsAPI.ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams;
}
