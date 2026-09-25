// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseClientSecret extends APIResource {
  static override readonly _key: readonly ['accounts', 'clientSecret'] = Object.freeze([
    'accounts',
    'clientSecret',
  ] as const);

  /**
   * Creates a Stripe setup intent for adding a payment method to an account. Returns
   * a client secret for frontend payment method collection.
   *
   * @example
   * ```ts
   * const clientSecret =
   *   await client.accounts.clientSecret.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  create(params: ClientSecretCreateParams, options?: RequestOptions): APIPromise<ClientSecretCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(path`/accounts/${account_id}/client-secret`, options) as APIPromise<{
        result: ClientSecretCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class ClientSecret extends BaseClientSecret {}

export interface ClientSecretCreateResponse {
  /**
   * The Stripe client secret for frontend payment confirmation.
   */
  client_secret?: string;
}

export interface ClientSecretCreateParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace ClientSecret {
  export {
    type ClientSecretCreateResponse as ClientSecretCreateResponse,
    type ClientSecretCreateParams as ClientSecretCreateParams,
  };
}
