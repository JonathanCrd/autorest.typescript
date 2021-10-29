import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { IotDpsResource } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeviceProvisioningClientContext } from "../deviceProvisioningClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ProvisioningServiceDescription,
  IotDpsResourceListBySubscriptionNextOptionalParams,
  IotDpsResourceListBySubscriptionOptionalParams,
  IotDpsResourceListByResourceGroupNextOptionalParams,
  IotDpsResourceListByResourceGroupOptionalParams,
  IotDpsSkuDefinition,
  IotDpsResourceListValidSkusNextOptionalParams,
  IotDpsResourceListValidSkusOptionalParams,
  SharedAccessSignatureAuthorizationRuleAccessRightsDescription,
  IotDpsResourceListKeysNextOptionalParams,
  IotDpsResourceListKeysOptionalParams,
  IotDpsResourceGetOptionalParams,
  IotDpsResourceGetResponse,
  IotDpsResourceCreateOrUpdateOptionalParams,
  IotDpsResourceCreateOrUpdateResponse,
  TagsResource,
  IotDpsResourceUpdateOptionalParams,
  IotDpsResourceUpdateResponse,
  IotDpsResourceDeleteOptionalParams,
  IotDpsResourceListBySubscriptionResponse,
  IotDpsResourceListByResourceGroupResponse,
  IotDpsResourceGetOperationResultOptionalParams,
  IotDpsResourceGetOperationResultResponse,
  IotDpsResourceListValidSkusResponse,
  OperationInputs,
  IotDpsResourceCheckProvisioningServiceNameAvailabilityOptionalParams,
  IotDpsResourceCheckProvisioningServiceNameAvailabilityResponse,
  IotDpsResourceListKeysResponse,
  IotDpsResourceListKeysForKeyNameOptionalParams,
  IotDpsResourceListKeysForKeyNameResponse,
  IotDpsResourceListPrivateLinkResourcesOptionalParams,
  IotDpsResourceListPrivateLinkResourcesResponse,
  IotDpsResourceGetPrivateLinkResourcesOptionalParams,
  IotDpsResourceGetPrivateLinkResourcesResponse,
  IotDpsResourceListPrivateEndpointConnectionsOptionalParams,
  IotDpsResourceListPrivateEndpointConnectionsResponse,
  IotDpsResourceGetPrivateEndpointConnectionOptionalParams,
  IotDpsResourceGetPrivateEndpointConnectionResponse,
  PrivateEndpointConnection,
  IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams,
  IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse,
  IotDpsResourceDeletePrivateEndpointConnectionOptionalParams,
  IotDpsResourceDeletePrivateEndpointConnectionResponse,
  IotDpsResourceListBySubscriptionNextResponse,
  IotDpsResourceListByResourceGroupNextResponse,
  IotDpsResourceListValidSkusNextResponse,
  IotDpsResourceListKeysNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IotDpsResource operations. */
export class IotDpsResourceImpl implements IotDpsResource {
  private readonly client: DeviceProvisioningClientContext;

  /**
   * Initialize a new instance of the class IotDpsResource class.
   * @param client Reference to the service client
   */
  constructor(client: DeviceProvisioningClientContext) {
    this.client = client;
  }

