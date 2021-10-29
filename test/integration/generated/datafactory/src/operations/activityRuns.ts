import { ActivityRuns } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClientContext } from "../dataFactoryClientContext";
import {
  RunFilterParameters,
  ActivityRunsQueryByPipelineRunOptionalParams,
  ActivityRunsQueryByPipelineRunResponse
} from "../models";

/** Class containing ActivityRuns operations. */
export class ActivityRunsImpl implements ActivityRuns {
  private readonly client: DataFactoryClientContext;

  /**
   * Initialize a new instance of the class ActivityRuns class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClientContext) {
    this.client = client;
  }

  /**
   * Query activity runs based on input filter conditions.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param runId The pipeline run identifier.
   * @param filterParameters Parameters to filter the activity runs.
   * @param options The options parameters.
   */
  queryByPipelineRun(
    resourceGroupName: string,
    factoryName: string,
    runId: string,
    filterParameters: RunFilterParameters,
    options?: ActivityRunsQueryByPipelineRunOptionalParams
  ): Promise<ActivityRunsQueryByPipelineRunResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, runId, filterParameters, options },
      queryByPipelineRunOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const queryByPipelineRunOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}/queryActivityruns",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ActivityRunsQueryResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.filterParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.runId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
