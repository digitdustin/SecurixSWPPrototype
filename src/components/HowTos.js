import React, { useState } from 'react'
import {
    Pagination,
    Search,
    ClickableTile,
    Column,
    Grid,
    Row
}from 'carbon-components-react'

import "../assets/css/HowTos.css"

const HowTos = () => {
    const tileData = [
        {
            id: 1,
            header: "Share a screen on Zoom"
        },
        {
            id: 2,
            header: "Add a new user"
        },
        {
            id: 3,
            header: "Request local administrator rights"
        },
        {
            id: 4,
            header: "Find the How-To page"
        },
        {
            id: 5,
            header: "Download new software patches"
        },
        {
            id: 6,
            header: "Submit a new form"
        },
        {
            id: 7,
            header: "Call the help desk"
        },
        {
            id: 8,
            header: "Update Software"
        },
        {
            id: 9,
            header: "Approve a form in SWIS"
        },
        {
            id: 10,
            header: "Bake a cake"
        },
        {
            id: 11,
            header: "Download a form"
        },
        {
            id: 12,
            header: "Change Departments"
        },
        {
            id: 13,
            header: "Access the modern web portal"
        },
        {
            id: 14,
            header: "Refer an employee"
        }
    ];

    const [searchTile, setSearchTile] = useState('')
    const [currentHowTos, setCurrentHowTos] = useState(tileData.slice(0, 9))

    return(
        <div className="bx--grid" style={{height: 'calc(100vh - 30px)', paddingTop: 20, paddingBottom: 80, overflow: 'scroll'}}>
             <div className="bx--row">
                <section className="bx--offset-lg-3 bx--col-lg-13">
                    <h1 style={{marginBottom: 10}}>How-Tos</h1>
                    <p style={{marginBottom: 20}}>Click on a How-To to open it in a new tab.</p>
                    <Search 
                        placeholder="Search" 
                        onChange={e => {setSearchTile(e.target.value)}}
                    />
                    <Grid>
                        <Row>
                    
                            {currentHowTos.slice({currentHowTos}).filter((val) => {
                                if(searchTile == "" || searchTile == null) {
                                    return val
                                } else if (val.header.toLowerCase().includes(searchTile.toLowerCase())){
                                    return val
                                } 
                            }).map((type, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <Column xlg={4} lg={4} md={4}>
                                            <div className="container">
                                                    <h2 className="tile_header">
                                                        <ClickableTile className="tile" target="_blank" rel="noopener noreferer"
                                                         href="https://yt3.ggpht.com/ytc/AKedOLT2y4hkt_FsZMoIkho6Vn8jFfGacOYxi2XkvuXL=s900-c-k-c0x00ffffff-no-rj">
                                                            {type.header}
                                                        </ClickableTile>
                                                    </h2>  
                                            </div>                               
                                        </Column>
                                    </React.Fragment>
                                )
                            })}
                        </Row>
                    </Grid>
                </section>
            </div>
            <Pagination style={{paddingLeft: "300px", paddingTop: "20px", width: "100%"}}
                page={1}
                pageSizeInputDisabled
                pageSize={9}
                pageSizes = {[9, 18, 27]}
                totalItems = {14}
                onChange = {(e) => {setCurrentHowTos(tileData.slice((e.page - 1) * 9, e.page * 9))}}
            />
            
        </div>
    );
}
export default HowTos;