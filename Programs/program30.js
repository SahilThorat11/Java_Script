
function CountDigit(No)
{
    let iCount = 0;

    while(No != 0)
    {
        iCount++;
        No = Math.floor(No / 10);        
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


