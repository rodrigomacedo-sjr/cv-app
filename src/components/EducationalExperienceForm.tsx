import type { EducationalExperience, EducationalExperiences } from "@/types/cv";
import { useState, type ChangeEvent } from "react";
import PrettyTextInput from "./PrettyTextInput";

interface EducationalExperienceFormProps {
  initialData: EducationalExperiences;
  updateGlobal: (experiences: EducationalExperience) => void;
}

export default function EducationalExperienceForm({
  initialData,
  updateGlobal,
}: EducationalExperienceFormProps) {
  const [data, setData] = useState<EducationalExperiences>(initialData);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    // id??

    const newData = [
      ...data,
      [id]: {
        [name]: value
      },
    ];

    setData(newData);

    updateGlobal(newData);
  }

  function handleReset(name: string) {
    const newData = {
      ...data,
      [name]: "",
    };

    setData(newData);

    updateGlobal(newData);
  }

  return (
    <form className="px-10 lg:px-100 flex-1 flex flex-col">
      <h2 className="pl-2 pt-15 font-bold">educational experience</h2>
      <div className="w-full gap-10 md:gap-20 flex-1 flex flex-col items-center pt-10">
        <div className="w-full">
          <p className="pl-2 font-medium">school name</p>
          <PrettyTextInput
            name="school_name"
            value={data.school_name}
            handleChange={handleChange}
            handleReset={handleReset}
          />
        </div>

        <div className="w-full">
          <p className="pl-2 font-medium">title of study</p>
          <PrettyTextInput
            name="title_of_study"
            value={data.title_of_study}
            handleChange={handleChange}
            handleReset={handleReset}
          />
        </div>

        <div className="w-full">
          <p className="pl-2 font-medium">date of study</p>
          <PrettyDateInput
            name="date_of_study"
            value={data.date_of_study}
            handleChange={handleChange}
            handleReset={handleReset}
          />
        </div>
      </div>
    </form>
  );
}
