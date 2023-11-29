import { JSONtoString, stringToJSON } from "./data.helper";

export function transFormReformatJSON(data:any){
  return stringToJSON(JSONtoString(data))
} 