import React, { Component } from 'react';
import axios from 'axios';
import HeaderNotImage from './header-not-image';
import Producter from './producter';
import Footer from './footer';
import $ from 'jquery';
class pageShoppingcart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            producter: [], 
            ten_hienthi: "",
            seconds: 0,
            giohang:[],
        };
    }
    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
        axios.get('/users/login')
            .then(res => {
                if (!res.data.id) {
                    window.location.href = "/login";
                }
                if (res.data.id) {
                    this.setState({ ten_hienthi: res.data.ten_hienthi, nguoidung: res.data.nguoidung });
                    axios.get('/serverGiohang')
                        .then(res => {
                            this.setState({ producter: res.data.loaisp,giohang:res.data.giohang})
                        })
                }

            })
            .catch(err => console.log("Error"));
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    render() {
        var elementGiohang=this.state.giohang.map((sp,index)=>{
            return <tr key={index}>
            <td className="cart_chitiet"><img src={"/images/sanpham/"+sp.hinhanh+".jpg"} />
                {sp.ten_sp}
                <span>{sp.gia_hientai}000 .vnđ <a className="glyphicon glyphicon-remove text-danger" /></span>
            </td>
        </tr>
        })
        return (

            <div >
                <div>
                    {/* Header */}
                    <HeaderNotImage ten_hienthi={this.state.ten_hienthi} nguoidung={this.state.nguoidung} />
                    {/* end Header*/}
                    <div className="row producter_index">
                        {/* producter */}
                        <Producter loaisp={this.state.producter} />
                        {/* end producter */}
                        {/* noi dung */}
                        <div className="col-md-9" id="content">
                            <div className="panel panel-default">
                                <div className="panel-heading daugia_panle">GIỎ HÀNG</div>
                                <div className="panel-body">
                                    <h2>Giỏ hàng đang chờ thanh toán</h2>
                                    <div className="col-md-8">
                                        <table className="table cart_table">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Sản phẩm
                  <div className="cart_tungsp">Giá/Từng phần</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {elementGiohang}
                                                <tr className="warning">
                                                    <td><strong>TỔNG TIỀN:</strong><span style={{ float: 'right', color: 'red', fontWeight: 'bold', fontSize: '15pt' }}>153000(đồng)</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="cart_giaohang">
                                            <span><img src="/images/icons/giaohang.png" />giao hàng 1-3 ngày | từ 29.000 ₫</span>
                                            <button className="btn btn-warning cart_thanhtoan "><span className="glyphicon glyphicon-shopping-cart" />THANH TOÁN NGAY</button>
                                        </div>
                                    </div>
                                    <div className="cart_dieukhoan">
                                        <ul>
                                            <li><strong>Điều khoản hoàn trả của Chilindo là gì?</strong></li>
                                            <li>Nếu bạn không hài lòng với kiện hàng, bạn </li>
                                            <li>có thể hoàn lại trong vòng 14 ngày</li>
                                        </ul>
                                        <ul>
                                            <li><strong>Thay đổi đơn hàng?</strong></li>
                                            <li>Gọi cho chúng tôi theo số : </li>
                                            <li>support.vn@chilindo.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end noi dung */}
                    </div>
                    {/* footer */}
                    <Footer />
                </div>
            </div>
        );
    }
}

export default pageShoppingcart;
