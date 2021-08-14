/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TableResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  TableGetResults,
  TableResourcesListTablesOptionalParams,
  TableResourcesListTablesResponse,
  TableResourcesGetTableOptionalParams,
  TableResourcesGetTableResponse,
  TableCreateUpdateParameters,
  TableResourcesCreateUpdateTableOptionalParams,
  TableResourcesCreateUpdateTableResponse,
  TableResourcesDeleteTableOptionalParams,
  TableResourcesGetTableThroughputOptionalParams,
  TableResourcesGetTableThroughputResponse,
  ThroughputSettingsUpdateParameters,
  TableResourcesUpdateTableThroughputOptionalParams,
  TableResourcesUpdateTableThroughputResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TableResources operations. */
export class TableResourcesImpl implements TableResources {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class TableResources class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the Tables under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  public listTables(
    resourceGroupName: string,
    accountName: string,
    options?: TableResourcesListTablesOptionalParams
  ): PagedAsyncIterableIterator<TableGetResults> {
    const iter = this.listTablesPagingAll(
      resourceGroupName,
      accountName,
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
        return this.listTablesPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listTablesPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: TableResourcesListTablesOptionalParams
  ): AsyncIterableIterator<TableGetResults[]> {
    let result = await this._listTables(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
  }

  private async *listTablesPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: TableResourcesListTablesOptionalParams
  ): AsyncIterableIterator<TableGetResults> {
    for await (const page of this.listTablesPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the Tables under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  private _listTables(
    resourceGroupName: string,
    accountName: string,
    options?: TableResourcesListTablesOptionalParams
  ): Promise<TableResourcesListTablesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listTablesOperationSpec
    );
  }

  /**
   * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesGetTableOptionalParams
  ): Promise<TableResourcesGetTableResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, tableName, options },
      getTableOperationSpec
    );
  }

  /**
   * Create or update an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateTableParameters The parameters to provide for the current Table.
   * @param options The options parameters.
   */
  async beginCreateUpdateTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    createUpdateTableParameters: TableCreateUpdateParameters,
    options?: TableResourcesCreateUpdateTableOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TableResourcesCreateUpdateTableResponse>,
      TableResourcesCreateUpdateTableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TableResourcesCreateUpdateTableResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        accountName,
        tableName,
        createUpdateTableParameters,
        options
      },
      createUpdateTableOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create or update an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateTableParameters The parameters to provide for the current Table.
   * @param options The options parameters.
   */
  async beginCreateUpdateTableAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    createUpdateTableParameters: TableCreateUpdateParameters,
    options?: TableResourcesCreateUpdateTableOptionalParams
  ): Promise<TableResourcesCreateUpdateTableResponse> {
    const poller = await this.beginCreateUpdateTable(
      resourceGroupName,
      accountName,
      tableName,
      createUpdateTableParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing Azure Cosmos DB Table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginDeleteTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesDeleteTableOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, tableName, options },
      deleteTableOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes an existing Azure Cosmos DB Table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginDeleteTableAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesDeleteTableOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteTable(
      resourceGroupName,
      accountName,
      tableName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the
   * provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getTableThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesGetTableThroughputOptionalParams
  ): Promise<TableResourcesGetTableThroughputResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, tableName, options },
      getTableThroughputOperationSpec
    );
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
   *                                   Table.
   * @param options The options parameters.
   */
  async beginUpdateTableThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: TableResourcesUpdateTableThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TableResourcesUpdateTableThroughputResponse>,
      TableResourcesUpdateTableThroughputResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TableResourcesUpdateTableThroughputResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        accountName,
        tableName,
        updateThroughputParameters,
        options
      },
      updateTableThroughputOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
   *                                   Table.
   * @param options The options parameters.
   */
  async beginUpdateTableThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: TableResourcesUpdateTableThroughputOptionalParams
  ): Promise<TableResourcesUpdateTableThroughputResponse> {
    const poller = await this.beginUpdateTableThroughput(
      resourceGroupName,
      accountName,
      tableName,
      updateThroughputParameters,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listTablesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getTableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createUpdateTableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TableGetResults
    },
    201: {
      bodyMapper: Mappers.TableGetResults
    },
    202: {
      bodyMapper: Mappers.TableGetResults
    },
    204: {
      bodyMapper: Mappers.TableGetResults
    }
  },
  requestBody: Parameters.createUpdateTableParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteTableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  serializer
};
const getTableThroughputOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateTableThroughputOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    201: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    202: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    204: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  requestBody: Parameters.updateThroughputParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
