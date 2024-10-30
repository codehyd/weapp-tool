import React from "react";
import { View } from "@tarojs/components";
import { WapNav } from "@taroify/icons";
import { Popup } from "@taroify/core";

import styles from "./index.module.less";

const PageHeader = React.memo(() => {
  const [show, setShow] = React.useState(false);

  const handleIconClick = React.useCallback(() => {
    setShow(true);
  }, []);

  return (
    <>
      <View className={styles.page_header}>
        <View className={styles.icon} onClick={handleIconClick}>
          <WapNav size="25" />
        </View>
        <View className={styles.content}>
          <View>百宝箱</View>
        </View>
      </View>

      <Popup
        open={show}
        placement="left"
        style={{
          height: "100vh",
          width: "40vw",
          borderRadius: "0 10rpx 10rpx 0",
        }}
      >
        <View className={styles["right-wrap"]}>123</View>
      </Popup>
    </>
  );
});

export default PageHeader;
