import type { EducationalExperience } from "@/types/cv";
import { Fragment, useState } from "react";
import SingleEducationalExperienceForm from "./SingleEducationalExperienceForm";
import BigPlusButton from "./BigPlusButton";
import RemoveButton from "./RemoveButton";

interface EducationalExperienceFormProps {
  initialData: EducationalExperience[];
  updateGlobal: (experiences: EducationalExperience[]) => void;
}

export default function EducationalExperienceForm({
  initialData,
  updateGlobal,
}: EducationalExperienceFormProps) {
  const [data, setData] = useState<EducationalExperience[]>(initialData);

  function handleChange(id: string, name: string, value: string) {
    const newData = data.map((item) => {
      if (item.id == id) {
        return { ...item, [name]: value };
      }
      return item;
    });

    setData(newData);

    updateGlobal(newData);
  }

  function handleAddSingleForm() {
    const newEntry: EducationalExperience = {
      id: crypto.randomUUID(),
    };

    setData((prev) => [...prev, newEntry]);
  }

  function handleRemoveSingleForm(id: string) {
    setData((prev) => prev.filter((item) => item.id != id));
  }

  return (
    <>
      {data.map((item) => (
        <Fragment key={item.id}>
          <SingleEducationalExperienceForm
            data={item}
            handleChange={(name, value) => handleChange(item.id, name, value)}
          />
          <RemoveButton handleClick={() => handleRemoveSingleForm(item.id)} />
        </Fragment>
      ))}
      <BigPlusButton handleClick={handleAddSingleForm} />
    </>
  );
}
