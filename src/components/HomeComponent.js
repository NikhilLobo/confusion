import React from 'react';
import {Card, CardImg,CardTitle,CardText,CardSubtitle,CardBody} from 'reactstrap';
import {Loading} from './LoadingComponent';

function RenderCard({item,isLoading,errMess}){

        return (<Card>
              <CardBody>
              <CardImg src={item.image} alt={item.name} />
                  <CardTitle>{item.name}</CardTitle>
                  {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
                  <CardText>{item.description}</CardText>
              </CardBody>
          </Card>)
}

function Home(props){
  if(props.dishesLoading){


    return(
        <Loading/>

    );
  }
  else if(props.dishesErrMess){

    return(

        <h4> {props.dishesErrMess}</h4>
    );
  }
  else
  {
      return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
      );
}
}
export default Home;
