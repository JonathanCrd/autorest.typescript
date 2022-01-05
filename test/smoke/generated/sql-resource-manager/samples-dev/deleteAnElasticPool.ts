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
 * This sample demonstrates how to Deletes an elastic pool.
 *
 * @summary Deletes an elastic pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ElasticPoolDelete.json
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function deleteAnElasticPool() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-3129";
  const serverName = "sqlcrudtest-228";
  const elasticPoolName = "sqlcrudtest-3851";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.elasticPools.beginDeleteAndWait(
    resourceGroupName,
    serverName,
    elasticPoolName
  );
  console.log(result);
}

deleteAnElasticPool().catch(console.error);
