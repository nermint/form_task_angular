import { formatDate } from '@angular/common';

export function dateFormat(date){
    const format = 'yyyy-MM-ddTHH:mm:ss.SSSSSSS';
    const locale = 'en-US';
    let formattedDate='';
    if(date){
      formattedDate = formatDate(date, format, locale);
    }
    return formattedDate;
}