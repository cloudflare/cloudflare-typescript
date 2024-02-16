// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TimeseriesAPI from 'cloudflare/resources/radar/netflows/timeseries';
import * as TopsAPI from 'cloudflare/resources/radar/netflows/tops/tops';

export class Netflows extends APIResource {
  timeseries: TimeseriesAPI.Timeseries = new TimeseriesAPI.Timeseries(this._client);
  tops: TopsAPI.Tops = new TopsAPI.Tops(this._client);
}

export namespace Netflows {
  export import Timeseries = TimeseriesAPI.Timeseries;
  export import TimeseryListResponse = TimeseriesAPI.TimeseryListResponse;
  export import TimeseryListParams = TimeseriesAPI.TimeseryListParams;
  export import Tops = TopsAPI.Tops;
}
