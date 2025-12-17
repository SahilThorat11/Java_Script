

function Divide(iNo1, iNo2)
{
    let iAns = 0;

    if(iNo2 == 0)
    {
        return -1;
    }
    iAns = iNo1 / iNo2;

    return iAns;
}
function main()
{
   let iValue1 = 15, iValue2 = 5, iRet = 0;

   iRet = Divide(iValue1, iValue2);

   if (iRet === -1)
    {
        console.log("Invalid division");
    }
    else
    {
        console.log("Division is :", iRet);
    }
}

main();