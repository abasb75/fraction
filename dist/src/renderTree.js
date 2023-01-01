import { parse, renderTree } from 'equation-parser';
export default function (term, error) {
    const parsedFraction = parse(term);
    if (parsedFraction.type == "parser-error" && error) {
        error();
    }
    return renderTree(parsedFraction);
}
