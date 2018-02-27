module.exports = function solveEquation(equation) {
    var arr = equation.split(' ');
    var first = Number(arr[0]);
    var second = Number(arr[3] + arr[4]);
    var third = Number(arr[7] + arr[8]);
    var D = Number(second * second - 4 * first * third);
    var sol1 = Math.round((-1 * second + Math.sqrt(D))/(2 * first));
    var sol2 = Math.round((-1 * second - Math.sqrt(D))/(2 * first));
    var solutions = [];
    solutions.push(sol1);
    solutions.push(sol2);
    solutions.sort(function(a, b) {
        return a - b;
    });
    return solutions;
}
