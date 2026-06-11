import type { GeneralInfo } from "@/types/cv";
import { useState, type ChangeEvent } from "react";
import PrettyTextInput from "./PrettyTextInput";

interface GeneralInfoFormProps {
  initialData: GeneralInfo;
  updateGlobal: ({ name, email, phone }: GeneralInfo) => void;
}

export default function GeneralInfoForm({
  initialData,
  updateGlobal,
}: GeneralInfoFormProps) {
  const [data, setData] = useState<GeneralInfo>(initialData);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    const newData = {
      ...data,
      [name]: value,
    };

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
      <h2 className="pl-2 pt-15 font-bold">general information</h2>
      <div className="w-full gap-10 md:gap-20 flex-1 flex flex-col items-center pt-10">
        <div className="w-full">
          <p className="pl-2 font-medium">name</p>
          <PrettyTextInput
            name="name"
            value={data.name}
            pattern="^[a-zA-Z]+$"
            handleChange={handleChange}
            handleReset={handleReset}
          />
        </div>

        <div className="w-full">
          <p className="pl-2 font-medium">email</p>
          <PrettyTextInput
            name="email"
            value={data.email}
            type="email"
            handleChange={handleChange}
            handleReset={handleReset}
          />
        </div>

        <div className="w-full">
          <p className="pl-2 font-medium">phone</p>
          <PrettyTextInput
            name="phone"
            value={data.phone}
            pattern="^\+[1-9]\d{1,14}$"
            handleChange={handleChange}
            handleReset={handleReset}
          />
        </div>
      </div>
    </form>
  );
}
