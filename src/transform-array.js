module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        throw 'Not implemented';
    }


    let answer = [...arr];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                answer.splice(i, 2)
                break;
            case '--discard-prev':
                answer.splice(i - 1, 2)
                break;
            case '--double-next':
                answer.splice(i, 1, i + 1)
                break;
            case '--double-prev':
                answer.splice(i, 1, i)
                break;
            default: break;
        }
    }

    return answer
};
