import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                            <li><a href="#"><span className="glyphicon glyphicon-shopping-cart" />Giỏ hàng</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-leaf" />Đấu giá</a></li>
                        </ul>
                        <form className="navbar-form navbar-left" action="/action_page.php">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
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
                {/* ImageHader index */}
                <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{ marginTop: '-20px' }}>
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner daugia_header">
                        <div className="item active">
                            <img src="/images/header/header(1).jpg" alt="Los Angeles" />
                        </div>
                        <div className="item ">
                            <img src="/images/header/header(2).jpg" alt="Chicago" />
                        </div>
                        <div className="item">
                            <img src="images/header/header(3).jpg" alt="New york" />
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
