function loadjson(file,callback) {
   var xhr =new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange = function() {
     if(xhr.readyState === 4 && xhr.status == '200'){
       callback(xhr.responseText);
     }

   };
   xhr.send(null);

}
loadjson("data.json",function(text)
{
   var data = JSON.parse(text);
   console.log(data);
   details(data.basic);
   details2(data.career);
   details3(data.education);
   details4(data.achievements);
   details5(data.technicalskills);
})

var left = document.querySelector(".leftchild");
function details(det) {
  var image = document.createElement("img");
  image.src=det.image;
  left.appendChild(image);

  var name = document.createElement("h2");
  name.textContent = det.name;
  left.appendChild(name);

  var mail = document.createElement("a");
  mail.href = "makkaaditya@gmail.com";
  mail.textContent = det.email;
  left.appendChild(mail);

  var number = document.createElement("p");
  number.textContent = det.number;
  left.appendChild(number);

  var add = document.createElement("h2");
  add.textContent = "Address:";
  left.appendChild(add);

  var hr = document.createElement("hr")
  left.appendChild(hr);

  var add = document.createElement("p");
  add.textContent = det.address;
  left.appendChild(add);
}
  var right = document.querySelector(".rightchild");
  function details2(obj){
    var objective = document.createElement("h2");
    objective.textContent = "career info:";
    right.appendChild(objective);

    var hr = document.createElement("hr")
    right.appendChild(hr);

    var objective = document.createElement("p");
    objective.textContent = obj.objective;
    right.appendChild(objective);

}
   function details3(edu){
     var add = document.createElement("h3");
     add.textContent = "Educational Qualifications:";
     right.appendChild(add);

     var hr = document.createElement("hr");
     right.appendChild(hr);

     var table1 = document.createElement("table");
     table1.border="1";
     var tr1 = "<tr><th>Institute</th><th>Degree</th><th>passout</th></tr>";
     var tr2 = "";

     for(var i=0;i<edu.length;i++){
       tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>"
     }
     table1.innerHTML=tr1+tr2;
     right.appendChild(table1);
   }
  function details4(ach){
    var st = document.createElement("h2");
    st.textContent = "Achivements:";
    right.appendChild(st);

    var hr = document.createElement("hr");
    right.appendChild(hr);

    var st = document.createElement("h3");
    st.textContent = ach.workshops;
    right.appendChild(st);
  }
  function details5(ts){
    var skill = document.createElement("h2");
    skill.textContent = "technical Skills:";
    right.appendChild(skill);

    var hr = document.createElement("hr");
    right.appendChild(hr);

    var ul = document.createElement("ul");
     for(var i=0;i<ts.length;i++){
       var li = document.createElement("h3");
       li.textContent=ts[i].info+":"+ts[i].details;
       ul.appendChild(li);
     }
     right.appendChild(ul);
  }
