// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IPFSUniversalPathsAPI from './ipfs-universal-paths/ipfs-universal-paths';
import { IPFSUniversalPaths } from './ipfs-universal-paths/ipfs-universal-paths';

export class Hostnames extends APIResource {
  ipfsUniversalPaths: IPFSUniversalPathsAPI.IPFSUniversalPaths = new IPFSUniversalPathsAPI.IPFSUniversalPaths(
    this._client,
  );
}

Hostnames.IPFSUniversalPaths = IPFSUniversalPaths;

export declare namespace Hostnames {
  export { IPFSUniversalPaths as IPFSUniversalPaths };
}
