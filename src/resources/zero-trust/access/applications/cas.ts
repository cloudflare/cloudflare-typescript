// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as CAsAPI from 'cloudflare/resources/zero-trust/access/applications/cas';
import * as Shared from 'cloudflare/resources/shared';
import { SinglePage } from 'cloudflare/pagination';

export class CAs extends APIResource {
  /**
   * Generates a new short-lived certificate CA and public key.
   */
  create(
    uuid: string,
    params?: CACreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a>;
  create(
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a>;
  create(
    uuid: string,
    params: CACreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    if (isRequestOptions(params)) {
      return this.create(uuid, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/ca`,
        options,
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists short-lived certificate CAs and their public keys.
   */
  list(
    params?: CAListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustCAsSinglePage, ZeroTrustCA>;
  list(options?: Core.RequestOptions): Core.PagePromise<ZeroTrustCAsSinglePage, ZeroTrustCA>;
  list(
    params: CAListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustCAsSinglePage, ZeroTrustCA> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/access/apps/ca`,
      ZeroTrustCAsSinglePage,
      options,
    );
  }

  /**
   * Deletes a short-lived certificate CA.
   */
  delete(
    uuid: string,
    params?: CADeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CADeleteResponse>;
  delete(uuid: string, options?: Core.RequestOptions): Core.APIPromise<CADeleteResponse>;
  delete(
    uuid: string,
    params: CADeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CADeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(uuid, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/ca`,
        options,
      ) as Core.APIPromise<{ result: CADeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a short-lived certificate CA and its public key.
   */
  get(
    uuid: string,
    params?: CAGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a>;
  get(
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a>;
  get(
    uuid: string,
    params: CAGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    if (isRequestOptions(params)) {
      return this.get(uuid, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/ca`,
        options,
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ZeroTrustCAsSinglePage extends SinglePage<ZeroTrustCA> {}

export interface ZeroTrustCA {
  /**
   * The ID of the CA.
   */
  id?: string;

  /**
   * The Application Audience (AUD) tag. Identifies the application associated with
   * the CA.
   */
  aud?: string;

  /**
   * The public key to add to your SSH server configuration.
   */
  public_key?: string;
}

export interface CADeleteResponse {
  /**
   * The ID of the CA.
   */
  id?: string;
}

export interface CACreateParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface CAListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface CADeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface CAGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace CAs {
  export import ZeroTrustCA = CAsAPI.ZeroTrustCA;
  export import CADeleteResponse = CAsAPI.CADeleteResponse;
  export import ZeroTrustCAsSinglePage = CAsAPI.ZeroTrustCAsSinglePage;
  export import CACreateParams = CAsAPI.CACreateParams;
  export import CAListParams = CAsAPI.CAListParams;
  export import CADeleteParams = CAsAPI.CADeleteParams;
  export import CAGetParams = CAsAPI.CAGetParams;
}
