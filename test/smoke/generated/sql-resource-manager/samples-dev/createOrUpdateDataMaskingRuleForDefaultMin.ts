/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Creates or updates a database data masking rule.
 *
 * @summary Creates or updates a database data masking rule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/stable/2014-04-01/examples/DataMaskingRuleCreateOrUpdateDefaultMin.json
 */
import {
  DataMaskingRule,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateDataMaskingRuleForDefaultMin() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-6852";
  const serverName = "sqlcrudtest-2080";
  const databaseName = "sqlcrudtest-331";
  const dataMaskingRuleName = "rule1";
  const parameters: DataMaskingRule = {
    columnName: "test1",
    maskingFunction: "Default",
    schemaName: "dbo",
    tableName: "Table_1"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.dataMaskingRules.createOrUpdate(
    resourceGroupName,
    serverName,
    databaseName,
    dataMaskingRuleName,
    parameters
  );
  console.log(result);
}

createOrUpdateDataMaskingRuleForDefaultMin().catch(console.error);
