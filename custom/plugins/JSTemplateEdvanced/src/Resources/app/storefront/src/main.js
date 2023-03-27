
import Rumble from "./scripts/rumble";

const PluginManager = window.PluginManager;

PluginManager.override("AddToCart", Rumble, ".buy-widget");
PluginManager.initializePlugins();

PluginManager.getPluginInstancesFromElement(".buy-widget");