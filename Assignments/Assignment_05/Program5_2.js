
function FindMax(iNo1, iNo2)
{
    if(iNo1 > iNo2)
    {
        return iNo1;
    }
    else
    {
        return iNo2;
    }
}

function main()
{
    let iValue1 = 15, iValue2 = 13, iRet = 0;

    iRet = FindMax(iValue1, iValue2);

    console.log(`Maximum between ${iValue1} and ${iValue2} is : ${iRet}`);
}

main();