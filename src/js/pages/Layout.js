import React from "react";
import {Link} from "react-router";
export default class Layout extends React.Component{
    navigate(){
      this.props.history.pushState(null,'/');
    }
    render() {
      return (
        <div>
        <h1>Now its my page</h1>
        <Link to = "archives" class = "btn btn-danger">archives</Link>
        <Link to = "settings" class = "btn btn-success">settings</Link>
        <button onClick={this.navigate.bind(this)}>Featured</button>
        {this.props.children}
        </div>
      );
    }
}





/*
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
*/
