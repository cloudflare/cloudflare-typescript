// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TopsAPI from 'cloudflare/resources/radar/verified-bots/tops/tops';

export class VerifiedBots extends APIResource {
  tops: TopsAPI.Tops = new TopsAPI.Tops(this._client);
}

export namespace VerifiedBots {
  export import Tops = TopsAPI.Tops;
}
