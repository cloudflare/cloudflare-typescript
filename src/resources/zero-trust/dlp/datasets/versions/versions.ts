// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as EntriesAPI from './entries';
import { Entries } from './entries';

export class Versions extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
}

Versions.Entries = Entries;

export declare namespace Versions {
  export { Entries as Entries };
}
