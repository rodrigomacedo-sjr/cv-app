export interface GeneralInfo {
  name?: string;
  phone?: string;
  email?: string;
}

export interface EducationalExperience {
  id: string;
  school_name?: string;
  title_of_study?: string;
  date_of_start?: string;
  date_of_end?: string;
}

export interface Cv {
  general?: GeneralInfo;
  educational?: EducationalExperience[];
}
