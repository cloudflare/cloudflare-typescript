// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DirectoryAPI from './directory/directory';
import { Directory } from './directory/directory';

export class Connectivity extends APIResource {
  directory: DirectoryAPI.Directory = new DirectoryAPI.Directory(this._client);
}

Connectivity.Directory = Directory;

export declare namespace Connectivity {
  export { Directory as Directory };
}
