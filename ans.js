
for(i=1;i<=4;i++){
    s=""
    for(j=1;j<=i;j++){
      s=s+" "
    }
    for(k=4;k>=i;k--){
      s=s+"*"
    }
    for(l=3;l>=i;l--){
      s=s+"*"
    }
    console.log(s)
  }
  for(i=2;i<=4;i++){
    s=""
    for(j=4;j>=i;j--){
      s=s+" "
    }
    for(k=1;k<=i;k++){
      s=s+"*"
    }
    for(l=2;l<=i;l++){
      s=s+"*"
    }
    console.log(s)
  }

  /////////////////////////////////////////

  let s= "Hey how are you"
console.log(s.substr(4))

/////////////////////////////////////////

let arr = [10,20,30,40,50]
let arr1 =[30,60,70,10,80]

for(i=0;i<arr.length;i++){
  t=arr[i]
  for(j=0;j<arr1.length;j++){
    if(t==arr1[j]){
      console.log(t)
    }
  }
}

/////////////////////////////////////////

let s="abhilash"
arr=s.split("")
arr1=[]
for(i=0;i<arr.length;i++){
    p=arr[i]
    flag=0
  for(j=i+1;j<arr.length;j++){
    if(p==arr[j]){
      flag=1
    }
  }
  if(flag==0){
    arr1.push(p)
  }
}
console.log(arr1.join(""))

/////////////////////////////////////////

let num = 12345
revnum=""
num=num.toString()
for(i=num.length-1;i>=0;i--){
  revnum=revnum+num[i]
}
console.log(parseInt(revnum))

/////////////////////////////////////////
