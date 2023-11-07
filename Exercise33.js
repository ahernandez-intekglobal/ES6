function func1() { return { prop:"foo"}; } // double quotes delimitated string
function func2() { return { prop:'foo'}; } // single quotes delimitated string

// In functionality will be equivalent make use of single or double quotes to 
// delimiter a string, neverthless the comparasion of the two objects will
// return false, since they are not the same object in memory.
// In the other hand, comparasion of the two values of prop will be equal.