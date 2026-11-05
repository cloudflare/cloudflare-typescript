// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeploymentsAPI from './deployments';
import {
  BaseDeployments,
  Deployment,
  DeploymentCreateParams,
  DeploymentDeleteParams,
  DeploymentDeleteResponse,
  DeploymentGetParams,
  DeploymentListParams,
  DeploymentUpdateParams,
  Deployments,
  DeploymentsCursorPagination,
} from './deployments';
import * as DomainACLsAPI from './domain-acls';
import {
  BaseDomainACLs,
  DomainACL,
  DomainACLCreateParams,
  DomainACLDeleteParams,
  DomainACLDeleteResponse,
  DomainACLGetParams,
  DomainACLListParams,
  DomainACLUpdateParams,
  DomainACLs,
  DomainACLsCursorPagination,
} from './domain-acls';
import * as PoliciesAPI from './policies';
import {
  BasePolicies,
  Policies,
  PoliciesCursorPagination,
  Policy,
  PolicyCreateParams,
  PolicyDeleteParams,
  PolicyDeleteResponse,
  PolicyGetParams,
  PolicyListParams,
  PolicyUpdateParams,
} from './policies';
import * as PolicySetsAPI from './policy-sets';
import {
  BasePolicySets,
  PolicySet,
  PolicySetCreateParams,
  PolicySetDeleteParams,
  PolicySetDeleteResponse,
  PolicySetGetParams,
  PolicySetListParams,
  PolicySetUpdateParams,
  PolicySets,
  PolicySetsCursorPagination,
} from './policy-sets';
import * as RegoMetadataAPI from './rego-metadata';
import {
  BaseRegoMetadata,
  RegoMetadata,
  RegoMetadataCreateParams,
  RegoMetadataCursorPagination,
  RegoMetadataDeleteParams,
  RegoMetadataDeleteResponse,
  RegoMetadataGetParams,
  RegoMetadataListParams,
  RegoMetadataUpdateParams,
} from './rego-metadata';
import * as RegoModulesAPI from './rego-modules';
import {
  BaseRegoModules,
  RegoModule,
  RegoModuleCreateParams,
  RegoModuleDeleteParams,
  RegoModuleDeleteResponse,
  RegoModuleGetParams,
  RegoModuleListParams,
  RegoModuleUpdateParams,
  RegoModules,
  RegoModulesCursorPagination,
} from './rego-modules';
import * as WorkloadsAPI from './workloads';
import {
  BaseWorkloads,
  Workload,
  WorkloadCreateParams,
  WorkloadDeleteParams,
  WorkloadDeleteResponse,
  WorkloadGetParams,
  WorkloadListParams,
  WorkloadUpdateParams,
  Workloads,
  WorkloadsCursorPagination,
} from './workloads';
import * as BasicAuthCredentialsAPI from './basic-auth-credentials/basic-auth-credentials';
import {
  BaseBasicAuthCredentials,
  BasicAuthCredential,
  BasicAuthCredentialCreateParams,
  BasicAuthCredentialDeleteParams,
  BasicAuthCredentialDeleteResponse,
  BasicAuthCredentialGetParams,
  BasicAuthCredentialListParams,
  BasicAuthCredentials,
  BasicAuthCredentialsCursorPagination,
} from './basic-auth-credentials/basic-auth-credentials';
import * as TenantStructuresAPI from './tenant-structures/tenant-structures';
import {
  BaseTenantStructures,
  TenantStructure,
  TenantStructureCreateParams,
  TenantStructureDeleteParams,
  TenantStructureDeleteResponse,
  TenantStructureGetParams,
  TenantStructureListParams,
  TenantStructureUpdateParams,
  TenantStructures,
  TenantStructuresCursorPagination,
} from './tenant-structures/tenant-structures';

