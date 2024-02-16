// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HostnamesAPI from 'cloudflare/resources/web3s/hostnames/hostnames';
import * as IpfsUniversalPathsAPI from 'cloudflare/resources/web3s/hostnames/ipfs-universal-paths/ipfs-universal-paths';

export class Hostnames extends APIResource {
  ipfsUniversalPaths: IpfsUniversalPathsAPI.IpfsUniversalPaths = new IpfsUniversalPathsAPI.IpfsUniversalPaths(
    this._client,
  );

  /**
   * Edit Web3 Hostname
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: HostnameUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneIdentifier}/web3/hostnames/${identifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HostnameUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Web3 Hostname
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameDeleteResponse | null> {
    return (
      this._client.delete(
        `/zones/${zoneIdentifier}/web3/hostnames/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: HostnameDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Web3 Hostname Details
   */
  get(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/web3/hostnames/${identifier}`, options) as Core.APIPromise<{
        result: HostnameGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create Web3 Hostname
   */
  web3HostnameCreateWeb3Hostname(
    zoneIdentifier: string,
    body: HostnameWeb3HostnameCreateWeb3HostnameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameWeb3HostnameCreateWeb3HostnameResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/web3/hostnames`, { body, ...options }) as Core.APIPromise<{
        result: HostnameWeb3HostnameCreateWeb3HostnameResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Web3 Hostnames
   */
  web3HostnameListWeb3Hostnames(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameWeb3HostnameListWeb3HostnamesResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/web3/hostnames`, options) as Core.APIPromise<{
        result: HostnameWeb3HostnameListWeb3HostnamesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HostnameUpdateResponse {
  /**
   * Identifier
   */
  id?: string;

  created_on?: string;

  /**
   * An optional description of the hostname.
   */
  description?: string;

  /**
   * DNSLink value used if the target is ipfs.
   */
  dnslink?: string;

  modified_on?: string;

  /**
   * The hostname that will point to the target gateway via CNAME.
   */
  name?: string;

  /**
   * Status of the hostname's activation.
   */
  status?: 'active' | 'pending' | 'deleting' | 'error';

  /**
   * Target gateway of the hostname.
   */
  target?: 'ethereum' | 'ipfs' | 'ipfs_universal_path';
}

export interface HostnameDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface HostnameGetResponse {
  /**
   * Identifier
   */
  id?: string;

  created_on?: string;

  /**
   * An optional description of the hostname.
   */
  description?: string;

  /**
   * DNSLink value used if the target is ipfs.
   */
  dnslink?: string;

  modified_on?: string;

  /**
   * The hostname that will point to the target gateway via CNAME.
   */
  name?: string;

  /**
   * Status of the hostname's activation.
   */
  status?: 'active' | 'pending' | 'deleting' | 'error';

  /**
   * Target gateway of the hostname.
   */
  target?: 'ethereum' | 'ipfs' | 'ipfs_universal_path';
}

export interface HostnameWeb3HostnameCreateWeb3HostnameResponse {
  /**
   * Identifier
   */
  id?: string;

  created_on?: string;

  /**
   * An optional description of the hostname.
   */
  description?: string;

  /**
   * DNSLink value used if the target is ipfs.
   */
  dnslink?: string;

  modified_on?: string;

  /**
   * The hostname that will point to the target gateway via CNAME.
   */
  name?: string;

  /**
   * Status of the hostname's activation.
   */
  status?: 'active' | 'pending' | 'deleting' | 'error';

  /**
   * Target gateway of the hostname.
   */
  target?: 'ethereum' | 'ipfs' | 'ipfs_universal_path';
}

export type HostnameWeb3HostnameListWeb3HostnamesResponse =
  Array<HostnameWeb3HostnameListWeb3HostnamesResponse.HostnameWeb3HostnameListWeb3HostnamesResponseItem>;

export namespace HostnameWeb3HostnameListWeb3HostnamesResponse {
  export interface HostnameWeb3HostnameListWeb3HostnamesResponseItem {
    /**
     * Identifier
     */
    id?: string;

    created_on?: string;

    /**
     * An optional description of the hostname.
     */
    description?: string;

    /**
     * DNSLink value used if the target is ipfs.
     */
    dnslink?: string;

    modified_on?: string;

    /**
     * The hostname that will point to the target gateway via CNAME.
     */
    name?: string;

    /**
     * Status of the hostname's activation.
     */
    status?: 'active' | 'pending' | 'deleting' | 'error';

    /**
     * Target gateway of the hostname.
     */
    target?: 'ethereum' | 'ipfs' | 'ipfs_universal_path';
  }
}

export interface HostnameUpdateParams {
  /**
   * An optional description of the hostname.
   */
  description?: string;

  /**
   * DNSLink value used if the target is ipfs.
   */
  dnslink?: string;
}

export interface HostnameWeb3HostnameCreateWeb3HostnameParams {
  /**
   * Target gateway of the hostname.
   */
  target: 'ethereum' | 'ipfs' | 'ipfs_universal_path';

  /**
   * An optional description of the hostname.
   */
  description?: string;

  /**
   * DNSLink value used if the target is ipfs.
   */
  dnslink?: string;
}

export namespace Hostnames {
  export import HostnameUpdateResponse = HostnamesAPI.HostnameUpdateResponse;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnameGetResponse = HostnamesAPI.HostnameGetResponse;
  export import HostnameWeb3HostnameCreateWeb3HostnameResponse = HostnamesAPI.HostnameWeb3HostnameCreateWeb3HostnameResponse;
  export import HostnameWeb3HostnameListWeb3HostnamesResponse = HostnamesAPI.HostnameWeb3HostnameListWeb3HostnamesResponse;
  export import HostnameUpdateParams = HostnamesAPI.HostnameUpdateParams;
  export import HostnameWeb3HostnameCreateWeb3HostnameParams = HostnamesAPI.HostnameWeb3HostnameCreateWeb3HostnameParams;
  export import IpfsUniversalPaths = IpfsUniversalPathsAPI.IpfsUniversalPaths;
}
