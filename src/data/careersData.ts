export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

// Add verified vacancies here only when MirexTech is actively recruiting.
export const jobOpenings: JobOpening[] = [];
