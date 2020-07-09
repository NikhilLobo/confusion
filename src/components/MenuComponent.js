import React,{Component} from 'react';
import {Card,CardTitle,CardImg,CardImgOverlay,CardBody,CardText} from 'reactstrap'


class Menu extends Component{

  constructor(props)
  {
    super(props);


  }

  render()
  {
    const menu=this.props.dishes.map((dish)=>{

      return(
            <div key={dish.id} className="col-md-4 m-1">
              <Card onClick={()=>this.props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
       );

    }
  );
    return(
      <div clasName="container">
        <div className="row">
            {menu}
        </div>
      </div>
    );

  }
}

export default Menu;
