import React from "react";
import { AlertType } from "../enums/alerttype.enum";

export interface Props {
  title: string;
  subtitle?: string;
  type?: AlertType;
}

/**
 * An Alert React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Alert: React.FC<Props> = ({ subtitle, title, type }) => {
  const alertClasses = (() => {
    switch (type) {
      case AlertType.Warning: {
        return "bg-yellow-200 border-yellow-600 text-yellow-600";
      }
      case AlertType.Error: {
        return "bg-red-200 border-red-600 text-red-600";
      }
      default: {
        return "bg-green-200 border-green-600 text-green-600";
      }
    }
  })();

  return (
    <div className={`${alertClasses} border-l-4 p-4`} role="alert">
      <p className="font-bold">{title}</p>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

Alert.defaultProps = { type: AlertType.Success };
