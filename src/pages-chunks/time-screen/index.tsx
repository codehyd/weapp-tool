import React from "react";
import { View } from "@tarojs/components";

import utils from "@/utils/";
import { ArrowLeft } from "@taroify/icons";
import { BaseLightDarkMode } from "@/base-ui";

import styles from "./index.module.less";

const TimeScreen = () => {
  const [hour, setHour] = React.useState(utils.getHour());
  const [minute, setMinute] = React.useState(utils.getMinute());
  const [second, setSecond] = React.useState(utils.getSecond());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHour(utils.getHour());
      setMinute(utils.getMinute());
      setSecond(utils.getSecond());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // 当该页面被打开保持屏幕常亮
  React.useEffect(() => {
    utils.setScreenBrightness();
    return () => {
      utils.cancelScreenBrightness();
    };
  }, []);

  const onClickBack = () => {
    utils.navigateBack();
  };

  return (
    <View className={styles.time_screen}>
      {/* 时间区域 */}
      <View className={styles.time_wrap}>
        <View className={`${styles.hour} ${styles.time_item}`}>
          <View className={styles.container}>{hour}</View>
        </View>
        <View className={`${styles.minute} ${styles.time_item}`}>
          <View className={styles.container}>{minute}</View>
        </View>
        <View className={`${styles.second} ${styles.time_item}`}>
          <View className={styles.container}>{second}</View>
        </View>
      </View>
      {/* 返回上一页 */}
      <View className={styles.goback_control} onClick={onClickBack}>
        <ArrowLeft />
        返回
      </View>
      {/* 控制区域 */}
      <View className={styles.controls_wrap}>
        <View className={styles.controls_item}>
          <BaseLightDarkMode />
        </View>
      </View>
    </View>
  );
};

export default TimeScreen;
