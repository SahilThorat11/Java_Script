
function CheckPerfect(No)
{
    let iCnt = 0, iSum = 0;

    for(iCnt = 1; iCnt <= No / 2 ; iCnt++)
    {
        if((No % iCnt) == 0)
        {
            iSum = iSum + iCnt;
        }
    }

    if(iSum == No)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let iValue = 28;
    let bRet = false;

    bRet = CheckPerfect(iValue);

    if(bRet == true)
    {
        console.log(`${iValue} is perfect number`);
    }
    else
    {
        console.log(`${iValue} is perfect number`);
    }

}

main();
