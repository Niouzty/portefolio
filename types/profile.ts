export type ExperienceMap = Record<string, string>;

export interface Profile {
  name: string;
  position: string;
  email: string;
  location: string;
  experience: ExperienceMap;
  phone?: string;
  github?: string;
}
