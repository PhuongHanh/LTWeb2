import React, { Component } from 'react';
import axios from 'axios';
import HeaderNotImage from './header-not-image';
import Producter from './producter';
import Footer from './footer';
import $ from 'jquery';
class pageDaugia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            producter: [], ten_hienthi: "",
            daugiacuatoi: [],
            seconds: 0,
            dauthang: [],
            dauthua: [],
            nguoidung:0,
        };
    }
    scriptHieuungBtn() {
        $("#btn_hientai").click(function () {
            $(".daugiacuatui_table").show();
            $(".daugiadathang_table").hide();
            $(".daugiathua_table").hide();
        });

        $("#btn_dathang").click(function () {
            $(".daugiadathang_table").show();
            $(".daugiacuatui_table").hide();
            $(".daugiathua_table").hide();
        });

        $("#btn_dathua").click(function () {
            $(".daugiathua_table").show();
            $(".daugiacuatui_table").hide();
            $(".daugiadathang_table").hide();
        });
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
                    this.setState({ ten_hienthi: res.data.ten_hienthi,nguoidung:res.data.nguoidung });
                    axios.get('/serverDaugiacuatoi')
                        .then(res => {
                            this.setState({ producter: res.data.loaisp, daugiacuatoi: res.data.daugia, dauthang: res.data.dauthang, dauthua: res.data.dauthua })
                        })
                }

            })
            .catch(err => console.log("Error"));
    }
    componentDidMount() {
        this.scriptHieuungBtn();
        this.interval = setInterval(() => this.tick(), 1000);
    }

    render() {
        var elementDaugia = this.state.daugiacuatoi.map((sp, index) => {
            return <tr>
                {sp.ms_tinhtrang == 1 ?
                    <td>
                        <img src="/images/bieutuong/check.png" /></td> :
                    <td>
                        <img src="/images/bieutuong/nocheck.png" alt="Canvas Logo" /></td>
                }
                <td>

                    <span>{sp.ten_sp}</span>
                    [<a href="#">{sp.ms_phien}</a>]
                      <p>{sp.gia_hientai}K</p>
                </td>
                <td><br /><p>{sp.gia_thapnhat}K</p></td>
                <td><br />{sp.thoigian_lap}</td>
            </tr>
        });
        var elementDauthang = this.state.dauthang.map((sp, index) => {
            return <tr>
                <td>
                    <img src="/images/bieutuong/check.png" /></td>
                <td>
                    <span>{sp.ten_sp}</span>
                    [<a href="#">{sp.ms_phien}</a>]
                      <p>{sp.gia_hientai}K</p>
                </td>
                <td><br /><p>{sp.gia_thapnhat}K</p></td>
                <td><br />{sp.thoigiandau}</td>
            </tr>
        });
        var elementDauthua = this.state.dauthua.map((sp, index) => {
            return <tr>
                <td>
                    <img src="/images/bieutuong/nocheck.png" /></td>
                <td>
                    <span>{sp.ten_sp}</span>
                    [<a href="#">{sp.ms_phien}</a>]
                      <p>{sp.gia_hientai}K</p>
                </td>
                <td><br /><p>{sp.gia_thapnhat}K</p></td>
                <td><br />{sp.thoigiandau}</td>
            </tr>
        });
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
                                <div className="panel-heading daugia_panle">Đấu giá của tôi</div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="index_daugiacuatoi">
                                            <div className="daugiacuatui_btn" />
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default" id="btn_hientai">Đấu giá hiện tại</button>
                                                <button type="button" className="btn btn-default " id="btn_dathang">Đấu giá đã thắng</button>
                                                <button type="button" className="btn btn-default" id="btn_dathua">Đấu giá thua</button>
                                            </div>
                                            <div className="daugiacuatui_table ">
                                                <table className="table table-condensed">
                                                    <thead>
                                                        <tr>
                                                            <th>Trạng thái</th>
                                                            <th>Giá hiện tại của bạn</th>
                                                            <th>Giá thầu</th>
                                                            <th>Hoàn thành</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {elementDaugia}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="daugiadathang_table " hidden="true">
                                                <table className="table table-condensed">
                                                    <thead>
                                                        <tr>
                                                            <th>Trạng thái</th>
                                                            <th>Giá thắng của bạn</th>
                                                            <th>Giá thầu</th>
                                                            <th>Hoàn thành</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {elementDauthang}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="daugiathua_table " hidden="true">
                                                <table className="table table-condensed">
                                                    <thead>
                                                        <tr>
                                                            <th>Trạng thái</th>
                                                            <th>Giá thầu tối đa của bạn</th>
                                                            <th>Giá thầu</th>
                                                            <th>Hoàn thành</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {elementDauthua}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
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

export default pageDaugia;
