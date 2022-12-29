import { useEffect, useState } from 'react';

import type { GiscusProps } from '@/types/giscus';

const Giscus: React.FC<GiscusProps> = ({
  id,
  host,
  repo,
  repoId,
  category,
  categoryId,
  mapping,
  term,
  strict,
  reactionsEnabled,
  emitMetadata,
  inputPosition,
  theme,
  lang,
  loading
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    import('giscus');
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <giscus-widget
      id={id}
      host={host}
      repo={repo}
      repoid={repoId}
      category={category}
      categoryid={categoryId}
      mapping={mapping}
      term={term}
      strict={strict}
      reactionsenabled={reactionsEnabled}
      emitmetadata={emitMetadata}
      inputposition={inputPosition}
      theme={theme}
      lang={lang}
      loading={loading}
    />
  );
};

export default Giscus;
