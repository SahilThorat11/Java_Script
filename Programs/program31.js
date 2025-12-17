
function SumDigit(No)
{
    let iSum = 0, iDigit = 0;

    while(No != 0)
    {
        iDigit = No % 10;
        iSum = iSum + iDigit;
        No = Math.floor(No / 10);        
    }

    return iSum;
}

function main()
{
    let iValue = 721965, iRet = 0;

    iRet = SumDigit(iValue);

    console.log(`Summation of digits are : ${iRet}`);
}

main();


