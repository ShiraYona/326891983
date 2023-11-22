import { useState , useEffect} from "react"
import { Calendar } from "primereact/calendar";
import { Fieldset } from 'primereact/fieldset';


const Calender = ()=>{

    const[startDate, setStartDate] = useState(new Date())
    const[endDate, setEndDate] = useState(new Date())
    const[showData, setShowData] = useState([])
    const[whatToShow, setWhatToShow] = useState(false)
    
    

    const getData = ()=>{
          
          fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&ss=on&mod=on&lg=he&s=on&start=${startDate}&end=${endDate}`)/*, requestOptions)*/
            .then(response => response.json())
            .then(result => setShowData(result))
            .catch(error => console.log('error', error));
            console.log(showData)
           setWhatToShow(true)
    }

    const getParasha = ()=>{
          
        fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&ss=on&mod=on&lg=he&s=on&start=${startDate}&end=${endDate}`)/*, requestOptions)*/
          .then(response => response.json())
          .then(result => setShowData(result))
          .catch(error => console.log('error', error));
          console.log(showData)
          setWhatToShow(false)
  }
    return(
        <>
        
        {/* <Calendar value={startDate} onChange={(e) => setStartDate(e.value)}></Calendar>
        <Calendar value={endDate} onChange={(e) => setEndDate(e.value)}></Calendar> */}
        <input placeholder="הכנס תאריך התחלה" onChange={(v)=>{setStartDate(v.target.value)}}></input>
        <input placeholder="הכנס תאריך סיום" onChange={(v)=>{setEndDate(v.target.value)}}></input>
        
        <button onClick={()=>getData()}>הצג הכל</button>
        <button onClick={()=>getParasha()}>הצג פרשות שבוע בלבד</button>
        {showData?.map((item) => {
          if(whatToShow == true)
              return (
                <Fieldset>
                <div key={item.start}>
                <div>{ item.title }</div>
                <div>{ item.description }</div>
                <div>{ item.start}</div>
                
                </div></Fieldset>
              );
              else
              if(item.className == "parashat")
            return (
              <Fieldset>
              <div key={item.start}>
              <div>{item.title}</div>
              <div>{ item.description }</div>
              <div>{ item.start}</div>
              </div>
              </Fieldset>
            );
            })}
    </>)
}
export default Calender
// style={{height:"200px", width:"200px", borderColor:"black", borderWidth:"10px"}}