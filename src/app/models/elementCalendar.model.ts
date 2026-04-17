export interface ElementApiResponse
{
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  popular: boolean;
  stock: number;
  title?: string;
  duration_mins?: number;
  start_datetime?: string;
  end_datetime?: string;
}

export interface ElementCalendar {
  id: string;
  titol: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatgeUrl: string;
  esPopular: boolean;
  unitats: number;
  name?: string;
  timeInMinutes?: number;
  dateStart?: Date;
  dateEnd?: Date;
  notes?: string[];
}