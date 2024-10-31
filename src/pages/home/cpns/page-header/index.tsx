import React from "react";
import { View } from "@tarojs/components";
import { Arrow, Contact, Setting, WapNav } from "@taroify/icons";
import { BaseHocWithPopup } from "@/base-ui";

import styles from "./index.module.less";

// 显示内容
const ShowContentEl = (props: any) => {
  return (
    <View className={styles.page_content}>
      <View className={styles.page_header} onClick={props.openPopup}>
        <View className={styles.icon}>
          <WapNav size="25" />
        </View>
        <View className={styles.content}>
          <View>百宝箱</View>
        </View>
      </View>
    </View>
  );
};

// 弹出内容
const PopupContentEl = () => {
  return (
    <View className={styles.left_wrap}>
      <View className={styles.item_content}>
        <Setting size="25" />
        <View className={styles.item_text}>设置</View>
        <Arrow />
      </View>
      <View className={styles.item_content}>
        <Contact size="25" />
        <View className={styles.item_text}>关于我们</View>
        <Arrow />
      </View>
    </View>
  );
};

// 包装显示内容
const WrappedContentEl = BaseHocWithPopup(ShowContentEl);

// 页面头部
const PageHeader = React.memo(() => {
  return (
    <WrappedContentEl mode="left">
      <PopupContentEl></PopupContentEl>
    </WrappedContentEl>
  );
});

export default PageHeader;
