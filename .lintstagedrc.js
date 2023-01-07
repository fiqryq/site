module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'bun tsc --noEmit',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': filenames => [
    `bun lint`,
    `bun prettier --write ${filenames.join(' ')}`
  ],

  // Prettify only Markdown and JSON files
  '**/*.(mdx|json)': filenames => `bun prettier --write ${filenames.join(' ')}`
};
