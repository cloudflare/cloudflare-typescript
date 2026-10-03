// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CredentialsAPI from './credentials';
import {
  BaseCredentials,
  CredentialGenerateParams,
  CredentialGenerateResponse,
  Credentials,
} from './credentials';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRegistries extends APIResource {
  static override readonly _key: readonly ['containers', 'registries'] = Object.freeze([
    'containers',
    'registries',
  ] as const);

  /**
   * Registers credentials for a supported private external image registry so
   * Containers can pull images from it. This endpoint does not create a registry or
   * upload an image. Public Docker Hub images and images in the Cloudflare managed
   * registry do not require this configuration.
   *
   * Refer to
   * [Image management](https://developers.cloudflare.com/containers/platform-details/image-management/)
   * for supported registries and instructions for storing registry credentials.
   *
   * @example
   * ```ts
   * const registry = await client.containers.registries.create({
   *   account_id: 'account-123',
   *   auth: {
   *     private_credential: {
   *       secret_name: 'API_KEY',
   *       store_id: '14758f1afd44c09b7992073ccf00b43d',
   *     },
   *     public_credential: 'example-user',
   *   },
   *   domain: 'docker.io',
   *   kind: 'ECR',
   * });
   * ```
   */
  create(params: RegistryCreateParams, options?: RequestOptions): APIPromise<RegistryCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/containers/registries`, {
        body,
        ...options,
      }) as APIPromise<{ result: RegistryCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the list of configured registries in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const registryListResponse of client.containers.registries.list(
   *   { account_id: 'account-123' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RegistryListParams,
    options?: RequestOptions,
  ): PagePromise<RegistryListResponsesSinglePage, RegistryListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/containers/registries`,
      SinglePage<RegistryListResponse>,
      options,
    );
  }

  /**
   * Delete a registry from the account, this will prevent Containers from pulling
   * images from the registry.
   *
   * @example
   * ```ts
   * const registry = await client.containers.registries.delete(
   *   'domain',
   *   { account_id: 'account-123' },
   * );
   * ```
   */
  delete(
    domain: string,
    params: RegistryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RegistryDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/containers/registries/${domain}`,
        options,
      ) as APIPromise<{ result: RegistryDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Registries extends BaseRegistries {
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);
}

export type RegistryListResponsesSinglePage = SinglePage<RegistryListResponse>;

/**
 * An image registry added in a customer account.
 */
export interface RegistryCreateResponse {
  /**
   * UTC timestamp string in ISO 8601 format.
   */
  created_at: string;

  /**
   * A string representation of a domain name. See RFC-1034
   * (https://www.ietf.org/rfc/rfc1034.txt). Consider that the limit of a domain name
   * is min 3 and max 253 ASCII characters.
   */
  domain: string;

  /**
   * The type of registry that is being configured.
   */
  kind?: 'ECR' | 'DockerHub' | 'GAR' | 'default';

  /**
   * Public component of the registry credentials. For managed registries this is a
   * base64-encoded public key; for external registries the format depends on the
   * registry provider.
   */
  public_key?: string;
}

/**
 * An image registry added in a customer account.
 */
export interface RegistryListResponse {
  /**
   * UTC timestamp string in ISO 8601 format.
   */
  created_at: string;

  /**
   * A string representation of a domain name. See RFC-1034
   * (https://www.ietf.org/rfc/rfc1034.txt). Consider that the limit of a domain name
   * is min 3 and max 253 ASCII characters.
   */
  domain: string;

  /**
   * The type of registry that is being configured.
   */
  kind?: 'ECR' | 'DockerHub' | 'GAR' | 'default';

  /**
   * Public component of the registry credentials. For managed registries this is a
   * base64-encoded public key; for external registries the format depends on the
   * registry provider.
   */
  public_key?: string;
}

/**
 * Result of deleting an image registry from a Containers account.
 */
export interface RegistryDeleteResponse {
  /**
   * A string representation of a domain name. See RFC-1034
   * (https://www.ietf.org/rfc/rfc1034.txt). Consider that the limit of a domain name
   * is min 3 and max 253 ASCII characters.
   */
  domain: string;
}

export interface RegistryCreateParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Body param: Credentials for authenticating to a private external image registry.
   * Store the private credential in
   * [Secrets Store](https://developers.cloudflare.com/secrets-store/) before calling
   * the API. Refer to
   * [Image management](https://developers.cloudflare.com/containers/platform-details/image-management/)
   * for the credential required by each supported registry provider.
   */
  auth: RegistryCreateParams.Auth;

  /**
   * Body param: Hostname of the private registry, without a scheme or image path.
   * Supported hostnames are `docker.io`, AWS ECR hostnames, and Google Artifact
   * Registry `*-docker.pkg.dev` hostnames.
   */
  domain: string;

  /**
   * Body param: Registry provider. This must match `domain`: `DockerHub` for
   * `docker.io`, `ECR` for AWS ECR, or `GAR` for Google Artifact Registry.
   */
  kind: 'ECR' | 'DockerHub' | 'GAR';

  /**
   * Body param: Omit this field or set it to `false`. Public Docker Hub images do
   * not require registry configuration and cannot be added with this endpoint.
   */
  is_public?: false;
}

export namespace RegistryCreateParams {
  /**
   * Credentials for authenticating to a private external image registry. Store the
   * private credential in
   * [Secrets Store](https://developers.cloudflare.com/secrets-store/) before calling
   * the API. Refer to
   * [Image management](https://developers.cloudflare.com/containers/platform-details/image-management/)
   * for the credential required by each supported registry provider.
   */
  export interface Auth {
    /**
     * A reference to the private registry credential in Secrets Store. The referenced
     * secret must have the `containers` scope. Raw secret values are not accepted.
     */
    private_credential: Auth.PrivateCredential;

    /**
     * The non-secret part of the registry credential: an AWS access key ID for ECR, a
     * username for Docker Hub, or a service account email for Google Artifact
     * Registry.
     */
    public_credential: string;
  }

  export namespace Auth {
    /**
     * A reference to the private registry credential in Secrets Store. The referenced
     * secret must have the `containers` scope. Raw secret values are not accepted.
     */
    export interface PrivateCredential {
      /**
       * Name of the secret within the store.
       */
      secret_name: string;

      /**
       * Identifier of the Secrets Store containing the secret.
       */
      store_id: string;
    }
  }
}

export interface RegistryListParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export interface RegistryDeleteParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

Registries.Credentials = Credentials;
Registries.BaseCredentials = BaseCredentials;

export declare namespace Registries {
  export {
    type RegistryCreateResponse as RegistryCreateResponse,
    type RegistryListResponse as RegistryListResponse,
    type RegistryDeleteResponse as RegistryDeleteResponse,
    type RegistryListResponsesSinglePage as RegistryListResponsesSinglePage,
    type RegistryCreateParams as RegistryCreateParams,
    type RegistryListParams as RegistryListParams,
    type RegistryDeleteParams as RegistryDeleteParams,
  };

  export {
    Credentials as Credentials,
    BaseCredentials as BaseCredentials,
    type CredentialGenerateResponse as CredentialGenerateResponse,
    type CredentialGenerateParams as CredentialGenerateParams,
  };
}
