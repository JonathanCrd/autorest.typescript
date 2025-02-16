import { IotConnectorFhirDestination } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HealthCareApisClient } from "../healthCareApisClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  IotConnectorFhirDestinationGetOptionalParams,
  IotConnectorFhirDestinationGetResponse,
  IotFhirDestination,
  IotConnectorFhirDestinationCreateOrUpdateOptionalParams,
  IotConnectorFhirDestinationCreateOrUpdateResponse,
  IotConnectorFhirDestinationDeleteOptionalParams
} from "../models";

/** Class containing IotConnectorFhirDestination operations. */
export class IotConnectorFhirDestinationImpl
  implements IotConnectorFhirDestination {
  private readonly client: HealthCareApisClient;

  /**
   * Initialize a new instance of the class IotConnectorFhirDestination class.
   * @param client Reference to the service client
   */
  constructor(client: HealthCareApisClient) {
    this.client = client;
  }

  /**
   * Gets the properties of the specified Iot Connector FHIR destination.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    options?: IotConnectorFhirDestinationGetOptionalParams
  ): Promise<IotConnectorFhirDestinationGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        iotConnectorName,
        fhirDestinationName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an IoT Connector FHIR destination resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param iotFhirDestination The parameters for creating or updating an IoT Connector FHIR destination
   *                           resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    iotFhirDestination: IotFhirDestination,
    options?: IotConnectorFhirDestinationCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotConnectorFhirDestinationCreateOrUpdateResponse>,
      IotConnectorFhirDestinationCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IotConnectorFhirDestinationCreateOrUpdateResponse> => {
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
        workspaceName,
        iotConnectorName,
        fhirDestinationName,
        iotFhirDestination,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an IoT Connector FHIR destination resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param iotFhirDestination The parameters for creating or updating an IoT Connector FHIR destination
   *                           resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    iotFhirDestination: IotFhirDestination,
    options?: IotConnectorFhirDestinationCreateOrUpdateOptionalParams
  ): Promise<IotConnectorFhirDestinationCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      iotConnectorName,
      fhirDestinationName,
      iotFhirDestination,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an IoT Connector FHIR destination.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    options?: IotConnectorFhirDestinationDeleteOptionalParams
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
      {
        resourceGroupName,
        workspaceName,
        iotConnectorName,
        fhirDestinationName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an IoT Connector FHIR destination.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param fhirDestinationName The name of IoT Connector FHIR destination resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    fhirDestinationName: string,
    options?: IotConnectorFhirDestinationDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      iotConnectorName,
      fhirDestinationName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}/fhirdestinations/{fhirDestinationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotFhirDestination
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
    Parameters.workspaceName,
    Parameters.iotConnectorName,
    Parameters.fhirDestinationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}/fhirdestinations/{fhirDestinationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IotFhirDestination
    },
    201: {
      bodyMapper: Mappers.IotFhirDestination
    },
    202: {
      bodyMapper: Mappers.IotFhirDestination
    },
    204: {
      bodyMapper: Mappers.IotFhirDestination
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.iotFhirDestination,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.iotConnectorName,
    Parameters.fhirDestinationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}/fhirdestinations/{fhirDestinationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.iotConnectorName,
    Parameters.fhirDestinationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
