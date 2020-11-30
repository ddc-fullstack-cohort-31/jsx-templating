import React from "react"
import Form from "react-bootstrap/Form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const Home = () => {
	return (
		<>
			<main className="d-flex align-items-end align-items-md-center mh-80">
				<Container fluid="sm" className="text-center text-md-left">
					<Row>
						<div className="col-md-6 offset-md-6 col-lg-4 offset-lg-8">
							<div className="bg bg-shadow-dark">
										<Form>
											<Form.Group>
												<InputGroup>
													<InputGroup.Prepend>
														<InputGroup.Text>
															<FontAwesomeIcon icon="envelope"/>
														</InputGroup.Text>
													</InputGroup.Prepend>
													<FormControl type="email" placeholder="Email"/>
												</InputGroup>
											</Form.Group>
											<Form.Group>
												<InputGroup>
													<InputGroup.Prepend>
														<InputGroup.Text>
															<FontAwesomeIcon icon="key"/>
														</InputGroup.Text>
													</InputGroup.Prepend>
													<FormControl type="password" placeholder="Password"/>
												</InputGroup>
											</Form.Group>
											<div className="text-md-right">
												<Button variant="primary" type="submit"> Sign In <FontAwesomeIcon icon="sign-in-alt"/>
												</Button>
											</div>
										</Form>
							<div className="my-2 text-white">
								<span className="font-weight-light font-italic">Don't have an account?</span>
								<Button variant="link" className="py-0 text-white border-0 font-weight-bold">Sign Up</Button>
							</div>
							</div>
						</div>
					</Row>
				</Container>
			</main>
		</>
	)
};