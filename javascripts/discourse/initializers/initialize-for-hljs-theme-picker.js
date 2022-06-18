import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "hljs-theme-picker",

  initialize() {
    withPluginApi("0.8.7", () => {
      try {
        const theme = settings.hljs_theme;
        const path = settings.theme_uploads[theme];
        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", path);
        document.head.appendChild(link);

        if (
          settings.hljs_dark_match &&
          (theme.endsWith("-light") || theme.endsWith("github"))
        ) {
          let darkSchemeName = theme.replace("-light", "-dark");
          // special case for github because default theme is named just "github"
          darkSchemeName = darkSchemeName.replace("github", "github-dark");

          const darkPath = settings.theme_uploads[darkSchemeName];

          if (darkPath) {
            const linkDark = document.createElement("link");
            linkDark.setAttribute("rel", "stylesheet");
            linkDark.setAttribute("type", "text/css");
            linkDark.setAttribute("href", darkPath);

            // if default scheme is dark, don't add the media query limitation
            // i.e. use dark alternative instead
            const schemeType = getComputedStyle(document.body).getPropertyValue(
              "--scheme-type"
            );

            if (schemeType.trim() !== "dark") {
              linkDark.setAttribute("media", "(prefers-color-scheme: dark)");
            }
            document.head.appendChild(linkDark);
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(
          error,
          "There is a problem with codeblock theme picker, Please check if you've added CSS to the theme_authorized_extensions site setting"
        );
      }
    });
  },
};
