import {parse,renderTree} from 'equation-parser';
import {ParsedFraction} from './parsedFraction';

export default function (term:string,error?:Function){
    const parsedFraction:ParsedFraction = parse(term);
    if(parsedFraction.type=="parser-error" && error){
        error();
    }
    return renderTree(parsedFraction);
}