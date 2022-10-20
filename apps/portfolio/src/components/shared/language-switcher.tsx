import React from "react";
import { US, DE } from "country-flag-icons/react/3x2";
import { useRouter } from "next/router";

export interface Props {
  onClick: () => void;
}

/**
 * An LanguageSwitcher React Component.
 * @author Jane Will
 * @version 0.1
 */
export const LanguageSwitcher: React.FC<Props> = ({ onClick }) => {
  const { locale, push, pathname } = useRouter();

  return (
    <div className="flex w-full p-4 justify-center gap-x-4">
      <button
        aria-label="german language button"
        onClick={async () => {
          onClick();
          await push(pathname, undefined, { locale: "de" });
        }}
      >
        <DE
          className={`w-14 rounded-md ${
            locale?.includes("de") ? "border-2 border-navy-300" : ""
          }`}
        />
      </button>
      <button
        aria-label="english language button"
        onClick={async () => {
          onClick();
          await push(pathname, undefined, { locale: "en" });
        }}
      >
        <US
          className={`w-14 rounded-md ${
            locale?.includes("en") ? "border-2 border-navy-300" : ""
          }`}
        />
      </button>
    </div>
  );
};
