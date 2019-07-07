import React from 'react';
import './App.css';
import ThemeContext, {themes} from './ThemeContext';
import {Toolbar} from './Toolbar';
import {Counter} from './Counter';
import {H3} from './H3';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.getItem('theme') || 'dark'
    }
  } 
  
  changeTheme() {
    let newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    this.setState({ theme: newTheme });
  }

  refresh() {
    window.location.reload();
  }
  render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <ThemeContext.Consumer>
          {(themeContext) => (
              <div className="App">
                <header className="App-header" style={{
                  backgroundColor: themeContext.backgroundColor
                }}>
                  <H3 title="ThemeProvider"/>
                  <Toolbar 
                    onClickChangeTheme={() => this.changeTheme() }
                    onClickRefresh={() => this.refresh() }
                  />
                  <Counter/>
                </header>
              </div>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    );
  }
}

export default App;
