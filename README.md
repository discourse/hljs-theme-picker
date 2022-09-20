# hljs-theme-picker

A Discourse theme component that allows you to change the highlight colors used in code blocks.

### Developer updates

To update the list of themes, follow these steps:

- clone the HighlightJS repo
- copy over the CSS styles under assets
- update `about.json`
- update settings.yml
- prepend `body` to all CSS styles (in VSCode, you can do a search for `^.` on the assets folder and replace with `body .`)
