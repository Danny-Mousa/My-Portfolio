"use client";

import dynamic from "next/dynamic";
import NavigatorSkeleton from "./skeletons/NavigatorSkeleton";

const Navigator = dynamic(() => import("./Navigator"), {
  ssr: false,
  loading: () => <NavigatorSkeleton />,
});

function PortfolioNavigator() {
  return <Navigator />;
}

export default PortfolioNavigator;
