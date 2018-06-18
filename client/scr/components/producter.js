import React, { Component } from 'react';
class Producter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var elements=this.props.loaisp.map((temp,index)=>{
            return <a href={"/Product/"+temp.mlsp} className="list-group-item" key={index}>{temp.ten_loai}</a>
        })
        return (
            <div className="col-md-3">
            <div className="list-group producter">
            <a href="#" className="list-group-item disabled daugia_panle">DANH MỤC</a>
            {elements}
            </div>
          </div>
        );
    }
}
export default Producter;
