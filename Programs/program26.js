
function CountDigit(No)
{
    let iCount = 0, iDigit = 0;

    while(No != 0)
    {
        iDigit = No % 10;
        iCount++;
        No = No / 10;        // Issue
    }

    return iCount;
}

function main()
{
    let iValue = 721, iRet = 0;

    iRet = CountDigit(iValue);

    console.log(`${iValue} contains ${iRet} digits`)
}

main();


// Problem in this code  see program 351.js