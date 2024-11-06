export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green (Gastroenterology, YOE-3)",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron (Neurologist, YOE-5)",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston (Urologist, YOE-4)",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter (General Physician, YOE-14)",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell (Orthopaedist, YOE-15)",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez (Pulmonologist, YOE-10)",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee (Cardiologist, YOE-7)",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz (Plastic Surgery, YOE-6)",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma (Surgeon, YOE-22)",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
