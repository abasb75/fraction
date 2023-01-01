import parse from './parse';
export default function (term, error) {
    const parsedFraction = parse(term, error);
    if (parsedFraction.type !== "parser-error") {
        return result(parsedFraction, error ? error : () => { });
    }
    else {
        return 0;
    }
}
function result(parsedFractions, error) {
    if (parsedFractions.type == "number") {
        return parseInt(parsedFractions.value);
    }
    else if (parsedFractions.type === "multiply-dot") {
        return result(parsedFractions.a, error) * result(parsedFractions.b, error);
    }
    else if (parsedFractions.type === "divide-fraction") {
        return result(parsedFractions.a, error) / result(parsedFractions.b, error);
    }
    else if (parsedFractions.type === "plus") {
        return result(parsedFractions.a, error) + result(parsedFractions.b, error);
    }
    else if (parsedFractions.type === "minus") {
        return result(parsedFractions.a, error) - result(parsedFractions.b, error);
    }
    else if (parsedFractions.type === "block") {
        return result(parsedFractions.child, error);
    }
    else {
        error();
        return 0;
    }
}
