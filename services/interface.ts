import { StaticImageData } from "next/image";

export interface iNavDrop {
  link?: string;
  text?: string;
}
export interface iNav {
  text?: string;
  dropDown?: Array<iNavDrop>;
}

export interface iWhy {
  img?: any;
  boldTxt?: string;
  text?: string;
}

export interface iQuestion {
  question?: string;
  ans?: React.ReactNode;
}

export interface iFoot {
  h5?: string;
  divs?: React.ReactNode;
}
