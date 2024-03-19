// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/magic-transit/sites/acls';
import * as LansAPI from 'cloudflare/resources/magic-transit/sites/lans';
import * as WansAPI from 'cloudflare/resources/magic-transit/sites/wans';

export class Sites extends APIResource {
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  lans: LansAPI.Lans = new LansAPI.Lans(this._client);
  wans: WansAPI.Wans = new WansAPI.Wans(this._client);
}

export namespace Sites {
  export import ACLs = ACLsAPI.ACLs;
  export import Lans = LansAPI.Lans;
  export import Wans = WansAPI.Wans;
}
