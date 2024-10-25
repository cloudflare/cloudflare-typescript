// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ProjectsAPI from './projects/projects';

export class Pages extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

export namespace Pages {
  export import Projects = ProjectsAPI.Projects;
  export type Deployment = ProjectsAPI.Deployment;
  export type Project = ProjectsAPI.Project;
  export type Stage = ProjectsAPI.Stage;
  export type ProjectDeleteResponse = ProjectsAPI.ProjectDeleteResponse;
  export type ProjectPurgeBuildCacheResponse = ProjectsAPI.ProjectPurgeBuildCacheResponse;
  export import DeploymentsSinglePage = ProjectsAPI.DeploymentsSinglePage;
  export type ProjectCreateParams = ProjectsAPI.ProjectCreateParams;
  export type ProjectListParams = ProjectsAPI.ProjectListParams;
  export type ProjectDeleteParams = ProjectsAPI.ProjectDeleteParams;
  export type ProjectEditParams = ProjectsAPI.ProjectEditParams;
  export type ProjectGetParams = ProjectsAPI.ProjectGetParams;
  export type ProjectPurgeBuildCacheParams = ProjectsAPI.ProjectPurgeBuildCacheParams;
}
