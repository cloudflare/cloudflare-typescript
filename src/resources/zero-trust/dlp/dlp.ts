// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomPromptTopicsAPI from './custom-prompt-topics';
import {
  BaseCustomPromptTopics,
  CustomPromptTopic,
  CustomPromptTopicCreateParams,
  CustomPromptTopicDeleteParams,
  CustomPromptTopicDeleteResponse,
  CustomPromptTopicGetParams,
  CustomPromptTopicListParams,
  CustomPromptTopicUpdateParams,
  CustomPromptTopics,
  CustomPromptTopicsSinglePage,
} from './custom-prompt-topics';
import * as DataClassesAPI from './data-classes';
import {
  BaseDataClasses,
  DataClassCreateParams,
  DataClassCreateResponse,
  DataClassDeleteParams,
  DataClassDeleteResponse,
  DataClassGetParams,
  DataClassGetResponse,
  DataClassListParams,
  DataClassListResponse,
  DataClassListResponsesSinglePage,
  DataClassUpdateParams,
  DataClassUpdateResponse,
  DataClasses,
} from './data-classes';
import * as LimitsAPI from './limits';
import { BaseLimits, LimitListParams, LimitListResponse, Limits } from './limits';
import * as PatternsAPI from './patterns';
import { BasePatterns, PatternValidateParams, PatternValidateResponse, Patterns } from './patterns';
import * as PayloadLogsAPI from './payload-logs';
import {
  BasePayloadLogs,
  PayloadLogGetParams,
  PayloadLogGetResponse,
  PayloadLogUpdateParams,
  PayloadLogUpdateResponse,
  PayloadLogs,
} from './payload-logs';
import * as SettingsAPI from './settings';
import {
  BaseSettings,
  DLPSettings,
  SettingDeleteParams,
  SettingEditParams,
  SettingGetParams,
  SettingUpdateParams,
  Settings,
} from './settings';
import * as DataTagCategoriesAPI from './data-tag-categories/data-tag-categories';
import {
  BaseDataTagCategories,
  DataTagCategories,
  DataTagCategoryCreateParams,
  DataTagCategoryCreateResponse,
  DataTagCategoryDeleteParams,
  DataTagCategoryDeleteResponse,
  DataTagCategoryGetParams,
  DataTagCategoryGetResponse,
  DataTagCategoryListParams,
  DataTagCategoryListResponse,
  DataTagCategoryListResponsesSinglePage,
  DataTagCategoryUpdateParams,
  DataTagCategoryUpdateResponse,
} from './data-tag-categories/data-tag-categories';
import * as DatasetsAPI from './datasets/datasets';
import {
  BaseDatasets,
  Dataset,
  DatasetArray,
  DatasetCreateParams,
  DatasetCreation,
  DatasetDeleteParams,
  DatasetGetParams,
  DatasetListParams,
  DatasetUpdateParams,
  Datasets,
  DatasetsSinglePage,
} from './datasets/datasets';
import * as EmailAPI from './email/email';
import { BaseEmail, Email } from './email/email';
import * as EntriesAPI from './entries/entries';
import {
  BaseEntries,
  Entries,
  EntryCreateParams,
  EntryCreateResponse,
  EntryDeleteParams,
  EntryDeleteResponse,
  EntryGetParams,
  EntryGetResponse,
  EntryListParams,
  EntryListResponse,
  EntryListResponsesSinglePage,
  EntryUpdateParams,
  EntryUpdateResponse,
} from './entries/entries';
import * as ProfilesAPI from './profiles/profiles';
import {
  BaseProfiles,
  ContextAwareness,
  Profile,
  ProfileGetParams,
  ProfileListParams,
  Profiles,
  ProfilesSinglePage,
  SkipConfiguration,
} from './profiles/profiles';
import * as SensitivityGroupsAPI from './sensitivity-groups/sensitivity-groups';
import {
  BaseSensitivityGroups,
  SensitivityGroupCreateParams,
  SensitivityGroupCreateResponse,
  SensitivityGroupDeleteParams,
  SensitivityGroupDeleteResponse,
  SensitivityGroupGetParams,
  SensitivityGroupGetResponse,
  SensitivityGroupListParams,
  SensitivityGroupListResponse,
  SensitivityGroupListResponsesSinglePage,
  SensitivityGroupUpdateParams,
  SensitivityGroupUpdateResponse,
  SensitivityGroups,
} from './sensitivity-groups/sensitivity-groups';

