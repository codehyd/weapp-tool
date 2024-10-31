import React from "react";
import { View } from "@tarojs/components";

import styles from "./index.module.less";

const TimeScreen = () => {
  return (
    <View className={styles.time_screen}>
      <View className={styles.wrap}>
        <View className={`${styles.hour} ${styles.time_item}`}>1</View>
        <View className={`${styles.minute} ${styles.time_item}`}>1</View>
        <View className={`${styles.second} ${styles.time_item}`}>1</View>
      </View>
    </View>
  );
};

export default TimeScreen;
