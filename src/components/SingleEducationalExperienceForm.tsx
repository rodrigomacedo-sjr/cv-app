import type { EducationalExperience } from "@/types/cv";
import { type ChangeEvent } from "react";
import PrettyTextInput from "./PrettyTextInput";

interface SingleEducationalExperienceFormProps {
  data: EducationalExperience;
  handleChange: (name: string, value: string) => void;
}

export default function SingleEducationalExperienceForm({
  data,
  handleChange,
}: SingleEducationalExperienceFormProps) {
  function handleLocalChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    handleChange(name, value);
  }

  function handleReset(name: string) {
    handleChange(name, "");
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
            handleChange={handleLocalChange}
            handleReset={handleReset}
          />
        </div>

        <div className="w-full">
          <p className="pl-2 font-medium">title of study</p>
          <PrettyTextInput
            name="title_of_study"
            value={data.title_of_study}
            handleChange={handleLocalChange}
            handleReset={handleReset}
          />
        </div>

        <div className="w-full">
          <p className="pl-2 font-medium">date of study</p>
          <PrettyTextInput
            name="date_of_start"
            type="date"
            value={data.date_of_start?.toString()}
            handleChange={handleLocalChange}
            handleReset={handleReset}
          />

          <PrettyTextInput
            name="date_of_end"
            type="date"
            value={data.date_of_end?.toString()}
            handleChange={handleLocalChange}
            handleReset={handleReset}
          />
        </div>
      </div>
    </form>
  );
}
