import React from "react";
import BasePopup, { IBaseuiPopupProps } from "../index";

function WithPopup(WrapperComponent: React.FC<any>) {
  const [show, setShow] = React.useState(false);

  const openPopup = () => {
    setShow(true);
  };

  const closePopup = () => {
    setShow(false);
  };

  return (config: any) => {
    console.log(12, config);
    return (
      <>
        <WrapperComponent
          openPopup={openPopup}
          closePopup={closePopup}
        ></WrapperComponent>
        <BasePopup {...config} show={show} setShow={setShow}>
          {config.children}
        </BasePopup>
      </>
    );
  };
}

export default WithPopup;
