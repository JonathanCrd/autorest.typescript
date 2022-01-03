/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PetsImpl } from "./operations";
import { Pets } from "./operationsInterfaces";
import { AdditionalPropertiesClientContext } from "./additionalPropertiesClientContext";
import { AdditionalPropertiesClientOptionalParams } from "./models";

export class AdditionalPropertiesClient extends AdditionalPropertiesClientContext {
  /**
   * Initializes a new instance of the AdditionalPropertiesClient class.
   * @param options The parameter options
   */
  constructor(options?: AdditionalPropertiesClientOptionalParams) {
    super(options);
    this.pets = new PetsImpl(this);
  }

  pets: Pets;
}
