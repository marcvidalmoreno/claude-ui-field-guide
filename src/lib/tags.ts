export const tags = {
	live: { text: 'Live demo in chat', variant: 'success' },
	sim: { text: 'Simulated here only', variant: 'caution' },
	app: { text: 'Owned by the app', variant: 'note' },
} as const;

/** Escapes HTML, then turns `backticks` into <code>. Enough for one-line spec values. */
export function inline(text: string) {
	const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	return escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
}
