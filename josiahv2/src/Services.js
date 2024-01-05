import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="page-header">

            <h1 class=".text-primary">Services</h1>
          </div>

          <div class="media custom-group">
            <div class="media-left">
              <img src="./images/Darthvader2.png" className="media-object custom-img" alt="something" ></img>
            </div>
            <div class="media-body">
              <h4 class="media-heading">House Wash</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat labore ducimus quasi inventore
                error reprehenderit quas explicabo aliquid, unde ipsa atque eveniet officia. Veritatis tempora enim
                praesentium exercitationem veniam?</p>
            </div>
          </div>

          <div class="media custom-group">
            <div class="media-left">
              <img src="./images/Darthvader2.png" className="media-object custom-img" alt="something" ></img>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Concrete Wash</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat labore ducimus quasi inventore
                error reprehenderit quas explicabo aliquid, unde ipsa atque eveniet officia. Veritatis tempora enim
                praesentium exercitationem veniam?</p>
            </div>
          </div>


        </div>


      </>
    );
  }
}

export default Services;