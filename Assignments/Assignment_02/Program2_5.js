

function CheckEvn(iNo)
{
    let iCnt = 0;

    if(iNo % 2 == 0)
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
    let iValue = 20;
    let bRet = false;

    bRet = CheckEvn(iValue);

    if(bRet == true)
    {
        console.log("Number is Even");
    }
    else
    {
        console.log("Number is Odd");
    }
}

main();