// TypeDoc theme extending typedoc-plugin-markdown.
//
// Renders class pages without:
// - the "Extends" / "Extended by" hierarchy sections,
// - the "Returns" section (the return type stays visible in the signature line itself),
// - the "Overrides" / "Inherited from" / "Implementation of" sections.
//
// Also removes the "Constructors" / "Methods" member group
// headings, which the hideGroupHeadings option does not cover, and orders the
// classes in the "Classes" group by CLASS_ORDER (source order otherwise puts
// them in file-path order).
import { Converter, ReflectionKind } from 'typedoc';
import { MarkdownTheme, MarkdownThemeContext } from 'typedoc-plugin-markdown';

const CLASS_ORDER = [
	'ApkgBuilder',
	'Collection',
	'Deck',
	'Card',
	'Note',
	'Model',
	'Configuration',
	'DeckConfiguration',
	'NewCardConfig',
	'LapseCardConfig',
	'Media'
];

const HIDDEN_GROUP_HEADINGS = ['Constructors', 'Methods'];

class HiddenTagsTheme extends MarkdownTheme {
	getRenderContext(page) {
		return new HiddenTagsThemeContext(this, page, this.application.options);
	}
}

class HiddenTagsThemeContext extends MarkdownThemeContext {
	partials = {
		...this.partials,
		hierarchy: () => '',
		signatureReturns: () => '',
		inheritance: () => ''
	};
}

export function load(app) {
	app.renderer.defineTheme('typedoc-theme', HiddenTagsTheme);

	// Retitle the listed class member groups to "none", which
	// typedoc-plugin-markdown renders without a group heading.
	// Priority must be below -100: TypeDoc's GroupPlugin creates the groups
	// in its own RESOLVE_END handler registered at -100.
	app.converter.on(
		Converter.EVENT_RESOLVE_END,
		(context) => {
			const classGroup = (context.project.groups ?? []).find((group) => group.title === 'Classes');

			if (classGroup) {
				const rank = (name) => {
					const index = CLASS_ORDER.indexOf(name);

					return index === -1 ? CLASS_ORDER.length : index;
				};

				classGroup.children.sort((a, b) => rank(a.name) - rank(b.name));
			}

			for (const reflection of context.project.getReflectionsByKind(ReflectionKind.Class)) {
				const hidden = (reflection.groups ?? []).filter((group) => HIDDEN_GROUP_HEADINGS.includes(group.title));

				if (hidden.length === 0) {
					continue;
				}

				// Merge the hidden groups into a single one so their members keep
				// source order instead of being reordered as separate sections.
				const [target, ...rest] = hidden;

				target.title = 'none';

				for (const group of rest) {
					target.children.push(...group.children);
				}

				target.children.sort((a, b) => (a.sources?.[0]?.line ?? 0) - (b.sources?.[0]?.line ?? 0));

				reflection.groups = reflection.groups.filter((group) => !rest.includes(group));
			}
		},
		-300
	);
}
