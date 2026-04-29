// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BookmarksAPI from './bookmarks';
import { BaseBookmarks, Bookmarks } from './bookmarks';
import * as CustomPagesAPI from './custom-pages';
import { BaseCustomPages, CustomPages } from './custom-pages';
import * as GatewayCAAPI from './gateway-ca';
import { BaseGatewayCA, GatewayCA } from './gateway-ca';
import * as GroupsAPI from './groups';
import { BaseGroups, Groups } from './groups';
import * as KeysAPI from './keys';
import { BaseKeys, Keys } from './keys';
import * as PoliciesAPI from './policies';
import { BasePolicies, Policies } from './policies';
import * as ServiceTokensAPI from './service-tokens';
import { BaseServiceTokens, ServiceTokens } from './service-tokens';
import * as TagsAPI from './tags';
import { BaseTags, Tags } from './tags';
import * as AIControlsAPI from './ai-controls/ai-controls';
import { AIControls, BaseAIControls } from './ai-controls/ai-controls';
import * as ApplicationsAPI from './applications/applications';
import { Applications, BaseApplications } from './applications/applications';
import * as CertificatesAPI from './certificates/certificates';
import { BaseCertificates, Certificates } from './certificates/certificates';
import * as InfrastructureAPI from './infrastructure/infrastructure';
import { BaseInfrastructure, Infrastructure } from './infrastructure/infrastructure';
import * as LogsAPI from './logs/logs';
import { BaseLogs, Logs } from './logs/logs';
import * as UsersAPI from './users/users';
import { BaseUsers, Users } from './users/users';

export class BaseAccess extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access'] = Object.freeze([
    'zeroTrust',
    'access',
  ] as const);
}
export class Access extends BaseAccess {
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
Access.BaseAIControls = BaseAIControls;
Access.GatewayCA = GatewayCA;
Access.BaseGatewayCA = BaseGatewayCA;
Access.Infrastructure = Infrastructure;
Access.BaseInfrastructure = BaseInfrastructure;
Access.Applications = Applications;
Access.BaseApplications = BaseApplications;
Access.Certificates = Certificates;
Access.BaseCertificates = BaseCertificates;
Access.Groups = Groups;
Access.BaseGroups = BaseGroups;
Access.ServiceTokens = ServiceTokens;
Access.BaseServiceTokens = BaseServiceTokens;
Access.Bookmarks = Bookmarks;
Access.BaseBookmarks = BaseBookmarks;
Access.Keys = Keys;
Access.BaseKeys = BaseKeys;
Access.Logs = Logs;
Access.BaseLogs = BaseLogs;
Access.Users = Users;
Access.BaseUsers = BaseUsers;
Access.CustomPages = CustomPages;
Access.BaseCustomPages = BaseCustomPages;
Access.Tags = Tags;
Access.BaseTags = BaseTags;
Access.Policies = Policies;
Access.BasePolicies = BasePolicies;

export declare namespace Access {
  export { AIControls as AIControls, BaseAIControls as BaseAIControls };

  export { GatewayCA as GatewayCA, BaseGatewayCA as BaseGatewayCA };

  export { Infrastructure as Infrastructure, BaseInfrastructure as BaseInfrastructure };

  export { Applications as Applications, BaseApplications as BaseApplications };

  export { Certificates as Certificates, BaseCertificates as BaseCertificates };

  export { Groups as Groups, BaseGroups as BaseGroups };

  export { ServiceTokens as ServiceTokens, BaseServiceTokens as BaseServiceTokens };

  export { Bookmarks as Bookmarks, BaseBookmarks as BaseBookmarks };

  export { Keys as Keys, BaseKeys as BaseKeys };

  export { Logs as Logs, BaseLogs as BaseLogs };

  export { Users as Users, BaseUsers as BaseUsers };

  export { CustomPages as CustomPages, BaseCustomPages as BaseCustomPages };

  export { Tags as Tags, BaseTags as BaseTags };

  export { Policies as Policies, BasePolicies as BasePolicies };
}
