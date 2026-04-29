// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IPFSUniversalPathsAPI from './ipfs-universal-paths/ipfs-universal-paths';
import { BaseIPFSUniversalPaths, IPFSUniversalPaths } from './ipfs-universal-paths/ipfs-universal-paths';

export class BaseHostnames extends APIResource {
  static override readonly _key: readonly ['web3', 'hostnames'] = Object.freeze([
    'web3',
    'hostnames',
  ] as const);
}
export class Hostnames extends BaseHostnames {
  ipfsUniversalPaths: IPFSUniversalPathsAPI.IPFSUniversalPaths = new IPFSUniversalPathsAPI.IPFSUniversalPaths(
    this._client,
  );
}

Hostnames.IPFSUniversalPaths = IPFSUniversalPaths;
Hostnames.BaseIPFSUniversalPaths = BaseIPFSUniversalPaths;

export declare namespace Hostnames {
  export { IPFSUniversalPaths as IPFSUniversalPaths, BaseIPFSUniversalPaths as BaseIPFSUniversalPaths };
}
