// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DirectoryAPI from './directory/directory';
import { BaseDirectory, Directory } from './directory/directory';

export class BaseConnectivity extends APIResource {
  static override readonly _key: readonly ['connectivity'] = Object.freeze(['connectivity'] as const);
}
export class Connectivity extends BaseConnectivity {
  directory: DirectoryAPI.Directory = new DirectoryAPI.Directory(this._client);
}

Connectivity.Directory = Directory;
Connectivity.BaseDirectory = BaseDirectory;

export declare namespace Connectivity {
  export { Directory as Directory, BaseDirectory as BaseDirectory };
}
