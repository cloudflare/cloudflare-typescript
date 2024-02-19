// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DevicesAPI from 'cloudflare/resources/dex/fleet-status/devices';
import * as LiveAPI from 'cloudflare/resources/dex/fleet-status/live';
import * as OverTimeAPI from 'cloudflare/resources/dex/fleet-status/over-time';

export class FleetStatus extends APIResource {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  live: LiveAPI.Live = new LiveAPI.Live(this._client);
  overTime: OverTimeAPI.OverTime = new OverTimeAPI.OverTime(this._client);
}

export namespace FleetStatus {
  export import Devices = DevicesAPI.Devices;
  export import DeviceListResponse = DevicesAPI.DeviceListResponse;
  export import DeviceListResponsesV4PagePaginationArray = DevicesAPI.DeviceListResponsesV4PagePaginationArray;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
  export import Live = LiveAPI.Live;
  export import LiveListResponse = LiveAPI.LiveListResponse;
  export import LiveListParams = LiveAPI.LiveListParams;
  export import OverTime = OverTimeAPI.OverTime;
  export import OverTimeListParams = OverTimeAPI.OverTimeListParams;
}
