// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PeersAPI from 'cloudflare/resources/secondary-dns/peers';

export class Peers extends APIResource {
  /**
   * Modify Peer.
   */
  update(
    accountId: unknown,
    peerId: unknown,
    body: PeerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/secondary_dns/peers/${peerId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PeerUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Peer.
   */
  delete(
    accountId: unknown,
    peerId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/secondary_dns/peers/${peerId}`,
        options,
      ) as Core.APIPromise<{ result: PeerDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Peer.
   */
  get(accountId: unknown, peerId: unknown, options?: Core.RequestOptions): Core.APIPromise<PeerGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/peers/${peerId}`, options) as Core.APIPromise<{
        result: PeerGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create Peer.
   */
  secondaryDNSPeerCreatePeer(
    accountId: unknown,
    body: PeerSecondaryDNSPeerCreatePeerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerSecondaryDNSPeerCreatePeerResponse> {
    return (
      this._client.post(`/accounts/${accountId}/secondary_dns/peers`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PeerSecondaryDNSPeerCreatePeerResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Peers.
   */
  secondaryDNSPeerListPeers(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerSecondaryDNSPeerListPeersResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/peers`, options) as Core.APIPromise<{
        result: PeerSecondaryDNSPeerListPeersResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PeerUpdateResponse {
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

export interface PeerDeleteResponse {
  id?: unknown;
}

export interface PeerGetResponse {
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

export interface PeerSecondaryDNSPeerCreatePeerResponse {
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

export type PeerSecondaryDNSPeerListPeersResponse =
  Array<PeerSecondaryDNSPeerListPeersResponse.PeerSecondaryDNSPeerListPeersResponseItem>;

export namespace PeerSecondaryDNSPeerListPeersResponse {
  export interface PeerSecondaryDNSPeerListPeersResponseItem {
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
}

export interface PeerUpdateParams {
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

export type PeerSecondaryDNSPeerCreatePeerParams = unknown;

export namespace Peers {
  export import PeerUpdateResponse = PeersAPI.PeerUpdateResponse;
  export import PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import PeerGetResponse = PeersAPI.PeerGetResponse;
  export import PeerSecondaryDNSPeerCreatePeerResponse = PeersAPI.PeerSecondaryDNSPeerCreatePeerResponse;
  export import PeerSecondaryDNSPeerListPeersResponse = PeersAPI.PeerSecondaryDNSPeerListPeersResponse;
  export import PeerUpdateParams = PeersAPI.PeerUpdateParams;
  export import PeerSecondaryDNSPeerCreatePeerParams = PeersAPI.PeerSecondaryDNSPeerCreatePeerParams;
}
