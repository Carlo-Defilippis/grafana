import React, { FC } from 'react';

import { LoadingPlaceholder } from '@grafana/ui';

interface Props {
  pageName?: string;
}

const PageLoader: FC<Props> = ({ pageName = 'My Test' }) => {
  const loadingText = `Loading ${pageName}...`;
  return (
    <div className="page-loader-wrapper">
      <LoadingPlaceholder text={loadingText} />
    </div>
  );
};

export default PageLoader;
