// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as MoasAPI from 'cloudflare/resources/radar/bgp/routes/moas';
import * as Pfx2asAPI from 'cloudflare/resources/radar/bgp/routes/pfx2as';
import * as StatsAPI from 'cloudflare/resources/radar/bgp/routes/stats';

export class Routes extends APIResource {
  moas: MoasAPI.Moas = new MoasAPI.Moas(this._client);
  pfx2as: Pfx2asAPI.Pfx2as = new Pfx2asAPI.Pfx2as(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
}

export namespace Routes {
  export import Moas = MoasAPI.Moas;
  export import MoaListResponse = MoasAPI.MoaListResponse;
  export import MoaListParams = MoasAPI.MoaListParams;
  export import Pfx2as = Pfx2asAPI.Pfx2as;
  export import Pfx2aListResponse = Pfx2asAPI.Pfx2aListResponse;
  export import Pfx2aListParams = Pfx2asAPI.Pfx2aListParams;
  export import Stats = StatsAPI.Stats;
  export import StatListResponse = StatsAPI.StatListResponse;
  export import StatListParams = StatsAPI.StatListParams;
}
