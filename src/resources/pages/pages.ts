// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ProjectsAPI from './projects/projects';
import {
  Deployment,
  Project,
  ProjectCreateParams,
  ProjectCreateResponse,
  ProjectDeleteParams,
  ProjectDeleteResponse,
  ProjectEditParams,
  ProjectEditResponse,
  ProjectGetParams,
  ProjectGetResponse,
  ProjectListParams,
  ProjectListResponse,
  ProjectListResponsesV4PagePaginationArray,
  ProjectPurgeBuildCacheParams,
  ProjectPurgeBuildCacheResponse,
  Projects,
  Stage,
} from './projects/projects';

export class Pages extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

Pages.Projects = Projects;
Pages.ProjectListResponsesV4PagePaginationArray = ProjectListResponsesV4PagePaginationArray;

export declare namespace Pages {
  export {
    Projects as Projects,
    type Deployment as Deployment,
    type Project as Project,
    type Stage as Stage,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectEditResponse as ProjectEditResponse,
    type ProjectGetResponse as ProjectGetResponse,
    type ProjectPurgeBuildCacheResponse as ProjectPurgeBuildCacheResponse,
    ProjectListResponsesV4PagePaginationArray as ProjectListResponsesV4PagePaginationArray,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectEditParams as ProjectEditParams,
    type ProjectGetParams as ProjectGetParams,
    type ProjectPurgeBuildCacheParams as ProjectPurgeBuildCacheParams,
  };
}
