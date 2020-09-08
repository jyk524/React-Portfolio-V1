import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activetab: 0 };
  }

  // Depending on the tab will show corresponding data
  toggleCategories() {
      // REACT
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover",
              }}
            >
              Employee Directory
            </CardTitle>
            <CardText>
                An employee directory created in React that has search and sort functionality
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/jyk524/Employee-Directory'>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored href='https://employee-directory-jyk.herokuapp.com/'>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover",
              }}
            >
              {/* Project # */}
            </CardTitle>
            <CardText>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover",
              }}
            >
              {/* Project # */}
            </CardTitle>
            <CardText>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
      // NODEJS
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png) center / cover",
              }}
            >
              Readme Generator
            </CardTitle>
            <CardText>
                Node CLI based Readme Generator where users can enter information into a command line to create Readme.md files with badges
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/jyk524/Readme-Generator-NodeJS'>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored href=''>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png) center / cover",
              }}
            >
              {/* Project # */}
            </CardTitle>
            <CardText>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png) center / cover",
              }}
            >
              {/* Project # */}
            </CardTitle>
            <CardText>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
      // MONGODB
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXd0U81On5KUNOah0CjqKM1ypJzZoe8RIAUg&usqp=CAU) center / cover",
              }}
            >
              Workout Tracker
            </CardTitle>
            <CardText>
                Easily Track your workouts and auto generate charts to map your workout data.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/jyk524/Workout-Tracker'>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored href='https://workout-tracker-jyk.herokuapp.com/'>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXd0U81On5KUNOah0CjqKM1ypJzZoe8RIAUg&usqp=CAU) center / cover",
              }}
            >
              {/* Project # */}
            </CardTitle>
            <CardText>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXd0U81On5KUNOah0CjqKM1ypJzZoe8RIAUg&usqp=CAU) center / cover",
              }}
            >
              {/* Project # */}
            </CardTitle>
            <CardText>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
      // Javascript
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.bram.us/wordpress/wp-content/uploads/2016/06/javascript-logo-banner-560x272.jpg) center / cover",
              }}
            >
              Password Randomizer
            </CardTitle>
            <CardText>
                A password generator based in Javascript
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/jyk524/Employee-Directory'>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored href='https://employee-directory-jyk.herokuapp.com/'>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.bram.us/wordpress/wp-content/uploads/2016/06/javascript-logo-banner-560x272.jpg) center / cover",
              }}
            >
              {/* Project # */}
            </CardTitle>
            <CardText>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.bram.us/wordpress/wp-content/uploads/2016/06/javascript-logo-banner-560x272.jpg) center / cover",
              }}
            >
              {/* Project # */}
            </CardTitle>
            <CardText>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
          <Tab>MongoDB</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    );
  }
}

export default Projects;
