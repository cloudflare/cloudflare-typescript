// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PreviewsAPI from './previews';
import { Previews } from './previews';

export class Healthchecks extends APIResource {
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
}

Healthchecks.Previews = Previews;

export declare namespace Healthchecks {
  export { Previews as Previews };
}
