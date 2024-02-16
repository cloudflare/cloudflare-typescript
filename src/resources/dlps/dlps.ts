// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PayloadLogsAPI from 'cloudflare/resources/dlps/payload-logs';
import * as PatternsAPI from 'cloudflare/resources/dlps/patterns/patterns';
import * as ProfilesAPI from 'cloudflare/resources/dlps/profiles/profiles';

export class DLPs extends APIResource {
  patterns: PatternsAPI.Patterns = new PatternsAPI.Patterns(this._client);
  payloadLogs: PayloadLogsAPI.PayloadLogs = new PayloadLogsAPI.PayloadLogs(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
}

export namespace DLPs {
  export import Patterns = PatternsAPI.Patterns;
  export import PayloadLogs = PayloadLogsAPI.PayloadLogs;
  export import PayloadLogDLPPayloadLogSettingsGetSettingsResponse = PayloadLogsAPI.PayloadLogDLPPayloadLogSettingsGetSettingsResponse;
  export import PayloadLogDLPPayloadLogSettingsUpdateSettingsResponse = PayloadLogsAPI.PayloadLogDLPPayloadLogSettingsUpdateSettingsResponse;
  export import PayloadLogDLPPayloadLogSettingsUpdateSettingsParams = PayloadLogsAPI.PayloadLogDLPPayloadLogSettingsUpdateSettingsParams;
  export import Profiles = ProfilesAPI.Profiles;
  export import ProfileDLPProfilesListAllProfilesResponse = ProfilesAPI.ProfileDLPProfilesListAllProfilesResponse;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
}
