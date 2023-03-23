import ExtendDatePicker from "./plugin/extend-date-picker.plugin";


const PluginManager = window.PluginManager;

PluginManager.override(
  "DatePicker",
  ExtendDatePicker,
  "[data-date-picker]"
);