export class BaseCWS extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws'] = Object.freeze(['zeroTrust', 'cws'] as const);
}
export class CWS extends BaseCWS {
  basicAuthCredentials: BasicAuthCredentialsAPI.BasicAuthCredentials =
    new BasicAuthCredentialsAPI.BasicAuthCredentials(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domainACLs: DomainACLsAPI.DomainACLs = new DomainACLsAPI.DomainACLs(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  policySets: PolicySetsAPI.PolicySets = new PolicySetsAPI.PolicySets(this._client);
  regoMetadata: RegoMetadataAPI.RegoMetadata = new RegoMetadataAPI.RegoMetadata(this._client);
  regoModules: RegoModulesAPI.RegoModules = new RegoModulesAPI.RegoModules(this._client);
  tenantStructures: TenantStructuresAPI.TenantStructures = new TenantStructuresAPI.TenantStructures(
    this._client,
  );
  workloads: WorkloadsAPI.Workloads = new WorkloadsAPI.Workloads(this._client);
}

CWS.BasicAuthCredentials = BasicAuthCredentials;
CWS.BaseBasicAuthCredentials = BaseBasicAuthCredentials;
CWS.Deployments = Deployments;
CWS.BaseDeployments = BaseDeployments;
CWS.DomainACLs = DomainACLs;
CWS.BaseDomainACLs = BaseDomainACLs;
CWS.Policies = Policies;
CWS.BasePolicies = BasePolicies;
CWS.PolicySets = PolicySets;
CWS.BasePolicySets = BasePolicySets;
CWS.BaseRegoMetadata = BaseRegoMetadata;
CWS.RegoModules = RegoModules;
CWS.BaseRegoModules = BaseRegoModules;
CWS.TenantStructures = TenantStructures;
CWS.BaseTenantStructures = BaseTenantStructures;
CWS.Workloads = Workloads;
CWS.BaseWorkloads = BaseWorkloads;

export declare namespace CWS {
  export {
    BasicAuthCredentials as BasicAuthCredentials,
    BaseBasicAuthCredentials as BaseBasicAuthCredentials,
    type BasicAuthCredential as BasicAuthCredential,
    type BasicAuthCredentialDeleteResponse as BasicAuthCredentialDeleteResponse,
    type BasicAuthCredentialsCursorPagination as BasicAuthCredentialsCursorPagination,
    type BasicAuthCredentialCreateParams as BasicAuthCredentialCreateParams,
    type BasicAuthCredentialListParams as BasicAuthCredentialListParams,
    type BasicAuthCredentialDeleteParams as BasicAuthCredentialDeleteParams,
    type BasicAuthCredentialGetParams as BasicAuthCredentialGetParams,
  };

  export {
    Deployments as Deployments,
    BaseDeployments as BaseDeployments,
    type Deployment as Deployment,
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentsCursorPagination as DeploymentsCursorPagination,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentUpdateParams as DeploymentUpdateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
    type DeploymentGetParams as DeploymentGetParams,
  };

  export {
    DomainACLs as DomainACLs,
    BaseDomainACLs as BaseDomainACLs,
    type DomainACL as DomainACL,
    type DomainACLDeleteResponse as DomainACLDeleteResponse,
    type DomainACLsCursorPagination as DomainACLsCursorPagination,
    type DomainACLCreateParams as DomainACLCreateParams,
    type DomainACLUpdateParams as DomainACLUpdateParams,
    type DomainACLListParams as DomainACLListParams,
    type DomainACLDeleteParams as DomainACLDeleteParams,
    type DomainACLGetParams as DomainACLGetParams,
  };

  export {
    Policies as Policies,
    BasePolicies as BasePolicies,
    type Policy as Policy,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PoliciesCursorPagination as PoliciesCursorPagination,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };

  export {
    PolicySets as PolicySets,
    BasePolicySets as BasePolicySets,
    type PolicySet as PolicySet,
    type PolicySetDeleteResponse as PolicySetDeleteResponse,
    type PolicySetsCursorPagination as PolicySetsCursorPagination,
    type PolicySetCreateParams as PolicySetCreateParams,
    type PolicySetUpdateParams as PolicySetUpdateParams,
    type PolicySetListParams as PolicySetListParams,
    type PolicySetDeleteParams as PolicySetDeleteParams,
    type PolicySetGetParams as PolicySetGetParams,
  };

  export {
    type RegoMetadata as RegoMetadata,
    BaseRegoMetadata as BaseRegoMetadata,
    type RegoMetadataDeleteResponse as RegoMetadataDeleteResponse,
    type RegoMetadataCursorPagination as RegoMetadataCursorPagination,
    type RegoMetadataCreateParams as RegoMetadataCreateParams,
    type RegoMetadataUpdateParams as RegoMetadataUpdateParams,
    type RegoMetadataListParams as RegoMetadataListParams,
    type RegoMetadataDeleteParams as RegoMetadataDeleteParams,
    type RegoMetadataGetParams as RegoMetadataGetParams,
  };

  export {
    RegoModules as RegoModules,
    BaseRegoModules as BaseRegoModules,
    type RegoModule as RegoModule,
    type RegoModuleDeleteResponse as RegoModuleDeleteResponse,
    type RegoModulesCursorPagination as RegoModulesCursorPagination,
    type RegoModuleCreateParams as RegoModuleCreateParams,
    type RegoModuleUpdateParams as RegoModuleUpdateParams,
    type RegoModuleListParams as RegoModuleListParams,
    type RegoModuleDeleteParams as RegoModuleDeleteParams,
    type RegoModuleGetParams as RegoModuleGetParams,
  };

  export {
    TenantStructures as TenantStructures,
    BaseTenantStructures as BaseTenantStructures,
    type TenantStructure as TenantStructure,
    type TenantStructureDeleteResponse as TenantStructureDeleteResponse,
    type TenantStructuresCursorPagination as TenantStructuresCursorPagination,
    type TenantStructureCreateParams as TenantStructureCreateParams,
    type TenantStructureUpdateParams as TenantStructureUpdateParams,
    type TenantStructureListParams as TenantStructureListParams,
    type TenantStructureDeleteParams as TenantStructureDeleteParams,
    type TenantStructureGetParams as TenantStructureGetParams,
  };

  export {
    Workloads as Workloads,
    BaseWorkloads as BaseWorkloads,
    type Workload as Workload,
    type WorkloadDeleteResponse as WorkloadDeleteResponse,
    type WorkloadsCursorPagination as WorkloadsCursorPagination,
    type WorkloadCreateParams as WorkloadCreateParams,
    type WorkloadUpdateParams as WorkloadUpdateParams,
    type WorkloadListParams as WorkloadListParams,
    type WorkloadDeleteParams as WorkloadDeleteParams,
    type WorkloadGetParams as WorkloadGetParams,
  };
}
