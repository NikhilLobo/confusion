import React,{Component} from 'react';
import {Card,CardTitle,CardBody,CardImgOverlay,CardImg,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


  function RenderComment({dish})
  {

    if(dish!=null)
    {

   return dish.map((com)=>{
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
  function RenderDish({dish})
  {

      if(dish!=null)
      {

        return(


          <Card>
            <CardBody>
              <CardImg width="100%" src={dish.image} alt={dish.name}/>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
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

  const DishDetail=(props)=>{

        return(

<div className="container">
              <div className="row">
                <Breadcrumb>
                  <BreadcrumbItem>  <Link to="/menu"> Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 ">
                  <h3>{props.dish.name}</h3>
                  <hr/>
                </div>
              </div>
              <div className="row">
                  <div className="col-md-4 m-1">
                  <RenderDish dish={props.dish}/>

                </div>
                  <div className="col-md-4 m-1">
                  <h4>Comments</h4>
                  <RenderComment dish={props.comments}/>
                  </div>
              </div>
</div>
        );

  }
export default DishDetail;
