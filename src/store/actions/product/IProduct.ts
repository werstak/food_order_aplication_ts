export interface IImageType {
  medium?: string;
  original?: string;
}
export interface IProduct {
  id: number;
  url?: string;
  name?: string;
  type?: string;
  count?: number;
  language?: string;
  status?: string;
  runtime?: number;
  premiered?: string;
  weight?: number;
  image?: IImageType;
  summary?: string;
}

export interface IProductStatusCounters {
  totalCounter?: number;
}
