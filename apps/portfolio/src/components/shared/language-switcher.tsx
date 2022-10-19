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
          await push(pathname, undefined, { locale: "de" });
          onClick();
        }}
      >
        <DE
          className={`w-12 ${
            locale?.includes("de") ? "ring-2 ring-navy-300" : ""
          }`}
        />
      </button>
      <button
        aria-label="english language button"
        onClick={async () => {
          await push(pathname, undefined, { locale: "en" });
          onClick();
        }}
      >
        <US
          className={`w-12 ${
            locale?.includes("en") ? "ring-2 ring-navy-300" : ""
          }`}
        />
      </button>
    </div>
  );
};
