
function FindLargest(iNo1, iNo2, iNo3)
{
    if (iNo1 >= iNo2 && iNo1 >= iNo3)
    {
        console.log(`${iNo1} is the largest number.`);
    }
    else if (iNo2 >= iNo1 && iNo2 >= iNo3)
    {
        console.log(`${iNo2} is the largest number.`);
    }
    else
    {
        console.log(`${iNo3} is the largest number.`);
    }
}

function main()
{
    let iValue1 = 1, iValue2 = 21, iValue3 = 1;

    FindLargest(iValue1, iValue2, iValue3);
}

main();