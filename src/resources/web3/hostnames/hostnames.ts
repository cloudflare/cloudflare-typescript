// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HostnamesAPI from 'cloudflare/resources/web3/hostnames/hostnames';
import * as IpfsUniversalPathsAPI from 'cloudflare/resources/web3/hostnames/ipfs-universal-paths/ipfs-universal-paths';

export class Hostnames extends APIResource {
  ipfsUniversalPaths: IpfsUniversalPathsAPI.IpfsUniversalPaths = new IpfsUniversalPathsAPI.IpfsUniversalPaths(
    this._client,
  );

  /**
   * Create Web3 Hostname
   */
  create(
    zoneIdentifier: string,
    body: HostnameCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameCreateResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/web3/hostnames`, { body, ...options }) as Core.APIPromise<{
        result: HostnameCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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
   * List Web3 Hostnames
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<HostnameListResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/web3/hostnames`, options) as Core.APIPromise<{
        result: HostnameListResponse | null;
      }>
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
}

export interface HostnameCreateResponse {
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

export type HostnameListResponse = Array<HostnameListResponse.HostnameListResponseItem>;

export namespace HostnameListResponse {
  export interface HostnameListResponseItem {
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

export interface HostnameCreateParams {
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

export namespace Hostnames {
  export import HostnameCreateResponse = HostnamesAPI.HostnameCreateResponse;
  export import HostnameUpdateResponse = HostnamesAPI.HostnameUpdateResponse;
  export import HostnameListResponse = HostnamesAPI.HostnameListResponse;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnameGetResponse = HostnamesAPI.HostnameGetResponse;
  export import HostnameCreateParams = HostnamesAPI.HostnameCreateParams;
  export import HostnameUpdateParams = HostnamesAPI.HostnameUpdateParams;
  export import IpfsUniversalPaths = IpfsUniversalPathsAPI.IpfsUniversalPaths;
}