export class BaseDLP extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp'] = Object.freeze(['zeroTrust', 'dlp'] as const);
}
export class DLP extends BaseDLP {
  customPromptTopics: CustomPromptTopicsAPI.CustomPromptTopics = new CustomPromptTopicsAPI.CustomPromptTopics(
    this._client,
  );
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  patterns: PatternsAPI.Patterns = new PatternsAPI.Patterns(this._client);
  payloadLogs: PayloadLogsAPI.PayloadLogs = new PayloadLogsAPI.PayloadLogs(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
  sensitivityGroups: SensitivityGroupsAPI.SensitivityGroups = new SensitivityGroupsAPI.SensitivityGroups(
    this._client,
  );
  dataTagCategories: DataTagCategoriesAPI.DataTagCategories = new DataTagCategoriesAPI.DataTagCategories(
    this._client,
  );
  dataClasses: DataClassesAPI.DataClasses = new DataClassesAPI.DataClasses(this._client);
}

DLP.CustomPromptTopics = CustomPromptTopics;
DLP.BaseCustomPromptTopics = BaseCustomPromptTopics;
DLP.Datasets = Datasets;
DLP.BaseDatasets = BaseDatasets;
DLP.Patterns = Patterns;
DLP.BasePatterns = BasePatterns;
DLP.PayloadLogs = PayloadLogs;
DLP.BasePayloadLogs = BasePayloadLogs;
DLP.Settings = Settings;
DLP.BaseSettings = BaseSettings;
DLP.Email = Email;
DLP.BaseEmail = BaseEmail;
DLP.Profiles = Profiles;
DLP.BaseProfiles = BaseProfiles;
DLP.Limits = Limits;
DLP.BaseLimits = BaseLimits;
DLP.Entries = Entries;
DLP.BaseEntries = BaseEntries;
DLP.SensitivityGroups = SensitivityGroups;
DLP.BaseSensitivityGroups = BaseSensitivityGroups;
DLP.DataTagCategories = DataTagCategories;
DLP.BaseDataTagCategories = BaseDataTagCategories;
DLP.DataClasses = DataClasses;
DLP.BaseDataClasses = BaseDataClasses;

export declare namespace DLP {
  export {
    CustomPromptTopics as CustomPromptTopics,
    BaseCustomPromptTopics as BaseCustomPromptTopics,
    type CustomPromptTopic as CustomPromptTopic,
    type CustomPromptTopicDeleteResponse as CustomPromptTopicDeleteResponse,
    type CustomPromptTopicsSinglePage as CustomPromptTopicsSinglePage,
    type CustomPromptTopicCreateParams as CustomPromptTopicCreateParams,
    type CustomPromptTopicUpdateParams as CustomPromptTopicUpdateParams,
    type CustomPromptTopicListParams as CustomPromptTopicListParams,
    type CustomPromptTopicDeleteParams as CustomPromptTopicDeleteParams,
    type CustomPromptTopicGetParams as CustomPromptTopicGetParams,
  };

  export {
    Datasets as Datasets,
    BaseDatasets as BaseDatasets,
    type Dataset as Dataset,
    type DatasetArray as DatasetArray,
    type DatasetCreation as DatasetCreation,
    type DatasetsSinglePage as DatasetsSinglePage,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetDeleteParams as DatasetDeleteParams,
    type DatasetGetParams as DatasetGetParams,
  };

  export {
    Patterns as Patterns,
    BasePatterns as BasePatterns,
    type PatternValidateResponse as PatternValidateResponse,
    type PatternValidateParams as PatternValidateParams,
  };

  export {
    PayloadLogs as PayloadLogs,
    BasePayloadLogs as BasePayloadLogs,
    type PayloadLogUpdateResponse as PayloadLogUpdateResponse,
    type PayloadLogGetResponse as PayloadLogGetResponse,
    type PayloadLogUpdateParams as PayloadLogUpdateParams,
    type PayloadLogGetParams as PayloadLogGetParams,
  };

  export {
    Settings as Settings,
    BaseSettings as BaseSettings,
    type DLPSettings as DLPSettings,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingDeleteParams as SettingDeleteParams,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };

