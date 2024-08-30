// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as HostnamesAPI from './hostnames';
import * as IPFSUniversalPathsAPI from './ipfs-universal-paths/ipfs-universal-paths';
import { SinglePage } from '../../../pagination';

export class Hostnames extends APIResource {
  ipfsUniversalPaths: IPFSUniversalPathsAPI.IPFSUniversalPaths = new IPFSUniversalPathsAPI.IPFSUniversalPaths(
    this._client,
  );

  /**
   * Create Web3 Hostname
   */
  create(params: HostnameCreateParams, options?: Core.RequestOptions): Core.APIPromise<Hostname> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/web3/hostnames`, { body, ...options }) as Core.APIPromise<{
        result: Hostname;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Web3 Hostnames
   */
  list(
    params: HostnameListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HostnamesSinglePage, Hostname> {
    const { zone_id } = params;
    return this._client.getAPIList(`/zones/${zone_id}/web3/hostnames`, HostnamesSinglePage, options);
  }

  /**
   * Delete Web3 Hostname
   */
  delete(
    identifier: string,
    params: HostnameDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/web3/hostnames/${identifier}`, options) as Core.APIPromise<{
        result: HostnameDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit Web3 Hostname
   */
  edit(
    identifier: string,
    params: HostnameEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Hostname> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/web3/hostnames/${identifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Hostname }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Web3 Hostname Details
   */
  get(
    identifier: string,
    params: HostnameGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Hostname> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/web3/hostnames/${identifier}`, options) as Core.APIPromise<{
        result: Hostname;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class HostnamesSinglePage extends SinglePage<Hostname> {}

export interface Hostname {
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

export interface HostnameCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Target gateway of the hostname.
   */
  target: 'ethereum' | 'ipfs' | 'ipfs_universal_path';

  /**
   * Body param: An optional description of the hostname.
   */
  description?: string;

  /**
   * Body param: DNSLink value used if the target is ipfs.
   */
  dnslink?: string;
}

export interface HostnameListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface HostnameDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface HostnameEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: An optional description of the hostname.
   */
  description?: string;

  /**
   * Body param: DNSLink value used if the target is ipfs.
   */
  dnslink?: string;
}

export interface HostnameGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Hostnames {
  export import Hostname = HostnamesAPI.Hostname;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnamesSinglePage = HostnamesAPI.HostnamesSinglePage;
  export import HostnameCreateParams = HostnamesAPI.HostnameCreateParams;
  export import HostnameListParams = HostnamesAPI.HostnameListParams;
  export import HostnameDeleteParams = HostnamesAPI.HostnameDeleteParams;
  export import HostnameEditParams = HostnamesAPI.HostnameEditParams;
  export import HostnameGetParams = HostnamesAPI.HostnameGetParams;
  export import IPFSUniversalPaths = IPFSUniversalPathsAPI.IPFSUniversalPaths;
}
