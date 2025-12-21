
function CheckEvenOdd(iNo)
{
    if((iNo % 2) == 0)
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
    let iValue = 11, iRet = false;

    iRet = CheckEvenOdd(iValue);

    if(iRet == true)
    {
        console.log(`${iValue} is Even number`);
    }
    else
    {
        console.log(`${iValue} is Odd number`);
    }
}

main();