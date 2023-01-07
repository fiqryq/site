interface GiscusWidgetAttributes {
  id?: string;
  host?: string;
  repo: string;
  repoid: string;
  category?: string;
  categoryid?: string;
  mapping: import('./giscus').Mapping;
  term?: string;
  theme?: import('./giscus').Theme;
  strict?: import('./giscus').BooleanString;
  reactionsenabled?: import('./giscus').BooleanString;
  emitmetadata?: import('./giscus').BooleanString;
  inputposition?: import('./giscus').InputPosition;
  lang?: import('./giscus').AvailableLanguage;
  loading?: import('./giscus').Loading;
}

declare namespace JSX {
  interface IntrinsicElements {
    'giscus-widget': GiscusWidgetAttributes;
  }
}
