import React,{Component} from 'react';
import {Card,CardTitle,CardBody,CardImg,CardText,Breadcrumb,BreadcrumbItem,
      Button,Modal,ModalHeader,ModalBody,Label,Row,Col} from 'reactstrap';
      import { Control, LocalForm, Errors } from 'react-redux-form';
import {Link} from 'react-router-dom';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{

          constructor(props){
            super(props);
            this.state={

                isModalOpen:false
            }

          this.toggleModal=this.toggleModal.bind(this);

          }

          toggleModal(){
                this.setState({
                  isModalOpen:!this.state.isModalOpen
                })
          }

          handleSubmit(values){

            this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
            this.toggleModal();

          }


render()
{
    return(
      <>
      <Button outline onClick={this.toggleModal}>
                <span className="fa fa-edit fa-lg"></span>Submit Comment
      </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
             <ModalBody>
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>

                              <Col md={{size:10}}>
                              <Control.select model=".rating" name="rating"
                                     className="form-control">
                                     <option>1</option>
                                     <option>2</option>
                                     <option>3</option>
                                     <option>4</option>
                                     <option>5</option>
                                 </Control.select>
                              </Col>
                       </Row>
                        <Row className="form-group">
                                  <Label htmlFor="name" md={12}>Your Name</Label>



                                  <Col md={10}>
                                      <Control.text model=".author" id="firstname" name="firstname"
                                          placeholder="Your Name"
                                          className="form-control"
                                          validators={{
                                              minLength: minLength(3), maxLength: maxLength(15)
                                          }}
                                           />
                                           <Errors
                                               className="text-danger"
                                               model=".name"
                                               show="touched"
                                               messages={{
                                                   minLength: 'Must be greater than 2 characters',
                                                   maxLength: 'Must be 15 characters or less'
                                               }}
                                            />

                                  </Col>
                              </Row>

                              <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={10}>
                                      <Control.textarea model=".comment" name="comment" id="comment" rows="6" className="form-control"
                                     />
                                </Col>
                            </Row>

                        <Button type="submit" value="submit" color="primary">Submit Comment</Button>
                  </LocalForm>
             </ModalBody>
        </Modal>
        </>

    );
}



}

  function RenderComment({comments,addComment,dishId})
  {

    if (comments != null) {
         return (
           <div>
             <h4>Comments</h4>
               {comments.map(comment => (

                       <ul key={comment.id} className="list-unstyled">
                      <li className="comment">{comment.comment}</li>
                      <li className="author">--{comment.author},{comment.date}</li>
                      </ul>

               ))}
             <CommentForm dishId={dishId} addComment={addComment}/>
           </div>
         );
    }
    else return <div />;
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
                  <RenderComment comments={props.comments}
                    addComment={props.addComment}
                    dishId={props.dish.id}/>

          </div>
    </div>
</div>
        );

  }
export default DishDetail;
