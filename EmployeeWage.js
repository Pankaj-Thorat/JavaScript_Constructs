const IS_PRESENT = 1;
let empInput = Math.floor(Math.random()*10)%2;
if (empInput == IS_PRESENT)
{
    console.log(" Employee is Present. "); 
    return;
}
else
{
    console.log(" Employee is Absent. ");
}