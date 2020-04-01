import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "hljs-theme-picker",
  initialize() {
    withPluginApi("0.8.7", api => {
      const theme = settings.hljs_theme;
      const path = settings.theme_uploads[theme];
      // TODO: use loadCSS here instead. loadCSS currently causes CORS issues.
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", path);
      document.head.appendChild(link);
    });
  }
};
