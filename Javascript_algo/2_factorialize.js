function factorialize(num) {
  var ans = 1;
 while(num > 0){//1,2
   ans *= num;// 1 = 1 * 1= 1*2
   num--;//num = num- 1= 1-1 = 2-1
 }
 return ans;
 }

console.log(factorialize(5));
