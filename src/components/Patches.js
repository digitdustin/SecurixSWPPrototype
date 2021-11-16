import MainScreen from "./MainScreen.js";
import '../assets/css/Patches.css';
import React, { useContext, useEffect, useState } from "react";
import { 
  Button, 
  ContentSwitcher, 
  Switch,
  Pagination,
  Search,
  ClickableTile,
  Column,
  Grid,
  Row,
  Modal
} from "carbon-components-react";
import FormHolder from "./FormHolder.js";
import {RoleContext, roles} from '../contexts/role-context'
import { patches } from './PatchesData'
import PatchesHolder from "./PatchesHolder.js";
import { Download20 } from "@carbon/icons-react";
import { TaskContext } from "../contexts/task-context.js";



const Patches = () => {
  const [view, setView] = useState('appview')
  const [open, setOpen] = useState(false)
  const [selectedName, setSelectedName] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('')
  const [searchTile, setSearchTile] = useState('')
  const [currentPatches, setCurrentPatches] = useState(patches.slice(0, 6))

  const {changeTask} = useContext(TaskContext);

  var arr = []
  let i = 0
  for (let patch of patches) {
      for (let v of patch.versions) {
          arr.push( patch.name === "Adobe Acrobat Pro" && patch.company === "Adobe Inc." && v.version === "3.3.3" ?
          {
              name: patch.name,
              company: patch.company,
              patch: v.download,
              version: v.version,
              download: <Download20 onClick={
                () => {
                  changeTask(2 * 4);
                  setOpen(false)
                } 
              } style={{cursor:'pointer'}}/>,
              id: i
          }
          :
          {
              name: patch.name,
              company: patch.company,
              patch: v.download,
              version: v.version,
              download: <Download20 />,
              id: i
          })
          i++
      }
  }

  return (
    <div className="bx--grid" style={{height: 'calc(100vh - 30px)', paddingTop: 50, paddingBottom: 80, overflow: 'hidden'}}>
            <div className="bx--row ">
              <div className="bx--offset-lg-2 bx--col-lg-10">
                <h1 style={{marginBottom: 10}}>
                  Patches
                </h1>
                <p style={{marginBottom: 20}}>Download the latest patches for approved software.</p>
                <div style={{backgroundColor: 'white', padding : 20, marginBottom: 20}}>
                  
                  <ContentSwitcher light style={{marginBottom: 20}} onChange={(option) => {setView(option.name)}}>
                    <Switch name="appview" text="App View"></Switch>
                    <Switch name="listview" text="List View"></Switch>
                  </ContentSwitcher>
                  {view === 'listview' ? 
                  <PatchesHolder rows={arr} />
                  :
                  <>
                    <Search 
                        placeholder="Search" 
                        onChange={e => {setSearchTile(e.target.value)}}
                    />
                    <Grid style={{marginBottom: 20}}>
                        <Row>
                    
                            {currentPatches.slice({currentPatches}).filter((val) => {
                                if(searchTile == "" || searchTile == null) {
                                    return val
                                } else if (val.name.toLowerCase().includes(searchTile.toLowerCase()) || val.company.toLowerCase().includes(searchTile.toLowerCase())){
                                    return val
                                } 
                            }).map((type, key) => {
                                return (
                                        <Column>
                                            <div className="container" style={{}}>
                                                        <ClickableTile 
                                                          className="tile" 
                                                          size='lg' 
                                                          style={{
                                                            backgroundColor: '#f4f4f4', 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            justifyContent: 'center', 
                                                            paddingTop: 30, 
                                                            paddingBottom: 30
                                                          }} 
                                                          onClick={() => {
                                                            setSelectedCompany(type.company)
                                                            setSelectedName(type.name)
                                                            setOpen(true)
                                                          }}
                                                          target="_blank">
                                                           <img src={type.logo} height={80} width={80} style={{marginBottom: 20, marginTop: 10}} />
                                                            <h4>{type.name} ({type.versions.length})</h4>
                                                            {type.company}
                                                        </ClickableTile>
                                            </div>                               
                                        </Column>
                                )
                            })}
                        </Row>
                    </Grid>
                    <Pagination
                        page={1}
                        pageSizeInputDisabled
                        pageSize={17}
                        pageSizes = {[6, 12, 18]}
                        totalItems = {14}
                        onChange = {(e) => {setCurrentPatches(patches.slice((e.page - 1) * 6, e.page * 6))}}
                    />
                  </>
                  }
                  <Modal 
                    passiveModal 
                    open={open} 
                    onRequestClose={() => setOpen(false)}
                    modalLabel={selectedCompany}
                    modalHeading={selectedName + ' Patches'}
                  >
                    {console.log("TEST IS " + selectedName)}
                    <PatchesHolder rows={arr.filter(item => item.name === selectedName)} setOpen={setOpen}/>
                  </Modal>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Patches;
