import ExtendDatePicker from "./plugin/extend-date-picker.plugin";
import ColorPickerPlugin from './colorpicker';

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

