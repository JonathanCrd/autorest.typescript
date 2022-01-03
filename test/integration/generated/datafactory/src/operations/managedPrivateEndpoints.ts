import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ManagedPrivateEndpoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClientContext } from "../dataFactoryClientContext";
import {
  ManagedPrivateEndpointResource,
  ManagedPrivateEndpointsListByFactoryNextOptionalParams,
  ManagedPrivateEndpointsListByFactoryOptionalParams,
  ManagedPrivateEndpointsListByFactoryResponse,
  ManagedPrivateEndpointsCreateOrUpdateOptionalParams,
  ManagedPrivateEndpointsCreateOrUpdateResponse,
  ManagedPrivateEndpointsGetOptionalParams,
  ManagedPrivateEndpointsGetResponse,
  ManagedPrivateEndpointsDeleteOptionalParams,
  ManagedPrivateEndpointsListByFactoryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedPrivateEndpoints operations. */
export class ManagedPrivateEndpointsImpl implements ManagedPrivateEndpoints {
  private readonly client: DataFactoryClientContext;

  /**
   * Initialize a new instance of the class ManagedPrivateEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClientContext) {
    this.client = client;
  }

  /**
   * Lists managed private endpoints.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param options The options parameters.
   */
  public listByFactory(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    options?: ManagedPrivateEndpointsListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<ManagedPrivateEndpointResource> {
    const iter = this.listByFactoryPagingAll(
      resourceGroupName,
      factoryName,
      managedVirtualNetworkName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByFactoryPagingPage(
          resourceGroupName,
          factoryName,
          managedVirtualNetworkName,
          options
        );
      }
    };
  }

  private async *listByFactoryPagingPage(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    options?: ManagedPrivateEndpointsListByFactoryOptionalParams
  ): AsyncIterableIterator<ManagedPrivateEndpointResource[]> {
    let result = await this._listByFactory(
      resourceGroupName,
      factoryName,
      managedVirtualNetworkName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByFactoryNext(
        resourceGroupName,
        factoryName,
        managedVirtualNetworkName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByFactoryPagingAll(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    options?: ManagedPrivateEndpointsListByFactoryOptionalParams
  ): AsyncIterableIterator<ManagedPrivateEndpointResource> {
    for await (const page of this.listByFactoryPagingPage(
      resourceGroupName,
      factoryName,
      managedVirtualNetworkName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists managed private endpoints.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param options The options parameters.
   */
  private _listByFactory(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    options?: ManagedPrivateEndpointsListByFactoryOptionalParams
  ): Promise<ManagedPrivateEndpointsListByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, managedVirtualNetworkName, options },
      listByFactoryOperationSpec
    );
  }

  /**
   * Creates or updates a managed private endpoint.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedPrivateEndpointName Managed private endpoint name
   * @param managedPrivateEndpoint Managed private endpoint resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    managedPrivateEndpointName: string,
    managedPrivateEndpoint: ManagedPrivateEndpointResource,
    options?: ManagedPrivateEndpointsCreateOrUpdateOptionalParams
  ): Promise<ManagedPrivateEndpointsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        managedVirtualNetworkName,
        managedPrivateEndpointName,
        managedPrivateEndpoint,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a managed private endpoint.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedPrivateEndpointName Managed private endpoint name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    managedPrivateEndpointName: string,
    options?: ManagedPrivateEndpointsGetOptionalParams
  ): Promise<ManagedPrivateEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        managedVirtualNetworkName,
        managedPrivateEndpointName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Deletes a managed private endpoint.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedPrivateEndpointName Managed private endpoint name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    managedPrivateEndpointName: string,
    options?: ManagedPrivateEndpointsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        managedVirtualNetworkName,
        managedPrivateEndpointName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * ListByFactoryNext
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param nextLink The nextLink from the previous successful call to the ListByFactory method.
   * @param options The options parameters.
   */
  private _listByFactoryNext(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    nextLink: string,
    options?: ManagedPrivateEndpointsListByFactoryNextOptionalParams
  ): Promise<ManagedPrivateEndpointsListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        managedVirtualNetworkName,
        nextLink,
        options
      },
      listByFactoryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFactoryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpointListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpointResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.managedPrivateEndpoint,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName,
    Parameters.managedPrivateEndpointName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpointResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName,
    Parameters.managedPrivateEndpointName
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName,
    Parameters.managedPrivateEndpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFactoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedPrivateEndpointListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
