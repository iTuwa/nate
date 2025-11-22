'use client';

import '../corehelper-1.5.1.min.js';
import type { FC } from 'react';

type Props = {
  html: string;
};

const InteractiveClient: FC<Props> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default InteractiveClient;
