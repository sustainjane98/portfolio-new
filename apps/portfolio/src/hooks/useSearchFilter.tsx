import { useEffect, useState } from "react";
import { Props as SkillsProps } from "../components/shared/skills";
import { useSearchTerm } from "./useSearchTerm.hook";

export const useSearchFilter = (array?: SkillsProps[]) => {
  const [filteredArray, setFilteredArray] = useState<SkillsProps[]>([]);
  const { searchTerm } = useSearchTerm();

  useEffect(() => {
    if (!array || array?.length === 0) {
      return;
    }

    if (searchTerm === "") {
      setFilteredArray(array);
      return;
    }

    const filteredArrayCopy = [];

    for (const sp of array) {
      const spCopy: SkillsProps = { ...sp, skills: [] };
      const skills = [...sp.skills];

      for (const p of skills) {
        if (p.title.toLowerCase().includes(searchTerm.toLowerCase()))
          spCopy.skills.push(p);
      }

      if (spCopy.skills?.length > 0) filteredArrayCopy.push(spCopy);
    }

    setFilteredArray(filteredArrayCopy);
  }, [searchTerm, array]);

  return filteredArray;
};