  export { Email as Email, BaseEmail as BaseEmail };

  export {
    Profiles as Profiles,
    BaseProfiles as BaseProfiles,
    type ContextAwareness as ContextAwareness,
    type Profile as Profile,
    type SkipConfiguration as SkipConfiguration,
    type ProfilesSinglePage as ProfilesSinglePage,
    type ProfileListParams as ProfileListParams,
    type ProfileGetParams as ProfileGetParams,
  };

  export {
    Limits as Limits,
    BaseLimits as BaseLimits,
    type LimitListResponse as LimitListResponse,
    type LimitListParams as LimitListParams,
  };

  export {
    Entries as Entries,
    BaseEntries as BaseEntries,
    type EntryCreateResponse as EntryCreateResponse,
    type EntryUpdateResponse as EntryUpdateResponse,
    type EntryListResponse as EntryListResponse,
    type EntryDeleteResponse as EntryDeleteResponse,
    type EntryGetResponse as EntryGetResponse,
    type EntryListResponsesSinglePage as EntryListResponsesSinglePage,
    type EntryCreateParams as EntryCreateParams,
    type EntryUpdateParams as EntryUpdateParams,
    type EntryListParams as EntryListParams,
    type EntryDeleteParams as EntryDeleteParams,
    type EntryGetParams as EntryGetParams,
  };

  export {
    SensitivityGroups as SensitivityGroups,
    BaseSensitivityGroups as BaseSensitivityGroups,
    type SensitivityGroupCreateResponse as SensitivityGroupCreateResponse,
    type SensitivityGroupUpdateResponse as SensitivityGroupUpdateResponse,
    type SensitivityGroupListResponse as SensitivityGroupListResponse,
    type SensitivityGroupDeleteResponse as SensitivityGroupDeleteResponse,
    type SensitivityGroupGetResponse as SensitivityGroupGetResponse,
    type SensitivityGroupListResponsesSinglePage as SensitivityGroupListResponsesSinglePage,
    type SensitivityGroupCreateParams as SensitivityGroupCreateParams,
    type SensitivityGroupUpdateParams as SensitivityGroupUpdateParams,
    type SensitivityGroupListParams as SensitivityGroupListParams,
    type SensitivityGroupDeleteParams as SensitivityGroupDeleteParams,
    type SensitivityGroupGetParams as SensitivityGroupGetParams,
  };

  export {
    DataTagCategories as DataTagCategories,
    BaseDataTagCategories as BaseDataTagCategories,
    type DataTagCategoryCreateResponse as DataTagCategoryCreateResponse,
    type DataTagCategoryUpdateResponse as DataTagCategoryUpdateResponse,
    type DataTagCategoryListResponse as DataTagCategoryListResponse,
    type DataTagCategoryDeleteResponse as DataTagCategoryDeleteResponse,
    type DataTagCategoryGetResponse as DataTagCategoryGetResponse,
    type DataTagCategoryListResponsesSinglePage as DataTagCategoryListResponsesSinglePage,
    type DataTagCategoryCreateParams as DataTagCategoryCreateParams,
    type DataTagCategoryUpdateParams as DataTagCategoryUpdateParams,
    type DataTagCategoryListParams as DataTagCategoryListParams,
    type DataTagCategoryDeleteParams as DataTagCategoryDeleteParams,
    type DataTagCategoryGetParams as DataTagCategoryGetParams,
  };

  export {
    DataClasses as DataClasses,
    BaseDataClasses as BaseDataClasses,
    type DataClassCreateResponse as DataClassCreateResponse,
    type DataClassUpdateResponse as DataClassUpdateResponse,
    type DataClassListResponse as DataClassListResponse,
    type DataClassDeleteResponse as DataClassDeleteResponse,
    type DataClassGetResponse as DataClassGetResponse,
    type DataClassListResponsesSinglePage as DataClassListResponsesSinglePage,
    type DataClassCreateParams as DataClassCreateParams,
    type DataClassUpdateParams as DataClassUpdateParams,
    type DataClassListParams as DataClassListParams,
    type DataClassDeleteParams as DataClassDeleteParams,
    type DataClassGetParams as DataClassGetParams,
  };
}
