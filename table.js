let tableData = [
  { id: 'A', name: "Alice Johnson", age: 29, role: "Software Engineer", location: "New York"  }, //Edit should not be in the object
  { id: 'B', name: "Bob Smith", age: 34, role: "Project Manager", location: "Los Angeles" },
  { id: 3, name: "Charlie Brown", age: 27, role: "Data Analyst", location: "Chicago" },
  { id: 4, name: "Diana Prince", age: 30, role: "UX Designer", location: "San Francisco" },
  { id: 5, name: "Ethan Hunt", age: 40, role: "Product Manager", location: "Seattle" },
  { id: 6, name: "Fiona Carter", age: 25, role: "Front-end Developer", location: "Austin" },
  { id: 7, name: "George Miller", age: 37, role: "DevOps Engineer", location: "Houston" },
  { id: 8, name: "Helen White", age: 31, role: "Quality Analyst", location: "Boston" },
  { id: 9, name: "Isaac Newton", age: 28, role: "Machine Learning Engineer", location: "Palo Alto" },
  { id: 10, name: "Julia Roberts", age: 33, role: "Backend Developer", location: "Denver"},
  { id: 11, name: "Kevin Parker", age: 38, role: "Cloud Architect", location: "Miami"},
  { id: 12, name: "Laura Green", age: 26, role: "Graphic Designer", location: "Portland" },
  { id: 13, name: "Michael Scott", age: 43, role: "HR Manager", location: "Scranton" },
  { id: 14, name: "Nancy Adams", age: 29, role: "Content Writer", location: "Phoenix"},
  { id: 15, name: "Oliver Brown", age: 32, role: "Game Developer", location: "San Diego" },
  { id: 16, name: "Peter Parker", age: 24, role: "Intern", location: "Queens" },
  { id: 17, name: "Quincy Wright", age: 29, role: "Full-stack Developer", location: "Atlanta"},
  { id: 18, name: "Rachel Green", age: 35, role: "Marketing Specialist", location: "Philadelphia" },
  { id: 19, name: "Steve Rogers", age: 41, role: "Team Lead", location: "Brooklyn" },
  { id: 20, name: "Tina Fey", age: 28, role: "UI Developer", location: "Dallas",One:"<br/>" },
  { id: 21, name: "Uma Thurman", age: 33, role: "Product Designer", location: "Seattle" },
  { id: 22, name: "Victor Stone", age: 29, role: "Cybersecurity Analyst", location: "San Jose" },
  { id: 23, name: "Wanda Maximoff", age: 28, role: "UI/UX Specialist", location: "San Francisco" },
  { id: 24, name: "Xander Cage", age: 35, role: "Database Administrator", location: "New Orleans" },
  { id: 25, name: "Yara Shahidi", age: 30, role: "Technical Writer", location: "Minneapolis" },
  { id: 26, name: "Zack Taylor", age: 37, role: "IT Consultant", location: "Nashville" },
  { id: 27, name: "Andrea Smith", age: 42, role: "Chief Technology Officer", location: "Washington, D.C." },
  { id: 28, name: "Brian Carter", age: 36, role: "Solutions Architect", location: "Baltimore" },
  { id: 29, name: "Catherine Bell", age: 29, role: "Mobile App Developer", location: "Austin" },
  { id: 30, name: "Daniel Craig", age: 34, role: "AI Engineer", location: "Pittsburgh" },
  { id: 31, name: "Ella Fitzgerald", age: 28, role: "Quality Assurance Engineer", location: "Cleveland" },
  { id: 32, name: "Frank Castle", age: 40, role: "Network Engineer", location: "Las Vegas" },
  { id: 33, name: "Grace Hopper", age: 31, role: "System Analyst", location: "Sacramento" },
  { id: 34, name: "Henry Cavill", age: 38, role: "Software Architect", location: "Salt Lake City" },
  { id: 35, name: "Isabel Lucas", age: 26, role: "Junior Developer", location: "Boise" },
  { id: 36, name: "Jack Ryan", age: 39, role: "Operations Manager", location: "Anchorage" },
  { id: 37, name: "Karen Gillan", age: 32, role: "Technical Lead", location: "Detroit" },
  { id: 38, name: "Leonard Hofstadter", age: 33, role: "Data Scientist", location: "Madison" },
  { id: 39, name: "Monica Geller", age: 30, role: "Database Engineer", location: "Tampa" },
  { id: 40, name: "Nathan Drake", age: 37, role: "Game Tester", location: "Raleigh" }
];
// Get the container div
 let containerEl = document.getElementById('mainContainer');

