module.exports = function check(str, bracketsConfig) {

    let result = bracketsConfig.flat().join('');
    let stack = [];

    for(let bracket of str) {
        let bracketsIndex = result.indexOf(bracket);


        if (stack.length > 0 && result[bracketsIndex] === result[stack[stack.length - 1]]) {
            stack.pop();
            continue;
        }

        if(bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1)
        } else {
            if(stack.pop() !== bracketsIndex) {
                return false;
            }
        }
    }
    return stack.length === 0
};