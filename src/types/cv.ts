export interface GeneralInfo {
  name?: string;
  phone?: string;
  email?: string;
}

export interface timePeriod {
  start: Date;
  end?: Date;
}

export interface EducationalExperience {
  school_name?: string;
  title_of_study?: string;
  date_of_study?: timePeriod;
}

export interface EducationalExperiences {
  experience: EducationalExperience[];
}

export interface Cv {
  general?: GeneralInfo;
}
