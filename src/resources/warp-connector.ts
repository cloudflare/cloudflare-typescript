// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as Shared from 'cloudflare/resources/shared';
import { UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8sV4PagePaginationArray } from 'cloudflare/resources/shared';
import { type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class WARPConnector extends APIResource {
  /**
   * Creates a new Warp Connector Tunnel in an account.
   */
  create(
    params: WARPConnectorCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/warp_connector`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters Warp Connector Tunnels in an account.
   */
  list(
    params: WARPConnectorListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8sV4PagePaginationArray,
    Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8
  > {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/warp_connector`,
      UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8sV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes a Warp Connector Tunnel from an account.
   */
  delete(
    tunnelId: string,
    params: WARPConnectorDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/warp_connector/${tunnelId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Warp Connector Tunnel.
   */
  edit(
    tunnelId: string,
    params: WARPConnectorEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/warp_connector/${tunnelId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Warp Connector Tunnel.
   */
  get(
    tunnelId: string,
    params: WARPConnectorGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/warp_connector/${tunnelId}`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the token used to associate warp device with a specific Warp Connector
   * tunnel.
   */
  token(
    tunnelId: string,
    params: WARPConnectorTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WARPConnectorTokenResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/warp_connector/${tunnelId}/token`,
        options,
      ) as Core.APIPromise<{ result: WARPConnectorTokenResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WARPConnectorTokenResponse = unknown | Array<unknown> | string;

export interface WARPConnectorCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for the tunnel.
   */
  name: string;
}

export interface WARPConnectorListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param:
   */
  exclude_prefix?: string;

  /**
   * Query param: If provided, include only tunnels that were created (and not
   * deleted) before this time.
   */
  existed_at?: string;

  /**
   * Query param:
   */
  include_prefix?: string;

  /**
   * Query param: If `true`, only include deleted tunnels. If `false`, exclude
   * deleted tunnels. If empty, all tunnels will be included.
   */
  is_deleted?: boolean;

  /**
   * Query param: A user-friendly name for the tunnel.
   */
  name?: string;

  /**
   * Query param: UUID of the tunnel.
   */
  uuid?: string;

  /**
   * Query param:
   */
  was_active_at?: string;

  /**
   * Query param:
   */
  was_inactive_at?: string;
}

export interface WARPConnectorDeleteParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface WARPConnectorEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for the tunnel.
   */
  name?: string;

  /**
   * Body param: Sets the password required to run a locally-managed tunnel. Must be
   * at least 32 bytes and encoded as a base64 string.
   */
  tunnel_secret?: string;
}

export interface WARPConnectorGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export interface WARPConnectorTokenParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export { UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8sV4PagePaginationArray };
