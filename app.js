let id=0;
function addStudent(){
    //getting the value from the input
    let studentName = document.getElementById('studentName').value;
    if(studentName === ""){
        alert("Please enter a name");
    }else{
        displayStudent(studentName);//display student name
        document.getElementById('studentName').value="";//clear the input 
    }
}
function deleteStudent(id){
    document.getElementById(id).remove();
}
function displayStudent(student){
    id++;
    document.getElementById('student-list').innerHTML +=`
    <li id="${id}"> 
     <div><i class="fa-solid fa-bars"></i> ${student}</div>
     <button class= dltbtn onclick="deleteStudent(${id})"><i class="fa-solid fa-trash-can"></i></button>
    </li>`;
}    
