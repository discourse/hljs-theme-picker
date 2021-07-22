import { withPluginApi } from "discourse/lib/plugin-api";
import Session from "discourse/models/session";

export default {
  name: "hljs-theme-picker",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      try {
        const applyLightModeStyles = () => {
          const theme = settings.hljs_theme;
          const path = settings.theme_uploads[theme];
          const link = document.createElement("link");
          link.setAttribute("rel", "stylesheet");
          link.setAttribute("type", "text/css");
          link.setAttribute("href", path);
          document.head.appendChild(link);
        };

        const applyDarkModeStyles = () => {
          const theme = settings.dark_hljs_theme;
          const path = settings.theme_uploads[theme];
          const link = document.createElement("link");
          link.setAttribute("rel", "stylesheet");
          link.setAttribute("media", "(prefers-color-scheme: dark)");
          link.setAttribute("type", "text/css");
          link.setAttribute("href", path);
          document.head.appendChild(link);
        };

        applyLightModeStyles();
        applyDarkModeStyles();
      } catch (error) {
        console.error(error);
        console.error(
          "There is a problem with codeblock theme picker, Please check if you've added CSS to the theme_authorized_extensions site setting"
        );
      }
    });
  },
};
