
function DisplayFactors(No)
{
    let iCnt = 0;

    for(iCnt = 1; iCnt <= No / 2 ; iCnt++)
    {
        if((No % iCnt) == 0)
        {
            console.log(iCnt);
        }
    }
}

function main()
{
    let iValue = 20;

    DisplayFactors(iValue);

}

main();