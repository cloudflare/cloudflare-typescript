// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PreviewsAPI from './previews';
import { Previews } from './previews';
import * as ReferencesAPI from './references';
import { References } from './references';

export class Monitors extends APIResource {
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);
}

Monitors.Previews = Previews;
Monitors.References = References;

export declare namespace Monitors {
  export { Previews as Previews };

  export { References as References };
}
