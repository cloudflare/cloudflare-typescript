// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TopsAPI from 'cloudflare/resources/radar/dns/tops/tops';

export class DNS extends APIResource {
  tops: TopsAPI.Tops = new TopsAPI.Tops(this._client);
}

export namespace DNS {
  export import Tops = TopsAPI.Tops;
}
