import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="120" />
    <rect x="0" y="296" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="351" rx="10" ry="10" width="280" height="88" />
    <rect x="11" y="455" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="447" rx="26" ry="26" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
