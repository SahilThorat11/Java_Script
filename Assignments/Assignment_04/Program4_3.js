

function NonFact(iNo)
{
    let iCnt = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if((iNo % iCnt) != 0)
        {
            console.log((iCnt));
        }
    }
}

function main()
{
    let iValue = 12;

    NonFact(iValue);
}

main();