export const isMobile = (): boolean => {
  if (typeof window !== 'undefined') {
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      ua
    );
  }
  return false;
};
