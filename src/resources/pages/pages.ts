// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectsAPI from './projects/projects';
import { BaseProjects, Projects } from './projects/projects';

export class BasePages extends APIResource {
  static override readonly _key: readonly ['pages'] = Object.freeze(['pages'] as const);
}
export class Pages extends BasePages {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

Pages.Projects = Projects;
Pages.BaseProjects = BaseProjects;

export declare namespace Pages {
  export { Projects as Projects, BaseProjects as BaseProjects };
}
