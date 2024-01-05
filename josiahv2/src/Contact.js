import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        project: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        promo: '',
        referal: '',
      },

      error: false,
      errorMessage: '',
      eventData: [],
    }
  }

  getInfo = async (e) => {
    e.preventDefault();

    let project = e.target.elements.project.value
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let email = e.target.email.value;
    let address = e.target.address.value;
    let phone = e.target.phone.value;
    let promo = e.target.promo.value;
    let referal = e.target.elements[7].value;

    this.setState({
      contact: {
        project: project,
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        phone: phone,
        promo: promo,
        referal: referal,
      },
    })

    let message =
      `Project: ${project}.
    ${firstName} ${lastName}
    ${email}
    ${address}
    ${phone}
    ${promo}
    ${referal}
    `

    console.log(message)

    // this.sendEmail(message)
  }

  // sendEmail = async (message) => {
  //   let data_file = {
  //     'key': 'MANDRIL API KEY',
  //     'message': {
  //       'from_email': 'Oliver Queen',
  //       'to': [
  //         {
  //           'email': 'bruce@batman.com,
  //           'name': 'RECIPIENT NAME(OPTIONAL)',
  //           'type': 'to'
  //         },
  //         {
  //           'email': 'clark @superman.com',
  //           'name': 'Clark Kent'
  //     'type': 'to'
  //         }
  //       ],
  //       'autotext': 'true',
  //       'subject': 'Hey guys, CAN I STILL JOIN THE JUSTICE LEAGUE ?',
  //       'html': ' EMAIL body here, and yes you can totally rock HTML content here.'
  //     }
  //   };

  //   let http_request = new XMLHttpRequest();
  //   try {
  //     // Opera 8.0+, Firefox, Chrome, Safari
  //     http_request = new XMLHttpRequest();
  //   } catch (e) {
  //     // Internet Explorer Browsers
  //     try {
  //       http_request = new ActiveXObject("Msxml2.XMLHTTP");
  //     } catch (e) {
  //       try {
  //         http_request = new ActiveXObject("Microsoft.XMLHTTP");
  //       } catch (e) {
  //         // Something went wrong
  //         alert("Your browser broke, blame it on Lex Luthor !");
  //         return false;
  //       }
  //     }
  //   }

  //   http_request.onreadystatechange = function () {
  //     if (http_request.readyState == 4) {
  //       // Javascript function JSON.parse to parse JSON data
  //       var jsonObj = JSON.parse(http_request.responseText);
  //     }
  //   }
  //   http_request.open("GET", data_file, true);
  //   http_request.send(data_file);

  // }



  render() {
    return (
      <>
        <div className="main-body">
          <h2>Request a Quote:</h2>
          <p>We'll never share your information with anyone else.</p>

          <Form onSubmit={this.getInfo}>

            <div>


              <Form.Group className="mb-3" controlId="project">
                <Form.Control as="textarea" rows={3} placeholder="Please describe your project" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Control type="text" placeholder="Phone" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="promo">
                <Form.Control type="text" placeholder="Promo Code" />
              </Form.Group>

              <Form.Select className="mb-3" controlId='referal'>
                <option>How did you hear about us?</option>
                <option value="tv">Television</option>
                <option value="radio">Radio</option>
                <option value="magazine">Magazine / Print Ad</option>
                <option value="internet">Internet Search</option>
                <option value="referal">Referal / Neighbor</option>
                <option value="sign">Truck / Yard Sign</option>
                <option value="previous">Previous Customer</option>
                <option value="socialMedia">Social Media</option>
                <option value="other">Other</option>
              </Form.Select>
            </div>

            <Button type='submit' id="submit-button">Let's Go!</Button>

          </Form>
        </div>
      </>
    );
  }
}

export default Contact;