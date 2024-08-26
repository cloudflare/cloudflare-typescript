// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Datasets } from './datasets/datasets';
import { Patterns } from './patterns';
import { PayloadLogs } from './payload-logs';
import { Profiles } from './profiles/profiles';
import { Limits } from './limits';
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
  export import PatternValidateResponse = PatternsAPI.PatternValidateResponse;
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
  export import ProfilesSinglePage = ProfilesAPI.ProfilesSinglePage;
  export import ProfileListParams = ProfilesAPI.ProfileListParams;
  export import ProfileGetParams = ProfilesAPI.ProfileGetParams;
  export import Limits = LimitsAPI.Limits;
  export import LimitListResponse = LimitsAPI.LimitListResponse;
  export import LimitListParams = LimitsAPI.LimitListParams;
}
