// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class DynamicRouting extends APIResource {
  /**
   * Create a new AI Gateway Dynamic Route.
   *
   * @example
   * ```ts
   * const dynamicRouting =
   *   await client.aiGateway.dynamicRouting.create('54442216', {
   *     account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *     elements: [
   *       {
   *         id: 'id',
   *         outputs: { next: { elementId: 'elementId' } },
   *         type: 'start',
   *       },
   *     ],
   *     name: 'name',
   *   });
   * ```
   */
  create(
    gatewayId: string,
    params: DynamicRoutingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DynamicRoutingCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an AI Gateway Dynamic Route.
   *
   * @example
   * ```ts
   * const dynamicRouting =
   *   await client.aiGateway.dynamicRouting.update(
   *     '54442216',
   *     '54442216',
   *     {
   *       account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *       name: 'Route Name',
   *     },
   *   );
   * ```
   */
  update(
    gatewayId: string,
    id: string,
    params: DynamicRoutingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * List all AI Gateway Dynamic Routes.
   *
   * @example
   * ```ts
   * const dynamicRoutings =
   *   await client.aiGateway.dynamicRouting.list('54442216', {
   *     account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   });
   * ```
   */
  list(
    gatewayId: string,
    params: DynamicRoutingListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingListResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes`, options);
  }

  /**
   * Delete an AI Gateway Dynamic Route.
   *
   * @example
   * ```ts
   * const dynamicRouting =
   *   await client.aiGateway.dynamicRouting.delete(
   *     '54442216',
   *     '54442216',
   *     { account_id: '0d37909e38d3e99c29fa2cd343ac421a' },
   *   );
   * ```
   */
  delete(
    gatewayId: string,
    id: string,
    params: DynamicRoutingDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes/${id}`,
        options,
      ) as Core.APIPromise<{ result: DynamicRoutingDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create a new AI Gateway Dynamic Route Deployment.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.dynamicRouting.createDeployment(
   *     '54442216',
   *     '54442216',
   *     {
   *       account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *       comment: 'Route Deployment Comment',
   *       version_id: '54442216',
   *     },
   *   );
   * ```
   */
  createDeployment(
    gatewayId: string,
    id: string,
    params: DynamicRoutingCreateDeploymentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingCreateDeploymentResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes/${id}/deployments`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DynamicRoutingCreateDeploymentResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create a new AI Gateway Dynamic Route Version.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.dynamicRouting.createVersion(
   *     '54442216',
   *     '54442216',
   *     {
   *       account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *       comment: 'Route Version Comment',
   *       elements: [
   *         {
   *           id: 'id',
   *           outputs: { next: { elementId: 'elementId' } },
   *           type: 'start',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  createVersion(
    gatewayId: string,
    id: string,
    params: DynamicRoutingCreateVersionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingCreateVersionResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes/${id}/versions`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DynamicRoutingCreateVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an AI Gateway Dynamic Route.
   *
   * @example
   * ```ts
   * const dynamicRouting =
   *   await client.aiGateway.dynamicRouting.get(
   *     '54442216',
   *     '54442216',
   *     { account_id: '0d37909e38d3e99c29fa2cd343ac421a' },
   *   );
   * ```
   */
  get(
    gatewayId: string,
    id: string,
    params: DynamicRoutingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes/${id}`,
        options,
      ) as Core.APIPromise<{ result: DynamicRoutingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an AI Gateway Dynamic Route Version.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.dynamicRouting.getVersion(
   *     '54442216',
   *     '54442216',
   *     '54442216',
   *     { account_id: '0d37909e38d3e99c29fa2cd343ac421a' },
   *   );
   * ```
   */
  getVersion(
    gatewayId: string,
    id: string,
    versionId: string,
    params: DynamicRoutingGetVersionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingGetVersionResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes/${id}/versions/${versionId}`,
        options,
      ) as Core.APIPromise<{ result: DynamicRoutingGetVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all AI Gateway Dynamic Route Deployments.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.dynamicRouting.listDeployments(
   *     '54442216',
   *     '54442216',
   *     { account_id: '0d37909e38d3e99c29fa2cd343ac421a' },
   *   );
   * ```
   */
  listDeployments(
    gatewayId: string,
    id: string,
    params: DynamicRoutingListDeploymentsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingListDeploymentsResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes/${id}/deployments`,
      options,
    );
  }

  /**
   * List all AI Gateway Dynamic Route Versions.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.dynamicRouting.listVersions(
   *     '54442216',
   *     '54442216',
   *     { account_id: '0d37909e38d3e99c29fa2cd343ac421a' },
   *   );
   * ```
   */
  listVersions(
    gatewayId: string,
    id: string,
    params: DynamicRoutingListVersionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DynamicRoutingListVersionsResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/routes/${id}/versions`,
      options,
    );
  }
}

export interface DynamicRoutingCreateResponse {
  id: string;

  account_tag: string;

  created_at: string;

  deployment: DynamicRoutingCreateResponse.Deployment;

  elements: Array<
    | DynamicRoutingCreateResponse.UnionMember0
    | DynamicRoutingCreateResponse.UnionMember1
    | DynamicRoutingCreateResponse.UnionMember2
    | DynamicRoutingCreateResponse.UnionMember3
    | DynamicRoutingCreateResponse.UnionMember4
    | DynamicRoutingCreateResponse.UnionMember5
  >;

  gateway_id: string;

  modified_at: string;

  name: string;

  version: DynamicRoutingCreateResponse.Version;
}

export namespace DynamicRoutingCreateResponse {
  export interface Deployment {
    created_at: string;

    deployment_id: string;

    version_id: string;

    comment?: string | null;
  }

  export interface UnionMember0 {
    id: string;

    outputs: UnionMember0.Outputs;

    type: 'start';
  }

  export namespace UnionMember0 {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface UnionMember1 {
    id: string;

    outputs: UnionMember1.Outputs;

    properties: UnionMember1.Properties;

    type: 'conditional';
  }

  export namespace UnionMember1 {
    export interface Outputs {
      false: Outputs.False;

      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: unknown;
    }
  }

  export interface UnionMember2 {
    id: string;

    outputs: { [key: string]: UnionMember2.Outputs };

    type: 'percentage';
  }

  export namespace UnionMember2 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface UnionMember3 {
    id: string;

    outputs: UnionMember3.Outputs;

    properties: UnionMember3.Properties;

    type: 'rate';
  }

  export namespace UnionMember3 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;

      limit: number;

      limitType: 'count' | 'cost';

      window: number;
    }
  }

  export interface UnionMember4 {
    id: string;

    outputs: UnionMember4.Outputs;

    properties: UnionMember4.Properties;

    type: 'model';
  }

  export namespace UnionMember4 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;

      provider: string;

      retries: number;

      timeout: number;
    }
  }

  export interface UnionMember5 {
    id: string;

    outputs: { [key: string]: UnionMember5.Outputs };

    type: 'end';
  }

  export namespace UnionMember5 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface Version {
    active: 'true' | 'false';

    created_at: string;

    data: string;

    version_id: string;

    comment?: string | null;
  }
}

export interface DynamicRoutingUpdateResponse {
  route: DynamicRoutingUpdateResponse.Route;

  success: boolean;
}

export namespace DynamicRoutingUpdateResponse {
  export interface Route {
    id: string;

    account_tag: string;

    created_at: string;

    deployment: Route.Deployment;

    elements: Array<
      | Route.UnionMember0
      | Route.UnionMember1
      | Route.UnionMember2
      | Route.UnionMember3
      | Route.UnionMember4
      | Route.UnionMember5
    >;

    gateway_id: string;

    modified_at: string;

    name: string;

    version: Route.Version;
  }

  export namespace Route {
    export interface Deployment {
      created_at: string;

      deployment_id: string;

      version_id: string;

      comment?: string | null;
    }

    export interface UnionMember0 {
      id: string;

      outputs: UnionMember0.Outputs;

      type: 'start';
    }

    export namespace UnionMember0 {
      export interface Outputs {
        next: Outputs.Next;
      }

      export namespace Outputs {
        export interface Next {
          elementId: string;
        }
      }
    }

    export interface UnionMember1 {
      id: string;

      outputs: UnionMember1.Outputs;

      properties: UnionMember1.Properties;

      type: 'conditional';
    }

    export namespace UnionMember1 {
      export interface Outputs {
        false: Outputs.False;

        true: Outputs.True;
      }

      export namespace Outputs {
        export interface False {
          elementId: string;
        }

        export interface True {
          elementId: string;
        }
      }

      export interface Properties {
        conditions?: unknown;
      }
    }

    export interface UnionMember2 {
      id: string;

      outputs: { [key: string]: UnionMember2.Outputs };

      type: 'percentage';
    }

    export namespace UnionMember2 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface UnionMember3 {
      id: string;

      outputs: UnionMember3.Outputs;

      properties: UnionMember3.Properties;

      type: 'rate';
    }

    export namespace UnionMember3 {
      export interface Outputs {
        fallback: Outputs.Fallback;

        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        key: string;

        limit: number;

        limitType: 'count' | 'cost';

        window: number;
      }
    }

    export interface UnionMember4 {
      id: string;

      outputs: UnionMember4.Outputs;

      properties: UnionMember4.Properties;

      type: 'model';
    }

    export namespace UnionMember4 {
      export interface Outputs {
        fallback: Outputs.Fallback;

        success: Outputs.Success;
      }

      export namespace Outputs {
        export interface Fallback {
          elementId: string;
        }

        export interface Success {
          elementId: string;
        }
      }

      export interface Properties {
        model: string;

        provider: string;

        retries: number;

        timeout: number;
      }
    }

    export interface UnionMember5 {
      id: string;

      outputs: { [key: string]: UnionMember5.Outputs };

      type: 'end';
    }

    export namespace UnionMember5 {
      export interface Outputs {
        elementId: string;
      }
    }

    export interface Version {
      active: 'true' | 'false';

      created_at: string;

      data: string;

      version_id: string;

      comment?: string | null;
    }
  }
}

export interface DynamicRoutingListResponse {
  data: DynamicRoutingListResponse.Data;

  success: boolean;
}

export namespace DynamicRoutingListResponse {
  export interface Data {
    order_by: string;

    order_by_direction: string;

    page: number;

    per_page: number;

    routes: Array<Data.Route>;
  }

  export namespace Data {
    export interface Route {
      id: string;

      account_tag: string;

      created_at: string;

      deployment: Route.Deployment;

      elements: Array<
        | Route.UnionMember0
        | Route.UnionMember1
        | Route.UnionMember2
        | Route.UnionMember3
        | Route.UnionMember4
        | Route.UnionMember5
      >;

      gateway_id: string;

      modified_at: string;

      name: string;

      version: Route.Version;
    }

    export namespace Route {
      export interface Deployment {
        created_at: string;

        deployment_id: string;

        version_id: string;

        comment?: string | null;
      }

      export interface UnionMember0 {
        id: string;

        outputs: UnionMember0.Outputs;

        type: 'start';
      }

      export namespace UnionMember0 {
        export interface Outputs {
          next: Outputs.Next;
        }

        export namespace Outputs {
          export interface Next {
            elementId: string;
          }
        }
      }

      export interface UnionMember1 {
        id: string;

        outputs: UnionMember1.Outputs;

        properties: UnionMember1.Properties;

        type: 'conditional';
      }

      export namespace UnionMember1 {
        export interface Outputs {
          false: Outputs.False;

          true: Outputs.True;
        }

        export namespace Outputs {
          export interface False {
            elementId: string;
          }

          export interface True {
            elementId: string;
          }
        }

        export interface Properties {
          conditions?: unknown;
        }
      }

      export interface UnionMember2 {
        id: string;

        outputs: { [key: string]: UnionMember2.Outputs };

        type: 'percentage';
      }

      export namespace UnionMember2 {
        export interface Outputs {
          elementId: string;
        }
      }

      export interface UnionMember3 {
        id: string;

        outputs: UnionMember3.Outputs;

        properties: UnionMember3.Properties;

        type: 'rate';
      }

      export namespace UnionMember3 {
        export interface Outputs {
          fallback: Outputs.Fallback;

          success: Outputs.Success;
        }

        export namespace Outputs {
          export interface Fallback {
            elementId: string;
          }

          export interface Success {
            elementId: string;
          }
        }

        export interface Properties {
          key: string;

          limit: number;

          limitType: 'count' | 'cost';

          window: number;
        }
      }

      export interface UnionMember4 {
        id: string;

        outputs: UnionMember4.Outputs;

        properties: UnionMember4.Properties;

        type: 'model';
      }

      export namespace UnionMember4 {
        export interface Outputs {
          fallback: Outputs.Fallback;

          success: Outputs.Success;
        }

        export namespace Outputs {
          export interface Fallback {
            elementId: string;
          }

          export interface Success {
            elementId: string;
          }
        }

        export interface Properties {
          model: string;

          provider: string;

          retries: number;

          timeout: number;
        }
      }

      export interface UnionMember5 {
        id: string;

        outputs: { [key: string]: UnionMember5.Outputs };

        type: 'end';
      }

      export namespace UnionMember5 {
        export interface Outputs {
          elementId: string;
        }
      }

      export interface Version {
        active: 'true' | 'false';

        created_at: string;

        data: string;

        version_id: string;

        comment?: string | null;
      }
    }
  }
}

export interface DynamicRoutingDeleteResponse {
  id: string;

  account_tag: string;

  created_at: string;

  elements: Array<
    | DynamicRoutingDeleteResponse.UnionMember0
    | DynamicRoutingDeleteResponse.UnionMember1
    | DynamicRoutingDeleteResponse.UnionMember2
    | DynamicRoutingDeleteResponse.UnionMember3
    | DynamicRoutingDeleteResponse.UnionMember4
    | DynamicRoutingDeleteResponse.UnionMember5
  >;

  gateway_id: string;

  modified_at: string;

  name: string;
}

export namespace DynamicRoutingDeleteResponse {
  export interface UnionMember0 {
    id: string;

    outputs: UnionMember0.Outputs;

    type: 'start';
  }

  export namespace UnionMember0 {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface UnionMember1 {
    id: string;

    outputs: UnionMember1.Outputs;

    properties: UnionMember1.Properties;

    type: 'conditional';
  }

  export namespace UnionMember1 {
    export interface Outputs {
      false: Outputs.False;

      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: unknown;
    }
  }

  export interface UnionMember2 {
    id: string;

    outputs: { [key: string]: UnionMember2.Outputs };

    type: 'percentage';
  }

  export namespace UnionMember2 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface UnionMember3 {
    id: string;

    outputs: UnionMember3.Outputs;

    properties: UnionMember3.Properties;

    type: 'rate';
  }

  export namespace UnionMember3 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;

      limit: number;

      limitType: 'count' | 'cost';

      window: number;
    }
  }

  export interface UnionMember4 {
    id: string;

    outputs: UnionMember4.Outputs;

    properties: UnionMember4.Properties;

    type: 'model';
  }

  export namespace UnionMember4 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;

      provider: string;

      retries: number;

      timeout: number;
    }
  }

  export interface UnionMember5 {
    id: string;

    outputs: { [key: string]: UnionMember5.Outputs };

    type: 'end';
  }

  export namespace UnionMember5 {
    export interface Outputs {
      elementId: string;
    }
  }
}

export interface DynamicRoutingCreateDeploymentResponse {
  id: string;

  account_tag: string;

  created_at: string;

  elements: Array<
    | DynamicRoutingCreateDeploymentResponse.UnionMember0
    | DynamicRoutingCreateDeploymentResponse.UnionMember1
    | DynamicRoutingCreateDeploymentResponse.UnionMember2
    | DynamicRoutingCreateDeploymentResponse.UnionMember3
    | DynamicRoutingCreateDeploymentResponse.UnionMember4
    | DynamicRoutingCreateDeploymentResponse.UnionMember5
  >;

  gateway_id: string;

  modified_at: string;

  name: string;
}

export namespace DynamicRoutingCreateDeploymentResponse {
  export interface UnionMember0 {
    id: string;

    outputs: UnionMember0.Outputs;

    type: 'start';
  }

  export namespace UnionMember0 {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface UnionMember1 {
    id: string;

    outputs: UnionMember1.Outputs;

    properties: UnionMember1.Properties;

    type: 'conditional';
  }

  export namespace UnionMember1 {
    export interface Outputs {
      false: Outputs.False;

      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: unknown;
    }
  }

  export interface UnionMember2 {
    id: string;

    outputs: { [key: string]: UnionMember2.Outputs };

    type: 'percentage';
  }

  export namespace UnionMember2 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface UnionMember3 {
    id: string;

    outputs: UnionMember3.Outputs;

    properties: UnionMember3.Properties;

    type: 'rate';
  }

  export namespace UnionMember3 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;

      limit: number;

      limitType: 'count' | 'cost';

      window: number;
    }
  }

  export interface UnionMember4 {
    id: string;

    outputs: UnionMember4.Outputs;

    properties: UnionMember4.Properties;

    type: 'model';
  }

  export namespace UnionMember4 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;

      provider: string;

      retries: number;

      timeout: number;
    }
  }

  export interface UnionMember5 {
    id: string;

    outputs: { [key: string]: UnionMember5.Outputs };

    type: 'end';
  }

  export namespace UnionMember5 {
    export interface Outputs {
      elementId: string;
    }
  }
}

export interface DynamicRoutingCreateVersionResponse {
  id: string;

  account_tag: string;

  created_at: string;

  elements: Array<
    | DynamicRoutingCreateVersionResponse.UnionMember0
    | DynamicRoutingCreateVersionResponse.UnionMember1
    | DynamicRoutingCreateVersionResponse.UnionMember2
    | DynamicRoutingCreateVersionResponse.UnionMember3
    | DynamicRoutingCreateVersionResponse.UnionMember4
    | DynamicRoutingCreateVersionResponse.UnionMember5
  >;

  gateway_id: string;

  modified_at: string;

  name: string;
}

export namespace DynamicRoutingCreateVersionResponse {
  export interface UnionMember0 {
    id: string;

    outputs: UnionMember0.Outputs;

    type: 'start';
  }

  export namespace UnionMember0 {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface UnionMember1 {
    id: string;

    outputs: UnionMember1.Outputs;

    properties: UnionMember1.Properties;

    type: 'conditional';
  }

  export namespace UnionMember1 {
    export interface Outputs {
      false: Outputs.False;

      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: unknown;
    }
  }

  export interface UnionMember2 {
    id: string;

    outputs: { [key: string]: UnionMember2.Outputs };

    type: 'percentage';
  }

  export namespace UnionMember2 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface UnionMember3 {
    id: string;

    outputs: UnionMember3.Outputs;

    properties: UnionMember3.Properties;

    type: 'rate';
  }

  export namespace UnionMember3 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;

      limit: number;

      limitType: 'count' | 'cost';

      window: number;
    }
  }

  export interface UnionMember4 {
    id: string;

    outputs: UnionMember4.Outputs;

    properties: UnionMember4.Properties;

    type: 'model';
  }

  export namespace UnionMember4 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;

      provider: string;

      retries: number;

      timeout: number;
    }
  }

  export interface UnionMember5 {
    id: string;

    outputs: { [key: string]: UnionMember5.Outputs };

    type: 'end';
  }

  export namespace UnionMember5 {
    export interface Outputs {
      elementId: string;
    }
  }
}

export interface DynamicRoutingGetResponse {
  id: string;

  account_tag: string;

  created_at: string;

  deployment: DynamicRoutingGetResponse.Deployment;

  elements: Array<
    | DynamicRoutingGetResponse.UnionMember0
    | DynamicRoutingGetResponse.UnionMember1
    | DynamicRoutingGetResponse.UnionMember2
    | DynamicRoutingGetResponse.UnionMember3
    | DynamicRoutingGetResponse.UnionMember4
    | DynamicRoutingGetResponse.UnionMember5
  >;

  gateway_id: string;

  modified_at: string;

  name: string;

  version: DynamicRoutingGetResponse.Version;
}

export namespace DynamicRoutingGetResponse {
  export interface Deployment {
    created_at: string;

    deployment_id: string;

    version_id: string;

    comment?: string | null;
  }

  export interface UnionMember0 {
    id: string;

    outputs: UnionMember0.Outputs;

    type: 'start';
  }

  export namespace UnionMember0 {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface UnionMember1 {
    id: string;

    outputs: UnionMember1.Outputs;

    properties: UnionMember1.Properties;

    type: 'conditional';
  }

  export namespace UnionMember1 {
    export interface Outputs {
      false: Outputs.False;

      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: unknown;
    }
  }

  export interface UnionMember2 {
    id: string;

    outputs: { [key: string]: UnionMember2.Outputs };

    type: 'percentage';
  }

  export namespace UnionMember2 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface UnionMember3 {
    id: string;

    outputs: UnionMember3.Outputs;

    properties: UnionMember3.Properties;

    type: 'rate';
  }

  export namespace UnionMember3 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;

      limit: number;

      limitType: 'count' | 'cost';

      window: number;
    }
  }

  export interface UnionMember4 {
    id: string;

    outputs: UnionMember4.Outputs;

    properties: UnionMember4.Properties;

    type: 'model';
  }

  export namespace UnionMember4 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;

      provider: string;

      retries: number;

      timeout: number;
    }
  }

  export interface UnionMember5 {
    id: string;

    outputs: { [key: string]: UnionMember5.Outputs };

    type: 'end';
  }

  export namespace UnionMember5 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface Version {
    active: 'true' | 'false';

    created_at: string;

    data: string;

    version_id: string;

    comment?: string | null;
  }
}

export interface DynamicRoutingGetVersionResponse {
  id: string;

  account_tag: string;

  active: 'true' | 'false';

  created_at: string;

  data: string;

  elements: Array<
    | DynamicRoutingGetVersionResponse.UnionMember0
    | DynamicRoutingGetVersionResponse.UnionMember1
    | DynamicRoutingGetVersionResponse.UnionMember2
    | DynamicRoutingGetVersionResponse.UnionMember3
    | DynamicRoutingGetVersionResponse.UnionMember4
    | DynamicRoutingGetVersionResponse.UnionMember5
  >;

  gateway_id: string;

  modified_at: string;

  name: string;

  version_id: string;

  comment?: string | null;
}

export namespace DynamicRoutingGetVersionResponse {
  export interface UnionMember0 {
    id: string;

    outputs: UnionMember0.Outputs;

    type: 'start';
  }

  export namespace UnionMember0 {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface UnionMember1 {
    id: string;

    outputs: UnionMember1.Outputs;

    properties: UnionMember1.Properties;

    type: 'conditional';
  }

  export namespace UnionMember1 {
    export interface Outputs {
      false: Outputs.False;

      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: unknown;
    }
  }

  export interface UnionMember2 {
    id: string;

    outputs: { [key: string]: UnionMember2.Outputs };

    type: 'percentage';
  }

  export namespace UnionMember2 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface UnionMember3 {
    id: string;

    outputs: UnionMember3.Outputs;

    properties: UnionMember3.Properties;

    type: 'rate';
  }

  export namespace UnionMember3 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;

      limit: number;

      limitType: 'count' | 'cost';

      window: number;
    }
  }

  export interface UnionMember4 {
    id: string;

    outputs: UnionMember4.Outputs;

    properties: UnionMember4.Properties;

    type: 'model';
  }

  export namespace UnionMember4 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;

      provider: string;

      retries: number;

      timeout: number;
    }
  }

  export interface UnionMember5 {
    id: string;

    outputs: { [key: string]: UnionMember5.Outputs };

    type: 'end';
  }

  export namespace UnionMember5 {
    export interface Outputs {
      elementId: string;
    }
  }
}

export interface DynamicRoutingListDeploymentsResponse {
  data: DynamicRoutingListDeploymentsResponse.Data;

  success: boolean;
}

export namespace DynamicRoutingListDeploymentsResponse {
  export interface Data {
    deployments: Array<Data.Deployment>;

    order_by: string;

    order_by_direction: string;

    page: number;

    per_page: number;
  }

  export namespace Data {
    export interface Deployment {
      created_at: string;

      deployment_id: string;

      version_id: string;

      comment?: string | null;
    }
  }
}

export interface DynamicRoutingListVersionsResponse {
  data: DynamicRoutingListVersionsResponse.Data;

  success: boolean;
}

export namespace DynamicRoutingListVersionsResponse {
  export interface Data {
    order_by: string;

    order_by_direction: string;

    page: number;

    per_page: number;

    versions: Array<Data.Version>;
  }

  export namespace Data {
    export interface Version {
      active: 'true' | 'false';

      created_at: string;

      data: string;

      version_id: string;

      comment?: string | null;
    }
  }
}

export interface DynamicRoutingCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  elements: Array<
    | DynamicRoutingCreateParams.UnionMember0
    | DynamicRoutingCreateParams.UnionMember1
    | DynamicRoutingCreateParams.UnionMember2
    | DynamicRoutingCreateParams.UnionMember3
    | DynamicRoutingCreateParams.UnionMember4
    | DynamicRoutingCreateParams.UnionMember5
  >;

  /**
   * Body param
   */
  name: string;
}

export namespace DynamicRoutingCreateParams {
  export interface UnionMember0 {
    id: string;

    outputs: UnionMember0.Outputs;

    type: 'start';
  }

  export namespace UnionMember0 {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface UnionMember1 {
    id: string;

    outputs: UnionMember1.Outputs;

    properties: UnionMember1.Properties;

    type: 'conditional';
  }

  export namespace UnionMember1 {
    export interface Outputs {
      false: Outputs.False;

      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: unknown;
    }
  }

  export interface UnionMember2 {
    id: string;

    outputs: { [key: string]: UnionMember2.Outputs };

    type: 'percentage';
  }

  export namespace UnionMember2 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface UnionMember3 {
    id: string;

    outputs: UnionMember3.Outputs;

    properties: UnionMember3.Properties;

    type: 'rate';
  }

  export namespace UnionMember3 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;

      limit: number;

      limitType: 'count' | 'cost';

      window: number;
    }
  }

  export interface UnionMember4 {
    id: string;

    outputs: UnionMember4.Outputs;

    properties: UnionMember4.Properties;

    type: 'model';
  }

  export namespace UnionMember4 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;

      provider: string;

      retries: number;

      timeout: number;
    }
  }

  export interface UnionMember5 {
    id: string;

    outputs: { [key: string]: UnionMember5.Outputs };

    type: 'end';
  }

  export namespace UnionMember5 {
    export interface Outputs {
      elementId: string;
    }
  }
}

export interface DynamicRoutingUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;
}

export interface DynamicRoutingListParams {
  account_id: string;
}

export interface DynamicRoutingDeleteParams {
  account_id: string;
}

export interface DynamicRoutingCreateDeploymentParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  comment: string;

  /**
   * Body param
   */
  version_id: string;
}

export interface DynamicRoutingCreateVersionParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  comment: string;

  /**
   * Body param
   */
  elements: Array<
    | DynamicRoutingCreateVersionParams.UnionMember0
    | DynamicRoutingCreateVersionParams.UnionMember1
    | DynamicRoutingCreateVersionParams.UnionMember2
    | DynamicRoutingCreateVersionParams.UnionMember3
    | DynamicRoutingCreateVersionParams.UnionMember4
    | DynamicRoutingCreateVersionParams.UnionMember5
  >;
}

export namespace DynamicRoutingCreateVersionParams {
  export interface UnionMember0 {
    id: string;

    outputs: UnionMember0.Outputs;

    type: 'start';
  }

  export namespace UnionMember0 {
    export interface Outputs {
      next: Outputs.Next;
    }

    export namespace Outputs {
      export interface Next {
        elementId: string;
      }
    }
  }

  export interface UnionMember1 {
    id: string;

    outputs: UnionMember1.Outputs;

    properties: UnionMember1.Properties;

    type: 'conditional';
  }

  export namespace UnionMember1 {
    export interface Outputs {
      false: Outputs.False;

      true: Outputs.True;
    }

    export namespace Outputs {
      export interface False {
        elementId: string;
      }

      export interface True {
        elementId: string;
      }
    }

    export interface Properties {
      conditions?: unknown;
    }
  }

  export interface UnionMember2 {
    id: string;

    outputs: { [key: string]: UnionMember2.Outputs };

    type: 'percentage';
  }

  export namespace UnionMember2 {
    export interface Outputs {
      elementId: string;
    }
  }

  export interface UnionMember3 {
    id: string;

    outputs: UnionMember3.Outputs;

    properties: UnionMember3.Properties;

    type: 'rate';
  }

  export namespace UnionMember3 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      key: string;

      limit: number;

      limitType: 'count' | 'cost';

      window: number;
    }
  }

  export interface UnionMember4 {
    id: string;

    outputs: UnionMember4.Outputs;

    properties: UnionMember4.Properties;

    type: 'model';
  }

  export namespace UnionMember4 {
    export interface Outputs {
      fallback: Outputs.Fallback;

      success: Outputs.Success;
    }

    export namespace Outputs {
      export interface Fallback {
        elementId: string;
      }

      export interface Success {
        elementId: string;
      }
    }

    export interface Properties {
      model: string;

      provider: string;

      retries: number;

      timeout: number;
    }
  }

  export interface UnionMember5 {
    id: string;

    outputs: { [key: string]: UnionMember5.Outputs };

    type: 'end';
  }

  export namespace UnionMember5 {
    export interface Outputs {
      elementId: string;
    }
  }
}

export interface DynamicRoutingGetParams {
  account_id: string;
}

export interface DynamicRoutingGetVersionParams {
  account_id: string;
}

export interface DynamicRoutingListDeploymentsParams {
  account_id: string;
}

export interface DynamicRoutingListVersionsParams {
  account_id: string;
}

export declare namespace DynamicRouting {
  export {
    type DynamicRoutingCreateResponse as DynamicRoutingCreateResponse,
    type DynamicRoutingUpdateResponse as DynamicRoutingUpdateResponse,
    type DynamicRoutingListResponse as DynamicRoutingListResponse,
    type DynamicRoutingDeleteResponse as DynamicRoutingDeleteResponse,
    type DynamicRoutingCreateDeploymentResponse as DynamicRoutingCreateDeploymentResponse,
    type DynamicRoutingCreateVersionResponse as DynamicRoutingCreateVersionResponse,
    type DynamicRoutingGetResponse as DynamicRoutingGetResponse,
    type DynamicRoutingGetVersionResponse as DynamicRoutingGetVersionResponse,
    type DynamicRoutingListDeploymentsResponse as DynamicRoutingListDeploymentsResponse,
    type DynamicRoutingListVersionsResponse as DynamicRoutingListVersionsResponse,
    type DynamicRoutingCreateParams as DynamicRoutingCreateParams,
    type DynamicRoutingUpdateParams as DynamicRoutingUpdateParams,
    type DynamicRoutingListParams as DynamicRoutingListParams,
    type DynamicRoutingDeleteParams as DynamicRoutingDeleteParams,
    type DynamicRoutingCreateDeploymentParams as DynamicRoutingCreateDeploymentParams,
    type DynamicRoutingCreateVersionParams as DynamicRoutingCreateVersionParams,
    type DynamicRoutingGetParams as DynamicRoutingGetParams,
    type DynamicRoutingGetVersionParams as DynamicRoutingGetVersionParams,
    type DynamicRoutingListDeploymentsParams as DynamicRoutingListDeploymentsParams,
    type DynamicRoutingListVersionsParams as DynamicRoutingListVersionsParams,
  };
}
