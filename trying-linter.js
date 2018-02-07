import React from "react"; // ok
import PropTypes from "prop-types"; // ok
import "./index.scss"; // ok

class TryingLinter extends React.Component {

  static propTypes = {
    prop1: PropTypes.number,
    prop2: PropTypes.number
  }

  allGood = (par) => {
    if (par) { return; }
    var result = this.props.prop1 + this.props.prop2;
    return result;
  }

  testLinter = () => {
    //space after double slash required // test space after double quotes required
    /* same thing here, add space after * and at the end*/
    const noSingleQuote = 'No single quote'; // test no single quote
    const missingSemiColon = "missingSemiColon" // test no missing semicolon
    let neverUsed = "neverused"; // test no never used variables
    let no_non_camel_cased = "No non_camel_cased";
    // Avoid too much of empty lines:




    const messy1 =()=> {console.log("no messy");}
    const messy2 = { a: "b", c:"d"}
    messy1()
    console.log("avoid abusing console", messy1);
    console.warn("console.warn is ok", no_non_camel_cased);
    console.error("console.error is ok");

    const wrongIdentation = () => {
        alert("extra identation");
    alert("less identation");
    };
    wrongIdentation();


    notDefinedVariable;

    // Trailing spaces, line below:

    return;
  }

  // Testing jsx allowed:
  render = () => {
    return (
      <div>
        {/* empty tags should be self-closed: */}
        <div className="sample-class" style={{height: "28px"}}></div>
        <span className='sample-class'>Sample Text</span>
      </div>);
  }
}

export default TryingLinter;
