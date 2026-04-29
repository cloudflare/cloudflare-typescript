// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DNSSECAPI from './dnssec';
import { BaseDNSSEC, DNSSEC } from './dnssec';
import * as RecordsAPI from './records';
import { BaseRecords, Record, Records } from './records';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics, BaseAnalytics } from './analytics/analytics';
import * as SettingsAPI from './settings/settings';
import { BaseSettings, Settings } from './settings/settings';
import * as UsageAPI from './usage/usage';
import { BaseUsage, Usage } from './usage/usage';
import * as ZoneTransfersAPI from './zone-transfers/zone-transfers';
import { BaseZoneTransfers, ZoneTransfers } from './zone-transfers/zone-transfers';

export class BaseDNS extends APIResource {
  static override readonly _key: readonly ['dns'] = Object.freeze(['dns'] as const);
}
export class DNS extends BaseDNS {
  dnssec: DNSSECAPI.DNSSEC = new DNSSECAPI.DNSSEC(this._client);
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  zoneTransfers: ZoneTransfersAPI.ZoneTransfers = new ZoneTransfersAPI.ZoneTransfers(this._client);
}

DNS.DNSSEC = DNSSEC;
DNS.BaseDNSSEC = BaseDNSSEC;
DNS.Records = Records;
DNS.BaseRecords = BaseRecords;
DNS.Usage = Usage;
DNS.BaseUsage = BaseUsage;
DNS.Settings = Settings;
DNS.BaseSettings = BaseSettings;
DNS.Analytics = Analytics;
DNS.BaseAnalytics = BaseAnalytics;
DNS.ZoneTransfers = ZoneTransfers;
DNS.BaseZoneTransfers = BaseZoneTransfers;

export declare namespace DNS {
  export { DNSSEC as DNSSEC, BaseDNSSEC as BaseDNSSEC };

  export { Records as Records, BaseRecords as BaseRecords, type Record as Record };

  export { Usage as Usage, BaseUsage as BaseUsage };

  export { Settings as Settings, BaseSettings as BaseSettings };

  export { Analytics as Analytics, BaseAnalytics as BaseAnalytics };

  export { ZoneTransfers as ZoneTransfers, BaseZoneTransfers as BaseZoneTransfers };
}
