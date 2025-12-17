

function MultFact(iNo)
{
    let iCnt = 0, iMult = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1, iMult = 1; iCnt <= iNo / 2; iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            iMult = iMult * iCnt;
        }
    }

    return iMult;
}

function main()
{
    let iValue = 12, iRet = 0;

    iRet = MultFact(iValue);

    console.log(`Multiplicaton of ${iValue} factors is  : ${iRet}`);
}

main();