

function DisplayConvert(cValue)
{
    if (cValue >= 'A' && cValue <= 'Z') 
    {
        console.log(cValue.toLowerCase());
    } 
    else if (cValue >= 'a' && cValue <= 'z') 
    {
        console.log(cValue.toUpperCase());
    } 
    else 
    {
        console.log(cValue);
    }
}

function main()
{
    let ch = 'z';

    DisplayConvert(ch);
}

main();