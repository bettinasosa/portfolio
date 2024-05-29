'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';

export default function Loading() {
  {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="flex h-screen items-center justify-center">
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }
}
