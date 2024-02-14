// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as IndustryAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/industry';
import * as IPVersionAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/ip-version';
import * as ProtocolAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/protocol';
import * as VectorAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/vector';
import * as VerticalAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/vertical';

export class TimeseriesGroups extends APIResource {
  industry: IndustryAPI.Industry = new IndustryAPI.Industry(this._client);
  ipVersion: IPVersionAPI.IPVersion = new IPVersionAPI.IPVersion(this._client);
  protocol: ProtocolAPI.Protocol = new ProtocolAPI.Protocol(this._client);
  vector: VectorAPI.Vector = new VectorAPI.Vector(this._client);
  vertical: VerticalAPI.Vertical = new VerticalAPI.Vertical(this._client);
}

export namespace TimeseriesGroups {
  export import Industry = IndustryAPI.Industry;
  export import IndustryListResponse = IndustryAPI.IndustryListResponse;
  export import IndustryListParams = IndustryAPI.IndustryListParams;
  export import IPVersion = IPVersionAPI.IPVersion;
  export import IPVersionListResponse = IPVersionAPI.IPVersionListResponse;
  export import IPVersionListParams = IPVersionAPI.IPVersionListParams;
  export import Protocol = ProtocolAPI.Protocol;
  export import ProtocolListResponse = ProtocolAPI.ProtocolListResponse;
  export import ProtocolListParams = ProtocolAPI.ProtocolListParams;
  export import Vector = VectorAPI.Vector;
  export import VectorListResponse = VectorAPI.VectorListResponse;
  export import VectorListParams = VectorAPI.VectorListParams;
  export import Vertical = VerticalAPI.Vertical;
  export import VerticalListResponse = VerticalAPI.VerticalListResponse;
  export import VerticalListParams = VerticalAPI.VerticalListParams;
}