  /**
   * List all the provisioning services for a given subscription id.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: IotDpsResourceListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ProvisioningServiceDescription> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: IotDpsResourceListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ProvisioningServiceDescription[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: IotDpsResourceListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ProvisioningServiceDescription> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all provisioning services in the given resource group.
   * @param resourceGroupName Resource group identifier.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: IotDpsResourceListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ProvisioningServiceDescription> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: IotDpsResourceListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ProvisioningServiceDescription[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: IotDpsResourceListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ProvisioningServiceDescription> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the list of valid SKUs and tiers for a provisioning service.
   * @param provisioningServiceName Name of provisioning service.
   * @param resourceGroupName Name of resource group.
   * @param options The options parameters.
   */
  public listValidSkus(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListValidSkusOptionalParams
  ): PagedAsyncIterableIterator<IotDpsSkuDefinition> {
    const iter = this.listValidSkusPagingAll(
      provisioningServiceName,
      resourceGroupName,
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
        return this.listValidSkusPagingPage(
          provisioningServiceName,
          resourceGroupName,
          options
        );
      }
    };
  }

  private async *listValidSkusPagingPage(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListValidSkusOptionalParams
  ): AsyncIterableIterator<IotDpsSkuDefinition[]> {
    let result = await this._listValidSkus(
      provisioningServiceName,
      resourceGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listValidSkusNext(
        provisioningServiceName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listValidSkusPagingAll(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListValidSkusOptionalParams
  ): AsyncIterableIterator<IotDpsSkuDefinition> {
    for await (const page of this.listValidSkusPagingPage(
      provisioningServiceName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List the primary and secondary keys for a provisioning service.
   * @param provisioningServiceName The provisioning service name to get the shared access keys for.
   * @param resourceGroupName resource group name
   * @param options The options parameters.
   */
  public listKeys(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListKeysOptionalParams
  ): PagedAsyncIterableIterator<
    SharedAccessSignatureAuthorizationRuleAccessRightsDescription
  > {
    const iter = this.listKeysPagingAll(
      provisioningServiceName,
      resourceGroupName,
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
        return this.listKeysPagingPage(
          provisioningServiceName,
          resourceGroupName,
          options
        );
      }
    };
  }

  private async *listKeysPagingPage(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListKeysOptionalParams
  ): AsyncIterableIterator<
    SharedAccessSignatureAuthorizationRuleAccessRightsDescription[]
  > {
    let result = await this._listKeys(
      provisioningServiceName,
      resourceGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listKeysNext(
        provisioningServiceName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listKeysPagingAll(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListKeysOptionalParams
  ): AsyncIterableIterator<
    SharedAccessSignatureAuthorizationRuleAccessRightsDescription
  > {
    for await (const page of this.listKeysPagingPage(
      provisioningServiceName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the metadata of the provisioning service without SAS keys.
   * @param provisioningServiceName Name of the provisioning service to retrieve.
   * @param resourceGroupName Resource group name.
   * @param options The options parameters.
   */
  get(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceGetOptionalParams
  ): Promise<IotDpsResourceGetResponse> {
    return this.client.sendOperationRequest(
      { provisioningServiceName, resourceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update the metadata of the provisioning service. The usual pattern to modify a property is
   * to retrieve the provisioning service metadata and security metadata, and then combine them with the
   * modified values in a new body to update the provisioning service.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service to create or update.
   * @param iotDpsDescription Description of the provisioning service to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    provisioningServiceName: string,
    iotDpsDescription: ProvisioningServiceDescription,
    options?: IotDpsResourceCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotDpsResourceCreateOrUpdateResponse>,
      IotDpsResourceCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IotDpsResourceCreateOrUpdateResponse> => {
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
        provisioningServiceName,
        iotDpsDescription,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create or update the metadata of the provisioning service. The usual pattern to modify a property is
   * to retrieve the provisioning service metadata and security metadata, and then combine them with the
   * modified values in a new body to update the provisioning service.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service to create or update.
   * @param iotDpsDescription Description of the provisioning service to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    provisioningServiceName: string,
    iotDpsDescription: ProvisioningServiceDescription,
    options?: IotDpsResourceCreateOrUpdateOptionalParams
  ): Promise<IotDpsResourceCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      provisioningServiceName,
      iotDpsDescription,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an existing provisioning service's tags. to update other fields use the CreateOrUpdate method
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service to create or update.
   * @param provisioningServiceTags Updated tag information to set into the provisioning service
   *                                instance.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    provisioningServiceName: string,
    provisioningServiceTags: TagsResource,
    options?: IotDpsResourceUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotDpsResourceUpdateResponse>,
      IotDpsResourceUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IotDpsResourceUpdateResponse> => {
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
        provisioningServiceName,
        provisioningServiceTags,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Update an existing provisioning service's tags. to update other fields use the CreateOrUpdate method
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service to create or update.
   * @param provisioningServiceTags Updated tag information to set into the provisioning service
   *                                instance.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    provisioningServiceName: string,
    provisioningServiceTags: TagsResource,
    options?: IotDpsResourceUpdateOptionalParams
  ): Promise<IotDpsResourceUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      provisioningServiceName,
      provisioningServiceTags,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the Provisioning Service.
   * @param provisioningServiceName Name of provisioning service to delete.
   * @param resourceGroupName Resource group identifier.
   * @param options The options parameters.
   */
  async beginDelete(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceDeleteOptionalParams
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
      { provisioningServiceName, resourceGroupName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the Provisioning Service.
   * @param provisioningServiceName Name of provisioning service to delete.
   * @param resourceGroupName Resource group identifier.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      provisioningServiceName,
      resourceGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all the provisioning services for a given subscription id.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: IotDpsResourceListBySubscriptionOptionalParams
  ): Promise<IotDpsResourceListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Get a list of all provisioning services in the given resource group.
   * @param resourceGroupName Resource group identifier.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: IotDpsResourceListByResourceGroupOptionalParams
  ): Promise<IotDpsResourceListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets the status of a long running operation, such as create, update or delete a provisioning
   * service.
   * @param operationId Operation id corresponding to long running operation. Use this to poll for the
   *                    status.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service that the operation is running on.
   * @param asyncinfo Async header used to poll on the status of the operation, obtained while creating
   *                  the long running operation.
   * @param options The options parameters.
   */
  getOperationResult(
    operationId: string,
    resourceGroupName: string,
    provisioningServiceName: string,
    asyncinfo: string,
    options?: IotDpsResourceGetOperationResultOptionalParams
  ): Promise<IotDpsResourceGetOperationResultResponse> {
    return this.client.sendOperationRequest(
      {
        operationId,
        resourceGroupName,
        provisioningServiceName,
        asyncinfo,
        options
      },
      getOperationResultOperationSpec
    );
  }

  /**
   * Gets the list of valid SKUs and tiers for a provisioning service.
   * @param provisioningServiceName Name of provisioning service.
   * @param resourceGroupName Name of resource group.
   * @param options The options parameters.
   */
  private _listValidSkus(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListValidSkusOptionalParams
  ): Promise<IotDpsResourceListValidSkusResponse> {
    return this.client.sendOperationRequest(
      { provisioningServiceName, resourceGroupName, options },
      listValidSkusOperationSpec
    );
  }

  /**
   * Check if a provisioning service name is available. This will validate if the name is syntactically
   * valid and if the name is usable
   * @param argumentsParam Set the name parameter in the OperationInputs structure to the name of the
   *                       provisioning service to check.
   * @param options The options parameters.
   */
  checkProvisioningServiceNameAvailability(
    argumentsParam: OperationInputs,
    options?: IotDpsResourceCheckProvisioningServiceNameAvailabilityOptionalParams
  ): Promise<IotDpsResourceCheckProvisioningServiceNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { argumentsParam, options },
      checkProvisioningServiceNameAvailabilityOperationSpec
    );
  }

  /**
   * List the primary and secondary keys for a provisioning service.
   * @param provisioningServiceName The provisioning service name to get the shared access keys for.
   * @param resourceGroupName resource group name
   * @param options The options parameters.
   */
  private _listKeys(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListKeysOptionalParams
  ): Promise<IotDpsResourceListKeysResponse> {
    return this.client.sendOperationRequest(
      { provisioningServiceName, resourceGroupName, options },
      listKeysOperationSpec
    );
  }

  /**
   * List primary and secondary keys for a specific key name
   * @param provisioningServiceName Name of the provisioning service.
   * @param keyName Logical key name to get key-values for.
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param options The options parameters.
   */
  listKeysForKeyName(
    provisioningServiceName: string,
    keyName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListKeysForKeyNameOptionalParams
  ): Promise<IotDpsResourceListKeysForKeyNameResponse> {
    return this.client.sendOperationRequest(
      { provisioningServiceName, keyName, resourceGroupName, options },
      listKeysForKeyNameOperationSpec
    );
  }

  /**
   * List private link resources for the given provisioning service
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param options The options parameters.
   */
  listPrivateLinkResources(
    resourceGroupName: string,
    resourceName: string,
    options?: IotDpsResourceListPrivateLinkResourcesOptionalParams
  ): Promise<IotDpsResourceListPrivateLinkResourcesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listPrivateLinkResourcesOperationSpec
    );
  }

  /**
   * Get the specified private link resource for the given provisioning service
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param groupId The name of the private link resource
   * @param options The options parameters.
   */
  getPrivateLinkResources(
    resourceGroupName: string,
    resourceName: string,
    groupId: string,
    options?: IotDpsResourceGetPrivateLinkResourcesOptionalParams
  ): Promise<IotDpsResourceGetPrivateLinkResourcesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, groupId, options },
      getPrivateLinkResourcesOperationSpec
    );
  }

  /**
   * List private endpoint connection properties
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param options The options parameters.
   */
  listPrivateEndpointConnections(
    resourceGroupName: string,
    resourceName: string,
    options?: IotDpsResourceListPrivateEndpointConnectionsOptionalParams
  ): Promise<IotDpsResourceListPrivateEndpointConnectionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listPrivateEndpointConnectionsOperationSpec
    );
  }

  /**
   * Get private endpoint connection properties
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  getPrivateEndpointConnection(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    options?: IotDpsResourceGetPrivateEndpointConnectionOptionalParams
  ): Promise<IotDpsResourceGetPrivateEndpointConnectionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        privateEndpointConnectionName,
        options
      },
      getPrivateEndpointConnectionOperationSpec
    );
  }

  /**
   * Create or update the status of a private endpoint connection with the specified name
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param privateEndpointConnection The private endpoint connection with updated properties
   * @param options The options parameters.
   */
  async beginCreateOrUpdatePrivateEndpointConnection(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse
      >,
      IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse> => {
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
        resourceName,
        privateEndpointConnectionName,
        privateEndpointConnection,
        options
      },
      createOrUpdatePrivateEndpointConnectionOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create or update the status of a private endpoint connection with the specified name
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param privateEndpointConnection The private endpoint connection with updated properties
   * @param options The options parameters.
   */
  async beginCreateOrUpdatePrivateEndpointConnectionAndWait(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams
  ): Promise<IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse> {
    const poller = await this.beginCreateOrUpdatePrivateEndpointConnection(
      resourceGroupName,
      resourceName,
      privateEndpointConnectionName,
      privateEndpointConnection,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete private endpoint connection with the specified name
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  async beginDeletePrivateEndpointConnection(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    options?: IotDpsResourceDeletePrivateEndpointConnectionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotDpsResourceDeletePrivateEndpointConnectionResponse>,
      IotDpsResourceDeletePrivateEndpointConnectionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IotDpsResourceDeletePrivateEndpointConnectionResponse> => {
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
        resourceName,
        privateEndpointConnectionName,
        options
      },
      deletePrivateEndpointConnectionOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Delete private endpoint connection with the specified name
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  async beginDeletePrivateEndpointConnectionAndWait(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    options?: IotDpsResourceDeletePrivateEndpointConnectionOptionalParams
  ): Promise<IotDpsResourceDeletePrivateEndpointConnectionResponse> {
    const poller = await this.beginDeletePrivateEndpointConnection(
      resourceGroupName,
      resourceName,
      privateEndpointConnectionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: IotDpsResourceListBySubscriptionNextOptionalParams
  ): Promise<IotDpsResourceListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Resource group identifier.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: IotDpsResourceListByResourceGroupNextOptionalParams
  ): Promise<IotDpsResourceListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListValidSkusNext
   * @param provisioningServiceName Name of provisioning service.
   * @param resourceGroupName Name of resource group.
   * @param nextLink The nextLink from the previous successful call to the ListValidSkus method.
   * @param options The options parameters.
   */
  private _listValidSkusNext(
    provisioningServiceName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: IotDpsResourceListValidSkusNextOptionalParams
  ): Promise<IotDpsResourceListValidSkusNextResponse> {
    return this.client.sendOperationRequest(
      { provisioningServiceName, resourceGroupName, nextLink, options },
      listValidSkusNextOperationSpec
    );
  }

  /**
   * ListKeysNext
   * @param provisioningServiceName The provisioning service name to get the shared access keys for.
   * @param resourceGroupName resource group name
   * @param nextLink The nextLink from the previous successful call to the ListKeys method.
   * @param options The options parameters.
   */
  private _listKeysNext(
    provisioningServiceName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: IotDpsResourceListKeysNextOptionalParams
  ): Promise<IotDpsResourceListKeysNextResponse> {
    return this.client.sendOperationRequest(
      { provisioningServiceName, resourceGroupName, nextLink, options },
      listKeysNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisioningServiceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisioningServiceDescription
    },
    201: {
      bodyMapper: Mappers.ProvisioningServiceDescription
    },
    202: {
      bodyMapper: Mappers.ProvisioningServiceDescription
    },
    204: {
      bodyMapper: Mappers.ProvisioningServiceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.iotDpsDescription,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisioningServiceDescription
    },
    201: {
      bodyMapper: Mappers.ProvisioningServiceDescription
    },
    202: {
      bodyMapper: Mappers.ProvisioningServiceDescription
    },
    204: {
      bodyMapper: Mappers.ProvisioningServiceDescription
    }
  },
  requestBody: Parameters.provisioningServiceTags,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/provisioningServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisioningServiceDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisioningServiceDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationResultOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/operationresults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.asyncinfo],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listValidSkusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotDpsSkuDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkProvisioningServiceNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkProvisioningServiceNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailabilityInfo
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.argumentsParam,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/listkeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SharedAccessSignatureAuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listKeysForKeyNameOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/keys/{keyName}/listkeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.SharedAccessSignatureAuthorizationRuleAccessRightsDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName,
    Parameters.keyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPrivateLinkResourcesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResources
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getPrivateLinkResourcesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateLinkResources/{groupId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupIdInformation
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPrivateEndpointConnectionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "PrivateEndpointConnection" }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getPrivateEndpointConnectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdatePrivateEndpointConnectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    204: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.privateEndpointConnection,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deletePrivateEndpointConnectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    204: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisioningServiceDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisioningServiceDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listValidSkusNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotDpsSkuDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listKeysNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedAccessSignatureAuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisioningServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
