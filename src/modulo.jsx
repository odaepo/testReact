var React= require('react');

var Modulo = React.createClass({
    getInitialState: function () {
        return {
            text : 'stato iniziale'
        }
    },


    render: function() {
        this.props.infoTree.push(4);
        return <div className="input-group">
            <table className="modulo">
                <tbody>
                <tr>
                    <td >
                        [SELECT]
                    </td>
                    <td rowSpan="3">
                        modulo

                        {this.props.infoTree}
                    </td>
                </tr>
                <tr>
                    <td>
                        [CAMPI CON FLAG]
                        {this.props.nodo}
                    </td>
                </tr>
                <tr>
                    <td>
                        [VINCOLI]
                    </td>
                </tr>
                </tbody>
                </table>


        </div>
    }
});

module.exports= Modulo;
