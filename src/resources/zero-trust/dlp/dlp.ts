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
  export import DLPDataset = DatasetsAPI.DLPDataset;
  export import DLPDatasetArray = DatasetsAPI.DLPDatasetArray;
  export import DLPDatasetCreation = DatasetsAPI.DLPDatasetCreation;
  export import DLPDatasetsSinglePage = DatasetsAPI.DLPDatasetsSinglePage;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import Patterns = PatternsAPI.Patterns;
  export import PatternValidateParams = PatternsAPI.PatternValidateParams;
  export import PayloadLogs = PayloadLogsAPI.PayloadLogs;
  export import UnnamedSchemaRefE31ff4936b1b42746e8cb62bbc87f2e5 = PayloadLogsAPI.UnnamedSchemaRefE31ff4936b1b42746e8cb62bbc87f2e5;
  export import PayloadLogUpdateParams = PayloadLogsAPI.PayloadLogUpdateParams;
  export import PayloadLogGetParams = PayloadLogsAPI.PayloadLogGetParams;
  export import Profiles = ProfilesAPI.Profiles;
  export import DLPProfiles = ProfilesAPI.DLPProfiles;
  export import UnnamedSchemaRefC105db122868c71badeac3b4822ad6b1 = ProfilesAPI.UnnamedSchemaRefC105db122868c71badeac3b4822ad6b1;
  export import UnnamedSchemaRefE38bfdf1acf5a4bfada6779c79528bc0 = ProfilesAPI.UnnamedSchemaRefE38bfdf1acf5a4bfada6779c79528bc0;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
  export import DLPProfilesSinglePage = ProfilesAPI.DLPProfilesSinglePage;
  export import ProfileListParams = ProfilesAPI.ProfileListParams;
  export import ProfileGetParams = ProfilesAPI.ProfileGetParams;
}
