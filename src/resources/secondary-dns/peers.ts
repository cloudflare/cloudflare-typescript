// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PeersAPI from 'cloudflare/resources/secondary-dns/peers';

export class Peers extends APIResource {
  /**
   * Create Peer.
   */
  create(params: PeerCreateParams, options?: Core.RequestOptions): Core.APIPromise<SecondaryDNSPeer> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/secondary_dns/peers`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: SecondaryDNSPeer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify Peer.
   */
  update(
    peerId: unknown,
    params: PeerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecondaryDNSPeer> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/secondary_dns/peers/${peerId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SecondaryDNSPeer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Peers.
   */
  list(params: PeerListParams, options?: Core.RequestOptions): Core.APIPromise<PeerListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/peers`, options) as Core.APIPromise<{
        result: PeerListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Peer.
   */
  delete(
    peerId: unknown,
    params: PeerDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/secondary_dns/peers/${peerId}`,
        options,
      ) as Core.APIPromise<{ result: PeerDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Peer.
   */
  get(
    peerId: unknown,
    params: PeerGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecondaryDNSPeer> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/peers/${peerId}`, options) as Core.APIPromise<{
        result: SecondaryDNSPeer;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SecondaryDNSPeer {
  id: unknown;

  /**
   * The name of the peer.
   */
  name: string;

  /**
   * IPv4/IPv6 address of primary or secondary nameserver, depending on what zone
   * this peer is linked to. For primary zones this IP defines the IP of the
   * secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary
   * zones this IP defines the IP of the primary nameserver Cloudflare will send
   * AXFR/IXFR requests to.
   */
  ip?: string;

  /**
   * Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary
   * zones.
   */
  ixfr_enable?: boolean;

  /**
   * DNS port of primary or secondary nameserver, depending on what zone this peer is
   * linked to.
   */
  port?: number;

  /**
   * TSIG authentication will be used for zone transfer if configured.
   */
  tsig_id?: string;
}

export type PeerListResponse = Array<SecondaryDNSPeer>;

export interface PeerDeleteResponse {
  id?: unknown;
}

export interface PeerCreateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param:
   */
  body: unknown;
}

export interface PeerUpdateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: The name of the peer.
   */
  name: string;

  /**
   * Body param: IPv4/IPv6 address of primary or secondary nameserver, depending on
   * what zone this peer is linked to. For primary zones this IP defines the IP of
   * the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary
   * zones this IP defines the IP of the primary nameserver Cloudflare will send
   * AXFR/IXFR requests to.
   */
  ip?: string;

  /**
   * Body param: Enable IXFR transfer protocol, default is AXFR. Only applicable to
   * secondary zones.
   */
  ixfr_enable?: boolean;

  /**
   * Body param: DNS port of primary or secondary nameserver, depending on what zone
   * this peer is linked to.
   */
  port?: number;

  /**
   * Body param: TSIG authentication will be used for zone transfer if configured.
   */
  tsig_id?: string;
}

export interface PeerListParams {
  account_id: unknown;
}

export interface PeerDeleteParams {
  account_id: unknown;
}

export interface PeerGetParams {
  account_id: unknown;
}

export namespace Peers {
  export import SecondaryDNSPeer = PeersAPI.SecondaryDNSPeer;
  export import PeerListResponse = PeersAPI.PeerListResponse;
  export import PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import PeerCreateParams = PeersAPI.PeerCreateParams;
  export import PeerUpdateParams = PeersAPI.PeerUpdateParams;
  export import PeerListParams = PeersAPI.PeerListParams;
  export import PeerDeleteParams = PeersAPI.PeerDeleteParams;
  export import PeerGetParams = PeersAPI.PeerGetParams;
}
