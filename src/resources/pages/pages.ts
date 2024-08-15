// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ProjectsAPI from './projects/projects';

export class Pages extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

export namespace Pages {
  export import Projects = ProjectsAPI.Projects;
  export import Deployment = ProjectsAPI.Deployment;
  export import Stage = ProjectsAPI.Stage;
  export import ProjectCreateResponse = ProjectsAPI.ProjectCreateResponse;
  export import ProjectDeleteResponse = ProjectsAPI.ProjectDeleteResponse;
  export import ProjectEditResponse = ProjectsAPI.ProjectEditResponse;
  export import ProjectGetResponse = ProjectsAPI.ProjectGetResponse;
  export import ProjectPurgeBuildCacheResponse = ProjectsAPI.ProjectPurgeBuildCacheResponse;
  export import DeploymentsSinglePage = ProjectsAPI.DeploymentsSinglePage;
  export import ProjectCreateParams = ProjectsAPI.ProjectCreateParams;
  export import ProjectListParams = ProjectsAPI.ProjectListParams;
  export import ProjectDeleteParams = ProjectsAPI.ProjectDeleteParams;
  export import ProjectEditParams = ProjectsAPI.ProjectEditParams;
  export import ProjectGetParams = ProjectsAPI.ProjectGetParams;
  export import ProjectPurgeBuildCacheParams = ProjectsAPI.ProjectPurgeBuildCacheParams;
}
