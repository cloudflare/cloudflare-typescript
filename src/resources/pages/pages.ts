// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ProjectsAPI from 'cloudflare/resources/pages/projects/projects';

export class Pages extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

export namespace Pages {
  export import Projects = ProjectsAPI.Projects;
  export import ProjectCreateResponse = ProjectsAPI.ProjectCreateResponse;
  export import ProjectUpdateResponse = ProjectsAPI.ProjectUpdateResponse;
  export import ProjectListResponse = ProjectsAPI.ProjectListResponse;
  export import ProjectDeleteResponse = ProjectsAPI.ProjectDeleteResponse;
  export import ProjectGetResponse = ProjectsAPI.ProjectGetResponse;
  export import ProjectPurgeBuildCacheResponse = ProjectsAPI.ProjectPurgeBuildCacheResponse;
  export import ProjectCreateParams = ProjectsAPI.ProjectCreateParams;
  export import ProjectUpdateParams = ProjectsAPI.ProjectUpdateParams;
}
