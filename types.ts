
export enum Page {
  HOME = 'home',
  SERVIZI = 'servizi',
  CHI_SONO = 'chi-sono',
  CONTATTI = 'contatti'
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}
