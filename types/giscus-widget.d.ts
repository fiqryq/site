interface GiscusWidgetAttributes {
  id?: string;
  host?: string;
  repo: string;
  repoid: string;
  category?: string;
  categoryid?: string;
  mapping: import('@/types/giscus').Mapping;
  term?: string;
  theme?: import('@/types/giscus').Theme;
  strict?: import('@/types/giscus').BooleanString;
  reactionsenabled?: import('@/types/giscus').BooleanString;
  emitmetadata?: import('@/types/giscus').BooleanString;
  inputposition?: import('@/types/giscus').InputPosition;
  lang?: import('@/types/giscus').AvailableLanguage;
  loading?: import('@/types/giscus').Loading;
}

namespace JSX {
  interface IntrinsicElements {
    'giscus-widget': GiscusWidgetAttributes;
  }
}
