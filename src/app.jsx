var React = require('react');
var ReactDOM = require('react-dom');
var Modulo = require('./modulo');

//var ReactFire = require('reactfire');
//var Header = require('./header');
//var List = require('./list');

var mainInfoTree=[3,4,5];

var Hello = React.createClass({
    getInitialState: function() {
        return{
            items:{},
            loaded:false
        }
    },
    componentWillMount:function(){
    },
  render: function() {
      console.log(this.state);
    return <div className="row panel panel-default">

         <Modulo nodo={3} infoTree={mainInfoTree} />

        <button > Click here to get data </button>


      </div>

  }
});



var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
