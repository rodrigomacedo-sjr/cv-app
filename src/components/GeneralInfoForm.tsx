import type { GeneralInfo } from "@/types/cv";
import { useState, type ChangeEvent } from "react";

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

  return (
    <div className="px-10 md:px-100 flex-1 flex flex-col">
      <h2 className="pl-2 pt-15 font-bold">general information</h2>
      <div className="w-full gap-20 flex-1 flex flex-col items-center pt-10">
        <div className="w-full">
          <p className="pl-2 font-medium">name</p>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            className="mt-1 outline-none h-8 px-3 shadow-sm hover:shadow-md focus:shadow-xl transition duration-300 ease-in-out w-full bg-white rounded-full"
          />
        </div>

        <div className="w-full">
          <p className="pl-2 font-medium">email</p>
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            className="mt-1 outline-none h-8 px-3 shadow-sm hover:shadow-md focus:shadow-xl transition duration-300 ease-in-out w-full bg-white rounded-full"
          />
        </div>

        <div className="w-full">
          <p className="pl-2 font-medium">phone</p>
          <input
            name="phone"
            value={data.phone}
            onChange={handleChange}
            className="mt-1 outline-none h-8 px-3 shadow-sm hover:shadow-md focus:shadow-xl transition duration-300 ease-in-out w-full bg-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
