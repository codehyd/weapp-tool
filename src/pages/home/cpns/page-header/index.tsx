import React from "react";
import { View } from "@tarojs/components";
import { WapNav } from "@taroify/icons";
import { BaseHocWithPopup } from "@/base-ui";
// import { WithPopupProps } from "@/base-ui/popup/hoc/WithPopup";

import styles from "./index.module.less";

const PageHeader = React.memo((props: any) => {
  console.log(props);
  return (
    <View>
      <View className={styles.page_header}>
        <View className={styles.icon} onClick={props.openPopup}>
          <WapNav size="25" />
        </View>
        <View className={styles.content}>
          <View>百宝箱</View>
        </View>
      </View>
    </View>
  );
});

const PopupContent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View className={styles.left_wrap}>
      <View className={styles.item} onClick={() => setCount(count + 1)}>
        点击次数: {count}
      </View>
      {Array.from({ length: 100 }).map((_, index) => (
        <View key={index} className={styles.item}>
          {index}
        </View>
      ))}
    </View>
  );
};
export default () =>
  BaseHocWithPopup(PageHeader)({ mode: "left", children: <PopupContent /> });

// const config: WithPopupProps = {
//   config: { mode: "left", content: <PopupContent /> },
// };

// const newPageHeader = React.memo(() => {
//   return (
//     <>
//       <BaseHocWithPopup {...config}>
//         <PageHeader />
//       </BaseHocWithPopup>
//     </>
//   );
// });

// export default newPageHeader;
