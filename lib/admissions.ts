import { schoolFacts } from '@/lib/content-pages';

/**
 * Admissions details shown on /apply-now. Only add values the school has
 * confirmed; empty entries are hidden from the page and its FAQ.
 */
export const admissionsDetails = {
  // e.g. 'LKG to Class X'
  classes: '',
  // e.g. 'LKG: 3½ years by 1 June'
  ageGuide: '',
  // e.g. 'Admissions for 2027–28 open in January'
  admissionWindow: '',
  // e.g. 'June'
  academicYearStarts: '',
  // e.g. ['Birth certificate', 'Transfer Certificate', 'Latest report card']
  documents: [] as string[],
  // e.g. 'An informal interaction for Class I and above'
  assessment: '',
  // e.g. 'School buses serve selected routes around Kozhikode'
  transport: '',
};

const curriculum = schoolFacts.find((fact) => fact.label === 'Affiliation')!;
const established = schoolFacts.find((fact) => fact.label === 'Established')!;

export const admissionsGlance = [
  { label: 'Curriculum', value: curriculum.value },
  { label: 'Classes', value: admissionsDetails.classes },
  { label: 'Age guide', value: admissionsDetails.ageGuide },
  { label: 'Admissions', value: admissionsDetails.admissionWindow },
  {
    label: 'Academic year starts',
    value: admissionsDetails.academicYearStarts,
  },
  { label: 'Established', value: established.value },
].filter((item) => item.value);
