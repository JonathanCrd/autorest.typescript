import {
  RunFilterParameters,
  PipelineRunsQueryByFactoryOptionalParams,
  PipelineRunsQueryByFactoryResponse,
  PipelineRunsGetOptionalParams,
  PipelineRunsGetResponse,
  PipelineRunsCancelOptionalParams
} from "../models";

/** Interface representing a PipelineRuns. */
export interface PipelineRuns {
  /**
   * Query pipeline runs in the factory based on input filter conditions.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the pipeline run.
   * @param options The options parameters.
   */
  queryByFactory(
    resourceGroupName: string,
    factoryName: string,
    filterParameters: RunFilterParameters,
    options?: PipelineRunsQueryByFactoryOptionalParams
  ): Promise<PipelineRunsQueryByFactoryResponse>;
  /**
   * Get a pipeline run by its run ID.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    runId: string,
    options?: PipelineRunsGetOptionalParams
  ): Promise<PipelineRunsGetResponse>;
  /**
   * Cancel a pipeline run by its run ID.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    factoryName: string,
    runId: string,
    options?: PipelineRunsCancelOptionalParams
  ): Promise<void>;
}
