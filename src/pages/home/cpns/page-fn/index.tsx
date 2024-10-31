import React from "react";
import { View, Image } from "@tarojs/components";

import { configList } from "./config-list";

import styles from "./index.module.less";

const listEl = () => {
  return configList.map((item, index) => {
    return (
      <View key={index} className={styles.fn_item} onClick={item.onClick}>
        <Image src={item.img} className={styles.img} />
        <View className={styles.title}>{item.title}</View>
      </View>
    );
  });
};

const PageFn = () => {
  return <View className={styles.page_fn}>{listEl()}</View>;
};

export default PageFn;
