// TypeDoc theme extending typedoc-plugin-markdown: renders signatures
// without the "Returns" section (the return type stays visible in the
// signature line itself).
//
// Wired up in typedoc.json via:
//   "plugin": [..., "./typedoc-theme.mjs"],
//   "theme": "typedoc-theme",
import { MarkdownTheme, MarkdownThemeContext } from 'typedoc-plugin-markdown';

class NoReturnsTheme extends MarkdownTheme {
	getRenderContext(page) {
		return new NoReturnsThemeContext(this, page, this.application.options);
	}
}

class NoReturnsThemeContext extends MarkdownThemeContext {
	partials = {
		...this.partials,
		signatureReturns: () => ''
	};
}

export function load(app) {
	app.renderer.defineTheme('typedoc-theme', NoReturnsTheme);
}
