import './App.css'
import { ItemsProvider } from './contexts/ItemsContext'
import { SearchProvider } from './contexts/SearchContext'
import Items from './list/items'
import List from './list/List'

function App() {

  return (
    <div className="App">
      <SearchProvider>
          <ItemsProvider>
           <List/> 
          </ItemsProvider>
       </SearchProvider>
    </div>
  )
}

export default App
