// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActiveSessionAPI from './active-session';
import { ActiveSession, BaseActiveSession } from './active-session';
import * as AnalyticsAPI from './analytics';
import { Analytics, BaseAnalytics } from './analytics';
import * as AppsAPI from './apps';
import { Apps, BaseApps } from './apps';
import * as LivestreamsAPI from './livestreams';
import { BaseLivestreams, Livestreams } from './livestreams';
import * as MeetingsAPI from './meetings';
import { BaseMeetings, Meetings } from './meetings';
import * as PresetsAPI from './presets';
import { BasePresets, Presets } from './presets';
import * as RecordingsAPI from './recordings';
import { BaseRecordings, Recordings } from './recordings';
import * as SessionsAPI from './sessions';
import { BaseSessions, Sessions } from './sessions';
import * as WebhooksAPI from './webhooks';
import { BaseWebhooks, Webhooks } from './webhooks';

export class BaseRealtimeKit extends APIResource {
  static override readonly _key: readonly ['realtimeKit'] = Object.freeze(['realtimeKit'] as const);
}
export class RealtimeKit extends BaseRealtimeKit {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  meetings: MeetingsAPI.Meetings = new MeetingsAPI.Meetings(this._client);
  presets: PresetsAPI.Presets = new PresetsAPI.Presets(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  recordings: RecordingsAPI.Recordings = new RecordingsAPI.Recordings(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  activeSession: ActiveSessionAPI.ActiveSession = new ActiveSessionAPI.ActiveSession(this._client);
  livestreams: LivestreamsAPI.Livestreams = new LivestreamsAPI.Livestreams(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

RealtimeKit.Apps = Apps;
RealtimeKit.BaseApps = BaseApps;
RealtimeKit.Meetings = Meetings;
RealtimeKit.BaseMeetings = BaseMeetings;
RealtimeKit.Presets = Presets;
RealtimeKit.BasePresets = BasePresets;
RealtimeKit.Sessions = Sessions;
RealtimeKit.BaseSessions = BaseSessions;
RealtimeKit.Recordings = Recordings;
RealtimeKit.BaseRecordings = BaseRecordings;
RealtimeKit.Webhooks = Webhooks;
RealtimeKit.BaseWebhooks = BaseWebhooks;
RealtimeKit.ActiveSession = ActiveSession;
RealtimeKit.BaseActiveSession = BaseActiveSession;
RealtimeKit.Livestreams = Livestreams;
RealtimeKit.BaseLivestreams = BaseLivestreams;
RealtimeKit.Analytics = Analytics;
RealtimeKit.BaseAnalytics = BaseAnalytics;

export declare namespace RealtimeKit {
  export { Apps as Apps, BaseApps as BaseApps };

  export { Meetings as Meetings, BaseMeetings as BaseMeetings };

  export { Presets as Presets, BasePresets as BasePresets };

  export { Sessions as Sessions, BaseSessions as BaseSessions };

  export { Recordings as Recordings, BaseRecordings as BaseRecordings };

  export { Webhooks as Webhooks, BaseWebhooks as BaseWebhooks };

  export { ActiveSession as ActiveSession, BaseActiveSession as BaseActiveSession };

  export { Livestreams as Livestreams, BaseLivestreams as BaseLivestreams };

  export { Analytics as Analytics, BaseAnalytics as BaseAnalytics };
}
