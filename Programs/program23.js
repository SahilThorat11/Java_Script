
function Factorial(No)
{
    let iFact = 1;

    while(No != 0)
    {
        iFact = iFact * No;
        No--;
    }

    return iFact;
}

function main()
{
    let iValue = 20, iRet = 0;

    iRet = Factorial(iValue);

    console.log('Factorial of ${iValue} is ${iRet}');  // ' ' & " " are same in js
}

main();

// see 346.js