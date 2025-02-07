// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Peers extends APIResource {
  /**
   * Create Peer.
   */
  create(params: PeerCreateParams, options?: RequestOptions): APIPromise<Peer> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/secondary_dns/peers`, {
        body,
        ...options,
      }) as APIPromise<{ result: Peer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify Peer.
   */
  update(peerID: string, params: PeerUpdateParams, options?: RequestOptions): APIPromise<Peer> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/secondary_dns/peers/${peerID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Peer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Peers.
   */
  list(params: PeerListParams, options?: RequestOptions): PagePromise<PeersSinglePage, Peer> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/secondary_dns/peers`,
      SinglePage<Peer>,
      options,
    );
  }

  /**
   * Delete Peer.
   */
  delete(peerID: string, params: PeerDeleteParams, options?: RequestOptions): APIPromise<PeerDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/secondary_dns/peers/${peerID}`,
        options,
      ) as APIPromise<{ result: PeerDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Peer.
   */
  get(peerID: string, params: PeerGetParams, options?: RequestOptions): APIPromise<Peer> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/secondary_dns/peers/${peerID}`, options) as APIPromise<{
        result: Peer;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PeersSinglePage = SinglePage<Peer>;

export interface Peer {
  id: string;

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
  id?: string;
}

export interface PeerCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The name of the peer.
   */
  name: string;
}

export interface PeerUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

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
  account_id: string;
}

export interface PeerDeleteParams {
  account_id: string;
}

export interface PeerGetParams {
  account_id: string;
}

export declare namespace Peers {
  export {
    type Peer as Peer,
    type PeerDeleteResponse as PeerDeleteResponse,
    type PeersSinglePage as PeersSinglePage,
    type PeerCreateParams as PeerCreateParams,
    type PeerUpdateParams as PeerUpdateParams,
    type PeerListParams as PeerListParams,
    type PeerDeleteParams as PeerDeleteParams,
    type PeerGetParams as PeerGetParams,
  };
}
