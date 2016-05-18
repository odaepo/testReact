var React = require('react');
var ReactDOM = require('react-dom');
var Modulo = require('./modulo');

//var ReactFire = require('reactfire');
//var Header = require('./header');
//var List = require('./list');





var startWithTables=['TA','TB','TC'];

var relationsTree={};

relationsTree= {
    'TA':{
        'data':'...stuff TA ...',
        'related': ['TD','TE','TF']
    },
    'TB':{
        'data':'...stuff TB ...',
        'related': ['TG','TH']
    }
    ,
    'TC':{
        'data':'...stuff C ...',
        'related': {}
    },
    'TD':{
        'data':'...stuff TD ...',
        'related': ['TI','TL']
    },
    'TE':{
        'data':'...stuff TE ...',
        'related': ['TM']
    },
    'TF':{
        'data':'...stuff TF ...',
        'related': []
    },
    'TG':{
        'data':'...stuff TG ...',
        'related': []
    },
    'TH':{
        'data':'...stuff TH ...',
        'related': []
    },
    'TI':{
        'data':'...stuff TI ...',
        'related': ['TN']
    },
    'TL':{
        'data':'...stuff TL ...',
        'related': []
    },
    'TM':{
        'data':'...stuff TM ...',
        'related': []
    },
    'TN':{
        'data':'...stuff TN ...',
        'related': ['TA']
    }
};





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











 