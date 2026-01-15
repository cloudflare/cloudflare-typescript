// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Credentials extends APIResource {
  /**
   * Store authentication credentials for a catalog. These credentials are used to
   * authenticate with R2 storage when performing catalog operations.
   *
   * @example
   * ```ts
   * const credential =
   *   await client.r2DataCatalog.credentials.create(
   *     'my-data-bucket',
   *     {
   *       account_id: '0123456789abcdef0123456789abcdef',
   *       token: 'your-cloudflare-api-token-here',
   *     },
   *   );
   * ```
   */
  create(
    bucketName: string,
    params: CredentialCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CredentialCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/r2-catalog/${bucketName}/credential`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CredentialCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CredentialCreateResponse = unknown;

export interface CredentialCreateParams {
  /**
   * Path param: Use this to identify the account.
   */
  account_id: string;

  /**
   * Body param: Provides the Cloudflare API token for accessing R2.
   */
  token: string;
}

export declare namespace Credentials {
  export {
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialCreateParams as CredentialCreateParams,
  };
}
