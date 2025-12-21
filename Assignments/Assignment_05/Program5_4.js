
function CheckNumberType(iNo)
{
    if (iNo > 0) 
    {
        console.log(`${iNo} is Positive number.`);
    }
    else if (iNo < 0) 
    {
        console.log(`${iNo} is Negative number.`);
    }
    else
    {
        console.log(`${iNo} is Zero.`);
    }
}

function main()
{
    let iValue = -11;

    CheckNumberType(iValue);
}

main();