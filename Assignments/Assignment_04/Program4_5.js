

function FactDiff(iNo)
{
    let iCnt = 0, iSumFact = 0, iSumNonFact = 0, iDiff = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            iSumFact = iSumFact + iCnt;
        }
        else
        {
            iSumNonFact = iSumNonFact + iCnt;
        }
    }

    return iSumFact - iSumNonFact ;
}

function main()
{
    let iValue = 10, iRet = 0;

    iRet = FactDiff(iValue);

    console.log(`Difference between sum of factors and non-factors of ${iValue} is: ${iRet}`);
}

main();