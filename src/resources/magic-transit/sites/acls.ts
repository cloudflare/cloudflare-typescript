// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/magic-transit/sites/acls';

export class ACLs extends APIResource {
  /**
   * Creates a new Site ACL.
   */
  create(
    siteId: string,
    params: ACLCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/sites/${siteId}/acls`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACLCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Site ACL.
   */
  update(
    siteId: string,
    aclIdentifier: string,
    params: ACLUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}/acls/${aclIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACLUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Site ACLs associated with an account.
   */
  list(
    siteId: string,
    params: ACLListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/sites/${siteId}/acls`, options) as Core.APIPromise<{
        result: ACLListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a specific Site ACL.
   */
  delete(
    siteId: string,
    aclIdentifier: string,
    params: ACLDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/magic/sites/${siteId}/acls/${aclIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: ACLDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site ACL.
   */
  get(
    siteId: string,
    aclIdentifier: string,
    params: ACLGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/sites/${siteId}/acls/${aclIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: ACLGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ACLCreateResponse {
  acls?: Array<ACLCreateResponse.ACL>;
}

export namespace ACLCreateResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface ACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.LAN1;

    lan_2?: ACL.LAN2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface LAN1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface LAN2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLUpdateResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  acl?: ACLUpdateResponse.ACL;
}

export namespace ACLUpdateResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface ACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.LAN1;

    lan_2?: ACL.LAN2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface LAN1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface LAN2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLListResponse {
  acls?: Array<ACLListResponse.ACL>;
}

export namespace ACLListResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface ACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.LAN1;

    lan_2?: ACL.LAN2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface LAN1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface LAN2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLDeleteResponse {
  deleted?: boolean;

  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  deleted_acl?: ACLDeleteResponse.DeletedACL;
}

export namespace ACLDeleteResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface DeletedACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: DeletedACL.LAN1;

    lan_2?: DeletedACL.LAN2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace DeletedACL {
    export interface LAN1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface LAN2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLGetResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  acl?: ACLGetResponse.ACL;
}

export namespace ACLGetResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface ACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.LAN1;

    lan_2?: ACL.LAN2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface LAN1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface LAN2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  acl?: ACLCreateParams.ACL;
}

export namespace ACLCreateParams {
  export interface ACL {
    lan_1: ACL.LAN1;

    lan_2: ACL.LAN2;

    /**
     * The name of the ACL.
     */
    name: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface LAN1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface LAN2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  acl?: ACLUpdateParams.ACL;
}

export namespace ACLUpdateParams {
  export interface ACL {
    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.LAN1;

    lan_2?: ACL.LAN2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface LAN1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface LAN2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ACLDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ACLGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ACLs {
  export import ACLCreateResponse = ACLsAPI.ACLCreateResponse;
  export import ACLUpdateResponse = ACLsAPI.ACLUpdateResponse;
  export import ACLListResponse = ACLsAPI.ACLListResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLGetResponse = ACLsAPI.ACLGetResponse;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLListParams = ACLsAPI.ACLListParams;
  export import ACLDeleteParams = ACLsAPI.ACLDeleteParams;
  export import ACLGetParams = ACLsAPI.ACLGetParams;
}
