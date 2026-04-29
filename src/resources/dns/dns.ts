// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DNSSECAPI from './dnssec';
import { DNSSEC } from './dnssec';
import * as RecordsAPI from './records';
import { Record, Records } from './records';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics } from './analytics/analytics';
import * as SettingsAPI from './settings/settings';
import { Settings } from './settings/settings';
import * as UsageAPI from './usage/usage';
import { Usage } from './usage/usage';
import * as ZoneTransfersAPI from './zone-transfers/zone-transfers';
import { ZoneTransfers } from './zone-transfers/zone-transfers';

export class DNS extends APIResource {
  dnssec: DNSSECAPI.DNSSEC = new DNSSECAPI.DNSSEC(this._client);
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  zoneTransfers: ZoneTransfersAPI.ZoneTransfers = new ZoneTransfersAPI.ZoneTransfers(this._client);
}

DNS.DNSSEC = DNSSEC;
DNS.Records = Records;
DNS.Usage = Usage;
DNS.Settings = Settings;
DNS.Analytics = Analytics;
DNS.ZoneTransfers = ZoneTransfers;

export declare namespace DNS {
  export { DNSSEC as DNSSEC };

  export { Records as Records, type Record as Record };

  export { Usage as Usage };

  export { Settings as Settings };

  export { Analytics as Analytics };

  export { ZoneTransfers as ZoneTransfers };
}
