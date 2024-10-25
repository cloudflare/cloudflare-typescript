// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TemporaryCredentialsAPI from './temporary-credentials';

export class TemporaryCredentials extends APIResource {
  /**
   * Creates temporary access credentials on a bucket that can be optionally scoped
   * to prefixes or objects.
   */
  create(
    params: TemporaryCredentialCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TemporaryCredentialCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/r2/temp-access-credentials`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TemporaryCredentialCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TemporaryCredential {
  /**
   * Name of the R2 bucket
   */
  bucket: string;

  /**
   * The parent access key id to use for signing
   */
  parentAccessKeyId: string;

  /**
   * Permissions allowed on the credentials
   */
  permission: 'admin-read-write' | 'admin-read-only' | 'object-read-write' | 'object-read-only';

  /**
   * How long the credentials will live for in seconds
   */
  ttlSeconds: number;

  /**
   * Optional object paths to scope the credentials to
   */
  objects?: Array<string>;

  /**
   * Optional prefix paths to scope the credentials to
   */
  prefixes?: Array<string>;
}

export interface TemporaryCredentialCreateResponse {
  /**
   * ID for new access key
   */
  accessKeyId?: string;

  /**
   * Secret access key
   */
  secretAccessKey?: string;

  /**
   * Security token
   */
  sessionToken?: string;
}

export interface TemporaryCredentialCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param: Name of the R2 bucket
   */
  bucket: string;

  /**
   * Body param: The parent access key id to use for signing
   */
  parentAccessKeyId: string;

  /**
   * Body param: Permissions allowed on the credentials
   */
  permission: 'admin-read-write' | 'admin-read-only' | 'object-read-write' | 'object-read-only';

  /**
   * Body param: How long the credentials will live for in seconds
   */
  ttlSeconds: number;

  /**
   * Body param: Optional object paths to scope the credentials to
   */
  objects?: Array<string>;

  /**
   * Body param: Optional prefix paths to scope the credentials to
   */
  prefixes?: Array<string>;
}

export namespace TemporaryCredentials {
  export import TemporaryCredential = TemporaryCredentialsAPI.TemporaryCredential;
  export import TemporaryCredentialCreateResponse = TemporaryCredentialsAPI.TemporaryCredentialCreateResponse;
  export import TemporaryCredentialCreateParams = TemporaryCredentialsAPI.TemporaryCredentialCreateParams;
}
