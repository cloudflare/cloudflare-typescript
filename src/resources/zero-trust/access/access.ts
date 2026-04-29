// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BookmarksAPI from './bookmarks';
import { Bookmarks } from './bookmarks';
import * as CustomPagesAPI from './custom-pages';
import { CustomPages } from './custom-pages';
import * as GatewayCAAPI from './gateway-ca';
import { GatewayCA } from './gateway-ca';
import * as GroupsAPI from './groups';
import { Groups } from './groups';
import * as KeysAPI from './keys';
import { Keys } from './keys';
import * as PoliciesAPI from './policies';
import { Policies } from './policies';
import * as ServiceTokensAPI from './service-tokens';
import { ServiceTokens } from './service-tokens';
import * as TagsAPI from './tags';
import { Tags } from './tags';
import * as AIControlsAPI from './ai-controls/ai-controls';
import { AIControls } from './ai-controls/ai-controls';
import * as ApplicationsAPI from './applications/applications';
import { Applications } from './applications/applications';
import * as CertificatesAPI from './certificates/certificates';
import { Certificates } from './certificates/certificates';
import * as InfrastructureAPI from './infrastructure/infrastructure';
import { Infrastructure } from './infrastructure/infrastructure';
import * as LogsAPI from './logs/logs';
import { Logs } from './logs/logs';
import * as UsersAPI from './users/users';
import { Users } from './users/users';

export class Access extends APIResource {
  aiControls: AIControlsAPI.AIControls = new AIControlsAPI.AIControls(this._client);
  gatewayCA: GatewayCAAPI.GatewayCA = new GatewayCAAPI.GatewayCA(this._client);
  infrastructure: InfrastructureAPI.Infrastructure = new InfrastructureAPI.Infrastructure(this._client);
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  serviceTokens: ServiceTokensAPI.ServiceTokens = new ServiceTokensAPI.ServiceTokens(this._client);
  bookmarks: BookmarksAPI.Bookmarks = new BookmarksAPI.Bookmarks(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  customPages: CustomPagesAPI.CustomPages = new CustomPagesAPI.CustomPages(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
}

Access.AIControls = AIControls;
Access.GatewayCA = GatewayCA;
Access.Infrastructure = Infrastructure;
Access.Applications = Applications;
Access.Certificates = Certificates;
Access.Groups = Groups;
Access.ServiceTokens = ServiceTokens;
Access.Bookmarks = Bookmarks;
Access.Keys = Keys;
Access.Logs = Logs;
Access.Users = Users;
Access.CustomPages = CustomPages;
Access.Tags = Tags;
Access.Policies = Policies;

export declare namespace Access {
  export { AIControls as AIControls };

  export { GatewayCA as GatewayCA };

  export { Infrastructure as Infrastructure };

  export { Applications as Applications };

  export { Certificates as Certificates };

  export { Groups as Groups };

  export { ServiceTokens as ServiceTokens };

  export { Bookmarks as Bookmarks };

  export { Keys as Keys };

  export { Logs as Logs };

  export { Users as Users };

  export { CustomPages as CustomPages };

  export { Tags as Tags };

  export { Policies as Policies };
}
