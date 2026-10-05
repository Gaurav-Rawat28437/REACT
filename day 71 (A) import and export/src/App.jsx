import { useState } from 'react'

// import single function
import Demo from './component/demo'

// import multiple function
import ExportFile4, { ExportFile1,ExportFile2,ExportFile3 as ExpFileThird} from "./component/multiple_export"

function App() {
  
  
  return (
    <>
      <Demo/>
      <ExportFile1/>
      <ExportFile2/>
      <ExpFileThird/>9
      <ExportFile4/>
      
    </>
  )
}

export default App
