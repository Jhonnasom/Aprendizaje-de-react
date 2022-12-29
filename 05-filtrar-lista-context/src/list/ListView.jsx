function ListView({elements,funcFilterItems}){
    return(
        <div>
            <SearchInput/>
            <ul>
            {
                elements.map((nombre,index)=>nombre &&<li key={index}> {nombre}</li>)
            }
            </ul>
        </div>
    );
}

export default ListView;