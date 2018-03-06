import React, {Component} from 'react';
import {RaisedButton, Snackbar} from "material-ui";
import {connect} from "react-redux";
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'kauxupbc';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dwkkf6qmg/image/upload';

export class CardDishCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        url: "",
      },
      open: false,
      dis: false,
      pending: true,
      uploadedFileCloudinaryUrl: ""
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
        let data = this.state.data;
        data.url = response.body.secure_url;
        this.setState({data: data});
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    this.props.submit(data.name, data.url)
      .then(this.handleSuccess)
  };


  handleSuccess = () => {
    this.setState({open: true, dis: true, uploadedFileCloudinaryUrl: ""})
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
      dis: false,
      data: {
        name: "",
        url: ""
      }
    })
  };

  handleChangeName = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.name = e.target.value;
    this.setState({data: data});
  };
  handleChangeUrl = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.url = e.target.value;
    this.setState({data: data});
  };


  render() {
    console.log(this.state.data)
    return (
      <div className="col-md-12 margin-top">
        <div className={"card undefined"}>
          <div className="header">
            <h4 className="title">Создать меню</h4>
          </div>
          <div className={"content undefined"}>
            <form className="" onSubmit={this.handleSubmit}>
              <div className="col-md-6">
                <span>Название меню</span>
                <input type="username" className="form-control"
                       onChange={this.handleChangeName}
                       value={this.state.data.name}
                       disabled={this.state.dis}
                />
              </div>
              <div className="col-md-12">
                <div className="col-md-4">
                  <Dropzone
                    multiple={true}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <p>Нажмите для загрузки фото</p>
                  </Dropzone>
                </div>
                <div className="col-md-4">
                  {this.state.uploadedFileCloudinaryUrl === '' ? null :
                    <div>
                      <p>{this.state.uploadedFile.name}</p>
                      <img src={this.state.uploadedFileCloudinaryUrl} alt=""/>
                    </div>}
                </div>
              </div>

              <div className="col-md-1 col-sm-12">
                <br/>
                <RaisedButton type="submit" label={!this.state.dis ? "Добавить" : "Добавлено"} primary={true}
                              disabled={this.state.dis}/>
              </div>
            </form>

            <Snackbar
              open={this.state.open}
              message="Меню было создано"
              autoHideDuration={2000}
              onRequestClose={this.handleRequestClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  type_dishes: state.type_dishes
});

export default connect(mapStateToProps)(CardDishCreate);
