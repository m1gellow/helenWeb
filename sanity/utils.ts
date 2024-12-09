import qs from 'query-string'

interface UrlQueryParams {
    params: string;
    key?: string;
    value?: string | null;
    keysToRemove?: string[];
  }
  

interface BuildQueryParams{
    type: string;
    query: string;
    page: number;
    perPage?: number;
}


export function buildQuery(params: BuildQueryParams){
    const {type, query, page = 1, perPage = 20} = params;

    const conditions = [`*[_type==${type}]`];

    if(query) conditions.push(`title match "*${query}*"`);

    const offset = (page - 1) * perPage;
    const limit = perPage;
    
    return conditions.length > 1
      ? `${conditions[0]} && (${conditions
          .slice(1)
          .join(" && ")})][${offset}...${limit}]`
      : `${conditions[0]}][${offset}...${limit}]`;
}

export function formUrlQuery({ params, key, value, keysToRemove }: UrlQueryParams) {
    const currentUrl = qs.parse(params);
  
    if(keysToRemove) {
      keysToRemove.forEach((keyToRemove) => {
        delete currentUrl[keyToRemove];
      })
    } else if(key && value) {
      currentUrl[key] = value;
    }
  
    return qs.stringifyUrl(
      { url: window.location.pathname, query: currentUrl },
      { skipNull: true }
    )
  }