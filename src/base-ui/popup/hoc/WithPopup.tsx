import React from "react";
import BasePopup, { IBaseuiPopupProps } from "../";
import { IBasePopupMode } from "../type";

export interface IWithPopupProps extends React.PropsWithChildren<any> {
  mode: IBasePopupMode;
}

const withPopup = (WrappedComponent: React.ComponentType<any>) => {
  const HOC = (props: IWithPopupProps) => {
    const [show, setShow] = React.useState(false);

    const openPopup = React.useCallback(() => {
      setShow(true);
    }, []);

    const closePopup = React.useCallback(() => {
      setShow(false);
    }, []);

    return (
      <>
        <BasePopup show={show} setShow={setShow} mode={props.mode}>
          {props.children}
        </BasePopup>
        <WrappedComponent
          {...props}
          openPopup={openPopup}
          closePopup={closePopup}
        />
      </>
    );
  };

  return HOC;
};

export default withPopup;
