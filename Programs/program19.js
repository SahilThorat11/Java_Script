
function CheckEvenOdd(No)
{
    if(No % 2 == 0)
    {
        console.log("It is Even number");
    }
    else
    {
        console.log("It is Odd number");
    }
}

function main()
{
    let iValue = 10;

    CheckEvenOdd(iValue);
}

main();