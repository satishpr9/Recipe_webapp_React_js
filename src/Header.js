import React from "react";


export default function Header(props) {

    const {search,onInputChange,onSearchClick}=props;


    return (
        <div>
            <div className="jumbotron" style={{ height: 400, backgroundColor: 'red' }}>
            <br/>
                <h1 style={{ textAlign: 'center', color: 'white' }} className="display-1">
                    <span class="material-icons " style={{fontSize:85}}>
                        fastfood
                    </span>
                    Food Recipe
                </h1>
                <div class="input-group w-50 mx-auto">
                    <input type="text" class="form-control"  value={search} placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{fontSize:25}} 
                        onChange={onInputChange}
                    />
                    <div class="input-group-append">
                       <button className="btn btn-dark" onClick={onSearchClick} style={{fontSize:25}}>search</button>
                    </div>
                </div>
            </div>
        </div>

    )
}