export type buttonVariants = "default" | "secondary" | "outline"

export interface HeaderData{
    title: string;
    greeting: string;
    greeting: string;
    mainButtonText: string;
    secondaryButtonText: string;
    headerDescription: string;
    image: string;


}

export interface AboutMeData{
    sectionTitle: string;
  sectionDescription: string;
  image: string;
    title: string;
  description: string;
  aboutButton: string;
  ButtonLink: string;
}

export interface skillsData{
  sectionTitle: string,
  sectionDescription: string,
  image: string,
  title: string,
  description: string,
  Button: string,
  skillsCards: skillCardsData;
  ButtonLink: string,
}
export interface skillCardsData{
  skillsCards:{
      CardTitle: string;
  CardDescription: string;
  }[]

}
export interface skillCard{

      CardTitle: string;
  CardDescription: string;
}
