import React,{Component} from 'react';
import {Card,CardTitle,CardBody,CardImgOverlay,CardImg,CardText} from 'reactstrap';

class DishDetail extends Component{


  renderComment(selected)
  {

    if(selected!=null)
    {

   return selected.comments.map((com)=>{
      return(
          
          <ul key={com.id} className="list-unstyled">
            <li className="comment">{com.comment}</li>
            <li className="author">--{com.author},{com.date}</li>
          </ul>

      );

    }
  );

}
    else {
      return(
      <div></div>
    );
    }



  }
  renderDish(selected)
  {
      if(selected!=null)
      {
        return(


          <Card>
            <CardBody>
              <CardImg width="100%" src={selected.image} alt={selected.name}/>
              <CardTitle>{selected.name}</CardTitle>
              <CardText>{selected.description}</CardText>
            </CardBody>
              </Card>
        );

      }
      else {
        return(
        <div></div>
      );
      }



  }

  render()
  {
        return(

          <div className="row">
              <div className="col-md-4 m-1">
            {this.renderDish(this.props.select)}
            </div>
              <div className="col-md-4 m-1">
              <h4>Comments</h4>
            {this.renderComment(this.props.select)}
              </div>
          </div>
        );

  }


}

export default DishDetail;
