
function CheckLeapYear(iNo)
{
    if((iNo % 4) == 0)
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
    let iValue = 2008, iRet = false;

    iRet = CheckLeapYear(iValue);

    if(iRet == true)
    {
        console.log(`${iValue} is a leap year`);
    }
    else
    {
        console.log(`${iValue} is not a leap year`);
    }
}

main();