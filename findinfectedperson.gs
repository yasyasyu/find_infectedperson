const STUDENTNUMBER = 3;        //学籍番号の行数
const CHECK = 2;                //入退室の行数
const SERCHSTUDENT = "number050"//検索する人

function union(setA, setB) {
    var _union = new Set(setA)
    for (var elem of setB) {
        _union.add(elem)
    }
    return _union
}

function findinfected(dat,serchperson){
  var serchindex = [];
  for(var i=1;i<=dat.length-1;i++){
    if(dat[i][STUDENTNUMBER-1] === serchperson){
      if(dat[i][CHECK-1] === "入室"){
        var put = [i+1,1];
      }else{
        var put = [i+1,-1];
      }
      serchindex.push(put);
    }
  }
  return serchindex;
}


function findcontact(dat,index){
  var contact = new Set();
  var person = new Set();
  var cnt = 0;
  var flag = false;
  
  for(var i=1;i<=dat.length-1;i++){
    if(person.has(dat[i][STUDENTNUMBER-1])){
      person.delete(dat[i][STUDENTNUMBER-1]);
    }else{
      person.add(dat[i][STUDENTNUMBER-1]);
    }    
    if(index[cnt][0] === i){
      if(index[cnt][1] === 1){
        flag = true;
      }else{
        flag = false;
      }
      cnt++;
    }

    if(flag){
      contact = union(contact,person);
    }

    if(index.length <= cnt){
      break;
    }
  }
  return contact;
}

function main(){
  const sheet = SpreadsheetApp.getActive().getSheetByName('log');
  const dat = sheet.getDataRange().getValues();
  
  const serchindex = findinfected(dat,SERCHSTUDENT);
  const contactperson = findcontact(dat,serchindex);

  for (var value of contactperson) {
    console.log(value);
  }

}
