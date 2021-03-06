import { Template } from "meteor/templating";
import { TaxCloudSettingsFormContainer } from "../containers";

Template.taxCloudSettings.helpers({
  /**
   * @summary returns a component for updating the TaxCloud settings for this app.
   * @since 1.5.2
   * @return {Object} - an object containing the component to render.
   * @ignore
   */
  taxCloudForm() {
    return { component: TaxCloudSettingsFormContainer };
  }
});
