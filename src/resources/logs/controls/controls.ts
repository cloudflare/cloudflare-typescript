// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as CmbAPI from 'cloudflare/resources/logs/controls/cmb/cmb';
import * as RetentionsAPI from 'cloudflare/resources/logs/controls/retentions/retentions';

export class Controls extends APIResource {
  retentions: RetentionsAPI.Retentions = new RetentionsAPI.Retentions(this._client);
  cmb: CmbAPI.Cmb = new CmbAPI.Cmb(this._client);
}

export namespace Controls {
  export import Retentions = RetentionsAPI.Retentions;
  export import Cmb = CmbAPI.Cmb;
}
