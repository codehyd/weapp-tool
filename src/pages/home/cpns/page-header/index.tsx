import React from "react";
import { View } from "@tarojs/components";
import { WapNav } from "@taroify/icons";
import { BasePopup } from "@/base-ui";

import styles from "./index.module.less";

const PageHeader = React.memo(() => {
  const [show, setShow] = React.useState(false);

  const handleIconClick = React.useCallback(() => {
    setShow(true);
  }, []);

  return (
    <View>
      <View className={styles.page_header}>
        <View className={styles.icon} onClick={handleIconClick}>
          <WapNav size="25" />
        </View>
        <View className={styles.content}>
          <View>百宝箱</View>
        </View>
      </View>

      <BasePopup mode="left" show={show} setShow={() => setShow(false)}>
        <View className={styles.left_wrap}>
          {Array.from({ length: 100 }).map((_, index) => (
            <View key={index} className={styles.item}>
              {index}
            </View>
          ))}
        </View>
      </BasePopup>
    </View>
  );
});

export default PageHeader;
