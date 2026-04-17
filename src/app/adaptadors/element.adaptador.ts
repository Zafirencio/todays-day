import { ElementCalendar, ElementApiResponse } from "../models/elementCalendar.model";

export function adaptarElementApi(apiItem: ElementApiResponse): ElementCalendar 
{
    return {
        id: apiItem.id ? apiItem.id.toString() : '', 
        titol: apiItem.nom || apiItem.title || 'Sense títol',
        descripcio: apiItem.descripcio || 'Sense descripció',
        categoria: apiItem.categoria || 'General',
        preu: apiItem.preu || 0,
        imatgeUrl: apiItem.imatge || '',
        esPopular: apiItem.popular || false,
        unitats: apiItem.stock || 0,
        name: apiItem.title || apiItem.nom || '',
        timeInMinutes: apiItem.duration_mins || 0,
        dateStart: apiItem.start_datetime ? new Date(apiItem.start_datetime) : new Date(),
        dateEnd: apiItem.end_datetime ? new Date(apiItem.end_datetime) : undefined
    }
}

export function adaptarElementsApi(apiItems: ElementApiResponse[]): ElementCalendar[]
{
    return apiItems.map(item => adaptarElementApi(item))
}