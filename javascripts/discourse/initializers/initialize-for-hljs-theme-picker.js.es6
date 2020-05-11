import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "hljs-theme-picker",
  initialize() {
    withPluginApi("0.8.7", api => {
      try {
        const theme = settings.hljs_theme;
        const path = settings.theme_uploads[theme];
        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", path);
        document.head.appendChild(link);
      } catch (error) {
        console.error(error);
        console.error(
          "There is a problem with codeblock theme picker, Please check if you've added CSS to the theme_authorized_extensions site setting"
        );
      }
    });
  }
};
