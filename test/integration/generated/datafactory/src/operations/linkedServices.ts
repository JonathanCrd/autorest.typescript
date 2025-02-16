import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LinkedServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import {
  LinkedServiceResource,
  LinkedServicesListByFactoryNextOptionalParams,
  LinkedServicesListByFactoryOptionalParams,
  LinkedServicesListByFactoryResponse,
  LinkedServicesCreateOrUpdateOptionalParams,
  LinkedServicesCreateOrUpdateResponse,
  LinkedServicesGetOptionalParams,
  LinkedServicesGetResponse,
  LinkedServicesDeleteOptionalParams,
  LinkedServicesListByFactoryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LinkedServices operations. */
export class LinkedServicesImpl implements LinkedServices {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class LinkedServices class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Lists linked services.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  public listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: LinkedServicesListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<LinkedServiceResource> {
    const iter = this.listByFactoryPagingAll(
      resourceGroupName,
      factoryName,
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
          options
        );
      }
    };
  }

  private async *listByFactoryPagingPage(
    resourceGroupName: string,
    factoryName: string,
    options?: LinkedServicesListByFactoryOptionalParams
  ): AsyncIterableIterator<LinkedServiceResource[]> {
    let result = await this._listByFactory(
      resourceGroupName,
      factoryName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByFactoryNext(
        resourceGroupName,
        factoryName,
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
    options?: LinkedServicesListByFactoryOptionalParams
  ): AsyncIterableIterator<LinkedServiceResource> {
    for await (const page of this.listByFactoryPagingPage(
      resourceGroupName,
      factoryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists linked services.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  private _listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: LinkedServicesListByFactoryOptionalParams
  ): Promise<LinkedServicesListByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      listByFactoryOperationSpec
    );
  }

  /**
   * Creates or updates a linked service.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param linkedServiceName The linked service name.
   * @param linkedService Linked service resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    linkedServiceName: string,
    linkedService: LinkedServiceResource,
    options?: LinkedServicesCreateOrUpdateOptionalParams
  ): Promise<LinkedServicesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        linkedServiceName,
        linkedService,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a linked service.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param linkedServiceName The linked service name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    linkedServiceName: string,
    options?: LinkedServicesGetOptionalParams
  ): Promise<LinkedServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, linkedServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a linked service.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param linkedServiceName The linked service name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    linkedServiceName: string,
    options?: LinkedServicesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, linkedServiceName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByFactoryNext
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param nextLink The nextLink from the previous successful call to the ListByFactory method.
   * @param options The options parameters.
   */
  private _listByFactoryNext(
    resourceGroupName: string,
    factoryName: string,
    nextLink: string,
    options?: LinkedServicesListByFactoryNextOptionalParams
  ): Promise<LinkedServicesListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, nextLink, options },
      listByFactoryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFactoryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceListResponse
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
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices/{linkedServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.linkedService,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.linkedServiceName
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices/{linkedServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceResource
    },
    304: {},
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
    Parameters.linkedServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices/{linkedServiceName}",
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
    Parameters.linkedServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFactoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceListResponse
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
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
