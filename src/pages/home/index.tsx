import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import PageHeader from "./cpns/page-header";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <>
      <PageHeader />
    </>
  );
}
