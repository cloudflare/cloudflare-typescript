// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { IPFSUniversalPaths } from './ipfs-universal-paths/ipfs-universal-paths';
import * as HostnamesAPI from './hostnames';
import * as IPFSUniversalPathsAPI from './ipfs-universal-paths/ipfs-universal-paths';
import { SinglePage } from '../../../pagination';

export class Hostnames extends APIResource {
  ipfsUniversalPaths: IPFSUniversalPathsAPI.IPFSUniversalPaths = new IPFSUniversalPathsAPI.IPFSUniversalPaths(this._client);

  /**
   * Create Web3 Hostname
   */
  create(zoneIdentifier: string, body: HostnameCreateParams, options?: Core.RequestOptions): Core.APIPromise<Hostname> {
    return (this._client.post(`/zones/${zoneIdentifier}/web3/hostnames`, { body, ...options }) as Core.APIPromise<{ result: Hostname }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Web3 Hostnames
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.PagePromise<HostnamesSinglePage, Hostname> {
    return this._client.getAPIList(`/zones/${zoneIdentifier}/web3/hostnames`, HostnamesSinglePage, options);
  }

  /**
   * Delete Web3 Hostname
   */
  delete(zoneIdentifier: string, identifier: string, options?: Core.RequestOptions): Core.APIPromise<HostnameDeleteResponse | null> {
    return (this._client.delete(`/zones/${zoneIdentifier}/web3/hostnames/${identifier}`, options) as Core.APIPromise<{ result: HostnameDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit Web3 Hostname
   */
  edit(zoneIdentifier: string, identifier: string, body: HostnameEditParams, options?: Core.RequestOptions): Core.APIPromise<Hostname> {
    return (this._client.patch(`/zones/${zoneIdentifier}/web3/hostnames/${identifier}`, { body, ...options }) as Core.APIPromise<{ result: Hostname }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Web3 Hostname Details
   */
  get(zoneIdentifier: string, identifier: string, options?: Core.RequestOptions): Core.APIPromise<Hostname> {
    return (this._client.get(`/zones/${zoneIdentifier}/web3/hostnames/${identifier}`, options) as Core.APIPromise<{ result: Hostname }>)._thenUnwrap((obj) => obj.result);
  }
}

export class HostnamesSinglePage extends SinglePage<Hostname> {
}

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

export interface HostnameEditParams {
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
  export import Hostname = HostnamesAPI.Hostname;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnamesSinglePage = HostnamesAPI.HostnamesSinglePage;
  export import HostnameCreateParams = HostnamesAPI.HostnameCreateParams;
  export import HostnameEditParams = HostnamesAPI.HostnameEditParams;
  export import IPFSUniversalPaths = IPFSUniversalPathsAPI.IPFSUniversalPaths;
}
