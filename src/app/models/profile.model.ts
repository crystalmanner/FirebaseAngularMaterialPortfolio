export class Profile {
  id: String;
  fullName: String;
  birthday: Date;
  avatar: String;

  aboutMeImgUrl: String;
  title: String;
  content: String;
  city: String;
  country: String;
  address: String;
  interests: String;
  study: String;
  degree: String;
  email: String;
  phone: String;
  websiteUrl: String;
  linkedinUrl: String;
  facebookUrl: String;
  twitterUril: String
  cvUrl: String;

  someAbilitiesTitle: String;
  someAbilitiesContent: String;
  skills: Skill[];

  services: Service[];
}

export class Skill {
  skill: String;
  startYear: Number;
  rate: Number; // 50% ~ 100%
}

export class Service {
  logoUrl: String;
  title: String;
  content: String;
}

