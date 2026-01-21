////////////////////////////////////////////////////////////////////////////////
//
//  Required module
//
////////////////////////////////////////////////////////////////////////////////

const readline = require("readline");

////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : ChkGreater
//  Description   : Accept number & check whether it is greater than 100
//  Input         : Integer
//  Output        : Boolean
//  Author        : Sahil Rajaram Thorat
//  Date          : 21/01/2026
//
////////////////////////////////////////////////////////////////////////////////

function ChkGreater(iNo)
{
    if (iNo > 100)
    {
        return true;
    }
    else
    {
        return false;
    }
}

////////////////////////////////////////////////////////////////////////////////
//
//  Entry point function
//
////////////////////////////////////////////////////////////////////////////////

function main()
{
    const rl = readline.createInterface(
                                            {
                                                input: process.stdin,
                                                output: process.stdout
                                            }
                                        );

    rl.question("Please enter number : ", function (input) 
                    {
                        let iValue = parseInt(input);

                        let bRet = ChkGreater(iValue);

                        if (bRet)
                        {
                            console.log(`${iValue} is Greater number`);
                        }
                        else
                        {
                            console.log(`${iValue} is Smaller number`);
                        }

                        rl.close();
                    }
                );
}

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 101
//  Output : 101 is Greater number
//
//  Input  : 39
//  Output : 39 is Smaller number
//
////////////////////////////////////////////////////////////////////////////////
