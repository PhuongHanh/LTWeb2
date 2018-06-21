import React, { Component } from 'react';
class HeaderNotImage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let elementQuanly;
        if(this.props.nguoidung==1)
        {
        elementQuanly=(
         <li><a href="/Quanly"><span class="glyphicon glyphicon-th-list"></span>Quản lý</a></li>
        )}
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid" id="header">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                <span className="w3-tag w3-jumbo w3-red">T</span>
                                <span className="w3-tag w3-jumbo">E</span>
                                <span className="w3-tag w3-jumbo w3-yellow">A</span>
                                <span className="w3-tag w3-jumbo">M</span>
                            </a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><a href="/Giohang"><span className="glyphicon glyphicon-shopping-cart" />Giỏ hàng</a></li>
                            <li><a href="/Daugiacuatoi"><span className="glyphicon glyphicon-leaf" />Đấu giá</a></li>
                        </ul>
                        <form className="navbar-form navbar-left" action="/action_page.php">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default" id="btn_submit"><span className='glyphicon glyphicon-search'></span></button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            {elementQuanly}
                            <li>
                                <a className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user" /><span id="ten_hienthi">HI! {this.props.ten_hienthi}</span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Cá nhân</a></li>
                                    <li><a href="#">Đơn hàng</a></li>
                                    <li><a href="/logout/">Đăng xuất</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderNotImage;
