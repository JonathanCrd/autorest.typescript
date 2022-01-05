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
 * This sample demonstrates how to Create or update a VM scale set.
 *
 * @summary Create or update a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/CreateAScaleSetWithDiffOsDisk.json
 */
import {
  VirtualMachineScaleSet,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createAScaleSetWithEphemeralOSDisks() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "{vmss-name}";
  const parameters: VirtualMachineScaleSet = {
    location: "westus",
    overprovision: true,
    plan: {
      name: "windows2016",
      product: "windows-data-science-vm",
      publisher: "microsoft-ads"
    },
    sku: { name: "Standard_DS1_v2", capacity: 3, tier: "Standard" },
    upgradePolicy: { mode: "Manual" },
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: "{vmss-name}",
            enableIPForwarding: true,
            ipConfigurations: [
              {
                name: "{vmss-name}",
                subnet: {
                  id:
                    "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}"
                }
              }
            ],
            primary: true
          }
        ]
      },
      osProfile: {
        adminPassword: "{your-password}",
        adminUsername: "{your-username}",
        computerNamePrefix: "{vmss-name}"
      },
      storageProfile: {
        imageReference: {
          offer: "windows-data-science-vm",
          publisher: "microsoft-ads",
          sku: "windows2016",
          version: "latest"
        },
        osDisk: {
          caching: "ReadOnly",
          createOption: "FromImage",
          diffDiskSettings: { option: "Local" },
          managedDisk: { storageAccountType: "Standard_LRS" }
        }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    parameters
  );
  console.log(result);
}

createAScaleSetWithEphemeralOSDisks().catch(console.error);
