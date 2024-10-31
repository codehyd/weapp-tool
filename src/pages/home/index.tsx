import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import PageHeader from "./cpns/page-header";
import PageFn from "./cpns/page-fn";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <>
      <PageHeader />
      <PageFn />
    </>
  );
}
