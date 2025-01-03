let mynames=["ali","alia","maryam","fatima"];
let mynikename=["soso","lolo"];
let mygroup=mynames.concat(mynikename);

//push     بتضيف عنصر باخر المصفوفة من جهة اليمين = نهاية المصفوفة
mynames.push("tasnem");

//shift   بتحذف اول عنصر بالمصفوفة من جهة اليسار = بداية المصفوفة  
mynames.shift();

//unshift بتضيف عنصر باول المصفوفة من جهة اليسار = بداية المصفوفة
mynames.unshift("tasmem");

//pop بتحذف اخر عنصر بالمصفوفة من جهة اليمين = نهاية المصفوفة
mynames.pop();

//concat دمج عناصر المصوفة 1 مع عناصر المصفوفة 2 لانتاج المصفوفة 3
mygroup = mynames.concat(mynikename);

