// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCredentials extends APIResource {
  static override readonly _key: readonly ['containers', 'registries', 'credentials'] = Object.freeze([
    'containers',
    'registries',
    'credentials',
  ] as const);

  /**
   * Generates credentials for accessing a configured container image registry.
   *
   * @example
   * ```ts
   * const response =
   *   await client.containers.registries.credentials.generate(
   *     'registry.cloudflare.com',
   *     { account_id: 'account-123' },
   *   );
   * ```
   */
  generate(
    domain: string,
    params: CredentialGenerateParams,
    options?: RequestOptions,
  ): APIPromise<CredentialGenerateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/containers/registries/${domain}/credentials`, {
        body,
        ...options,
      }) as APIPromise<{ result: CredentialGenerateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Credentials extends BaseCredentials {}

/**
 * Credentials returned for an authenticated registry configured on a Containers
 * account.
 */
export interface CredentialGenerateResponse {
  /**
   * A unique identifier for the user's account.
   */
  account_id: string;

  /**
   * The password to use when authenticating to the image registry.
   */
  password: string;

  /**
   * The domain of the image registry these credentials target.
   */
  registry_host: string;

  /**
   * The username to use when authenticating to the image registry.
   */
  username: string;
}

export interface CredentialGenerateParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Body param: The number of minutes Cloudflare managed registry credentials stay
   * valid. Required for managed registries and must remain positive. Cloudflare
   * ignores this value for external registries.
   */
  expiration_minutes?: number;

  /**
   * Body param: The permissions for Cloudflare managed registry credentials.
   * Required for managed registries. Cloudflare ignores this value for external
   * registries.
   */
  permissions?: Array<'pull' | 'push' | 'list'>;
}

export declare namespace Credentials {
  export {
    type CredentialGenerateResponse as CredentialGenerateResponse,
    type CredentialGenerateParams as CredentialGenerateParams,
  };
}
