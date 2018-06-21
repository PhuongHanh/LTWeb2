import React, { Component } from 'react';
import axios from 'axios';
import Clock from './clock';
import Header from './header';
import Producter from './producter';
import Footer from './footer';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      producter: [],
      ten_hienthi: "",
      sp_luot: [],
      sp_gia:[],
      sp_thoigian:[],
      nguoidung: 0,
      seconds: 0,
    };
  }
  tick() 
  {
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
          axios.get('/home/')
            .then(res => {
              this.setState({ sp_luot: res.data.sp_luot,sp_gia:res.data.sp_gia,sp_thoigian:res.data.sp_thoigian, producter: res.data.loaisp })
            })
        }
      })
      .catch(err => console.log("Error"));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(),3000);
  }
  render() {
    var elements_luot = this.state.sp_luot.map((sp, index) => {
      return <div className="col-sm-6 col-md-3 sanpham" key={index}>
        <div className="thumbnail">
          <img src={"/images/sanpham/" + sp.hinhanh + ".jpg"} key={index} alt="Generic placeholder thumbnail" />
        </div>
        <div className="caption">
          <p><span className="thoigian"><Clock deadLine={sp.thoigiandau} masp={sp.mssp} /></span>
            <span className="giatien">{sp.gia_hientai}K</span>
          </p>
          <p>
            <a href={"/Detail/phien=" + sp.ms_phien + "/id=" + sp.mssp} className="btn" role="button">Đấu giá ngay</a>
          </p>
        </div>
      </div>
    });

    var elements_gia = this.state.sp_gia.map((sp, index) => {
      return <div className="col-sm-6 col-md-3 sanpham" key={index}>
        <div className="thumbnail">
          <img src={"/images/sanpham/" + sp.hinhanh + ".jpg"} key={index} alt="Generic placeholder thumbnail" />
        </div>
        <div className="caption">
          <p><span className="thoigian"><Clock deadLine={sp.thoigiandau} masp={sp.mssp} /></span>
            <span className="giatien">{sp.gia_hientai}K</span>
          </p>
          <p>
            <a href={"/Detail/phien=" + sp.ms_phien + "/id=" + sp.mssp} className="btn" role="button">Đấu giá ngay</a>
          </p>
        </div>
      </div>
    });

    var elements_thoigian = this.state.sp_thoigian.map((sp, index) => {
      return <div className="col-sm-6 col-md-3 sanpham" key={index}>
        <div className="thumbnail">
          <img src={"/images/sanpham/" + sp.hinhanh + ".jpg"} key={index} alt="Generic placeholder thumbnail" />
        </div>
        <div className="caption">
          <p><span className="thoigian"><Clock deadLine={sp.thoigiandau} masp={sp.mssp} /></span>
            <span className="giatien">{sp.gia_hientai}K</span>
          </p>
          <p>
            <a href={"/Detail/phien=" + sp.ms_phien + "/id=" + sp.mssp} className="btn" role="button">Đấu giá ngay</a>
          </p>
        </div>
      </div>
    });
    return (

      <div >
        <div>
          {/* Header */}
          <Header ten_hienthi={this.state.ten_hienthi} nguoidung={this.state.nguoidung} />
          {/* end Header*/}
          <div className="row producter_index">
            {/* producter */}
            <Producter loaisp={this.state.producter} />
            {/* end producter */}
            {/* noi dung */}
            <div className="col-md-9" id="content">
              <div className="panel panel-default">
                <div className="panel-heading daugia_panle">TRANG CHỦ</div>
                <div className="panel-body">
                  <div className="row">
                  {/* Top 5 sản phẩm có lượt đấu nhiều nhất */}
                    <div className="top5">
                      <div className="daugia_top">TOP 5 sản phẩm có nhiều lượt ra giá nhất</div>
                      {elements_luot}
                    </div>
                    {/* Top 5 sản phẩm có giá đấu hiện tại cao nhất */}
                    <div className="top5">
                      <div className="daugia_top">TOP 5 sản phẩm có giá đấu cao nhất</div>
                      {elements_gia}
                    </div>
                    {/* Top 5 sản phẩm có thời gian gần kết thúc */}
                    <div className="top5">
                      <div className="daugia_top">TOP 5 sản phẩm có thời gian gần kết thúc</div>
                      {elements_thoigian}
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

export default Home;
