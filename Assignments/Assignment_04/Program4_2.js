

function FactRev(iNo)
{
    let iCnt = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = iNo - 1; iCnt >= 1; iCnt--)
    {
        if((iNo % iCnt) == 0)
        {
            console.log((iCnt));
        }
    }
}

function main()
{
    let iValue = 12;

    FactRev(iValue);
}

main();