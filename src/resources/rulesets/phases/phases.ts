// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VersionsAPI from './versions';
import { Versions } from './versions';

export class Phases extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Phases.Versions = Versions;

export declare namespace Phases {
  export { Versions as Versions };
}
