

function PrintEven(iNo)
{
    let iCnt = 0, iFact = 0;

    for(iCnt = 1; iCnt <= iNo; iCnt++)
    {
        console.log(iCnt * 2);
    }

}

function main()
{
    let iValue = 24;

    PrintEven(iValue);
}

main();