import React from 'react';

import Resources from './Resources';
import DinoScript from './DinoScript';
import DinoStyle from './DinoStyle';

import './Dino.css';

class ChromeDinoComponent extends React.Component {
  startDiv: HTMLDivElement | null = null;
  endDiv: HTMLDivElement | null = null;
  appendDinoScript() {
    let dinoScriptContainer = document.createElement("script");
    dinoScriptContainer.appendChild(document.createTextNode(DinoScript)); 
    if (this.startDiv) this.startDiv.appendChild(dinoScriptContainer);
  }

  appendRunnerScript() {
    let runnerScriptContainer = document.createElement("script");
    runnerScriptContainer.appendChild(document.createTextNode(`new Runner('.interstitial-wrapper');`)); 

    if (this.endDiv) this.endDiv.appendChild(runnerScriptContainer);
  }

  componentDidMount() {
    this.appendDinoScript();

    this.appendRunnerScript();
  }

    render() {
        return (
          <div ref={el => (this.startDiv = el)}>
            <style>{DinoStyle}</style>
            <div id="main-frame-error" className="interstitial-wrapper">
              <Resources />
              <div ref={el => (this.endDiv = el)}>
              </div>
            </div>
          </div>
        );
    }
}

export default ChromeDinoComponent;
