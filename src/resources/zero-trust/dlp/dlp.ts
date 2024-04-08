// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as PatternsAPI from 'cloudflare/resources/zero-trust/dlp/patterns';
import * as PayloadLogsAPI from 'cloudflare/resources/zero-trust/dlp/payload-logs';
import * as DatasetsAPI from 'cloudflare/resources/zero-trust/dlp/datasets/datasets';
import * as ProfilesAPI from 'cloudflare/resources/zero-trust/dlp/profiles/profiles';

export class DLP extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  patterns: PatternsAPI.Patterns = new PatternsAPI.Patterns(this._client);
  payloadLogs: PayloadLogsAPI.PayloadLogs = new PayloadLogsAPI.PayloadLogs(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
}

export namespace DLP {
  export import Datasets = DatasetsAPI.Datasets;
  export import Dataset = DatasetsAPI.Dataset;
  export import DatasetArray = DatasetsAPI.DatasetArray;
  export import DatasetCreation = DatasetsAPI.DatasetCreation;
  export import DatasetsSinglePage = DatasetsAPI.DatasetsSinglePage;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import Patterns = PatternsAPI.Patterns;
  export import PatternValidateParams = PatternsAPI.PatternValidateParams;
  export import PayloadLogs = PayloadLogsAPI.PayloadLogs;
  export import PayloadLogUpdateResponse = PayloadLogsAPI.PayloadLogUpdateResponse;
  export import PayloadLogGetResponse = PayloadLogsAPI.PayloadLogGetResponse;
  export import PayloadLogUpdateParams = PayloadLogsAPI.PayloadLogUpdateParams;
  export import PayloadLogGetParams = PayloadLogsAPI.PayloadLogGetParams;
  export import Profiles = ProfilesAPI.Profiles;
  export import ContextAwareness = ProfilesAPI.ContextAwareness;
  export import Profile = ProfilesAPI.Profile;
  export import SkipConfiguration = ProfilesAPI.SkipConfiguration;
  export import UnnamedSchemaRefC105db122868c71badeac3b4822ad6b1 = ProfilesAPI.UnnamedSchemaRefC105db122868c71badeac3b4822ad6b1;
  export import UnnamedSchemaRefE38bfdf1acf5a4bfada6779c79528bc0 = ProfilesAPI.UnnamedSchemaRefE38bfdf1acf5a4bfada6779c79528bc0;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
  export import ProfilesSinglePage = ProfilesAPI.ProfilesSinglePage;
  export import ProfileListParams = ProfilesAPI.ProfileListParams;
  export import ProfileGetParams = ProfilesAPI.ProfileGetParams;
}
