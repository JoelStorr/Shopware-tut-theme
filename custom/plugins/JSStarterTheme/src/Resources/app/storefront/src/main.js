import ExtendDatePicker from "./plugin/extend-date-picker.plugin";
import ColorPickerPlugin from './plugin/colorpicker.plugin';

const PluginManager = window.PluginManager;

PluginManager.override(
  "DatePicker",
  ExtendDatePicker,
  "[data-date-picker]"
);

PluginManager.register(
  'ColorPickerPlugin', 
  ColorPickerPlugin, 
  '[data-colorpicker-plugin]'
);

