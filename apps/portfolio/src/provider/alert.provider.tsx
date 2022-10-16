import React, { PropsWithChildren, useState } from "react";
import { AlertType } from "../components/enums/alerttype.enum";
import { Alert, Props as AlertProps } from "../components/shared/alert";

export interface Props {}

export interface Provider extends AlertProps {
  enabled: boolean;
  toggle: (title?: string, subtitle?: string, type?: AlertType) => void;
  type: AlertType;
}

const initalValue: Provider = {
  enabled: true,
  title: "",
  subtitle: undefined,
  type: AlertType.Success,
  toggle: () => {
    return;
  },
};

export const AlertProviderContext = React.createContext<Provider>(initalValue);

/**
 * An AlertProvider React Component.
 * @author Jane Will
 * @version 0.1
 */
export const AlertProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [values, setValue] =
    useState<Omit<Provider, "setEnabled">>(initalValue);

  return (
    <AlertProviderContext.Provider
      value={{
        ...values,
        toggle: (title, subtitle, type) => {
          setValue(({ enabled, ...other }) => ({
            enabled: !enabled,
            ...other,
            title: title ?? "",
            subtitle: subtitle,
            type: type ?? AlertType.Success,
          }));
        },
      }}
    >
      <div className="absolute top-0 left-0 right-0 flex items-center">
        <Alert {...values} />
      </div>
      {children}
    </AlertProviderContext.Provider>
  );
};