// Create the table
  let tableContainer = document.createElement('table');
  tableContainer.style.borderCollapse = "collapse";
  tableContainer.style.width = "100%";
  tableContainer.style.border = "1px solid black";
  
  // Append table to the container
  containerEl.appendChild(tableContainer);
  
  // Create the table header
  let tableHeaderContainer = document.createElement('thead');
  tableContainer.appendChild(tableHeaderContainer);
  let tableHeaders = document.createElement('tr');
  
  // Dynamically populate the headers from the keys of the first object
  let largestLength = 0
  let keyOfHeaders = []

  function keyGenerator(){
    for (let i = 0; i < tableData.length; i++) {
      //console.log(Object.keys(tableData[i]).length)
       if(largestLength < Object.keys(tableData[i]).length ){
        largestLength = Object.keys(tableData[i]).length 
       }
    }
    for (let i = 0; i < tableData.length; i++) {
      if(largestLength === Object.keys(tableData[i]).length ){
        keyOfHeaders.push(Object.keys(tableData[i]))
      }
      
    }
    keyOfHeaders = keyOfHeaders.flat(1)
    keyOfHeaders.push('Delete')
   keyOfHeaders.push('Edit')
   keyOfHeaders.push('Upload')
  
   
    keyOfHeaders.forEach((key) => {
      let th = document.createElement('th');
      th.textContent = key[0].toUpperCase() + key.slice(1); // Capitalize key
      th.style.border = "1px solid black";
      th.style.padding = "8px";
      th.style.backgroundColor = "#f2f2f2";
      tableHeaders.appendChild(th);
    });
    tableHeaderContainer.appendChild(tableHeaders);
  }
  keyGenerator()
  let btn = null
  const itemsPerPage = 10 
  let currentPage = 1;  
  let tableBodyContainer = document.createElement('tbody');// Create the table body
  tableContainer.appendChild(tableBodyContainer);
  // Populate table rows with data
function addColumn(row,index,idVal){
  let tableRow = document.createElement('tr');
  keyOfHeaders.forEach((value) => {
    
    let td = document.createElement('td');
    
    
    if(value === `Edit`){
       td.innerHTML = '<button onclick="editData(this)">Edit</button>'
        tableRow.appendChild(td);
        //console.log(btn.id)
    }else if(value === `Delete`){
      td.innerHTML = '<button onclick="DeleteData(this)">Delete</button>'
      tableRow.appendChild(td);
    }else if(row[value] === undefined){
      td.textContent = 'No Data';
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tableRow.appendChild(td);
    } else if(value === 'id'){
      td.textContent = idVal+index+1;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tableRow.appendChild(td);
    }else{
      td.textContent = row[value];
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tableRow.appendChild(td);
    }
});
tableBodyContainer.appendChild(tableRow);
}
  
function editData(event){
    let btn = event
    var entireRow = btn.parentElement.parentElement //e
    //console.log(event.target.textContent) //Which element triggered data
    var columnItems = entireRow.getElementsByTagName('td')
    
    let lenOfColumns = columnItems.length 

    for(let i=0; i<lenOfColumns; i++){
      console.log(columnItems[i].firstChild.textContent)
      if(columnItems[i].firstChild.textContent === 'Edit'){  
          columnItems[i].innerHTML='<button onclick="saveData(this)">Save</button>'
      }else if(columnItems[i].firstChild.textContent === 'Delete'){
          columnItems[i].innerHTML='<button onclick="DeleteData(this)">Delete</button>'
      }else{
          console.log(columnItems[i])
          let inputEl = document.createElement('input')
          inputEl.type = 'text'
          inputEl.value = columnItems[i].textContent
          inputEl.textContent = columnItems[i].textContent 
          columnItems[i].innerHTML='';
          columnItems[i].appendChild(inputEl)
        }
      }
    }


