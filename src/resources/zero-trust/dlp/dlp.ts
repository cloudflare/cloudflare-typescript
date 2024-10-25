// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as LimitsAPI from './limits';
import * as PatternsAPI from './patterns';
import * as PayloadLogsAPI from './payload-logs';
import * as DatasetsAPI from './datasets/datasets';
import * as ProfilesAPI from './profiles/profiles';

export class DLP extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  patterns: PatternsAPI.Patterns = new PatternsAPI.Patterns(this._client);
  payloadLogs: PayloadLogsAPI.PayloadLogs = new PayloadLogsAPI.PayloadLogs(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);
}

export namespace DLP {
  export import Datasets = DatasetsAPI.Datasets;
  export type Dataset = DatasetsAPI.Dataset;
  export type DatasetArray = DatasetsAPI.DatasetArray;
  export type DatasetCreation = DatasetsAPI.DatasetCreation;
  export import DatasetsSinglePage = DatasetsAPI.DatasetsSinglePage;
  export type DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export type DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export type DatasetListParams = DatasetsAPI.DatasetListParams;
  export type DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export type DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import Patterns = PatternsAPI.Patterns;
  export type PatternValidateResponse = PatternsAPI.PatternValidateResponse;
  export type PatternValidateParams = PatternsAPI.PatternValidateParams;
  export import PayloadLogs = PayloadLogsAPI.PayloadLogs;
  export type PayloadLogUpdateResponse = PayloadLogsAPI.PayloadLogUpdateResponse;
  export type PayloadLogGetResponse = PayloadLogsAPI.PayloadLogGetResponse;
  export type PayloadLogUpdateParams = PayloadLogsAPI.PayloadLogUpdateParams;
  export type PayloadLogGetParams = PayloadLogsAPI.PayloadLogGetParams;
  export import Profiles = ProfilesAPI.Profiles;
  export type ContextAwareness = ProfilesAPI.ContextAwareness;
  export type Profile = ProfilesAPI.Profile;
  export type SkipConfiguration = ProfilesAPI.SkipConfiguration;
  export import ProfilesSinglePage = ProfilesAPI.ProfilesSinglePage;
  export type ProfileListParams = ProfilesAPI.ProfileListParams;
  export type ProfileGetParams = ProfilesAPI.ProfileGetParams;
  export import Limits = LimitsAPI.Limits;
  export type LimitListResponse = LimitsAPI.LimitListResponse;
  export type LimitListParams = LimitsAPI.LimitListParams;
}
