import React, { useRef, useState } from 'react'

export const Dropdown = () => {
    const item = ['Yes','Probaly Not','May be'];
    const  [items,setItems] = useState(['Yes','Probaly Not','May be']);
    const currentValue = useRef();
    const list = useRef();

    function showList(){
        list.current.style.display = 'block';
    }
    function hideList(){
        list.current.style.display = 'none'
    }

      const handleListItemHover = (event) => {
    event.target.style.backgroundColor = 'blue';
  };

  const handleListItemLeave = (event) => {
    event.target.style.backgroundColor = '#fff';
  };

  function handleListItemClick(event) {
  let { textContent } = event.target;
  let remItems = item.filter((val) => val !== textContent);
  console.log(remItems);
  setItems(remItems);
  currentValue.current.textContent = textContent;
  list.current.style.display = 'none';
} 

  return (<>
  <div style={styles.main}>
      <h3>Should you use a Dropdown ? </h3>
    <div  onMouseEnter={showList} onMouseLeave={hideList} >
        <p style={styles.dropdownStyle} ref={currentValue}>--Select--</p> 
    <div ref={list} style={styles.listItems}>
        {items.map((val,idx) => (
            <p style={styles.listItem} onClick={handleListItemClick} onMouseEnter={handleListItemHover} onMouseLeave={handleListItemLeave} key={idx}>{val}</p>   
        )
        )}  
    </div>
    </div>
    {/* <select style={styles.main}>
     {items.map((val,idx) => <option key={idx}>{val}</option>)}    
    </select> */}
    </div>
    </>)
}


const styles = {
main:{
  margin: 'auto',
  width: '50%',
  padding: '10px',
},    
dropdownStyle : {
    border: '1px solid black',
    height: '30px',
    margin:'0',
    borderRadius: '4px',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#333',
    fontSize: '16px',
    width: '200px',
  },
listItems:{
    display:'none',
    border: '1px solid black',
    marginTop:'3px',
    borderRadius: '4px',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#333',
    fontSize: '16px',
    width: '200px',   
},
listItem: {
    padding:'5px'
}  
}
