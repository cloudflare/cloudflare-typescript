// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from './assets';
import {
  AssetCheckMissingParams,
  AssetCheckMissingResponse,
  AssetCheckMissingResponsesSinglePage,
  AssetUploadParams,
  AssetUploadResponse,
  AssetUpsertHashesParams,
  AssetUpsertHashesResponse,
  Assets,
  BaseAssets,
} from './assets';
import * as ProjectsAPI from './projects/projects';
import {
  BaseProjects,
  Deployment,
  Project,
  ProjectCreateParams,
  ProjectDeleteParams,
  ProjectDeleteResponse,
  ProjectEditParams,
  ProjectGetParams,
  ProjectGetUploadTokenParams,
  ProjectGetUploadTokenResponse,
  ProjectListParams,
  ProjectPurgeBuildCacheParams,
  ProjectPurgeBuildCacheResponse,
  Projects,
  ProjectsV4PagePaginationArray,
  Stage,
} from './projects/projects';

export class BasePages extends APIResource {
  static override readonly _key: readonly ['pages'] = Object.freeze(['pages'] as const);
}
export class Pages extends BasePages {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

Pages.Projects = Projects;
Pages.BaseProjects = BaseProjects;
Pages.Assets = Assets;
Pages.BaseAssets = BaseAssets;

export declare namespace Pages {
  export {
    Projects as Projects,
    BaseProjects as BaseProjects,
    type Deployment as Deployment,
    type Project as Project,
    type Stage as Stage,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectGetUploadTokenResponse as ProjectGetUploadTokenResponse,
    type ProjectPurgeBuildCacheResponse as ProjectPurgeBuildCacheResponse,
    type ProjectsV4PagePaginationArray as ProjectsV4PagePaginationArray,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectEditParams as ProjectEditParams,
    type ProjectGetParams as ProjectGetParams,
    type ProjectGetUploadTokenParams as ProjectGetUploadTokenParams,
    type ProjectPurgeBuildCacheParams as ProjectPurgeBuildCacheParams,
  };

  export {
    Assets as Assets,
    BaseAssets as BaseAssets,
    type AssetCheckMissingResponse as AssetCheckMissingResponse,
    type AssetUploadResponse as AssetUploadResponse,
    type AssetUpsertHashesResponse as AssetUpsertHashesResponse,
    type AssetCheckMissingResponsesSinglePage as AssetCheckMissingResponsesSinglePage,
    type AssetCheckMissingParams as AssetCheckMissingParams,
    type AssetUploadParams as AssetUploadParams,
    type AssetUpsertHashesParams as AssetUpsertHashesParams,
  };
}
