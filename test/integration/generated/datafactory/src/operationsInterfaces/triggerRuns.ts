import {
  TriggerRunsRerunOptionalParams,
  TriggerRunsCancelOptionalParams,
  RunFilterParameters,
  TriggerRunsQueryByFactoryOptionalParams,
  TriggerRunsQueryByFactoryResponse
} from "../models";

/** Interface representing a TriggerRuns. */
export interface TriggerRuns {
  /**
   * Rerun single trigger instance by runId.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  rerun(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    runId: string,
    options?: TriggerRunsRerunOptionalParams
  ): Promise<void>;
  /**
   * Cancel a single trigger instance by runId.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    runId: string,
    options?: TriggerRunsCancelOptionalParams
  ): Promise<void>;
  /**
   * Query trigger runs.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the pipeline run.
   * @param options The options parameters.
   */
  queryByFactory(
    resourceGroupName: string,
    factoryName: string,
    filterParameters: RunFilterParameters,
    options?: TriggerRunsQueryByFactoryOptionalParams
  ): Promise<TriggerRunsQueryByFactoryResponse>;
}
