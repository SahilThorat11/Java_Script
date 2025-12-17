

function SumNonFact(iNo)
{
    let iCnt = 0, iSum = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if((iNo % iCnt) != 0)
        {
            iSum = iSum + iCnt;
        }
    }

    return iSum;
}

function main()
{
    let iValue = 12, iRet = 0;

    iRet = SumNonFact(iValue);

    console.log(`Summation of non-factors of ${iValue} is : ${iRet}`);
}

main();