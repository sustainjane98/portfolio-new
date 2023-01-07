import React from "react";
import Link from "next/link";
import { CardBubble, Props as CardBubbleProps } from "./card-bubble";
import { CardRect } from "./card-rect";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarFilledIcon } from "@heroicons/react/24/solid";

export interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  bubbles?: CardBubbleProps[];
  links?: {
    description: string;
    href: string;
    external?: boolean;
    "aria-label"?: string;
    download?: boolean | string;
  }[];
  "aria-label"?: string;
  stars?: number;
  dateFrom?: string;
  dateTo?: string;
}

/**
 * An Card React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Card: React.FC<Props> = ({
  description,
  title,
  icon,
  href,
  external,
  bubbles,
  links,
  stars,
  dateFrom,
  dateTo,
  "aria-label": ariaLabel,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`inline-grid ${(() => {
        if (bubbles && stars && dateFrom) {
          return "grid-rows-[auto_auto_auto_auto_auto_minmax(auto,_100%)_auto]";
        } else if ((bubbles && stars) || (stars && dateFrom))
          return "grid-rows-[auto_auto_auto_auto_minmax(auto,_100%)_auto]";
        else if (bubbles) {
          return "grid-rows-[auto_auto_auto_minmax(auto,_100%)_auto]";
        } else if (stars) {
          return "grid-rows-[auto_auto_auto_minmax(auto,_100%)_auto]";
        } else if (dateFrom) {
          return "grid-rows-[auto_auto_auto_minmax(auto,_100%)_auto]";
        }
        return "grid-rows-[auto_auto_minmax(auto,_100%)_auto]";
      })()} w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white dark:bg-gray-800 mt-6  shadow-lg rounded-lg`}
    >
      <div className="flex-shrink-0">
        <CardRect icon={icon} />
      </div>
      <h3 className="text-2xl sm:text-xl text-gray-700 dark:text-gray-300 font-semibold py-4">
        {title}
      </h3>
      {stars && (
        <div className="flex justify-center items-center">
          {(() => {
            const res = [];

            for (let i = 0; i < 5; i++) {
              res.push(
                stars <= i ? (
                  <StarIcon className="w-6 h-6 text-yellow-600" />
                ) : (
                  <StarFilledIcon className="w-6 h-6 text-yellow-600" />
                )
              );
            }

            return res;
          })()}
          <span className="ml-4 text-xs dark:text-gray-200">{stars}/5</span>
        </div>
      )}
      {dateFrom && (
        <div className="text-sm font-medium flex justify-center gap-2 dark:text-gray-200">
          <span>{dateFrom}</span>
          <span>-</span>
          <span>{dateTo ?? t("today")}</span>
        </div>
      )}
      <p className="text-md  text-gray-500 dark:text-gray-200 py-4 text-start">
        {description}
      </p>
      {bubbles && (
        <div className="flex justify-center content-start pb-6 gap-2 flex-wrap px-6">
          {bubbles.map((props, index) => (
            <CardBubble key={index} {...props} />
          ))}
        </div>
      )}

      <div className="flex justify-center gap-4 flex-row">
        {href &&
          (external ? (
            <a
              aria-label={ariaLabel}
              href={href}
              target={"_blank"}
              rel="noreferrer"
            >
              <span className="underline text-navy-500 hover:text-navy-600 visited:navy-800 dark:text-gray-200 dark:visited:text-gray-300">
                {t("getMoreInformation")}
              </span>
            </a>
          ) : (
            <Link href={href} passHref aria-label={ariaLabel}>
              <span className="underline text-navy-500 hover:text-navy-600 visited:navy-800 dark:text-gray-200 dark:visited:text-gray-300">
                {t("getMoreInformation")}
              </span>
            </Link>
          ))}
        {links?.map(
          (
            { description, href, external, "aria-label": ariaLabel, download },
            index
          ) =>
            external ? (
              <a
                aria-label={ariaLabel}
                href={href}
                target={"_blank"}
                rel="noreferrer"
                download={download}
              >
                <span className="underline text-navy-500 hover:text-navy-600 visited:navy-800 dark:text-gray-200 dark:visited:text-gray-300">
                  {description}
                </span>
              </a>
            ) : (
              <Link href={href} passHref key={index} aria-label={ariaLabel}>
                <span className="underline text-navy-500 hover:text-navy-600 visited:navy-800 dark:text-gray-200 dark:visited:text-gray-300">
                  {description}
                </span>
              </Link>
            )
        )}
      </div>
    </motion.div>
  );
};
