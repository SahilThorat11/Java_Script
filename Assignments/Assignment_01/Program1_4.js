

function Check(iNo)
{
    let iCnt = 0;

    if(iNo % 5 == 0)
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
    let iValue = 25;
    let bRet = false;

    bRet = Check(iValue);

    if(bRet == true)
    {
        console.log("Divisible by 5");
    }
    else
    {
        console.log("Not Divisible by 5");
    }
}

main();