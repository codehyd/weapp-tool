import React from "react";
import { View } from "@tarojs/components";

import styles from "./index.module.less";

const PageHeader = () => {
  return (
    <View className={styles.page_header}>
      <View className={styles.icon}></View>
      <View>
        <View>百宝箱</View>
      </View>
    </View>
  );
};

export default PageHeader;
