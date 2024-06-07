useEffect(() => {
  window.addEventListener("scroll", scrollHandler);
  setInView(isInView());
  setLoading(false);
  return () => window.removeEventListener("scroll", scrollHandler);
});

const isInView = () => {
  if (imgRef.current) {
    const rect = imgRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  return false;
};