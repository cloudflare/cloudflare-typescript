// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ActiveSessionAPI from './active-session';
import { ActiveSession } from './active-session';
import * as AnalyticsAPI from './analytics';
import { Analytics } from './analytics';
import * as AppsAPI from './apps';
import { Apps } from './apps';
import * as LivestreamsAPI from './livestreams';
import { Livestreams } from './livestreams';
import * as MeetingsAPI from './meetings';
import { Meetings } from './meetings';
import * as PresetsAPI from './presets';
import { Presets } from './presets';
import * as RecordingsAPI from './recordings';
import { Recordings } from './recordings';
import * as SessionsAPI from './sessions';
import { Sessions } from './sessions';
import * as WebhooksAPI from './webhooks';
import { Webhooks } from './webhooks';

export class RealtimeKit extends APIResource {
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
RealtimeKit.Meetings = Meetings;
RealtimeKit.Presets = Presets;
RealtimeKit.Sessions = Sessions;
RealtimeKit.Recordings = Recordings;
RealtimeKit.Webhooks = Webhooks;
RealtimeKit.ActiveSession = ActiveSession;
RealtimeKit.Livestreams = Livestreams;
RealtimeKit.Analytics = Analytics;

export declare namespace RealtimeKit {
  export { Apps as Apps };

  export { Meetings as Meetings };

  export { Presets as Presets };

  export { Sessions as Sessions };

  export { Recordings as Recordings };

  export { Webhooks as Webhooks };

  export { ActiveSession as ActiveSession };

  export { Livestreams as Livestreams };

  export { Analytics as Analytics };
}
