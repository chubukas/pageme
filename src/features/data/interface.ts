import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface MyDataState {
  myData: {
    project: {
      slug: string,
      image: string,
      projectname: string,
      link: string,
      description: string,
    }[],
    social: {
      link: string,
      icon: IconDefinition,
      account: string,
      colorStyle: string,
    }[],
    About: {
      abt: string,
      icon: IconDefinition,
    }[],
    Services: {
      service: string,
      icon: IconDefinition,
    }[],
    WorkExprience: {
      date: string,
      rank: string,
      company: string,
      works: string[],
    }[],

    Education: {
      cert: string,
      school: string,
      date: string,
      description: string,
      learned: string[],
      certImage: string
    }[],
    Stacks: {
      name: string,
      link: string,
    }[],

  },



}