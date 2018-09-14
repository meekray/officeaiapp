export const extractDigits = (input) => {
    var _subNum = "";
    var _totalSum = 0;
    var _containsNum = false;
    var index = 0;
    while (index < input.length)
    {
        while (_isNumber(input[index]))
        {
            _containsNum = true;
            _subNum += input[index];
            index++;
        }
        if(_subNum)
        {
            _totalSum += parseFloat(_subNum);
            _subNum = "";
        }
        if(_isNegative(input[index]))
            _subNum += input[index];

        ++index;
    }
    return _totalSum != 0 && _containsNum ? _totalSum : "";
}

const _isNumber = (c) => {
  return (c >= '0' && c <= '9');
}

const _isNegative = (c) => {
  return c === '-';
}
