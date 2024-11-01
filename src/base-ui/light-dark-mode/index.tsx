import React from "react";
import { View } from "@tarojs/components";
import { Switch } from "@taroify/core";

import styles from "./index.module.less";

const LightDarkMode = React.memo(() => {
  const [isLight, setLight] = React.useState(true);

  const handleChangeMode = (value: boolean) => {
    setLight(value);
  };

  return (
    <View className={styles.light_dark_mode}>
      {isLight && (
        <View
          className="tool-iconfont icon-a-qiansemoshi1"
          style={{ fontSize: "26rpx" }}
        ></View>
      )}

      <Switch
        size="20"
        checked={isLight}
        onChange={handleChangeMode}
        style={{
          margin: "0 10rpx",
        }}
      />

      {!isLight && (
        <View
          className="tool-iconfont icon-shensemoshi"
          style={{ fontSize: "26rpx" }}
        ></View>
      )}
    </View>
  );
});

export default LightDarkMode;
