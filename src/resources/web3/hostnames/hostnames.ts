// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HostnamesAPI from './hostnames';
import * as IPFSUniversalPathsAPI from './ipfs-universal-paths/ipfs-universal-paths';

export class Hostnames extends APIResource {
  ipfsUniversalPaths: IPFSUniversalPathsAPI.IPFSUniversalPaths = new IPFSUniversalPathsAPI.IPFSUniversalPaths(
    this._client,
  );
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

export namespace Hostnames {
  export import Hostname = HostnamesAPI.Hostname;
  export import IPFSUniversalPaths = IPFSUniversalPathsAPI.IPFSUniversalPaths;
}