function saveData(event){
  var entireChange = event.parentElement.parentElement
  let btn = event
  var saveColumnItems = entireChange.getElementsByTagName('td')
  console.log(typeof(saveColumnItems))

  let lenOfSaveColumn = saveColumnItems.length 
      for (i =0 ;i < saveColumnItems.length;i++) {
        if (saveColumnItems[i].firstChild.textContent === 'Save'){
          saveColumnItems[i].innerHTML = ''
          saveColumnItems[i].innerHTML='<button onclick="editData(this)">Edit</button>'     
      }else if(saveColumnItems[i].firstChild.textContent === 'Delete'){
        saveColumnItems[i].innerHTML=''
        saveColumnItems[i].innerHTML='<button onclick="DeleteData(this)">Delete</button>';
        
      }else{
        console.log(typeof(saveColumnItems[i].value))
        let response = saveColumnItems[i].firstChild.value
        saveColumnItems[i].innerHTML='';
        saveColumnItems[i].textContent= response;
      }
    }
}


function DeleteData(event){
  var entireTable = event.parentElement.parentElement.parentElement
    // console.log(entireTable)
    let eventEl = event.target 

    
    var trItems = document.getElementsByTagName('tr')
    
    var lengthOfRows = trItems.length
    var entireDeleteRow = event.parentElement.parentElement
     console.log(entireDeleteRow)
    tableBodyContainer.removeChild(entireDeleteRow)

  
    let filteredData = null
    for (let i = 1; i< lengthOfRows; i++) {
        let idNo = entireDeleteRow.firstChild.textContent
        idNo = parseInt(idNo)
         //console.log(tableData.length) 
        filteredData = tableData.filter((eachItem) =>{
            return eachItem.id !== idNo
        })
        tableData = filteredData
        renderPagination(tableData);  
    }
    //console.log(filteredData.length)
    //console.log(filteredData); 
}

//pagination --------------------------------------- 
  function renderData(page,pageCount){
    
    let idVal = pageCount;
    console.log(pageCount)
    let id = 0
    const startIndex = (page-1) * itemsPerPage //(0-1) * 10 = 0
    const endIndex = startIndex + itemsPerPage  // 0+10 = 10 items perpage
    const paginatedData = tableData.slice(startIndex,endIndex)
    
    paginatedData.forEach((row,index) => {
      addColumn(row,index,idVal)
    });
  } 

  
const paginationContainer = document.createElement("div");
let pageCount = 0
function renderPagination(){
  paginationContainer.innerHTML = ''
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  console.log(`total pages = ${tableData.length}`)
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("button");
    pageItem.textContent = `next ${i}`;
    pageItem.style.backgroundColor= 'Grey';
    pageItem.style.color= 'white';
    pageItem.style.border= 'none';
    pageItem.style.padding= '8px';
    pageItem.style.margin= '6px';
    
    if (i === currentPage) {
      pageItem.style.backgroundColor = 'blue'
      pageItem.style.color= 'white';
    pageItem.style.border= 'none';
    pageItem.style.padding= '8px';
    pageItem.style.margin= '6px';
    }

   
    pageItem.addEventListener("click", () => {
      
      if(i === 1){
        pageCount = 0
      }else if(i === 2){
        pageCount = 10 
      }else if(i === 3){
        pageCount = 20
      }else if(i === 4){
        pageCount = 30
      }

      console.log(i)
      currentPage = i;
      tableBodyContainer.innerHTML = ''
      renderData(currentPage,pageCount);
      renderPagination();
    });

    paginationContainer.appendChild(pageItem);
    
  }

  

}
containerEl.appendChild(paginationContainer)
 
renderData(currentPage,0);
renderPagination();

  //Changing Btn


